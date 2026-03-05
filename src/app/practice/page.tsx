"use client";

import { Navbar } from "@/components/Navbar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions, topics, type Topic, type Difficulty } from "@/data/questions";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const difficultyOptions: { id: Difficulty | "all"; label: string }[] = [
  { id: "all", label: "All levels" },
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" }
];

function PracticeContent() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") as Topic | null;

  const [topicFilter, setTopicFilter] = useState<Topic | "all">(
    (initialTopic as Topic) || "all"
  );
  const [difficultyFilter, setDifficultyFilter] = useState<
    Difficulty | "all"
  >("all");
  const [showExplanations, setShowExplanations] = useState(true);
  const [selectedMap, setSelectedMap] = useState<Record<string, number | null>>(
    {}
  );

  const filteredQuestions = useMemo(
    () =>
      questions.filter((q) => {
        const topicMatch = topicFilter === "all" || q.topic === topicFilter;
        const diffMatch =
          difficultyFilter === "all" || q.difficulty === difficultyFilter;
        return topicMatch && diffMatch;
      }),
    [topicFilter, difficultyFilter]
  );

  const answeredCount = useMemo(
    () =>
      Object.values(selectedMap).filter(
        (value) => value !== null && value !== undefined
      ).length,
    [selectedMap]
  );

  const correctCount = useMemo(
    () =>
      filteredQuestions.filter((q) => {
        const selected = selectedMap[q.id];
        return selected !== undefined && selected === q.correctIndex;
      }).length,
    [filteredQuestions, selectedMap]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between animate-in">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Practice sets
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Targeted SAT math practice
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Filter by topic and difficulty, answer at your own pace, and
              peek at explanations when you&apos;re ready.
            </p>
          </div>

          <div className="glass-card flex items-center gap-4 px-4 py-3 text-xs text-slate-200 animate-in delay-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-semibold">
                {correctCount}/{filteredQuestions.length || 0} correct
              </span>
            </div>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-500"
                style={{
                  width:
                    filteredQuestions.length === 0
                      ? "0%"
                      : `${Math.round(
                          (correctCount / filteredQuestions.length) * 100
                        )}%`
                }}
              />
            </div>
            <span className="text-[11px] text-slate-400">
              Answered: {answeredCount}
            </span>
          </div>
        </header>

        <section className="flex flex-col gap-4 lg:flex-row animate-in delay-2">
          <aside className="glass-card w-full max-w-full p-4 text-sm lg:w-72">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Filters
            </p>

            <div className="mt-3 space-y-4">
              <div>
                <p className="text-xs font-medium text-slate-300">Topic</p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setTopicFilter("all")}
                    className={`rounded-full border px-3 py-1.5 ${
                      topicFilter === "all"
                        ? "border-primary-400 bg-primary-500/20 text-primary-50"
                        : "border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    All topics
                  </button>
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setTopicFilter(topic.id)}
                      className={`truncate rounded-full border px-3 py-1.5 ${
                        topicFilter === topic.id
                          ? "border-primary-400 bg-primary-500/20 text-primary-50"
                          : "border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-300">
                  Difficulty
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {difficultyOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setDifficultyFilter(option.id as Difficulty | "all")
                      }
                      className={`rounded-full border px-3 py-1.5 ${
                        difficultyFilter === option.id
                          ? "border-accent-500 bg-accent-500/20 text-accent-50"
                          : "border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Show explanations</span>
                <button
                  type="button"
                  onClick={() => setShowExplanations((prev) => !prev)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full border px-0.5 transition ${
                    showExplanations
                      ? "border-emerald-400 bg-emerald-500/20"
                      : "border-slate-600 bg-slate-900"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                      showExplanations ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </aside>

          <section className="flex-1 space-y-3">
            {filteredQuestions.length === 0 ? (
              <div className="glass-card flex items-center justify-center p-6 text-sm text-slate-300">
                No questions match those filters yet. Try relaxing a filter.
              </div>
            ) : (
              filteredQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  showExplanation={showExplanations}
                  selectedIndex={
                    selectedMap[question.id] ?? null
                  }
                  onSelect={(index) =>
                    setSelectedMap((prev) => ({
                      ...prev,
                      [question.id]: index
                    }))
                  }
                />
              ))
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

function PracticeFallback() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="glass-card flex items-center justify-center p-12 text-slate-400">
          Loading practice…
        </div>
      </main>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<PracticeFallback />}>
      <PracticeContent />
    </Suspense>
  );
}

