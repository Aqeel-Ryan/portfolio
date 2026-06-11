import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'
import { profile } from '../data/profile'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — ${profile.name}`
    return () => { document.title = `${profile.name} — ${profile.title}` }
  }, [post])

  if (!post) return <NotFound />

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/blog" className="text-muted text-sm hover:text-accent transition-colors">
        ← All posts
      </Link>
      <header className="mt-6 mb-8">
        <p className="text-muted text-sm mb-2">{post.date}</p>
        <h1 className="text-4xl font-extrabold text-white leading-tight">{post.title}</h1>
      </header>
      <div className="flex flex-col gap-6">
        {post.body?.map((section, i) => (
          <section key={i}>
            {section.heading && <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>}
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="text-[#ccc] leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}
