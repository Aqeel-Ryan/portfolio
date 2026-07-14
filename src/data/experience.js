export const experience = [
  {
    role: 'AI Solutions Engineer',
    org: 'Augment Systems LLC',
    period: 'May 2025 – Dec 2025',
    note: null,
    caseStudySlug: 'augment-compliance',
    bullets: [
      'Built a production compliance platform that eliminated a 6-month to 2-year manual audit process. Compliance-aaS evaluates a Microsoft 365 tenant\u2019s live configuration against CISA SCuBA secure baselines across all six M365 workloads using 99 Rego policies evaluated by an OPA engine, with results mapped simultaneously to CMMC Level 2, NIST SP 800-171, ISO 27001, NIST SP 800-53, and MITRE ATT&CK.',
      'Designed a manifest-driven DAG workflow engine (44 YAML-declared nodes, 20+ handler classes) that replaced per-resource hardcoded collection logic \u2014 enabling new product onboarding through YAML manifests alone. Engineered 33 Rego evaluation baselines across 11 Entra ID resource types producing structured pass/fail/manual audit evidence aligned to CISA SCuBA, CMMC Level 2, and NIST SP 800-171.',
      'Architected a dual-track collection pipeline (TCM snapshot API + direct Microsoft Graph) with MSAL OAuth2 authentication, secret-redacted structured logging, and Docker Compose orchestration \u2014 reducing estimated audit preparation effort from months to under an hour.',
      'Designed a multi-strategy RAG system fusing ChromaDB dense retrieval (instruction-aware qwen3 embeddings with asymmetric query/document prefixes) and BM25Okapi sparse search via Reciprocal Rank Fusion (\u03b1=0.7), achieving precise retrieval across 300+ unstructured compliance documents. Built a tool-calling LLM agent (OpenAI SDK \u2192 Ollama) with 4 purpose-built tools \u2014 hybrid_search, get_document, search_by_control, get_categories \u2014 enabling multi-step reasoning with automatic source citation and transparent tool-call logging.',
      'Iterated through 3 RAG architectures for evaluating M365 tenant configurations against CMMC controls \u2014 evolving from naive LangChain + ChromaDB vector search to an Anthropic Claude-powered contextual RAG pipeline with LLM-generated summary embeddings, and finally to a Neo4j knowledge graph linking controls to config resources via relational context. Achieved ~35% improvement in retrieval relevance over the baseline, with each iteration benchmarked against the same CMMC control corpus.',
      'Built a hallucination-free documentation assistant for Microsoft products \u2014 full-stack GPT-4o mini chatbot integrated with the Microsoft Learn MCP Server, with LLM-analysed query decomposition and every response grounded in verifiable source links.',
      'Designed real-time operational visibility by building an end-to-end asset management system on Azure Power Platform with data ingestion pipelines feeding interactive Power BI dashboards.',
      'Produced architecture diagrams (draw.io) for compliance platform, RAG pipelines, and ETL flows, presenting designs to the founding team (Ex-CTO / Ex-CPO) and incorporating feedback before each build phase.',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'INFO 7374: Cybersecurity Audit & Compliance \u2014 Northeastern University',
    period: 'May 2026 \u2013 Aug 2026',
    note: 'Under Prof. Ashutosh Sawant (Head of Security GRC, former AWS / Salesforce / EY)',
    caseStudySlug: null,
    bullets: [
      'Bridging the gap between audit theory and real-world AI implementation. Supporting a 14-week graduate course covering IT audit principles, SOX IT General Controls, and compliance frameworks (NIST CSF, NIST 800-53, HIPAA, ISO 27001, SOC 1/2/3).',
      'Drawing on direct experience building production compliance automation systems to give students practitioner context that textbooks do not provide.',
      'Grading scenario-based assignments and holding office hours to reinforce student understanding of audit lifecycle, regulatory landscape, and continuous compliance monitoring.',
    ],
  },
]
