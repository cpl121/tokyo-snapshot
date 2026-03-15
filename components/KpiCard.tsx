interface KpiCardProps {
  value: string
  label: string
  sublabel?: string
  className?: string
}

export default function KpiCard({
  value,
  label,
  sublabel,
  className = '',
}: KpiCardProps) {
  return (
    <article
      className={`bg-surface-raised border border-border-default rounded-card p-6 flex flex-col justify-between hover:border-primary-600/30 transition-all duration-300 group ${className}`}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="w-8 h-0.5 bg-primary-600 mb-4 group-hover:w-12 transition-all duration-300"
      />

      {/* Semantic key-value pair */}
      <dl>
        <dt className="sr-only">{label}</dt>
        <dd className="text-4xl sm:text-5xl font-black text-primary-500 leading-none mb-3 tracking-tight">
          {value}
        </dd>
      </dl>

      {/* Label (visible, not part of dl to allow flexible styling) */}
      <p className="text-base sm:text-lg font-semibold text-white mb-1 leading-tight">
        {label}
      </p>

      {sublabel && (
        <p className="text-xs sm:text-sm text-text-subtle leading-snug">{sublabel}</p>
      )}
    </article>
  )
}
