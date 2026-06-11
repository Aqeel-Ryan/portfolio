import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="section bg-elevated">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {education.map((e) => (
            <div key={e.school} className="card">
              <h3 className="text-white font-bold text-base mb-1.5">{e.degree}</h3>
              <p className="text-accent font-semibold mb-2 text-sm">{e.school}</p>
              <div className="flex gap-4 flex-wrap mb-3">
                <span className="text-muted text-xs">📍 {e.location}</span>
                <span className="text-muted text-xs">🗓 {e.period}</span>
              </div>
              {e.gpa && <span className="badge mb-3 inline-block">{e.gpa}</span>}
              {e.courses && (
                <p className="text-[#777] text-xs leading-relaxed mt-2">
                  <span className="text-[#aaa]">Coursework: </span>{e.courses}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
