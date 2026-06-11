export const experience = [
  {
    role: 'AI Solutions Engineer',
    org: 'Augment Systems LLC',
    period: 'May 2025 – Dec 2025',
    note: null,
    caseStudySlug: 'augment-compliance',
    bullets: [
      'Built a production compliance platform that eliminated a 6-month to 2-year manual audit process. Compliance-aaS evaluates a Microsoft 365 tenant’s live configuration against CISA SCuBA secure baselines across all six M365 workloads using 99 Rego policies evaluated by an OPA engine, with results mapped simultaneously to CMMC, ISO 27001, NIST SP 800-53, and MITRE ATT&CK.',
      'Designed the system to be genuinely extensible — each of the six M365 products is an independent policy domain with its own Rego package, data providers, and OPA query path; adding a new compliance control requires one Rego rule block and a test fixture, with zero changes to the API, engine, or frontend.',
      'Architected the full data collection layer across six heterogeneous Microsoft APIs using a provider registry system in FastAPI. Configured Azure AD app registrations with scoped permissions and certificate-based authentication for secure multi-tenant access.',
      'Solved a retrieval quality problem in AI-assisted compliance review by designing and iterating a Contextual RAG system on Azure AI Foundry — v1 ingested raw JSON configs into ChromaDB; v2 introduced LLM-generated semantic summaries per config before indexing, improving control retrieval relevance by 35%.',
      'Reduced manual configuration collection effort by 60% using automated extraction pipelines with PowerShell DSC (M365DSC) and Python REST APIs.',
      'Built a hallucination-free documentation assistant for Microsoft products — full-stack GPT-4o mini chatbot integrated with the Microsoft Learn MCP Server, grounding every response in live documentation links.',
      'Designed real-time operational visibility by building an end-to-end asset management system on Azure Power Platform with data ingestion pipelines feeding interactive Power BI dashboards.',
      'Produced architecture diagrams (draw.io) for compliance platform, RAG pipelines, and ETL flows, presenting designs to the founding team (Ex-CTO / Ex-CPO) and incorporating feedback before each build phase.',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'INFO 7374: Cybersecurity Audit & Compliance — Northeastern University',
    period: 'May 2026 – Aug 2026',
    note: 'Under Prof. Ashutosh Sawant (Head of Security GRC, former AWS / Salesforce / EY)',
    caseStudySlug: null,
    bullets: [
      'Bridging the gap between audit theory and real-world AI implementation. Supporting a 14-week graduate course covering IT audit principles, SOX IT General Controls, and compliance frameworks (NIST CSF, NIST 800-53, HIPAA, ISO 27001, SOC 1/2/3).',
      'Drawing on direct experience building production compliance automation systems to give students practitioner context that textbooks do not provide.',
      'Grading scenario-based assignments and holding office hours to reinforce student understanding of audit lifecycle, regulatory landscape, and continuous compliance monitoring.',
    ],
  },
]
