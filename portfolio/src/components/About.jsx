const highlights = [
  'RAG Systems', 'LLM Engineering', 'Azure AI Foundry', 'AWS', 'Snowflake',
  'FastAPI', 'Python', 'Hybrid Search'
]

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              AI Solutions Engineer with hands-on experience designing and deploying end-to-end AI systems —
              from compliance automation pipelines and multi-iteration RAG architectures to LLM-powered
              search platforms and multi-source data pipelines.
            </p>
            <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Naturally drawn to system design: experienced at producing high-level architecture diagrams,
              breaking down ambiguous technical problems, and translating business requirements into
              scalable solutions. Strong foundation in Python, cloud infrastructure (Azure, AWS),
              and the full AI application stack.
            </p>

            {/* Location badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--accent)' }}>📍</span>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Boston, MA</span>
            </div>

            {/* Resume button */}
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              style={{ display: 'inline-block', background: 'transparent', color: 'var(--accent)',
                border: '1px solid var(--accent)', borderRadius: '0.5rem',
                padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '0.9rem',
                transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(0,245,212,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
              Download Resume
            </a>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>
              Core Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {highlights.map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
