// All projects. `caseStudySlug` links to a deep-dive in caseStudies.js.
// Projects without a slug render as cards linking to GitHub only.
export const projects = [
  {
    title: 'Marketplace Intelligence Platform \u2014 Agentic ETL Lakehouse',
    period: 'Jan 2026 \u2013 Present',
    summary:
      'A 3-agent LangGraph pipeline (DeepSeek Orchestrator \u2192 optional Claude Sonnet Critic \u2192 DeepSeek Planner) ' +
      'that analyzes heterogeneous source schemas and emits declarative YAML transforms across ' +
      '8 action types (RENAME/CAST/FORMAT/DELETE/ADD/SPLIT/UNIFY/DERIVE), eliminating per-source ' +
      'hand-coded transform scripts. Redis YAML cache (30d TTL, schema-fingerprint keyed) short-circuits ' +
      'all three LLM agents on re-runs. Onboarded 4 heterogeneous sources (USDA, OpenFoodFacts, OpenFDA, ' +
      'Amazon ESCI) into a BigQuery lakehouse with zero kernel code changes.',
    tech: ['Python', 'LangGraph', 'LiteLLM', 'Airflow', 'Kafka', 'BigQuery', 'GCS', 'ChromaDB',
      'FAISS', 'Redis', 'Streamlit', 'Prometheus', 'Grafana'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'marketplace-intelligence',
    featured: true,
  },
  {
    title: 'PE Due Diligence Platform \u2014 Multi-Agent Agentic Intelligence',
    period: 'Jan 2026 \u2013 Present',
    summary:
      'A LangGraph supervisor routing to 4 specialist agents (SEC Analyst, Scorer, Evidence Agent, ' +
      'Value Creation Agent) via a shared MCP stdio server (6 tools, 2 resources) backed by Snowflake, ' +
      'S3, and ChromaDB. Executes a 6-node conditional workflow at 3 assessment depths (screening / ' +
      'limited / full) with HITL interrupt gates on high-stakes investment decisions. LiteLLM ModelRouter ' +
      'routes 4 providers by task (Groq for keyword/estimation, Claude Haiku 4.5 for chatbot/justifications, ' +
      'DeepSeek as fallback) enforcing a $5/day budget across the pipeline.',
    tech: ['Python', 'LangGraph', 'MCP', 'Snowflake', 'AWS S3', 'ChromaDB', 'SEC EDGAR',
      'PatentsView', 'Redis', 'LiteLLM', 'Streamlit', 'Prometheus', 'Mem0'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'pe-due-diligence',
    featured: true,
  },
  {
    title: 'Contextual RAG for Cloud Configs',
    period: 'Jul 2025 \u2013 Sep 2025',
    summary:
      'A specialized RAG system over complex cloud-environment configuration data. Hybrid search ' +
      'combining Voyage AI vector embeddings and BM25 indexing \u2014 benchmarked +35% retrieval ' +
      'accuracy over baseline. Evolved through 3 architectures: naive LangChain + ChromaDB \u2192 ' +
      'Anthropic Claude contextual RAG with LLM-generated summary embeddings \u2192 Neo4j knowledge graph.',
    tech: ['Python', 'ChromaDB', 'Voyage AI', 'BM25', 'Azure AI Foundry', 'RAG', 'Neo4j'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'contextual-rag',
    featured: true,
  },
  {
    title: 'SmartLease: AI Property Search',
    period: 'Jan 2025 \u2013 Apr 2025',
    summary:
      'A property search platform replacing filter-based systems with LLM-powered natural language ' +
      'understanding. Hybrid search combining Snowflake Cortex semantic embeddings with SQL keyword ' +
      'filtering and GPT-4 re-ranking.',
    tech: ['Python', 'Snowflake Cortex', 'GPT-4', 'FastAPI', 'ETL'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: null,
  },
  {
    title: 'ContentGPT',
    period: 'Mar 2025 \u2013 Apr 2025',
    summary:
      'A full-stack application leveraging AI to generate video content from trending news. ' +
      'Next.js 15, React 19, TypeScript, Tailwind CSS frontend with a FastAPI + OpenAI API backend.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI API'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: null,
  },
  {
    title: 'Hit Me Up! \u2014 Networking Matcher',
    period: 'Sep 2024 \u2013 Dec 2024',
    summary:
      'An event attendee matching system that takes a LinkedIn profile and returns ranked compatible ' +
      'connections with AI-generated explanations. Dual-embedding pipeline: Sentence-BERT for ' +
      'networking objectives + TF-IDF/Word2Vec for profile text.',
    tech: ['Python', 'Sentence-BERT', 'TF-IDF', 'Word2Vec', 'FAISS', 'DeepSeek API'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: null,
  },
  {
    title: 'XGBoost Quant Dashboard',
    period: 'Sep 2024 \u2013 Nov 2024',
    summary:
      'A 7-step ML pipeline predicting META stock returns using Fama-French factors, 15+ FRED macro ' +
      'series, and technical indicators. Interactive Streamlit dashboard with trading-strategy ' +
      'simulation demonstrating 83% returns over the backtested period.',
    tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Scikit-learn', 'FRED'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: null,
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.caseStudySlug === slug)
