const skillGroups = [
  {
    category: 'AI & LLM Engineering',
    skills: ['RAG', 'Contextual RAG', 'GPT-4o / GPT-4o mini', 'Vector Embeddings', 'BM25 Indexing',
      'Semantic Search', 'Hybrid Search', 'Prompt Engineering', 'MCP Servers', 'LangChain',
      'Ollama', 'Azure AI Foundry', 'AWS Bedrock', 'NLP (BERT, Word2Vec, TF-IDF)', 'DeepSeek']
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['Azure (M365, Entra, Power Platform, AI Foundry)', 'AWS (S3, Bedrock)', 'Snowflake', 'Docker']
  },
  {
    category: 'Data Engineering',
    skills: ['Python (Pandas, NumPy, Scikit-learn)', 'FastAPI', 'Redis', 'Airflow',
      'ETL Pipeline Design', 'PowerShell (M365DSC, EntraExporter)', 'Microsoft Graph API']
  },
  {
    category: 'Databases & Search',
    skills: ['PostgreSQL', 'ChromaDB', 'Pinecone', 'Elasticsearch', 'Neo4j', 'Snowflake Cortex']
  },
  {
    category: 'Visualization & Reporting',
    skills: ['Power BI', 'Streamlit', 'Plotly', 'Matplotlib', 'Seaborn']
  },
  {
    category: 'Dev Practices',
    skills: ['Git', 'pytest', 'REST APIs', 'Architecture Diagramming (draw.io)', 'Technical Documentation']
  },
  {
    category: 'Certifications',
    skills: ['AWS Certified AI Practitioner', 'IBM Data Science Professional Certification']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="card" style={{ cursor: 'default' }}>
              <h3 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem',
                fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.map(skill => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
