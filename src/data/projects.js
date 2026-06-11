// All projects. `caseStudySlug` links to a deep-dive in caseStudies.js.
// Projects without a slug render as cards linking to GitHub only.
export const projects = [
  {
    title: 'Marketplace Intelligence Platform — Agentic ETL Lakehouse',
    period: 'Jan 2026 – Present',
    summary:
      'A 3-agent LangGraph StateGraph that analyzes heterogeneous source schemas and emits ' +
      'declarative YAML transforms — enabling zero-code extensibility to entire new verticals ' +
      'through domain packs loaded at startup.',
    tech: ['Python', 'LangGraph', 'LiteLLM', 'Airflow', 'Kafka', 'BigQuery', 'GCS', 'ChromaDB',
      'FAISS', 'Redis', 'Streamlit', 'Prometheus', 'Grafana'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'marketplace-intelligence',
    featured: true,
  },
  {
    title: 'PE Due Diligence Platform — Multi-Agent Agentic Intelligence',
    period: 'Jan 2026 – Present',
    summary:
      'A LangGraph StateGraph with a supervisor router dispatching to four specialist agents ' +
      '(SEC Analyst, Scorer, Evidence Analyst, Value Creator), each accessing platform data only ' +
      'through an MCP tool server, with HITL interrupt gates on high-stakes investment decisions.',
    tech: ['Python', 'LangGraph', 'MCP', 'Snowflake', 'AWS S3', 'ChromaDB', 'SEC EDGAR',
      'PatentsView', 'Redis', 'LiteLLM', 'Streamlit', 'Prometheus', 'Mem0'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'pe-due-diligence',
    featured: true,
  },
  {
    title: 'Contextual RAG for Cloud Configs',
    period: 'Jul 2025 – Sep 2025',
    summary:
      'A specialized RAG system over complex cloud-environment configuration data. Hybrid search ' +
      'combining Voyage AI vector embeddings and BM25 indexing — benchmarked +35% retrieval ' +
      'accuracy over baseline.',
    tech: ['Python', 'ChromaDB', 'Voyage AI', 'BM25', 'Azure AI Foundry', 'RAG'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: 'contextual-rag',
    featured: true,
  },
  {
    title: 'SmartLease: AI Property Search',
    period: 'Jan 2025 – Apr 2025',
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
    period: 'Mar 2025 – Apr 2025',
    summary:
      'A full-stack application leveraging AI to generate video content from trending news. ' +
      'Next.js 15, React 19, TypeScript, Tailwind CSS frontend with a FastAPI + OpenAI API backend.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI API'],
    github: 'https://github.com/Aqeel-Ryan',
    caseStudySlug: null,
  },
  {
    title: 'Hit Me Up! — Networking Matcher',
    period: 'Sep 2024 – Dec 2024',
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
    period: 'Sep 2024 – Nov 2024',
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
