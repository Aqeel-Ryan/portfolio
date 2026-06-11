import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-surface px-6 py-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <p className="text-[#555] text-sm">© 2026 {profile.name}</p>
        <div className="flex gap-6">
          <Link to="/blog" className="text-[#555] text-sm hover:text-accent transition-colors">Blog</Link>
          <a href={profile.github} target="_blank" rel="noreferrer"
            className="text-[#555] text-sm hover:text-accent transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="text-[#555] text-sm hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
