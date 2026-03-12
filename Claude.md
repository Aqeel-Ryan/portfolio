# Portfolio Owner — Aqeel Ryan

This file contains all personal data for the e-portfolio. Reference this file for all content decisions.

---

## Personal Info

- **Name:** Aqeel Ryan
- **Email:** ryan.aq@northeastern.edu
- **LinkedIn:** https://linkedin.com/in/aqryn
- **GitHub:** https://github.com/Aqeel-Ryan
- **Location:** Boston, MA

---

## Summary / Bio

AI Solutions Engineer with hands-on experience designing and deploying end-to-end AI systems — from compliance automation pipelines and multi-iteration RAG architectures to LLM-powered search platforms and multi-source data pipelines. Naturally drawn to system design: experienced at producing high-level architecture diagrams, breaking down ambiguous technical problems, and translating business requirements into scalable solutions. Strong foundation in Python, cloud infrastructure (Azure, AWS), and the full AI application stack.

---

## Work Experience

### AI Solutions Engineer — Augment Systems LLC
**May 2025 – Dec 2025**

- Architected an AI-powered CMMC 2.0 compliance automation system using Python, PowerShell, and Microsoft Graph API — designed and tested three distinct tenant configuration extraction approaches (Graph API endpoints, EntraExporter, and M365DSC PowerShell DSC modules) to identify the most scalable architecture; extracted configs mapped automatically to CMMC controls producing SATISFIED / NOT SATISFIED / PARTIALLY SATISFIED assessments, replacing a manual audit process that typically takes compliance consultants 6 months to 2 years
- Independently deployed and iterated a multi-version Contextual RAG system on Azure AI Foundry: v1 ingested raw JSON tenant configurations into ChromaDB via recursive directory parsing; v2 introduced LLM-generated summaries per config to add semantic context before indexing — improving compliance control retrieval relevance across complex multi-tenant environments
- Engineered automated configuration extraction pipelines using PowerShell DSC (M365DSC) and Python REST APIs, reducing manual configuration collection effort by 60%; configured Entra app registrations with scoped API permissions and certificate-based authentication for secure multi-tenant access
- Delivered a full-stack AI chatbot using GPT-4o mini and React, integrating the Microsoft Learn MCP Server to give users natural language access to live Microsoft documentation — grounding all responses in direct documentation links to eliminate hallucination
- Built an end-to-end asset management system on Azure Power Platform, engineering data ingestion and transformation pipelines feeding interactive Power BI dashboards for real-time operational tracking
- Produced architectural diagrams (draw.io) for RAG pipelines, ETL flows, and compliance system architecture, presenting designs to the founding team (Ex-CTO / Ex-CPO) and incorporating feedback to refine implementation approach

---

## Projects

### AI-Readiness Signal Pipeline
**Jan 2026 – Present**
- Co-architecting a multi-pipeline platform that evaluates target companies on AI-readiness using a mathematical scoring formula across SEC filings (DEF 14A, 10-K, 10-Q, 8-K), job postings (python-jobspy), patent activity (PatentsView API), technology stack (Wappalyzer, BuiltWith), and company culture signals (Glassdoor API)
- Owned full design and implementation of the external signals pipeline — architecting API ingestion, data normalization, Snowflake schema design, AWS S3 raw storage, and Redis caching layers
- Leading a full codebase refactor to improve modularity and scalability; authored pytest test suites ensuring reliability across all pipeline modules
- **Tech:** Python · Snowflake · AWS S3 · Redis · FastAPI · pytest

### Contextual RAG for Cloud Configurations
**Jul 2025 – Sep 2025**
- Built a specialized RAG system to improve accessibility and decision-making over complex cloud environment configuration data
- Designed a contextual metadata generation layer using LLM calls to convert raw JSON configurations into structured, queryable summaries
- Implemented hybrid search architecture combining Voyage AI vector embeddings and BM25 indexing; benchmarked 35% retrieval accuracy improvement over baseline
- **Tech:** Python · ChromaDB · Voyage AI · BM25 · Azure AI Foundry · RAG

### SmartLease: AI Property Search Platform
**Jan 2025 – Apr 2025**
- Architected a property search platform replacing traditional filter-based systems with LLM-powered natural language understanding and semantic matching
- Engineered a 4-stage sequential ETL pipeline: HomeHarvest scraper → Google Places API POI enrichment → data cleaning and field standardization → Snowflake upsert with duplicate detection by property ID
- Built a hybrid search system combining Snowflake Cortex semantic embeddings (snowflake-arctic-embed-l-v2.0) with SQL keyword filtering and a +0.1 score boost for keyword matches; GPT-4 re-ranks top results and generates per-property pros/cons/suggestions
- **Tech:** Python · Snowflake Cortex · GPT-4 · FastAPI · ETL

### ContentGPT: AI-Powered Content Generation Platform
**Mar 2025 – Apr 2025**
- Developed a full-stack application leveraging AI to generate video content from trending news
- Built with Next.js 15, React 19, TypeScript, Tailwind CSS (frontend) and FastAPI + OpenAI API (backend)
- Created RESTful API endpoints for trending news retrieval and AI-driven content package generation
- **Tech:** Next.js · React 19 · TypeScript · Tailwind CSS · FastAPI · OpenAI API

### Hit Me Up! — Professional Networking Matching System
**Sep 2024 – Dec 2024**
- Architected an event attendee matching system that takes a LinkedIn profile and returns ranked compatible connections with AI-generated explanations of why they should meet
- Designed a dual-embedding matching pipeline: Sentence-BERT encodes networking objectives with complementary intent boosting; TF-IDF + Word2Vec encodes profile text — combined via weighted scoring with experience-tier adjustment
- Integrated DeepSeek API to generate personalized "reasons to meet" narratives for top matches; built LinkedIn profile ingestion via ProxyCurl API with caching; iterated across 3 model generations
- **Tech:** Python · Sentence-BERT · TF-IDF · Word2Vec · FAISS · DeepSeek API · ProxyCurl

### XGBoost Quant Dashboard
**Sep 2024 – Nov 2024**
- Built a 7-step ML pipeline for predicting META stock logarithmic returns using a feature mart combining Fama-French 5 factors, 15+ FRED macroeconomic series, ADS Business Conditions Index, and technical indicators (RSI, Bollinger Bands, SMA20/50, OBV)
- Benchmarked 6 models (XGBoost, Ridge, LASSO, ElasticNet, LARS, RandomForest); selected XGBoost via cross-validation achieving RMSE of 0.0261; analyzed feature importance using SHAP values and VIF-based multicollinearity checks
- Developed an interactive Streamlit dashboard with trading strategy simulation (100-share positions, 1% stop-loss, 5% take-profit, $50K capital); simulated paper trading results demonstrated 83% returns over the backtested period
- **Tech:** Python · XGBoost · SHAP · Streamlit · Scikit-learn · Fama-French · FRED

---

## Skills

- **AI & LLM Engineering:** RAG, Contextual RAG, GPT-4o / GPT-4o mini, Vector Embeddings (Voyage AI, Snowflake Arctic), BM25 Indexing, Semantic Search, Hybrid Search, Prompt Engineering, MCP Servers, LangChain, Ollama, Azure AI Foundry, AWS Bedrock, NLP (BERT, Word2Vec, TF-IDF), DeepSeek
- **Cloud & Infrastructure:** Azure (M365, Entra, Power Platform, AI Foundry), AWS (S3, Bedrock), Snowflake, Docker
- **Data Engineering:** Python (Pandas, NumPy, Scikit-learn), FastAPI, Redis, Airflow, ETL Pipeline Design, PowerShell (M365DSC, EntraExporter), Microsoft Graph API
- **Databases & Search:** PostgreSQL, ChromaDB, Pinecone, Elasticsearch, Neo4j, Snowflake Cortex
- **Visualization & Reporting:** Power BI, Streamlit, Plotly, Matplotlib, Seaborn
- **Dev Practices:** Git, pytest, REST APIs, Architecture Diagramming (draw.io), Technical Documentation
- **Certifications:** AWS Certified AI Practitioner, IBM Data Science Professional Certification

---

## Education

### Northeastern University — Boston, MA
**MS Information Systems** | Expected May 2026 | GPA: 3.5
Coursework: Data Engineering w/ GenAI and LLMs, Big Data and Intelligent Analytics

### ESILV — École Supérieure d'Ingénieurs Léonard de Vinci — Paris, France
**BS Data & AI (Foreign Student Exchange Program)** | Jan 2023 – Apr 2023

### National Institute of Technology, Puducherry — India
**BTech in Computer Science** | Sep 2019 – Apr 2023
Coursework: Big Data Analytics, Deep Learning and Neural Networks, Expert and Intelligent Systems, DBMS

---

## Design Preferences

- Dark theme: `#111111` background · `#1e1e1e` card backgrounds · `#e0e0e0` body text · `#00f5d4` teal accent
- Clean, minimal, developer-focused aesthetic
- Teal used for: active nav, tag badges, hover accents, section headings underline
- Subtle hover lift on project cards (translateY + box-shadow)
- Vertical timeline for Experience section
- Contact form action URL: replace `YOUR_FORMSPREE_ID` placeholder with real endpoint
```

---