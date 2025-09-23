const projects = [
  {
    title: "Arcadia Analytics",
    timeline: "2024 • Product Engineer",
    summary:
      "Led the delivery of a modular analytics suite with real-time cohort analysis and role-based workspaces for marketing teams.",
    outcomes: [
      "Cut manual spreadsheet work by 60% through reusable data visualizations.",
      "Shipped an experimentation hub that helped select customers lift activation by 18%.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    title: "Summit Sprints",
    timeline: "2023 • Co-founder",
    summary:
      "Built a community-driven platform that helps outdoor teams plan ambitious objectives with shared itineraries and training dashboards.",
    outcomes: [
      "Scaled to 5k+ monthly climbers with frictionless onboarding and device-ready offline support.",
      "Introduced a premium playbook library that now drives 35% of recurring revenue.",
    ],
    stack: ["Next.js", "GraphQL", "PostgreSQL", "Mapbox"],
  },
  {
    title: "Waypoint Studio",
    timeline: "2022 • Contract Lead",
    summary:
      "Crafted a component-driven design system for a boutique agency, enabling consistent delivery across marketing sites and client portals.",
    outcomes: [
      "Documented 40+ reusable components with accessibility baked in from the start.",
      "Reduced average build time per landing page from days to hours.",
    ],
    stack: ["Storybook", "Next.js", "Figma", "Jest"],
  },
];

export const metadata = {
  title: "Projects | Jon Shutt",
  description: "Selected product work and collaborations led by Jon Shutt.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Projects</h1>
        <p className="max-w-2xl text-lg text-slate-400">
          A curated look at product work where I owned the front-end architecture, collaborated closely with design and
          data partners, and delivered measurable outcomes.
        </p>
      </header>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-cyan-500/10 transition hover:border-cyan-300/60 hover:bg-slate-900/60"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-semibold text-slate-100">{project.title}</h2>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">
                {project.timeline}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">{project.summary}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300"></span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/90">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
