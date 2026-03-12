import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box', backgroundColor: '#0d0d0d',
    border: '1px solid #2a2a2a', borderRadius: '0.5rem', padding: '0.75rem 1rem',
    color: '#e0e0e0', fontSize: '0.95rem', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>

          {/* Contact links */}
          <div>
            <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '2rem' }}>
              Open to new opportunities, collaborations, and interesting conversations.
              Feel free to reach out via any channel below or use the form.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactLink href="mailto:ryan.aq@northeastern.edu" label="ryan.aq@northeastern.edu" icon="✉" />
              <ContactLink href="https://linkedin.com/in/aqryn" label="linkedin.com/in/aqryn" icon="in" />
              <ContactLink href="https://github.com/Aqeel-Ryan" label="github.com/Aqeel-Ryan" icon="gh" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text" placeholder="Your Name" required value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
            <input
              type="email" placeholder="Your Email" required value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
            <textarea
              placeholder="Your Message" required rows={5} value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
            <button type="submit" disabled={status === 'sending'}
              style={{ background: 'var(--accent)', color: '#111', fontWeight: 700, border: 'none',
                borderRadius: '0.5rem', padding: '0.8rem 1.8rem', cursor: 'pointer',
                fontSize: '0.95rem', opacity: status === 'sending' ? 0.7 : 1,
                transition: 'opacity 0.2s', alignSelf: 'flex-start' }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Message sent!</p>}
            {status === 'error' && <p style={{ color: '#ff6b6b', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>}
          </form>

        </div>
      </div>
    </section>
  )
}

function ContactLink({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem',
        color: '#aaa', transition: 'color 0.2s' }}
      onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseOut={e => e.currentTarget.style.color = '#aaa'}>
      <span style={{ width: '2rem', height: '2rem', borderRadius: '50%',
        border: '1px solid #333', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
        {icon}
      </span>
      <span style={{ fontSize: '0.9rem' }}>{label}</span>
    </a>
  )
}
