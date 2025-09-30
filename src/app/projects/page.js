import { getProjects } from './actions';

export const metadata = {
  title: 'Projects | Jon Shutt',
  description: 'Selected product work and collaborations led by Jon Shutt.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Projects</h1>
        <p className="max-w-2xl text-lg text-slate-400">
          A curated look at product work where I owned the front-end architecture, collaborated closely with design and
          data partners, and delivered measurable outcomes.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-slate-400">No projects have been published yet.</p>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-cyan-500/10 transition hover:border-cyan-300/60 hover:bg-slate-900/60"
            >
              <h2 className="text-2xl font-semibold text-slate-100">{project.name}</h2>
              <p className="mt-4 text-sm text-slate-400">{project.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
