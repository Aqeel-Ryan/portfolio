import { profile } from '../data/profile'
import ResumeButton from './ResumeButton'

export default function About() {
  return (
    <section id="about" className="section bg-elevated">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid gap-12 items-start [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            {profile.bio.map((para, i) => (
              <p key={i} className="text-[#ccc] leading-loose mb-6">{para}</p>
            ))}

            <div className="flex items-center gap-2 mb-8">
              <span className="text-accent" aria-hidden="true">📍</span>
              <span className="text-[#aaa] text-sm">{profile.location}</span>
            </div>

            <ResumeButton variant="outline" />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.coreSkills.map((skill) => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
