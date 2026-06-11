import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import ResumeButton from './ResumeButton'
import RecruiterBadges from './RecruiterBadges'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #111111 0%, #0d1f1c 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-accent font-mono mb-4">Hi, I&apos;m</p>
        <h1 className="font-extrabold text-white leading-[1.1] mb-2 text-[clamp(2.5rem,8vw,5rem)]">
          {profile.name}
        </h1>
        <h2 className="font-medium text-muted mb-6 text-[clamp(1.2rem,4vw,2rem)]">
          {profile.title}
        </h2>
        <p className="max-w-xl text-[#aaa] leading-relaxed mb-8 text-[1.05rem]">
          {profile.tagline}
        </p>

        <div className="mb-8">
          <RecruiterBadges />
        </div>

        <div className="flex gap-4 flex-wrap mb-10">
          <button onClick={() => scrollTo('projects')} className="btn-primary">View Work</button>
          <ResumeButton variant="outline" />
          <button onClick={() => scrollTo('contact')} className="btn-outline">Contact Me</button>
        </div>

        <div className="flex gap-6 items-center">
          <a href={profile.github} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`}
            className="text-muted hover:text-accent transition-colors" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
