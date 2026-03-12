const education = [
  {
    degree: 'MS Information Systems',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Expected May 2026',
    gpa: 'GPA: 3.5',
    courses: 'Data Engineering w/ GenAI and LLMs, Big Data and Intelligent Analytics',
  },
  {
    degree: 'BS Data & AI (Foreign Student Exchange)',
    school: 'ESILV — École Supérieure d\'Ingénieurs Léonard de Vinci',
    location: 'Paris, France',
    period: 'Jan 2023 – Apr 2023',
    gpa: null,
    courses: null,
  },
  {
    degree: 'BTech in Computer Science',
    school: 'National Institute of Technology, Puducherry',
    location: 'India',
    period: 'Sep 2019 – Apr 2023',
    gpa: null,
    courses: 'Big Data Analytics, Deep Learning and Neural Networks, Expert and Intelligent Systems, DBMS',
  },
]

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {education.map((e) => (
            <div key={e.school} className="card" style={{ cursor: 'default' }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                {e.degree}
              </h3>
              <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                {e.school}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <span style={{ color: '#888', fontSize: '0.82rem' }}>📍 {e.location}</span>
                <span style={{ color: '#888', fontSize: '0.82rem' }}>🗓 {e.period}</span>
              </div>
              {e.gpa && (
                <span className="badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{e.gpa}</span>
              )}
              {e.courses && (
                <p style={{ color: '#777', fontSize: '0.82rem', lineHeight: 1.5, marginTop: '0.5rem' }}>
                  <span style={{ color: '#aaa' }}>Coursework: </span>{e.courses}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
