import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On route change: scroll to the hash target if present, otherwise to top.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section has rendered.
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [pathname, hash])

  return null
}
