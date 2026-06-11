import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="card">
              <h3 className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
