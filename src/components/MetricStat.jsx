export default function MetricStat({ value, label }) {
  return (
    <div className="bg-surface border border-line rounded-xl p-5">
      <div className="text-accent text-3xl font-extrabold leading-none mb-2">{value}</div>
      <div className="text-muted text-sm leading-snug">{label}</div>
    </div>
  )
}
