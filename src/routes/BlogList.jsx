import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { profile } from '../data/profile'

export default function BlogList() {
  useEffect(() => {
    document.title = `Blog — ${profile.name}`
    return () => { document.title = `${profile.name} — ${profile.title}` }
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-[60vh]">
      <h1 className="section-title">Writing</h1>

      {posts.length === 0 ? (
        <div className="bg-surface border border-line rounded-xl p-10 text-center">
          <p className="text-accent font-mono text-sm mb-3">Coming soon</p>
          <p className="text-[#ccc] leading-relaxed max-w-lg mx-auto">
            I’m putting together write-ups on multi-agent architectures, RAG retrieval quality,
            and compliance automation. Check back shortly — or reach out if you’d like to talk shop.
          </p>
          <Link to="/#contact" className="btn-outline mt-6">Get in touch</Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card card-link block">
              <p className="text-muted text-xs mb-1">{p.date}</p>
              <h2 className="text-white font-bold text-lg mb-2">{p.title}</h2>
              <p className="text-[#ccc] text-sm leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
