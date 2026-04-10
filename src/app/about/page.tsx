import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About Summit SAT
          </h1>
          <div className="text-lg text-slate-300">
            Developed by <span className="font-semibold text-primary-300">Sampreeth Chenna</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-slate-50 mb-4">Purpose</h2>
            <div className="p-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-200">
              This website is designed to help students prepare for the SAT math section by providing practice problems and explanations.
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-slate-50 mb-4">Components Used</h2>
            <div className="p-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-200">
              This website uses Next.js and React for the frontend, Claude for styling, and Vercel for deployment. 
              The main purpose of this project developer-wise was to improve my skills in Next.js, Supabase, and learn more keywords and functions in TypeScript.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="btn-primary hover-lift">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}