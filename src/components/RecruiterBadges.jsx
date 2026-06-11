import { profile } from '../data/profile'

const items = [
  { icon: '📍', text: profile.location },
  { icon: '🌐', text: profile.remote },
  { icon: '🗓', text: profile.availability },
  { icon: '🛂', text: profile.workAuth },
]

export default function RecruiterBadges() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {items.filter((i) => i.text).map((i) => (
        <span key={i.text} className="flex items-center gap-2 text-sm text-muted">
          <span aria-hidden="true">{i.icon}</span>
          {i.text}
        </span>
      ))}
    </div>
  )
}
