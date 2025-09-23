import Link from "next/link";

const featuredProjects = [
  {
    title: "Arcadia Analytics",
    description:
      "Self-serve marketing analytics with real-time segmentation, custom dashboards, and stakeholder-friendly reporting.",
    highlight: "Cut weekly reporting time by 60% with automated insights.",
  },
  {
    title: "Summit Sprints",
    description:
      "Community platform for outdoor teams to plan trips, track training goals, and share route beta in collaborative workspaces.",
    highlight: "Scaled to 5k+ monthly users with performant server-rendered pages.",
  },
];

const focusAreas = [
  "Product-focused front-end engineering",
  "Full-stack web apps with Next.js",
  "Design systems & accessible UI",
  "Data visualization and storytelling",
];

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
        <p className="max-w-2xl text-lg text-slate-400">
          From concept to deployment, I help teams ship user experiences that feel effortless and performant. My work spans
          product strategy, front-end architecture, and collaborative delivery with design and data partners.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-500/30 transition hover:from-cyan-400 hover:to-indigo-400"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100"
          >
            Learn more about me
          </Link>
          <a
            href="mailto:hello@jonshutt.com"
            className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-cyan-100"
          >
            Start a conversation ↗
          </a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-8 shadow-lg shadow-cyan-500/10 transition hover:border-cyan-300/60 hover:bg-slate-900/60"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">{project.title}</h2>
              <p className="text-sm text-slate-400">{project.description}</p>
            </div>
            <p className="mt-8 text-sm font-medium text-cyan-200">{project.highlight}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-8">
        <h2 className="text-xl font-semibold text-slate-100">Focus areas right now</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          I love partnering with teams who want to iterate quickly without sacrificing quality. Here are a few capabilities
          I bring to new engagements:
        </p>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-cyan-100/90">
          {focusAreas.map((item) => (
            <li
              key={item}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
