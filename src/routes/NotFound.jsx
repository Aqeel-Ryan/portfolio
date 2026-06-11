import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section min-h-[70vh] flex flex-col items-center justify-center text-center">
      <p className="text-accent font-mono mb-4">404</p>
      <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-muted mb-8">That page doesn’t exist or has moved.</p>
      <Link to="/" className="btn-primary">Back home</Link>
    </section>
  )
}
