interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-gold" />
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
          {tag}
        </span>
      </div>
      <h2 className="mb-5 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-sans text-lg font-light leading-relaxed text-on-surface-variant">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
