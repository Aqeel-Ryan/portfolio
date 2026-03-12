export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(135deg, #111111 0%, #0d1f1c 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p style={{ color: 'var(--accent)', fontFamily: 'monospace', marginBottom: '1rem', fontSize: '1rem' }}>
          Hi, I&apos;m
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, color: '#ffffff',
          lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Aqeel Ryan
        </h1>
        <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 500,
          color: '#888', marginBottom: '1.5rem' }}>
          AI Solutions Engineer
        </h2>
        <p style={{ maxWidth: '600px', color: '#aaa', lineHeight: 1.7, marginBottom: '2.5rem',
          fontSize: '1.05rem' }}>
          Designing and deploying end-to-end AI systems — from compliance automation pipelines
          and multi-iteration RAG architectures to LLM-powered search platforms and
          multi-source data pipelines.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button onClick={() => scrollTo('projects')}
            style={{ background: 'var(--accent)', color: '#111', fontWeight: 700,
              border: 'none', borderRadius: '0.5rem', padding: '0.8rem 1.8rem',
              cursor: 'pointer', fontSize: '0.95rem', transition: 'opacity 0.2s' }}
            onMouseOver={e => e.target.style.opacity = '0.85'}
            onMouseOut={e => e.target.style.opacity = '1'}>
            View Work
          </button>
          <button onClick={() => scrollTo('contact')}
            style={{ background: 'transparent', color: 'var(--accent)', fontWeight: 700,
              border: '1px solid var(--accent)', borderRadius: '0.5rem',
              padding: '0.8rem 1.8rem', cursor: 'pointer', fontSize: '0.95rem',
              transition: 'background 0.2s' }}
            onMouseOver={e => e.target.style.background = 'rgba(0,245,212,0.08)'}
            onMouseOut={e => e.target.style.background = 'transparent'}>
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://github.com/Aqeel-Ryan" target="_blank" rel="noreferrer"
            style={{ color: '#888', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = '#888'}>
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/aqryn" target="_blank" rel="noreferrer"
            style={{ color: '#888', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = '#888'}>
            <LinkedInIcon />
          </a>
          <a href="mailto:ryan.aq@northeastern.edu"
            style={{ color: '#888', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = '#888'}>
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}
