import { useState, useEffect } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{ backgroundColor: '#0d0d0d', borderBottom: '1px solid #1e1e1e' }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-bold text-lg tracking-tight"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
          Aqeel <span style={{ color: 'var(--accent)' }}>Ryan</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`nav-link${active === id ? ' active' : ''}`}
              style={{ background: 'none', border: 'none' }}>
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa' }}
          onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid #1e1e1e' }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {links.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`nav-link${active === id ? ' active' : ''}`}
              style={{ background: 'none', border: 'none', textAlign: 'left' }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
