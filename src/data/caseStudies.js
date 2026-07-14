// Deep-dive case studies, keyed by slug. Referenced by projects.js and experience.js.
// `body` in a section is a string or an array of strings (rendered as paragraphs/bullets).

export const caseStudies = {
  'marketplace-intelligence': {
    title: 'Marketplace Intelligence Platform',
    subtitle: 'Agentic ETL Lakehouse',
    period: 'Jan 2026 \u2013 Present',
    oneLiner:
      'An agentic ETL lakehouse that onboards any new data vertical with zero Python branching \u2014 ' +
      'agents read source schemas and emit declarative transforms.',
    role: 'Architect & lead engineer',
    tech: ['Python', 'LangGraph', 'LiteLLM', 'Airflow', 'Kafka', 'BigQuery', 'GCS', 'ChromaDB',
      'FAISS', 'Redis', 'Streamlit', 'Prometheus', 'Grafana'],
    metrics: [
      { value: '3', label: 'cooperating LangGraph agents' },
      { value: '4', label: 'heterogeneous sources onboarded' },
      { value: '8', label: 'YAML transform action types' },
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
        body: [
          'A 3-agent LangGraph StateGraph (DeepSeek Orchestrator \u2192 optional Claude Sonnet Critic \u2192 DeepSeek Planner) analyzes arbitrary source schemas and emits declarative YAML transforms across 8 action types (RENAME/CAST/FORMAT/DELETE/ADD/SPLIT/UNIFY/DERIVE), eliminating per-source hand-coded transform scripts.',
          'A Redis YAML cache (30d TTL, schema-fingerprint keyed) short-circuits all three LLM agents on re-runs, keeping replay fast and deterministic. Onboarded 4 heterogeneous sources (USDA, OpenFoodFacts, OpenFDA, Amazon ESCI) into a BigQuery lakehouse with zero kernel code changes.',
        ],
      },
      {
        heading: 'Enrichment Cascade',
        body: [
          'Engineered a 3-tier enrichment cascade for category assignment: S1 deterministic regex \u2192 S2 FAISS KNN over 10k+ product embeddings \u2192 S3 RAG-LLM with Claude Haiku, enforced by a hard safety invariant preventing AI inference on allergen/organic fields.',
          'Built a 5-stage fuzzy deduplication system (blocking key \u2192 Redis cache \u2192 rapidfuzz token-sort scoring \u2192 UnionFind transitive clustering \u2192 canonical golden record selection by DQ score). Indexed 99,666 products live on GCP over 4 sources with composite per-row DQ scoring (completeness \u00d7 freshness \u00d7 ingredient richness), backed by 81.7% test coverage across 920 tests.',
        ],
      },
      {
        heading: 'Product Search',
        body: [
          'Built hybrid product search fusing BM25 lexical retrieval with ChromaDB semantic search via Reciprocal Rank Fusion (k=60), supporting hybrid/BM25/semantic modes with FDA recall suppression.',
          'Implemented Apriori-based association rules (50k orders \u2192 105 rules) and a NetworkX product graph for 2-hop cross-category discovery, demonstrating 3-4x lift improvement from resolved canonical IDs.',
        ],
      },
      {
        heading: 'Observability',
        body:
          'Built a RAG observability chatbot (ChromaDB + Claude Haiku) over pipeline run logs, with Isolation Forest anomaly detection on Prometheus metrics and a Grafana dashboard across 12 runtime gauges.',
      },
      {
        heading: 'Outcome',
        body:
          'The declarative, domain-pack design turns onboarding a new vertical from an engineering ' +
          'task into a configuration task \u2014 the durable architectural win of the project.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Aqeel-Ryan' }],
  },

  'pe-due-diligence': {
    title: 'PE Due Diligence Platform',
    subtitle: 'Multi-Agent Agentic Intelligence',
    period: 'Jan 2026 \u2013 Present',
    oneLiner:
      'A supervisor-routed multi-agent system that runs private-equity due diligence while keeping ' +
      'humans in control of high-stakes investment calls.',
    role: 'Architect & lead engineer',
    tech: ['Python', 'LangGraph', 'MCP', 'Snowflake', 'AWS S3', 'ChromaDB', 'SEC EDGAR',
      'PatentsView', 'Redis', 'LiteLLM', 'Streamlit', 'Prometheus', 'Mem0'],
    metrics: [
      { value: '4', label: 'specialist agents behind a supervisor router' },
      { value: '1', label: 'MCP tool server as the sole data path' },
      { value: '3', label: 'assessment depths (screening / limited / full)' },
      { value: '5', label: 'PE portfolio companies benchmarked' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Due diligence spans many data sources and judgement-heavy steps. Full automation is ' +
          'unacceptable for investment decisions \u2014 the system must do the heavy analytical lifting ' +
          'while keeping a human firmly in the loop at decision points.',
      },
      {
        heading: 'Architecture',
        body: [
          'A LangGraph supervisor routes to 4 specialist agents (SEC Analyst, Scorer, Evidence Agent, Value Creation Agent) via a shared MCP stdio server (6 tools, 2 resources) backed by Snowflake, S3, and ChromaDB.',
          'Agents execute a 6-node conditional workflow (analysis \u2192 scoring \u2192 evidence \u2192 value creation \u2192 HITL approval \u2192 completion) at 3 assessment depths (screening / limited / full), calling tools for Org-AI-R scoring, EBITDA projection, gap analysis, and portfolio benchmarking across 5 PE portfolio companies.',
          'Integrated an LLM-powered IC memo generator (.docx/.pdf) and LP quarterly letter generator, automating what was previously a multi-day manual analyst workflow per company.',
        ],
      },
      {
        heading: 'Human-in-the-loop',
        body:
          'High-stakes steps use LangGraph\u2019s interrupt() + Command(resume=decision) pattern to pause ' +
          'the graph at two decision gates \u2014 triggering human approval when Org-AI-R score is <40 or >85 ' +
          '(extreme outlier) or risk-adjusted EBITDA impact reaches \u226550% \u2014 with threaded checkpoint resume ' +
          'via POST /api/v1/dd/approve.',
      },
      {
        heading: 'Model Routing',
        body:
          'Configured a LiteLLM ModelRouter routing 4 providers by task (Groq for keyword/estimation, ' +
          'Claude Haiku 4.5 for chatbot/justifications, DeepSeek as fallback) enforcing a $5/day budget ' +
          'across the pipeline (~4000 chatbot answers per $5), with local SentenceTransformers embeddings ' +
          'avoiding any embedding API cost.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Aqeel-Ryan' }],
  },

  'contextual-rag': {
    title: 'Contextual RAG for Cloud Configurations',
    subtitle: 'Hybrid retrieval over complex config data',
    period: 'Jul 2025 \u2013 Sep 2025',
    oneLiner:
      'A specialized RAG system that made dense cloud-configuration data queryable \u2014 lifting ' +
      'retrieval accuracy 35% with a contextual-summary indexing layer and hybrid search.',
    role: 'Designer & sole implementer',
    tech: ['Python', 'ChromaDB', 'Voyage AI', 'BM25', 'Azure AI Foundry', 'RAG', 'Neo4j'],
    metrics: [
      { value: '35%', label: 'retrieval accuracy gain over baseline' },
      { value: '3', label: 'architectural iterations (v1 \u2192 v2 \u2192 knowledge graph)' },
      { value: 'Hybrid', label: 'vector + BM25 search' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'Cloud environment configurations are large, deeply nested JSON \u2014 poor raw material for ' +
          'semantic retrieval. Naive chunk-and-embed indexing returned weak, low-relevance matches ' +
          'for compliance and decision-making queries.',
      },
      {
        heading: 'Evolution',
        body: [
          'v1: naive LangChain + ChromaDB vector search over raw JSON configs \u2014 the baseline.',
          'v2: Anthropic Claude-powered contextual RAG with LLM-generated summary embeddings per config before indexing, adding the semantic context the raw JSON lacked.',
          'v3: Neo4j knowledge graph linking CMMC controls to configuration resources via relational context, enabling graph-traversal queries alongside semantic search.',
        ],
      },
      {
        heading: 'Hybrid search',
        body:
          'Combined Voyage AI vector embeddings with BM25 keyword indexing so exact-term matches ' +
          '(resource names, policy IDs) and semantic matches both surface. Each iteration was ' +
          'benchmarked against the same CMMC control corpus to isolate the contribution of each ' +
          'architectural change, achieving ~35% retrieval accuracy improvement over the baseline.',
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
    subtitle: 'Augment Systems LLC \u00b7 AI Solutions Engineer',
    period: 'May 2025 \u2013 Dec 2025',
    oneLiner:
      'A production compliance platform that replaced a 6-month-to-2-year manual audit with live, ' +
      'policy-as-code evaluation of Microsoft 365 tenants against CISA SCuBA baselines.',
    role: 'AI Solutions Engineer (data layer, RAG, architecture)',
    tech: ['Python', 'FastAPI', 'OPA / Rego', 'Microsoft Graph API', 'PowerShell (M365DSC)',
      'Azure AI Foundry', 'ChromaDB', 'GPT-4o mini', 'MCP', 'Power BI'],
    metrics: [
      { value: '99', label: 'Rego policies across 6 M365 workloads' },
      { value: '44', label: 'YAML-declared DAG workflow nodes' },
      { value: '33', label: 'Rego baselines across 11 Entra ID resource types' },
      { value: '4', label: 'frameworks mapped (CMMC L2, NIST 800-171, ISO 27001, SCuBA)' },
      { value: '60%', label: 'manual config-collection effort reduced' },
      { value: '35%', label: 'RAG control-retrieval relevance gain' },
    ],
    sections: [
      {
        heading: 'Problem',
        body:
          'CMMC / ISO / NIST compliance assessment is a manual audit that takes consultants six ' +
          'months to two years. The goal was a platform that evaluates a tenant\u2019s live ' +
          'configuration continuously and maps findings to multiple frameworks at once.',
      },
      {
        heading: 'Policy-as-code engine',
        body:
          'Compliance-aaS evaluates a Microsoft 365 tenant\u2019s live configuration against CISA SCuBA ' +
          'secure baselines across all six M365 workloads using 99 Rego policies evaluated by an ' +
          'OPA engine. Results map simultaneously to CMMC Level 2, NIST SP 800-171, ISO 27001, ' +
          'NIST SP 800-53, and MITRE ATT&CK.',
      },
      {
        heading: 'DAG Workflow Engine',
        body:
          'Designed a manifest-driven DAG workflow engine (44 YAML-declared nodes, 20+ handler classes) ' +
          'that replaced per-resource hardcoded collection logic \u2014 enabling new product onboarding ' +
          'through YAML manifests alone. Engineered 33 Rego evaluation baselines across 11 Entra ID ' +
          'resource types producing structured pass/fail/manual audit evidence aligned to CISA SCuBA, ' +
          'CMMC Level 2, and NIST SP 800-171.',
      },
      {
        heading: 'Data collection layer',
        body: [
          'Architected a dual-track collection pipeline (TCM snapshot API + direct Microsoft Graph) with MSAL OAuth2 authentication, secret-redacted structured logging, and Docker Compose orchestration \u2014 reducing estimated audit preparation effort from months to under an hour.',
          'Configured Azure AD app registrations with scoped permissions and certificate-based authentication for secure multi-tenant access. Automated extraction via PowerShell DSC (M365DSC) and Python REST APIs cut manual collection effort 60%.',
        ],
      },
      {
        heading: 'Multi-Strategy RAG',
        body: [
          'Designed a multi-strategy RAG system fusing ChromaDB dense retrieval (instruction-aware qwen3 embeddings with asymmetric query/document prefixes) and BM25Okapi sparse search via Reciprocal Rank Fusion (\u03b1=0.7), achieving precise retrieval across 300+ unstructured compliance documents.',
          'Built a tool-calling LLM agent (OpenAI SDK \u2192 Ollama) with 4 purpose-built tools \u2014 hybrid_search, get_document, search_by_control, get_categories \u2014 enabling multi-step reasoning with automatic source citation and transparent tool-call logging.',
          'Implemented a pluggable embedding provider factory (Ollama-hosted with instruction prefixes \u2194 in-process FastEmbed ONNX) and a multi-format ingestion pipeline (DOCX, PDF, XLSX, PPTX), containerized as 3 microservices with Docker Compose.',
        ],
      },
      {
        heading: 'AI assistance',
        body: [
          'Iterated through 3 RAG architectures for evaluating M365 tenant configurations against CMMC controls \u2014 evolving from naive LangChain + ChromaDB vector search to an Anthropic Claude-powered contextual RAG pipeline with LLM-generated summary embeddings, and finally to a Neo4j knowledge graph linking controls to config resources via relational context.',
          'Built a hallucination-free documentation assistant: a full-stack GPT-4o mini chatbot integrated with the Microsoft Learn MCP Server, with LLM-analysed query decomposition and every response grounded in verifiable source links.',
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
