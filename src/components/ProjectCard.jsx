import { Link } from 'react-router-dom'
import { GitHubIcon } from './Icons'

export default function ProjectCard({ project }) {
  const { title, period, summary, tech, github, caseStudySlug } = project
  const hasCaseStudy = Boolean(caseStudySlug)

  return (
    <div className={`card flex flex-col ${hasCaseStudy ? 'card-link' : ''}`}>
      <div className="flex justify-between items-start mb-1 gap-2">
        <h3 className="text-white font-bold text-base leading-snug">
          {hasCaseStudy ? (
            <Link to={`/projects/${caseStudySlug}`} className="hover:text-accent transition-colors">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {github && (
          <a href={github} target="_blank" rel="noreferrer"
            className="text-[#666] hover:text-accent transition-colors shrink-0 mt-0.5"
            aria-label="GitHub repository">
            <GitHubIcon size={20} />
          </a>
        )}
      </div>
      <p className="text-muted text-xs mb-3">{period}</p>
      <p className="text-[#ccc] text-sm leading-relaxed mb-4 flex-1">{summary}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tech.map((t) => (
          <span key={t} className="badge !text-[0.72rem]">{t}</span>
        ))}
      </div>
      {hasCaseStudy && (
        <Link to={`/projects/${caseStudySlug}`}
          className="text-accent text-sm font-semibold hover:underline mt-auto">
          Read case study →
        </Link>
      )}
    </div>
  )
}
