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
    </section>
  );
}
