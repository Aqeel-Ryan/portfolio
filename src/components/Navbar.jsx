import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { profile } from '../data/profile'

const sections = [
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
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  // Active-section highlighting only runs on the home page.
  useEffect(() => {
    if (!onHome) return
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -50% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [onHome])

  const goToSection = (id) => {
    setMenuOpen(false)
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  const goHome = () => {
    setMenuOpen(false)
    if (onHome) window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-elevated border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={goHome} className="text-white font-bold text-lg tracking-tight cursor-pointer">
          Aqeel <span className="text-accent">Ryan</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ label, id }) => (
            <button key={id} onClick={() => goToSection(id)}
              className={`nav-link${onHome && active === id ? ' active' : ''}`}>
              {label}
            </button>
          ))}
          <Link to="/blog" className={`nav-link${pathname.startsWith('/blog') ? ' active' : ''}`}>
            Blog
          </Link>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer"
            className="text-sm font-bold text-accent border border-accent rounded-md px-3 py-1.5 transition-colors duration-200 hover:bg-accent/10">
            Resume
          </a>
        </div>

        <button className="md:hidden text-2xl text-[#aaa] cursor-pointer leading-none"
          aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-elevated border-t border-surface">
          {sections.map(({ label, id }) => (
            <button key={id} onClick={() => goToSection(id)}
              className={`nav-link text-left${onHome && active === id ? ' active' : ''}`}>
              {label}
            </button>
          ))}
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="nav-link text-left">Blog</Link>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="nav-link text-left">
            Resume ↓
          </a>
        </div>
      )}
    </nav>
  )
}
