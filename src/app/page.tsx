import { Navbar } from "@/components/Navbar";
import { TopicGrid } from "@/components/TopicGrid";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="glass-card relative overflow-hidden p-6 sm:p-8 animate-in">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-4">
              <p className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-200 animate-in-fade delay-1">
                Designed for the new SAT
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl animate-in delay-2">
                Build <span className="gradient-text">SAT Math</span> muscle,
                one question at a time.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base animate-in delay-3">
                Curated practice sets, realistic question styles, and instant
                explanations—so you can move from guessing to knowing exactly
                why each answer is right.
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-3 animate-in delay-4">
                <Link href="/practice" className="btn-primary">
                  Start focused practice
                </Link>
                <Link href="/quiz" className="btn-ghost">
                  Take a timed quiz
                </Link>
                <p className="text-xs text-slate-400">
                  No login, no clutter. Just math.
                </p>
              </div>

              <dl className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm animate-in delay-5">
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-slate-400">
                    Topics
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    Linear · Quadratic · Stats · More
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-slate-400">
                    Modes
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    Practice · Review · Timed quiz
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-slate-400">
                    Built for
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    High schoolers shooting 600 → 750+
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <aside className="glass-card flex flex-col justify-between p-5 sm:p-6 animate-in delay-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Today&apos;s plan
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-50">
                20-question mixed practice
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Warm up with easier linear questions, then ramp into mixed
                algebra, geometry, and functions—just like the real test.
              </p>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Accuracy goal
                </span>
                <span className="font-semibold text-emerald-200">80%+</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-primary-400 to-accent-500" />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Suggested pace</span>
                <span>~1 min / question</span>
              </div>
            </div>
          </aside>
        </section>

        <div className="animate-in delay-3">
        <TopicGrid />
      </div>
      </main>
    </div>
  );
}

