import { profile } from '../data/profile'

// variant: 'primary' (filled) | 'outline'
export default function ResumeButton({ variant = 'primary', className = '' }) {
  return (
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noreferrer"
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`}
    >
      Download Résumé ↓
    </a>
  )
}
