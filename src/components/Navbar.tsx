import Link from "next/link";
import { Suspense } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/practice", label: "Practice Sets" },
  { href: "/quiz", label: "Timed Quiz" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl animate-in-fade">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 hover-lift transition-all duration-300">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 shadow-soft">
            <i className="fa-solid fa-calculator text-lg text-white"></i>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-slate-50">
              Summit SAT
            </p>
            <p className="text-xs text-slate-400">Math Prep</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 px-1 py-1 text-xs font-medium text-slate-200 shadow-soft sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover-lift"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Suspense>
          <span className="hidden rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/40 sm:inline-flex">
            Daily goal: <span className="ml-1 font-semibold">20 questions</span>
          </span>
        </Suspense>
      </div>
    </header>
  );
}

