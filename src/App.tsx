import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { Hero } from '@/layout/Hero';
import Project1Code from '@/snippets/Project1.js?raw';
import { ProjectSection } from '@/util/ProjectSection';
import type { ProjectData } from '@/util/Types';
import { CTA } from '@/util/CTA';
import { Job } from '@/util/Job';
import './App.css';

const projects: ProjectData[] = [
    {
    id: '01',
    title:
      'Enterprise Headless Shopify Storefront Engine',
    techStack: 'Next.js (App Router) | Shopify Storefront API (GraphQL Schema v2026-07) | TypeScript | React Context API | Tailwind CSS | Vercel Edge Cloud',
    solutionHeading: 'The Engineering Solution',
    challenge:
      'Monolithic e-commerce architectures frequently lock businesses into rigid presentational layers, suffer from slow page load speeds due to bloated rendering processes, and bottleneck user retention by over-fetching data over constrained mobile connections.',
    solutions: `Built a decoupled, serverless frontend application utilizing an asynchronous GraphQL layout mesh to query product catalog objects directly from Shopify’s high-performance edge database servers. Engineered a type-safe local storage state architecture (React Context API) to optimize Shopify's native line-item structures inside a local cart drawer. This allowed for instant subtotal calculation, automated state tracking synchronizations across route segments, and zero-latency line migrations.`,
    impact:
      'Offloaded all transactional compliance and payment liability entirely by generating encrypted session checkout keys via Shopify mutations and handling a seamless redirect context (window.location.href). By leveraging Next.js Incremental Static Regeneration (revalidate: 60), page loading speeds dropped to sub-100 millisecond intervals while maintaining absolute real-time inventory precision.',
    embedUrl: 'https://nextjs-headless-shopify-sandbox.vercel.app/',
    githubUrl:`https://github.com/coolguy206/nextjs-headless-shopify-sandbox`,
    label: `Live Storefront`,
  },
  {
    id: '02',
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
    id: '03',
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

          <section className="border-b border-dk-gray py-10 text-white">
            <h2 className="mb-10 text-center font-corm text-[clamp(32px,10vw,40px)] text-bronse 2xl:text-[40px]">
              SANDBOX PLAYGROUNDS
            </h2>
            <p className="text-center font-jet text-responsive text-gold 2xl:mb-10">
              SYSTEM SANDBOX & COMPONENT LABS || Lightweight functional
              sandboxes built to isolate state
              <br className="hidden lg:block" /> management, custom routing,
              and client-side API orchestration.
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
              <li className="w-full hidden">
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
