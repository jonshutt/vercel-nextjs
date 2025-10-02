import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks | Jon Shutt",
  description: "Selected product work and collaborations led by Jon Shutt.",
};

export default function TasksPage() {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Tasks</h1>
      </header>

      <div className="space-y-8">
        <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-cyan-500/10">
          <h2 className="text-2xl font-semibold text-slate-100">tasks</h2>
          <p className="mt-4 text-sm text-slate-400">dsfdsf</p>
        </article>
        <Button size="lg" variant="outline">
          This is a button
        </Button>
      </div>
    </section>
  );
}
