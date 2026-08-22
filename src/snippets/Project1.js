/**
 * @file shopifyDataMigration.js
 * @description Enterprise-grade data migration pipeline to automate legacy asset extraction,
 * multipart file streaming to AWS S3, and relational Graph metaobject creation on Shopify Plus.
 */

import dns from 'dns';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';

// Force Node.js to resolve IPv4 addresses first to mitigate localhost network latency bugs
dns.setDefaultResultOrder('ipv4first');
dotenv.config();

// --- Configuration Tokens & Environment Variables ---
const SHOP_SUBDOMAIN = process.env.SHOPIFYURL_LIVE;
const ACCESS_TOKEN = process.env.SHOPIFYACCESSTOKEN_LIVE;
const API_VERSION = '2026-04';

// --- Local Data Source Paths ---
const LOCAL_FOLDER = './renamed pdfs';
const JSON_DATA_PATH = './links.json';

const GRAPHQL_ENDPOINT = `https://${SHOP_SUBDOMAIN}://{API_VERSION}/graphql.json`;

/**
 * Executes a type-safe, authenticated GraphQL transaction against the Shopify Admin API.
 * @param {string} query - The GraphQL mutation or query string.
 * @param {Object} [variables={}] - Dynamic parameters required by the GraphQL operation.
 * @returns {Promise<Object>} The raw JSON response payload from the API gateway.
 */
async function shopifyGraphQL(query, variables = {}) {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      { query, variables },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ACCESS_TOKEN,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`🚨 GraphQL Gateway Transport Error: ${error.message}`);
    throw error; // Bubble up error to main pipeline controller
  }
}

/**
 * Step 1: Core File Upload Handler
 * Orchestrates a 3-step multipart upload pipeline to move a local binary file to cloud storage.
 * 1. Requests a presigned URL from Shopify (Staged Upload).
 * 2. Streams the raw binary payload directly to Amazon S3 using multi-part forms.
 * 3. Finalizes the asset registration inside the Shopify Files database.
 * 
 * @param {string} filename - The exact string name of the target file inside the local directory.
 * @returns {Promise<string|null>} The permanent global Shopify ID (GID) of the uploaded file asset, or null if failed.
 */
async function uploadFileToShopify(filename) {
  const filePath = path.join(LOCAL_FOLDER, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`⚠️ File missing on disk: ${filePath}`);
    return null;
  }
  
  const stats = fs.statSync(filePath);

  // Phase A: Generate an authorized cloud-storage staging target
  const stagedMutation = `
    mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets { 
          url 
          resourceUrl 
          parameters { name value } 
        }
      }
    }
  `;

  const stagedResult = await shopifyGraphQL(stagedMutation, {
    input: [{
      resource: 'FILE',
      filename,
      fileSize: stats.size.toString(),
      mimeType: 'application/pdf',
      httpMethod: 'POST',
    }],
  });

  const target = stagedResult.data?.stagedUploadsCreate?.stagedTargets?.[0];
  if (!target) {
    console.error(`❌ Failed to acquire presigned storage URL for: ${filename}`);
    return null;
  }

  // Phase B: Stream the binary payload directly into the cloud storage bucket
  const form = new FormData();
  target.parameters.forEach((p) => form.append(p.name, p.value));
  form.append('file', fs.createReadStream(filePath));

  try {
    await axios.post(target.url, form, { headers: { ...form.getHeaders() } });
  } catch (e) {
    console.error(`❌ Multipart binary streaming aborted for ${filename}: ${e.message}`);
    return null;
  }

  // Phase C: Commit and register the cloud asset inside the Shopify File schema
  const fileCreateMutation = `
    mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files { id }
      }
    }
  `;

  const finalResult = await shopifyGraphQL(fileCreateMutation, {
    files: [{
      alt: `Asset: ${filename}`,
      contentType: 'FILE',
      originalSource: target.resourceUrl,
    }],
  });

  return finalResult.data?.fileCreate?.files?.[0]?.id || null;
}

/**
 * Step 2: Create a Modular "PDF Document" Entry Row
 * Persists an explicit document mapping entry inside the CMS utilizing Metaobjects.
 * 
 * @param {string} linkText - The human-readable anchor or index label for the asset.
 * @param {string} fileGid - The permanent global Shopify file ID string.
 * @returns {Promise<string|null>} The permanent Metaobject row ID, or null if database write fails.
 */
async function createPDFDocumentEntry(linkText, fileGid) {
  const mutation = `
    mutation metaobjectCreate($metaobject: MetaobjectCreateInput!) {
      metaobjectCreate(metaobject: $metaobject) {
        metaobject { id }
        userErrors { message }
      }
    }
  `;

  const result = await shopifyGraphQL(mutation, {
    metaobject: {
      type: 'cpsia_document',
      fields: [
        { key: 'name', value: linkText },
        { key: 'file', value: fileGid },
      ],
    },
  });

  return result.data?.metaobjectCreate?.metaobject?.id || null;
}

/**
 * Main Migration Control Pipeline
 * Coordinates the reading of relational schemas, manages operational throughput to respect
 * API rate limits, and bundles records into dynamic parent-child structural entities.
 */
async function executeModularMigration() {
  try {
    if (!fs.existsSync(JSON_DATA_PATH)) {
      throw new Error(`Critical Migration Interrupted: Relational configuration schema data not found at ${JSON_DATA_PATH}`);
    }

    const structuralCategories = JSON.parse(fs.readFileSync(JSON_DATA_PATH, 'utf8'));
    console.log(`🚀 Starting Multi-Stage Relational Sync for ${structuralCategories.length} categories...\n`);

    for (const item of structuralCategories) {
      console.log(`📂 Processing Category: "${item.category}"`);
      const createdDocumentGids = [];

      for (const pdf of item.pdfs) {
        console.log(`  -> Processing child asset payload: ${pdf.href}`);
        const fileGid = await uploadFileToShopify(pdf.href);

        if (fileGid) {
          console.log(`     Uploaded Cloud Storage ID: ${fileGid}`);
          
          // Instantiate the independent relational leaf node row
          const docMetaGid = await createPDFDocumentEntry(pdf.text, fileGid);
          if (docMetaGid) {
            createdDocumentGids.push(docMetaGid);
            console.log(`     🎉 Created Structural Document Node: ${docMetaGid}`);
          }
          
          // API Rate Limiting: Introduce a 1200ms throttle to prevent Graph API bucket exhaustion
          await new Promise((res) => setTimeout(res, 1200));
        } else {
          console.error(`  ❌ Critical skipping: Failed processing operational upload for: ${pdf.href}`);
        }
      }

      // If no valid leaf nodes were generated, skip compilation of the parent category wrapper
      if (createdDocumentGids.length === 0) {
        console.warn(`  ⚠️ Category "${item.category}" skipped: No downstream document mappings succeeded.`);
        continue;
      }

      // Step 3: Bundle and lock the leaf node pointers inside the parent Category Metaobject
      console.log(`  -> Packaging database relations inside parent folder layout...`);
      const categoryMutation = `
        mutation metaobjectCreate($metaobject: MetaobjectCreateInput!) {
          metaobjectCreate(metaobject: $metaobject) {
            metaobject { id }
            userErrors { field message }
          }
        }
      `;

      const metaResult = await shopifyGraphQL(categoryMutation, {
        metaobject: {
          type: 'cpsia_category',
          fields: [
            { key: 'title', value: item.category },
            { key: 'documents', value: JSON.stringify(createdDocumentGids) }, // Relational array references link here!
          ],
        },
      });

      const errs = metaResult.data?.metaobjectCreate?.userErrors;
      if (errs && errs.length > 0) {
        console.error(`  ❌ Category table composition rejected:`, JSON.stringify(errs));
      } else {
        console.log(`  ✅ Successfully bound category and consolidated ${createdDocumentGids.length} records structural references!`);
      }
      console.log('----------------------------------------------------');
    }
    console.log('\n🎯 Data-pipeline run resolved seamlessly. Infrastructure mapping operational!');
  } catch (error) {
    console.error('💥 Terminal Pipeline Malfunction Encountered:', error.message);
  }
}

// Kick off data sync engine execution
executeModularMigration();