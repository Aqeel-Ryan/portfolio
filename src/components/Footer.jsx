export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid #1e1e1e',
      padding: '2rem 1rem', textAlign: 'center' }}>
      <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: '#555', fontSize: '0.85rem' }}>
          © 2026 Aqeel Ryan
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/Aqeel-Ryan" target="_blank" rel="noreferrer"
            style={{ color: '#555', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = '#555'}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/aqryn" target="_blank" rel="noreferrer"
            style={{ color: '#555', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = '#555'}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
