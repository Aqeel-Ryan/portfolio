const bullets = [
  'Architected an AI-powered CMMC 2.0 compliance automation system using Python, PowerShell, and Microsoft Graph API — designed and tested three distinct tenant configuration extraction approaches to identify the most scalable architecture; produced automated SATISFIED / NOT SATISFIED / PARTIALLY SATISFIED assessments, replacing a manual audit process that typically takes compliance consultants 6 months to 2 years.',
  'Independently deployed and iterated a multi-version Contextual RAG system on Azure AI Foundry: v1 ingested raw JSON tenant configurations into ChromaDB; v2 introduced LLM-generated summaries per config to add semantic context before indexing — improving compliance control retrieval relevance across complex multi-tenant environments.',
  'Engineered automated configuration extraction pipelines using PowerShell DSC (M365DSC) and Python REST APIs, reducing manual configuration collection effort by 60%; configured Entra app registrations with scoped API permissions and certificate-based authentication for secure multi-tenant access.',
  'Delivered a full-stack AI chatbot using GPT-4o mini and React, integrating the Microsoft Learn MCP Server to give users natural language access to live Microsoft documentation — grounding all responses in direct documentation links to eliminate hallucination.',
  'Built an end-to-end asset management system on Azure Power Platform, engineering data ingestion and transformation pipelines feeding interactive Power BI dashboards for real-time operational tracking.',
  'Produced architectural diagrams (draw.io) for RAG pipelines, ETL flows, and compliance system architecture, presenting designs to the founding team (Ex-CTO / Ex-CPO) and incorporating feedback to refine implementation approach.',
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div style={{ marginBottom: '0.25rem' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              AI Solutions Engineer
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Augment Systems LLC</span>
              <span style={{ color: '#666', fontSize: '0.85rem' }}>May 2025 – Dec 2025</span>
            </div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', marginTop: '0.3rem', flexShrink: 0 }}>▹</span>
                <span style={{ color: '#ccc', lineHeight: 1.7, fontSize: '0.95rem' }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
