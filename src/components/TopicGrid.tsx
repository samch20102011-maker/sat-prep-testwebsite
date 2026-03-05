import { topics } from "@/data/questions";
import Link from "next/link";

const staggerDelays = [
  "delay-4",
  "delay-5",
  "delay-6",
  "delay-7",
  "delay-8",
  "delay-9",
  "delay-10",
  "delay-11"
];

export function TopicGrid() {
  return (
    <section className="glass-card mt-6 grid gap-4 p-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {topics.map((topic, i) => (
        <Link
          key={topic.id}
          href={`/practice?topic=${topic.id}`}
          className={`group flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/60 p-4 transition hover:border-primary-400/60 hover:bg-slate-900/80 animate-in ${staggerDelays[i] ?? "delay-11"}`}
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Topic
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-50">
              {topic.label}
            </h3>
            <p className="mt-2 text-xs text-slate-400">{topic.description}</p>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-primary-200">
              Focus practice
            </span>
            <span className="opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100 transition">
              View set →
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}

