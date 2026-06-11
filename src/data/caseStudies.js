// Deep-dive case studies, keyed by slug. Referenced by projects.js and experience.js.
// `body` in a section is a string or an array of strings (rendered as paragraphs/bullets).
// Aqeel: expand any section freely; add `image: '/case-studies/<file>.png'` for diagrams.

export const caseStudies = {
  'marketplace-intelligence': {
    title: 'Marketplace Intelligence Platform',
    subtitle: 'Agentic ETL Lakehouse',
    period: 'Jan 2026 – Present',
    oneLiner:
      'An agentic ETL lakehouse that onboards any new data vertical with zero Python branching — ' +
      'agents read source schemas and emit declarative transforms.',
    role: 'Architect & lead engineer',
    tech: ['Python', 'LangGraph', 'LiteLLM', 'Airflow', 'Kafka', 'BigQuery', 'GCS', 'ChromaDB',
      'FAISS', 'Redis', 'Streamlit', 'Prometheus', 'Grafana'],
    metrics: [
      { value: '3', label: 'cooperating LangGraph agents' },
      { value: '0', label: 'lines of Python per new vertical' },
      { value: '30-day', label: 'Redis cache TTL short-circuiting agent replay' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Traditional ETL pipelines hard-code transformation logic per data source, so every new ' +
          'vertical or schema change means new Python and a redeploy. The goal: a pipeline that ' +
          'extends to entirely new domains without touching engine code.',
      },
      {
        heading: 'Architecture',
        body:
          'A 3-agent LangGraph StateGraph analyzes heterogeneous source schemas and emits ' +
          'declarative YAML transforms, enabling zero-code extensibility. A Redis YAML cache ' +
          '(30-day TTL) short-circuits agent replay so previously-seen schemas skip the LLM path ' +
          'entirely. New verticals are added through domain packs — directories of declarative ' +
          'artifacts loaded at startup with zero Python branching per domain.',
        // image: '/case-studies/marketplace-arch.png',
      },
      {
        heading: 'Stack & operations',
        body:
          'Orchestrated with Airflow over a Kafka stream into a BigQuery + GCS lakehouse. ChromaDB ' +
          'and FAISS back retrieval; LiteLLM abstracts model providers. Prometheus + Grafana ' +
          'provide observability across the agent and pipeline layers; a Streamlit surface exposes ' +
          'results.',
      },
      {
        heading: 'Outcome',
        body:
          'The declarative, domain-pack design turns onboarding a new vertical from an engineering ' +
          'task into a configuration task — the durable architectural win of the project.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Aqeel-Ryan' }],
  },

  'pe-due-diligence': {
    title: 'PE Due Diligence Platform',
    subtitle: 'Multi-Agent Agentic Intelligence',
    period: 'Jan 2026 – Present',
    oneLiner:
      'A supervisor-routed multi-agent system that runs private-equity due diligence while keeping ' +
      'humans in control of high-stakes investment calls.',
    role: 'Architect & lead engineer',
    tech: ['Python', 'LangGraph', 'MCP', 'Snowflake', 'AWS S3', 'ChromaDB', 'SEC EDGAR',
      'PatentsView', 'Redis', 'LiteLLM', 'Streamlit', 'Prometheus', 'Mem0'],
    metrics: [
      { value: '4', label: 'specialist agents behind a supervisor router' },
      { value: '1', label: 'MCP tool server as the sole data path' },
      { value: 'HITL', label: 'interrupt gates on investment decisions' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Due diligence spans many data sources and judgement-heavy steps. Full automation is ' +
          'unacceptable for investment decisions — the system must do the heavy analytical lifting ' +
          'while keeping a human firmly in the loop at decision points.',
      },
      {
        heading: 'Architecture',
        body:
          'A LangGraph StateGraph with a supervisor router dispatches work to four specialist ' +
          'agents — SEC Analyst, Scorer, Evidence Analyst, and Value Creator. Every agent accesses ' +
          'platform data exclusively through an MCP tool server, giving one auditable, governed data ' +
          'path rather than ad-hoc per-agent access.',
        // image: '/case-studies/pe-arch.png',
      },
      {
        heading: 'Human-in-the-loop',
        body:
          'High-stakes steps use LangGraph’s interrupt() + Command(resume=decision) pattern to pause ' +
          'the graph at decision gates, surface the state to a human, and resume only on explicit ' +
          'approval — keeping humans in control of investment decisions.',
      },
      {
        heading: 'Data & memory',
        body:
          'Pulls from SEC EDGAR and PatentsView; persists to Snowflake + AWS S3 with ChromaDB ' +
          'retrieval and Mem0 for agent memory. LiteLLM abstracts providers; Prometheus covers ' +
          'observability; Streamlit is the analyst surface.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Aqeel-Ryan' }],
  },

  'contextual-rag': {
    title: 'Contextual RAG for Cloud Configurations',
    subtitle: 'Hybrid retrieval over complex config data',
    period: 'Jul 2025 – Sep 2025',
    oneLiner:
      'A specialized RAG system that made dense cloud-configuration data queryable — lifting ' +
      'retrieval accuracy 35% with a contextual-summary indexing layer and hybrid search.',
    role: 'Designer & sole implementer',
    tech: ['Python', 'ChromaDB', 'Voyage AI', 'BM25', 'Azure AI Foundry', 'RAG'],
    metrics: [
      { value: '35%', label: 'retrieval accuracy gain over baseline' },
      { value: '2', label: 'iterations (raw vs. contextual indexing)' },
      { value: 'Hybrid', label: 'vector + BM25 search' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Cloud environment configurations are large, deeply nested JSON — poor raw material for ' +
          'semantic retrieval. Naive chunk-and-embed indexing returned weak, low-relevance matches ' +
          'for compliance and decision-making queries.',
      },
      {
        heading: 'Approach',
        body: [
          'v1 ingested raw JSON configurations into ChromaDB via recursive directory parsing — the ' +
            'baseline.',
          'v2 introduced a contextual metadata layer: an LLM generated a structured, queryable ' +
            'summary per configuration before indexing, adding the semantic context the raw JSON ' +
            'lacked.',
        ],
        // image: '/case-studies/contextual-rag-arch.png',
      },
      {
        heading: 'Hybrid search',
        body:
          'Combined Voyage AI vector embeddings with BM25 keyword indexing so exact-term matches ' +
          '(resource names, policy IDs) and semantic matches both surface. Benchmarked a 35% ' +
          'retrieval accuracy improvement over the raw-ingestion baseline.',
      },
      {
        heading: 'Context',
        body:
          'Built on Azure AI Foundry; later folded into the Augment compliance platform as the ' +
          'retrieval layer for AI-assisted compliance review.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Aqeel-Ryan' }],
  },

  'augment-compliance': {
    title: 'Compliance-aaS Platform',
    subtitle: 'Augment Systems LLC · AI Solutions Engineer',
    period: 'May 2025 – Dec 2025',
    oneLiner:
      'A production compliance platform that replaced a 6-month-to-2-year manual audit with live, ' +
      'policy-as-code evaluation of Microsoft 365 tenants against CISA SCuBA baselines.',
    role: 'AI Solutions Engineer (data layer, RAG, architecture)',
    tech: ['Python', 'FastAPI', 'OPA / Rego', 'Microsoft Graph API', 'PowerShell (M365DSC)',
      'Azure AI Foundry', 'ChromaDB', 'GPT-4o mini', 'MCP', 'Power BI'],
    metrics: [
      { value: '99', label: 'Rego policies across 6 M365 workloads' },
      { value: '4', label: 'frameworks mapped (CMMC, ISO 27001, NIST 800-53, MITRE ATT&CK)' },
      { value: '60%', label: 'manual config-collection effort reduced' },
      { value: '35%', label: 'RAG control-retrieval relevance gain' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'CMMC / ISO / NIST compliance assessment is a manual audit that takes consultants six ' +
          'months to two years. The goal was a platform that evaluates a tenant’s live ' +
          'configuration continuously and maps findings to multiple frameworks at once.',
      },
      {
        heading: 'Policy-as-code engine',
        body:
          'Compliance-aaS evaluates a Microsoft 365 tenant’s live configuration against CISA SCuBA ' +
          'secure baselines across all six M365 workloads using 99 Rego policies evaluated by an ' +
          'OPA engine. Results map simultaneously to CMMC, ISO 27001, NIST SP 800-53, and MITRE ' +
          'ATT&CK.',
        // image: '/case-studies/augment-arch.png',
      },
      {
        heading: 'Extensible by design',
        body:
          'Each of the six M365 products is an independent policy domain with its own Rego package, ' +
          'data providers, and OPA query path. Adding a new compliance control takes one Rego rule ' +
          'block and a test fixture — zero changes to the API, engine, or frontend.',
      },
      {
        heading: 'Data collection layer',
        body:
          'Architected the full collection layer across six heterogeneous Microsoft APIs using a ' +
          'provider registry system in FastAPI, with Azure AD app registrations, scoped permissions, ' +
          'and certificate-based auth for secure multi-tenant access. Automated extraction via ' +
          'PowerShell DSC (M365DSC) and Python REST APIs cut manual collection effort 60%.',
      },
      {
        heading: 'AI assistance',
        body: [
          'Designed and iterated a Contextual RAG system on Azure AI Foundry for AI-assisted ' +
            'compliance review — improving control-retrieval relevance 35% (see the Contextual RAG ' +
            'case study).',
          'Built a hallucination-free documentation assistant: a full-stack GPT-4o mini chatbot ' +
            'integrated with the Microsoft Learn MCP Server, grounding every response in live ' +
            'documentation links.',
        ],
      },
      {
        heading: 'Beyond the core',
        body:
          'Built an end-to-end asset management system on Azure Power Platform feeding interactive ' +
          'Power BI dashboards, and produced the architecture diagrams (draw.io) presented to the ' +
          'founding team (Ex-CTO / Ex-CPO) before each build phase.',
      },
    ],
    links: [],
  },
}

export const getCaseStudy = (slug) => caseStudies[slug] || null
