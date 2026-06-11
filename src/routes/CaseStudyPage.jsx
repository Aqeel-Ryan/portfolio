import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCaseStudy } from '../data/caseStudies'
import { profile } from '../data/profile'
import MetricStat from '../components/MetricStat'
import NotFound from './NotFound'

function Body({ body }) {
  if (Array.isArray(body)) {
    return (
      <ul className="flex flex-col gap-3">
        {body.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            <span className="text-[#ccc] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-[#ccc] leading-relaxed">{body}</p>
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)

  useEffect(() => {
    if (cs) document.title = `${cs.title} — ${profile.name}`
    return () => { document.title = `${profile.name} — ${profile.title}` }
  }, [cs])

  if (!cs) return <NotFound />

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/#projects" className="text-muted text-sm hover:text-accent transition-colors">
        ← Back to projects
      </Link>

      <header className="mt-6 mb-10">
        <p className="text-accent font-mono text-sm mb-2">{cs.subtitle}</p>
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-3">{cs.title}</h1>
        <p className="text-lg text-[#ccc] leading-relaxed mb-4">{cs.oneLiner}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          {cs.role && <span>Role: {cs.role}</span>}
          {cs.period && <span>{cs.period}</span>}
        </div>
      </header>

      {cs.metrics?.length > 0 && (
        <div className="grid gap-4 mb-12 grid-cols-2 md:grid-cols-4">
          {cs.metrics.map((m) => (
            <MetricStat key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-10">
        {cs.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-accent inline-block" />
              {s.heading}
            </h2>
            <Body body={s.body} />
            {s.image && (
              <img src={s.image} alt={`${s.heading} diagram`}
                className="mt-5 rounded-xl border border-line w-full" />
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-line">
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Built with</h3>
        <div className="flex flex-wrap gap-1.5 mb-8">
          {cs.tech.map((t) => <span key={t} className="badge">{t}</span>)}
        </div>
        <div className="flex flex-wrap gap-4">
          {cs.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-outline">
              {l.label} →
            </a>
          ))}
          <Link to="/#contact" className="btn-primary">Get in touch</Link>
        </div>
      </div>
    </article>
  )
}
