/**
 * Knowledge Base Loader
 * Loads markdown files from the aixelar_kb directory
 */

export interface KnowledgeBaseContent {
  overview: string;
  services: string;
  industries: string;
  workflows: string;
  faq: string;
  engagement: string;
}

/**
 * Load knowledge base markdown files from the local aixelar_kb folder
 */
export const loadKnowledgeBaseFiles = async (): Promise<KnowledgeBaseContent> => {
  try {
    // Load markdown files from public/aixelar_kb folder (served at /aixelar_kb/)
    const [overview, services, industries, workflows, faq, engagement] = await Promise.all([
      fetch('/aixelar_kb/aixelar_overview.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load overview: ${r.status}`);
        return r.text();
      }),
      fetch('/aixelar_kb/services.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load services: ${r.status}`);
        return r.text();
      }),
      fetch('/aixelar_kb/industries.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load industries: ${r.status}`);
        return r.text();
      }),
      fetch('/aixelar_kb/workflows.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load workflows: ${r.status}`);
        return r.text();
      }),
      fetch('/aixelar_kb/faq.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load faq: ${r.status}`);
        return r.text();
      }),
      fetch('/aixelar_kb/engagement_model.md').then(r => {
        if (!r.ok) throw new Error(`Failed to load engagement: ${r.status}`);
        return r.text();
      }),
    ]);

    console.log('✅ Knowledge base files loaded successfully');
    return {
      overview,
      services,
      industries,
      workflows,
      faq,
      engagement,
    };
  } catch (error) {
    console.error('❌ Error loading knowledge base files:', error);
    // Return basic fallback content if files can't be loaded
    return {
      overview: `# Xelar Overview

Xelar is an AI Automation & Data Engineering consultancy designed to help small and mid-sized businesses modernize their operations using practical, results-driven AI solutions.

We focus on:
- Automating repetitive workflows
- Building AI-powered assistants and copilots
- Streamlining business operations through n8n, Zapier, Make, and custom integrations
- Improving data pipelines, dashboards, and analytics
- Creating AI strategy roadmaps tailored to each business

## Mission
Xelar exists to make AI **simple**, **practical**, and **impactful**.  
Our goal is to help businesses work smarter, reduce manual workload, increase revenue, and adopt automation without complexity.

## Founder
Xelar was founded by **Emmanuel Onwubuya**, an AI Data Engineer with hands-on engineering experience across consulting, manufacturing, healthcare technology, advertising & marketing analytics, and automation engineering.

## What Makes Xelar Different
- We simplify AI — no technical jargon unless required.
- We focus on **practical automation**, not hype.
- We serve industries that benefit most from workflow automation: retail, logistics, car dealerships, healthcare operations, agencies, real estate.
- We deliver fast — most workflows are implemented within days or weeks.
- Our solutions integrate with the tools businesses already use.`,

    services: `# Xelar Services

## 1. Workflow Automation
We automate repetitive tasks and build smart operational workflows using n8n, Zapier, Make (Integromat), WhatsApp automation via APIs, Email and SMS automation, Google Sheets, Excel, Notion workflows.

Examples: Automatic lead capture → follow-up → reminders, Employee onboarding flows, Supplier order automation, Customer notifications, Calendar and appointment automation.

## 2. Data Engineering & Analytics
We help companies organize and understand their data using Databricks (Bronze/Silver/Gold), Snowflake, BigQuery, PostgreSQL & Supabase, Delta Lake, API ingestion & ETL scripts, BI dashboards (PowerBI, Tableau).

Capabilities include: Building production ETL/ELT pipelines, Merging data from multiple systems, Automating daily/weekly/monthly reports, Creating KPI dashboards for executives.

## 3. AI Assistants & Intelligent Systems
We build custom AI tools such as: Website chatbots, AI customer support agents, Retrieval-Augmented Generation (RAG) assistants, Internal company copilots, Email drafting and classification agents, Content generation assistance, Document query systems.

These assistants integrate with: Supabase vector databases, Pinecone, Company documents, Knowledge bases, WhatsApp, Slack, Teams, Email tools.

## 4. AI Strategy & Roadmap Consulting
We help businesses define their AI adoption path. In each roadmap session: We analyze your business processes, Identify automation opportunities, Recommend workflows, Estimate implementation effort, Create a 30–90 day action plan.`,

    industries: `# Industries Xelar Serves

## 1. Retail & E-Commerce
Common pain points: Manual order tracking, Inventory management, Customer engagement, Slow reporting.
Solutions: Daily sales reports, Abandoned cart automation, WhatsApp order confirmations, Low-stock alerts, Supplier reorder workflows, Customer review follow-up automation.

## 2. Car Dealerships
Common pain points: Manual lead follow-up, Unorganized inventory, Missed appointments.
Solutions: Lead → WhatsApp automation, Test-drive booking flow, Inventory sync automation, Reminders for customers and sales staff, Automated price list formatting & publishing.

## 3. Logistics & Transportation
Common pain points: Communication delays, Manual scheduling, Slow shipment updates.
Solutions: Real-time shipment alerting, Driver scheduling automation, Email/SMS notifications for clients, Load forecasting dashboards, SLA monitoring.

## 4. Healthcare Clinics (Non-medical Automation)
Common pain points: No-shows, Manual intake forms, Billing updates, Staff coordination.
Solutions: Appointment reminders, Automated intake form processing, Staff scheduling notifications, Operational KPI dashboards.

## 5. Agencies (Marketing, Digital, Consulting)
Common pain points: Manual reporting, High workload, Client update delays.
Solutions: Automated Google Ads / Meta Ads reports, Client onboarding workflows, Social media content pipelines, Lead scoring & qualification bots.

## 6. Real Estate
Common pain points: Lead routing, Follow-ups, Appointment coordination.
Solutions: Auto-routing leads to agents, WhatsApp follow-up sequences, Viewing appointment reminders, CRM enrichment automation.`,

    workflows: `# Example Workflows

## 1. WhatsApp Lead Follow-Up Flow (n8n)
Trigger: User submits a form on website or landing page.
Flow: Capture form data → save to CRM or Google Sheets → Send WhatsApp welcome message → If no reply after 24 hours → send follow-up reminder → Notify business owner with summary → Record conversation status for analytics.

## 2. Daily Sales Summary
Trigger: Scheduled every evening.
Flow: Pull data from Shopify, WooCommerce, Stripe, or custom DB → Clean and format data → Calculate revenue, profit, top-selling products, returning customers → Send summary to owner via WhatsApp or email → Save report to Google Drive or Notion.

## 3. Inventory Low-Stock Alert
Trigger: Product quantity drops below threshold.
Flow: Pull inventory from POS or e-commerce store → Evaluate threshold → Send notification to purchasing team → Auto-generate supplier email → Update dashboard.

## 4. Marketing Agency Automated Reporting
Flow: Fetch Google Ads, Meta Ads, TikTok Ads performance → Merge with client-specific KPIs → Format into a weekly report → Email or WhatsApp to clients automatically → Store snapshot in Google Drive.

## 5. Appointment Scheduling Automation
Flow: Sync Calendly / booking form submissions → Send reminders → Auto-reschedule or notify staff if conflicts occur.`,

    faq: `# Frequently Asked Questions

## GENERAL QUESTIONS

**What does Xelar do?**
Xelar helps small and mid-sized businesses automate repetitive workflows, build AI assistants, improve business data pipelines, and streamline reporting. We focus on practical results — reduced manual work, faster processes, and better decision-making.

**Do I need technical skills to work with Xelar?**
No. Xelar handles all technical implementation, testing, and support. You just describe your business process and what you want to achieve.

**What industries does Xelar support?**
We primarily work with: Retail & e-commerce, Car dealerships, Logistics & transportation, Healthcare clinics (non-medical workflows), Marketing & digital agencies, Real estate. But we can work with any business that relies on manual operations.

## PRICING QUESTIONS

**How much does Xelar charge?**
There is **no fixed price** because every project is different. The cost depends on: The type of automation or AI system, The tools involved (n8n, Zapier, APIs, databases, etc.), The number of workflows or pipelines, The complexity of your business processes, Whether you need AI assistants, RAG systems, dashboards, or data pipelines.

**Can you give me an estimate?**
Yes — but only after understanding: Your industry, The tools you use, The problem you're trying to solve, The workflows we need to build. This is why we recommend a **30-minute AI Strategy & Roadmap Call**, where we break down your needs and give you a realistic effort estimate.

**Do you charge for the roadmap call?**
No. The AI Strategy Call is currently **free**, and it helps us understand your business and propose a tailored plan.

## SERVICE QUESTIONS

**What tools do you integrate with?**
We integrate with: n8n, Zapier, Make, WhatsApp APIs (Twilio, 360dialog), Google Workspace, Microsoft tools, Shopify, WooCommerce, Stripe, Databricks, Snowflake, Supabase, PostgreSQL, CRMs like HubSpot, Pipedrive, Salesforce, PowerBI, Tableau dashboards, And any tool that supports APIs or webhooks.

**Can you automate reporting?**
Yes. This includes: Daily sales reports, Weekly marketing performance, Inventory status, KPI dashboards, Custom multi-source analytics.

**Can you build AI chatbots for my website?**
Yes — including: Sales bots, Support bots, Internal assistants, Knowledge-base Q&A tools, RAG systems using your own documents.

## TIMELINE & IMPLEMENTATION

**How long does it take to build automations?**
Typical timelines: Small workflows: **1–5 days**, Medium workflows: **1–2 weeks**, AI assistants / chatbots: **1–3 weeks**, Data pipelines / dashboards: **2–8 weeks**.

**How do we get started?**
1. Discovery & AI Strategy Call, 2. Process and tools evaluation, 3. Workflow design, 4. Implementation, 5. Testing & optimization, 6. Delivery or ongoing support.

**Can you work with my existing tools?**
Yes. Most automations are built using the tools you already use.`,

    engagement: `# Xelar Engagement Model

## 1. Discovery & AI Roadmap Call (Primary CTA)
A 30-minute session where we: Learn about the business, Understand the current tools, Identify bottlenecks, Determine goals, Suggest 2–3 automation opportunities, Estimate timeframes, Build a mini roadmap. This is the best way for businesses to begin with Xelar.

## 2. Business Process Audit
We review: Current workflows, Data sources, Software tools, Manual tasks, Communication channels, Reporting needs.
Deliverable: Clear automation & AI adoption plan.

## 3. Implementation Phase
We build: n8n/Zapier/Make workflows, Automation scripts, AI assistants / RAG systems, Data pipelines, Dashboards. Most implementations take between 1–8 weeks.

## 4. Testing & Optimization
We test each workflow: Error handling, Data accuracy, User experience, Scalability. We refine the flows until stable.

## 5. Handover or Ongoing Support
Options: Full documentation & handover, Ongoing support retainer, Continuous automation expansion.`
    };
  }
};

