const projects = [
  {
    title: 'AI-Readiness Signal Pipeline',
    period: 'Jan 2026 – Present',
    description: 'Co-architecting a multi-pipeline platform that evaluates target companies on AI-readiness using a mathematical scoring formula across SEC filings, job postings, patent activity, technology stack, and company culture signals. Owned full design and implementation of the external signals pipeline.',
    tech: ['Python', 'Snowflake', 'AWS S3', 'Redis', 'FastAPI', 'pytest'],
    github: 'https://github.com/Aqeel-Ryan',
  },
  {
    title: 'Contextual RAG for Cloud Configs',
    period: 'Jul 2025 – Sep 2025',
    description: 'Built a specialized RAG system to improve accessibility over complex cloud environment configuration data. Implemented hybrid search combining Voyage AI vector embeddings and BM25 indexing — benchmarked 35% retrieval accuracy improvement over baseline.',
    tech: ['Python', 'ChromaDB', 'Voyage AI', 'BM25', 'Azure AI Foundry', 'RAG'],
    github: 'https://github.com/Aqeel-Ryan',
  },
  {
    title: 'SmartLease: AI Property Search',
    period: 'Jan 2025 – Apr 2025',
    description: 'Architected a property search platform replacing traditional filter-based systems with LLM-powered natural language understanding. Built a hybrid search combining Snowflake Cortex semantic embeddings with SQL keyword filtering and GPT-4 re-ranking.',
    tech: ['Python', 'Snowflake Cortex', 'GPT-4', 'FastAPI', 'ETL'],
    github: 'https://github.com/Aqeel-Ryan',
  },
  {
    title: 'ContentGPT',
    period: 'Mar 2025 – Apr 2025',
    description: 'Full-stack application leveraging AI to generate video content from trending news. Built with Next.js 15, React 19, TypeScript, Tailwind CSS (frontend) and FastAPI + OpenAI API (backend).',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI API'],
    github: 'https://github.com/Aqeel-Ryan',
  },
  {
    title: 'Hit Me Up! — Networking Matcher',
    period: 'Sep 2024 – Dec 2024',
    description: 'Event attendee matching system that takes a LinkedIn profile and returns ranked compatible connections with AI-generated explanations. Dual-embedding pipeline: Sentence-BERT for networking objectives + TF-IDF/Word2Vec for profile text.',
    tech: ['Python', 'Sentence-BERT', 'TF-IDF', 'Word2Vec', 'FAISS', 'DeepSeek API'],
    github: 'https://github.com/Aqeel-Ryan',
  },
  {
    title: 'XGBoost Quant Dashboard',
    period: 'Sep 2024 – Nov 2024',
    description: '7-step ML pipeline for predicting META stock returns using Fama-French factors, 15+ FRED macro series, and technical indicators. Interactive Streamlit dashboard with trading strategy simulation demonstrating 83% returns over the backtested period.',
    tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Scikit-learn', 'FRED'],
    github: 'https://github.com/Aqeel-Ryan',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p) => (
            <div key={p.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ color: '#666', marginLeft: '0.5rem', flexShrink: 0, transition: 'color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseOut={e => e.currentTarget.style.color = '#666'}>
                  <GitHubIcon />
                </a>
              </div>
              <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{p.period}</p>
              <p style={{ color: '#ccc', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {p.tech.map(t => (
                  <span key={t} className="badge" style={{ fontSize: '0.72rem' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
