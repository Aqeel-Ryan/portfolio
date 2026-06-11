import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
