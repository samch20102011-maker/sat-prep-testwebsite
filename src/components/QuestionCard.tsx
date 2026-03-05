import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  showExplanation?: boolean;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

export function QuestionCard({
  question,
  showExplanation,
  selectedIndex,
  onSelect
}: QuestionCardProps) {
  const isCorrect =
    selectedIndex !== null && selectedIndex === question.correctIndex;

  const difficultyClass =
    question.difficulty === "easy"
      ? "difficulty-pill difficulty-pill-easy"
      : question.difficulty === "medium"
      ? "difficulty-pill difficulty-pill-medium"
      : "difficulty-pill difficulty-pill-hard";

  return (
    <article className="glass-card relative flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={difficultyClass}>{question.difficulty}</span>
            <span className="topic-badge capitalize">
              {question.topic.replace("-", " ")}
            </span>
            {question.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-1 text-sm font-medium leading-relaxed text-slate-50 sm:text-base">
            {question.question}
          </p>
        </div>
      </div>

      <ul className="mt-2 flex flex-col gap-2">
        {question.choices.map((choice, index) => {
          const isChosen = selectedIndex === index;
          const isAnswer = question.correctIndex === index;
          const base =
            "w-full text-left rounded-2xl border px-4 py-2.5 text-sm sm:text-[0.95rem] transition-colors flex items-center gap-2";

          let classes =
            base +
            " bg-slate-900/60 border-white/10 hover:bg-slate-800/80";

          if (selectedIndex !== null) {
            if (isAnswer) {
              classes =
                base +
                " bg-emerald-500/15 border-emerald-400/60 text-emerald-100";
            } else if (isChosen && !isAnswer) {
              classes =
                base +
                " bg-rose-500/10 border-rose-400/60 text-rose-100 line-through";
            } else {
              classes =
                base +
                " bg-slate-900/60 border-white/5 text-slate-300 opacity-80";
            }
          } else if (isChosen) {
            classes =
              base +
              " bg-primary-500/20 border-primary-400 text-primary-50 shadow-soft";
          }

          return (
            <li key={choice}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={classes}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-[11px] font-semibold uppercase text-slate-300">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-left">{choice}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {showExplanation && selectedIndex !== null && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-xs text-slate-200 sm:text-sm">
          <p className="font-semibold text-slate-100">
            {isCorrect ? "Nice work!" : "Let&apos;s review:"}
          </p>
          <p className="mt-1 leading-relaxed text-slate-200">
            {question.explanation}
          </p>
        </div>
      )}
    </article>
  );
}

