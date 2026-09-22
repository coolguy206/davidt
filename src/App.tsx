import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { Hero } from '@/layout/Hero';
import Project1Code from '@/snippets/Project1.js?raw';
import { ProjectSection } from '@/util/ProjectSection';
import type { ProjectData } from '@/util/Types';
// import { CTA } from '@/util/CTA';
import { Job } from '@/util/Job';
import './App.css';

const projects: ProjectData[] = [
  {
    id: '01',
    title: 'Headless E-Commerce Shopify Engine',
    techStack:
      'Next.js (App Router) | Shopify Storefront API (GraphQL Schema v2026-07) | TypeScript | React Context API | Lucide UI | Tailwind CSS | Vercel Edge Cloud',
    solutionHeading: 'The Engineering Solution',
    challenge:
      'Monolithic e-commerce architectures frequently lock businesses into rigid presentational layers, suffer from slow page load speeds due to bloated rendering processes, and bottleneck user retention by over-fetching data over constrained mobile connections.',
    solutions: [
    {
      label: "Decoupled Edge Hydration",
      description: "Engineered a fully serverless frontend application utilizing client component hydration, interfacing natively with the Shopify Storefront API via highly optimized asynchronous GraphQL query and mutation structures."
    },
    {
      label: "On-the-Fly Processor Matrix",
      description: "Built a lightning-fast client-side array processing engine using native JavaScript filtering (.filter) and real-time numerical sorting (.sort) pipelines to compute price variations and out-of-stock exclusions dynamically in milliseconds without hardware thread latency."
    },
    {
      label: "Optimistic State Loop",
      description: "Implemented a type-safe local storage state architecture (React Context API) paired with an optimistic UI cart drawer layout to manage zero-latency line migrations, instant subtotal cost aggregation, and automated radar-dot Toast notification alerts."
    }
  ],
    impact:
      'Successfully offloaded 100% of PCI transactional compliance and credit card payment vulnerabilities entirely by generating encrypted session checkout tokens via remote GraphQL mutations, creating a seamless background redirect mesh. By moving sorting computations to client-side lifecycle blocks, network data over-fetching dropped significantly, driving catalog rendering execution speeds down to sub-100ms intervals.',
    embedUrl: 'https://nextjs-headless-shopify-sandbox.vercel.app/',
    githubUrl: `https://github.com/coolguy206/nextjs-headless-shopify-sandbox`,
    label: `Live Storefront`,
  },
  {
    id: '02',
    title: 'Real-Time Event Orchestration Engine & Live Karaoke Queue Manager',
    techStack:
      'Next.js 15 | TypeScript | Supabase | PostgreSQL | Tailwind CSS | Lucide React | YouTube Data API v3',
    challenge:
      'Engineered an event-driven queue registration application to manage a high-traffic community stage under strict network and resource constraints. The project required synchronous live updates across disparate mobile devices without hitting aggressive daily API quotas, alongside an intuitive host console that supports buttery-smooth mobile reordering without sluggish or bloated third-party layout dependencies.',
    solutionHeading: 'The Engineering Solution',
    solutions: [
      {
        label: 'WebSocket State Synchronization',
        description:
          'Implemented Supabase Real-Time Client Pipelines utilizing PostgreSQL replication via WebSockets to stream instant lineup updates across all parent devices the microsecond a status flag flips or a listing shifts.',
      },
      {
        label: 'Secure Serverless API Proxy',
        description:
          'Architected a secure Next.js Serverless API Route to act as a YouTube Data API v3 Proxy, securing private Google Cloud credentials while automatically injecting contextual modifiers to enforce high-relevancy backing track streams.',
      },
      {
        label: 'Debounced Token Optimization',
        description:
          'Developed a client-side debouncing optimization engine (500ms) to bundle typing inputs into singular queries, heavily reducing API quota consumption during burst registration traffic.',
      },
      {
        label: 'Mid-Point Floating Point Math',
        description:
          'Programmed a high-performance queue-sorting layout built on the native HTML5 Drag and Drop API, implementing mid-point float math database calculations (prev_order + (next_order - prev_order) / 2) to dynamically shift list elements without forcing costly database index rewrites.',
      },
      {
        label: 'Suspense Production Hardening',
        description:
          'Hardened production delivery against Next.js build-time prerendering failures by decoupling search metadata hooks inside isolated React Suspense boundary containers to safely defer execution to client-side runtime environment viewports.',
      },
    ],
    impact:
      'Successfully deployed an zero-friction, automated full-stack platform capable of processing fluid sequential sign-ups. Eliminated physical administrative paper-slip overhead while maintaining a steady 100% success rate on real-time layout updates over unstable local cellular networks.',
    embedUrl: 'https://live-karaoke-hub.vercel.app/',
    githubUrl: `https://github.com/coolguy206/Live-Karaoke-Hub`,
    label: `Live App`,
  },

    {
    id: '03',
    title: 'OLM Volunteer Hub – Edge-First Event Tracking System',
    techStack:
      'Next.js 15 | TypeScript | React | Tailwind CSS | HTML5 Geolocation API | Browser localStorage API & Window Network Event Listener',
    challenge:
      'An elementary school needed to track physical volunteer metrics on an outdoor field during a high-density community movie night, facing potential cell-coverage dropouts and redundant user double-submissions.',
    solutionHeading: 'The Engineering Solution',
    solutions: [
      {
        label: 'API Data Isolation',
        description:
          `Built a secure Next.js serverless proxy layer to request and parse live schedule contracts from the SignUpGenius V2 API, keeping private auth tokens safely concealed on Vercel's edge network.`,
      },
      {
        label: 'Geofenced Entry Verification',
        description:
          `Combined the browser's native HTML5 Geolocation API with the Haversine trigonometric equation to compute real-time coordinates, mapping a strict 150-meter validation boundary over the campus to prevent remote clock-ins.`,
      },
      {
        label: 'Offline Cache Synchronization',
        description:
          `Developed a zero-data-loss fallback network layer using localStorage and window online/offline event listeners. If parents drop signal on the field, their check-in payload queues locally and auto-flushes to the database seamlessly upon reconnection.`,
      },
      {
        label: 'Idempotent Data Ingestion',
        description:
          `Programmed a custom Google Apps Script HTTP POST processor that checks the last 100 spreadsheet rows on-the-fly, instantly dropping duplicate button-mashes or invalid status transitions to ensure an immaculate chronological ledger.`,
      },  
    ],
    impact:
      `Successfully automated live data orchestration for the OLM School Movie Night, seamlessly managing tracking points for 100+ parent volunteers on campus. By migrating the school from a traditional paper sign-in method to the OLM Volunteer Hub web platform, the application eliminated 100% of manual post-event data reconciliation overhead for the PTO board. The application's hardware-level geofencing and duplicate-blocking algorithms ensured 100% data integrity with zero fraudulent or duplicate log rows, while the local storage buffer safely synchronized 100% of offline check-ins during field cellular outages, resulting in flawless event-night logistics.`,
    embedUrl: 'https://olm-volunteer-hub.vercel.app/',
    githubUrl: `https://github.com/coolguy206/olm-volunteer-hub`,
    label: `Live App`,
  },

  {
    id: '04',
    title:
      ' Enterprise Data Migration Pipeline & Custom Storefront Architecture',
    techStack: 'Node.js | GraphQL | Shopify Admin API | Amazon S3 | Liquid',
    solutionHeading: 'The Engineering Solution',
    challenge:
      'Migrating legacy, unstructured HTML data schemas into a modern Shopify Plus ecosystem while working around strict API platform memory caps (a rigid 50-item retrieval ceiling) and managing disparate binary asset types.',
    solutions: [
      {
        label: 'Automated Pipeline',
        description:
          'Engineered a custom Node.js backend using Cheerio and Axios to programmatically scrape, parse, and stream legacy data and binary PDFs directly to Amazon S3 via the Shopify Files API.',
      },
      {
        label: 'API Optimization',
        description: `Overcame the platform's 50-item retrieval cap by designing custom Liquid sub-pagination loops, unlocking seamless single-page rendering for 100+ nested documents.`,
      },
      {
        label: 'Client-Side Sorting Engine',
        description: `Implemented a lightweight client-side JavaScript sorting engine using Regular Expressions to dynamically parse folder schemas and enforce chronological data presentation.`,
      },
    ],
    impact:
      'Decreased manual migration overhead to zero, eliminated platform rendering bottlenecks, and cleanly reconciled fractured legacy schemas into a structured relational database model.',
    codeSnippet: Project1Code,
  },
  {
    id: '05',
    title: 'Pony Rescue Club Responsive Design System',
    techStack:
      'Figma | HTML5 | CSS Grid & Flexbox | Responsive Design Systems | Component Architecture',
    solutionHeading: 'The Design System',
    impactHeading: 'The Mobile Evolution',
    challenge:
      'Taking a complex, text-heavy local business requirement (lessons, schedules, safety guidelines, weather alerts) and making it clear and scannable for busy parents on mobile devices.',
    solutions:
      'Developed a structured visual taxonomy using a strategic, high-contrast color-blocking palette (forest green and warm desert tones). This breaks high-density informational content into digestible, accessible text blocks while maintaining compliance with WCAG contrast guidelines.',
    impact:
      'Engineered a responsive fluid grid layout that seamlessly shifts a multi-column desktop dashboard into a streamlined, single-column mobile view. Intentionally compressed whitespace components and micro-margins in the mobile architecture to keep contextual parent-student guidelines logically grouped on smaller screens.',
    embedUrl: `https://embed.figma.com/design/mziQAT8tFvjcHFZFXFV3Wm/Pony-Rescue-Club-Visual-Design?node-id=219-139&embed-host=share`,
    label: `Figma Workspace`,
  },
];

export const App = () => {
  return (
    <>
      <div className="mx-auto max-w-[1728px] px-5">
        <Header />
        <main>
          <Hero />

          <section
            id="featured-projects"
            className="border-t border-b border-dk-gray py-[150px]"
          >
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </section>

          <section className="border-b border-dk-gray py-10 text-white">
            <h2 className="mb-10 text-center font-corm text-[clamp(32px,8vw,40px)] text-bronse 2xl:text-[40px]">
              SYSTEM CAPABILITIES
            </h2>
            <div className="flex flex-wrap justify-between">
              <div>
                <h3 className="mb-10 font-jet text-responsive text-gold uppercase">
                  Front-End Systems
                </h3>
                <ul className="mb-10 list-inside list-disc font-inter text-responsive text-gray">
                  <li className="mb-5">React / TypeScript</li>
                  <li className="mb-5">Svelte & SvelteKit</li>
                  <li className="mb-5">ES6+ JavaScript</li>
                  <li className="mb-5">Tailwind CSS / Sass</li>
                  <li className="mb-5">Component-Driven Architecture</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-10 font-jet text-responsive text-gold uppercase">
                  Data & API Architecture
                </h3>
                <ul className="mb-10 list-inside list-disc font-inter text-responsive text-gray">
                  <li className="mb-5">Node.js (Backend Workflows)</li>
                  <li className="mb-5">GraphQL / REST APIs</li>
                  <li className="mb-5">
                    Shopify Plus (Liquid, Storefront & Admin APIs)
                  </li>
                  <li className="mb-5">Custom Content Modeling</li>
                  <li className="mb-5">Relational Data Schema Design</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-10 font-jet text-responsive text-gold uppercase">
                  Performance & Scale
                </h3>
                <ul className="mb-10 list-inside list-disc font-inter text-responsive text-gray">
                  <li className="mb-5">Core Web Vitals Optimization</li>
                  <li className="mb-5">Cloud Infrastructure (Amazon S3)</li>
                  <li className="mb-5">Git / Advanced GitHub Workflows</li>
                  <li className="mb-5">A/B Testing & Data Tracking (GTM)</li>
                  <li className="mb-5">Cross-functional Systems Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/*

          <section className="border-b border-dk-gray py-10 text-white">
            <h2 className="mb-10 text-center font-corm text-[clamp(32px,10vw,40px)] text-bronse 2xl:text-[40px]">
              SANDBOX PLAYGROUNDS
            </h2>
            <p className="text-center font-jet text-responsive text-gold 2xl:mb-10">
              SYSTEM SANDBOX & COMPONENT LABS || Lightweight functional
              sandboxes built to isolate state
              <br className="hidden lg:block" /> management, custom routing, and
              client-side API orchestration.
            </p>
            <ul className="my-10 flex w-full flex-wrap justify-center gap-10 text-center text-responsive lg:flex-nowrap lg:justify-between">
              <li className="w-full">
                <CTA
                  buttonText="Movie App Sandbox"
                  buttonLink="https://davidtproductions.com/apps/movie-app/#/"
                  newTab={true}
                  arrowRight={true}
                  className="w-full justify-center lg:w-auto"
                />
              </li>
              <li className="w-full">
                <CTA
                  buttonText="Recipe Finder Lab"
                  buttonLink="https://davidtproductions.com/apps/recipe-finder/react/#/"
                  newTab={true}
                  arrowRight={true}
                  className="w-full justify-center lg:w-auto"
                />
              </li>
              <li className="hidden w-full">
                <CTA
                  buttonText="Marvel API"
                  buttonLink="https://davidtproductions.com/apps/marvel-comics/#/"
                  newTab={true}
                  arrowRight={true}
                  className="w-full justify-center lg:w-auto"
                />
              </li>
            </ul>
          </section>

          */}

          <section className="py-10 text-white">
            <h2 className="mb-10 text-center font-corm text-[clamp(32px,8vw,40px)] text-bronse 2xl:text-[40px]">
              SELECTED ENTERPRISE EXPERIENCE
            </h2>
            <div>
              <Job
                company="TCWGlobal (Contract)"
                role="Sr. Web Developer"
                duration="2020 – Present"
                bullets={[
                  'Engineered Node.js automated data-migration pipelines using Cheerio and Axios to securely stream binary PDF and image payloads to Amazon S3 via the Shopify Files API.',
                  'Optimized public-facing marketing assets and site performance metrics (Core Web Vitals) to dramatically accelerate mobile Largest Contentful Paint (LCP).',
                  ' Managed complex e-commerce data structures via the Shopify Storefront and Admin APIs, establishing robust team standards for peer code reviews and branch management via GitHub.',
                ]}
              />

              <Job
                company="Tea Collection"
                role="Sr. Web Developer"
                duration="2017 – 2020"
                bullets={[
                  'Collaborated asynchronously via Slack and Figma across distributed product teams to transform high-fidelity mockups into high-converting conversion funnels.',
                  'Developed strict A/B testing variations and tracking configurations via Google Tag Manager (GTM) to isolate runtime user friction and drive multi-brand growth.',
                  'Championed SDLC best practices for remote cross-functional engineering pods, introducing asynchronous mentorship models and structured pull-request testing workflows.',
                ]}
              />

              <Job
                company="samtrans & caltrain"
                role="transit integration developer"
                duration="2016"
                bullets={[
                  'Coordinated technical integration of complex Web Service projects—including GTFS static and real-time transit data sets—between the District and the regional system.',
                  'Managed daily CMS operations, technical SEO markup implementations, and search visibility variables while serving as the primary technical point of contact.',
                ]}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
