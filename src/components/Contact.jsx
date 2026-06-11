import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import ResumeButton from './ResumeButton'
import RecruiterBadges from './RecruiterBadges'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          <div>
            <p className="text-[#aaa] leading-relaxed mb-6 max-w-md">
              Open to new opportunities and collaborations. The fastest way to reach me is email or
              LinkedIn — I read everything.
            </p>
            <div className="mb-8">
              <RecruiterBadges />
            </div>
            <ResumeButton variant="outline" />
          </div>

          <div className="flex flex-col gap-4">
            <ContactLink href={`mailto:${profile.email}`} label={profile.email}
              icon={<EmailIcon size={18} />} primary />
            <ContactLink href={profile.linkedin} label={profile.linkedin.replace('https://', '')}
              icon={<LinkedInIcon size={18} />} />
            <ContactLink href={profile.github} label={profile.github.replace('https://', '')}
              icon={<GitHubIcon size={18} />} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({ href, label, icon, primary }) {
  const external = href.startsWith('http')
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group flex items-center gap-4 rounded-xl border border-line p-4 transition-colors hover:border-accent ${primary ? 'bg-surface' : ''}`}>
      <span className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-muted shrink-0 group-hover:text-accent group-hover:border-accent transition-colors">
        {icon}
      </span>
      <span className="text-[#ccc] text-sm group-hover:text-accent transition-colors break-all">
        {label}
      </span>
    </a>
  )
}
