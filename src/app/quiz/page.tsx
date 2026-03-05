"use client";

import { Navbar } from "@/components/Navbar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { useEffect, useMemo, useState } from "react";

const QUIZ_LENGTH = 10;
const QUIZ_MINUTES = 13; // slightly aggressive SAT-style pace

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function QuizPage() {
  const [seed] = useState(() => Date.now());
  const [selectedMap, setSelectedMap] = useState<Record<string, number | null>>(
    {}
  );
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_MINUTES * 60);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = useMemo(() => {
    const shuffled = shuffle(questions);
    return shuffled.slice(0, QUIZ_LENGTH);
  }, [seed]);

  useEffect(() => {
    if (showResults) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showResults]);

  const answeredCount = useMemo(
    () =>
      quizQuestions.filter(
        (q) => selectedMap[q.id] !== null && selectedMap[q.id] !== undefined
      ).length,
    [quizQuestions, selectedMap]
  );

  const correctCount = useMemo(
    () =>
      quizQuestions.filter(
        (q) => selectedMap[q.id] === q.correctIndex
      ).length,
    [quizQuestions, selectedMap]
  );

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const percent =
    quizQuestions.length === 0
      ? 0
      : Math.round((correctCount / quizQuestions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between animate-in">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Timed quiz
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              10-question SAT-style sprint
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Simulate the pressure of the real test. When the clock hits zero,
              your score locks in.
            </p>
          </div>

          <div className="glass-card flex flex-col gap-3 px-4 py-3 text-xs text-slate-200 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wide text-slate-400">
                  Time remaining
                </span>
                <span className="text-lg font-mono font-semibold text-emerald-300">
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-primary-400 to-rose-400"
                  style={{
                    width: `${Math.max(
                      5,
                      (secondsLeft / (QUIZ_MINUTES * 60)) * 100
                    )}%`
                  }}
                />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wide text-slate-400">
                  Progress
                </span>
                <span className="text-sm font-semibold text-slate-50">
                  {answeredCount}/{quizQuestions.length} answered
                </span>
              </div>
              {showResults && (
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 border border-emerald-500/40">
                  Score: {correctCount}/{quizQuestions.length} ({percent}%)
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="space-y-3 animate-in delay-2">
          {quizQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              showExplanation={showResults}
              selectedIndex={selectedMap[question.id] ?? null}
              onSelect={(choiceIndex) => {
                if (showResults) return;
                setSelectedMap((prev) => ({
                  ...prev,
                  [question.id]: choiceIndex
                }));
              }}
            />
          ))}
        </section>

        {!showResults && (
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowResults(true)}
            >
              Finish quiz and see score
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

