const environmentLabel = process.env.NEXT_PUBLIC_ENVIRONMENT_LABEL;

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
          Product Engineer
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
          Hi, I&apos;m Jon Shutt. I build thoughtful digital products that balance polish with measurable impact.
        </h1>
        <p className="text-sm font-medium uppercase tracking-wide text-cyan-200/70">
          Environment: {environmentLabel}
        </p>
      </div>
    </section>
  );
}
