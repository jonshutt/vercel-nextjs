const values = [
  {
    title: "Start with curiosity",
    description:
      "I love immersing myself in the problem space, talking with users, and uncovering unexpected constraints before writing code.",
  },
  {
    title: "Design with engineers in mind",
    description:
      "Collaboration beats handoff. I partner closely with design, product, and data to build experiences that are maintainable and repeatable.",
  },
  {
    title: "Ship, learn, repeat",
    description:
      "I prioritize measurable outcomes, build tight feedback loops, and keep the path to production clear and reliable.",
  },
];

const experience = [
  {
    role: "Staff Product Engineer",
    company: "Arcadia",
    timeframe: "2022 — Present",
    blurb:
      "Leading front-end architecture and shepherding cross-functional squads building analytics tools for marketing teams.",
  },
  {
    role: "Co-founder & Builder",
    company: "Summit Sprints",
    timeframe: "2020 — 2022",
    blurb:
      "Bootstrapped a platform for outdoor athletes from concept to revenue, handling product, engineering, and growth experiments.",
  },
  {
    role: "Senior Front-end Engineer",
    company: "Waypoint Studio",
    timeframe: "2017 — 2020",
    blurb:
      "Delivered design systems and conversion-focused web experiences for clients ranging from early-stage startups to Fortune 500 teams.",
  },
];

export const metadata = {
  title: "About | Jon Shutt",
  description: "Learn about Jon Shutt's background, values, and how he approaches product engineering.",
};

export default function AboutPage() {
  return (
    <section className="space-y-14">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">About</h1>
        <p className="max-w-2xl text-lg text-slate-400">
          I help teams move from raw ideas to polished, performant web experiences. I care about systems thinking, user
          empathy, and the craft of building interfaces that feel intuitive.
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-100">Experience highlights</h2>
          <ul className="space-y-6">
            {experience.map((item) => (
              <li
                key={item.role}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-cyan-500/10"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">
                    {item.timeframe}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {item.role} · {item.company}
                  </h3>
                  <p className="text-sm text-slate-400">{item.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-100">How I work</h2>
          <ul className="space-y-4">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-lg shadow-indigo-500/10"
              >
                <h3 className="text-base font-semibold text-slate-100">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{value.description}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent p-6 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-200">Let&apos;s collaborate</p>
            <p className="mt-3 text-slate-200">
              I&apos;m open to consulting engagements, fractional product engineering roles, and speaking opportunities. Reach out
              at <a href="mailto:hello@jonshutt.com" className="underline decoration-cyan-200 underline-offset-4">hello@jonshutt.com</a>.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
