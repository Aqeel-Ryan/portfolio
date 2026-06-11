import { Link } from 'react-router-dom'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section bg-elevated">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>

        {experience.map((job) => (
          <div key={job.role + job.org} className="timeline-item">
            <div className="timeline-dot" />
            <h3 className="text-white font-bold text-xl mb-1">{job.role}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center mb-1">
              <span className="text-accent font-semibold">{job.org}</span>
              <span className="text-[#666] text-sm">{job.period}</span>
            </div>
            {job.note && <p className="text-muted text-sm mb-4">{job.note}</p>}
            {!job.note && <div className="mb-4" />}

            <ul className="flex flex-col gap-3.5 list-none p-0">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent mt-1.5 shrink-0">▹</span>
                  <span className="text-[#ccc] leading-relaxed text-[0.95rem]">{b}</span>
                </li>
              ))}
            </ul>

            {job.caseStudySlug && (
              <Link to={`/work/${job.caseStudySlug}`}
                className="inline-block mt-4 text-accent text-sm font-semibold hover:underline">
                Read the deep-dive case study →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
