import { Panel } from "@/components/ui/panel";
import { getPosts } from "@/actions/projects";

const environmentLabel = process.env.NEXT_PUBLIC_ENVIRONMENT_LABEL ?? "Production";

export default async function Home() {
  const posts = await getPosts();

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

      <div className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-100">Latest Posts</h2>
          <p className="text-sm text-slate-400">
            Thinking, writing, and notes from projects in progress.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-sm text-slate-400">No posts have been published yet.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Panel key={post.id} className="p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-100">{post.title}</h3>
                {post.summary ? (
                  <p className="mt-3 text-sm text-slate-400">{post.summary}</p>
                ) : null}
                <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
                  Updated {new Date(post.updatedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </Panel>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
