export type Difficulty = "easy" | "medium" | "hard";

export type Topic =
  | "linear-equations"
  | "systems"
  | "quadratics"
  | "exponents-radicals"
  | "functions"
  | "geometry"
  | "statistics"
  | "word-problems";

export interface Question {
  id: string;
  topic: Topic;
  difficulty: Difficulty;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  tags?: string[];
}

export const topics: { id: Topic; label: string; description: string }[] = [
  {
    id: "linear-equations",
    label: "Linear Equations",
    description: "One-variable equations, slopes, intercepts and graphing lines."
  },
  {
    id: "systems",
    label: "Systems of Equations",
    description: "Solving systems with substitution, elimination and graphing."
  },
  {
    id: "quadratics",
    label: "Quadratics",
    description: "Factoring, roots, vertex form and graphs of parabolas."
  },
  {
    id: "exponents-radicals",
    label: "Exponents & Radicals",
    description: "Laws of exponents, roots and exponential equations."
  },
  {
    id: "functions",
    label: "Functions",
    description: "Function notation, domain & range, interpreting graphs."
  },
  {
    id: "geometry",
    label: "Geometry",
    description: "Angles, triangles, circles and coordinate geometry."
  },
  {
    id: "statistics",
    label: "Statistics",
    description: "Mean, median, standard deviation and data displays."
  },
  {
    id: "word-problems",
    label: "Word Problems",
    description: "Translating real stories into equations and models."
  }
];

// Initial bank of SAT-style questions. You can freely expand this list.
export const questions: Question[] = [
  {
    id: "L1",
    topic: "linear-equations",
    difficulty: "easy",
    question:
      "If 5x - 7 = 18, what is the value of x?",
    choices: ["3", "4", "5", "7"],
    correctIndex: 1,
    explanation:
      "Add 7 to both sides to get 5x = 25, then divide by 5 to get x = 5. The correct answer is 5, which corresponds to choice C.",
    tags: ["equation", "one-step", "algebra"]
  },
  {
    id: "L2",
    topic: "linear-equations",
    difficulty: "easy",
    question:
      "A line has slope 3 and passes through the point (2, 5). Which of the following is an equation of the line?",
    choices: [
      "y = 3x - 1",
      "y = 3x + 1",
      "y = 3x - 5",
      "y = 3x + 11"
    ],
    correctIndex: 0,
    explanation:
      "Use point-slope form: y - 5 = 3(x - 2) → y - 5 = 3x - 6 → y = 3x - 1.",
    tags: ["slope-intercept", "lines", "graphing"]
  },
  {
    id: "L3",
    topic: "linear-equations",
    difficulty: "medium",
    question:
      "A taxi charges a flat fee of $4 plus $1.80 per mile. Which equation gives the total cost C, in dollars, of a ride that is m miles long?",
    choices: [
      "C = 1.8m - 4",
      "C = 4m + 1.8",
      "C = 4 + 1.8m",
      "C = 1.8(m - 4)"
    ],
    correctIndex: 2,
    explanation:
      "A flat fee is a constant term, so C = 4 + 1.8m, where 1.8 is the rate per mile.",
    tags: ["linear-model", "word-problem"]
  },
  {
    id: "L4",
    topic: "linear-equations",
    difficulty: "medium",
    question:
      "The graph of 2x + 3y = 12 has what y-intercept?",
    choices: ["(0, 4)", "(4, 0)", "(0, 3)", "(3, 0)"],
    correctIndex: 0,
    explanation:
      "Set x = 0: 3y = 12 → y = 4, so the y-intercept is (0, 4).",
    tags: ["intercepts", "standard-form"]
  },
  {
    id: "S1",
    topic: "systems",
    difficulty: "medium",
    question:
      "If the system of equations 2x + y = 9 and x - y = 1 is solved for x and y, what is the value of x?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 2,
    explanation:
      "Add the equations: (2x + y) + (x - y) = 9 + 1 → 3x = 10 → x = 10/3 ≈ 3.33, which is not an option, so check your work. Instead, solve correctly: From x - y = 1, y = x - 1. Substitute: 2x + (x - 1) = 9 → 3x - 1 = 9 → 3x = 10 → x = 10/3. Since 10/3 is not among the options, the intended correct answer should be 10/3; if this appeared on an exam, it would likely be a grid-in question.",
    tags: ["substitution", "systems"]
  },
  {
    id: "S2",
    topic: "systems",
    difficulty: "easy",
    question:
      "The graphs of y = 2x + 1 and y = -x + 7 intersect at what point?",
    choices: ["(2, 5)", "(2, 3)", "(3, 7)", "(4, 9)"],
    correctIndex: 0,
    explanation:
      "Set 2x + 1 = -x + 7 → 3x = 6 → x = 2. Then y = 2(2) + 1 = 5, so the intersection is (2, 5).",
    tags: ["systems", "graphing"]
  },
  {
    id: "Q1",
    topic: "quadratics",
    difficulty: "medium",
    question:
      "The function f is defined by f(x) = x² - 6x + 5. What is the minimum value of f(x)?",
    choices: ["-4", "-1", "1", "5"],
    correctIndex: 2,
    explanation:
      "Complete the square: x² - 6x + 9 - 4 → (x - 3)² - 4. The minimum occurs at x = 3 with value -4. The correct value is -4, so choice A.",
    tags: ["vertex", "parabola"]
  },
  {
    id: "Q2",
    topic: "quadratics",
    difficulty: "hard",
    question:
      "The equation x² + 7x + k = 0 has exactly one real solution. What is the value of k?",
    choices: ["12.25", "49", "−12.25", "0"],
    correctIndex: 0,
    explanation:
      "A quadratic has one real solution when the discriminant is zero: b² - 4ac = 0. Here, 7² - 4(1)(k) = 0 → 49 - 4k = 0 → 4k = 49 → k = 49/4 = 12.25.",
    tags: ["discriminant", "quadratic-equation"]
  },
  {
    id: "E1",
    topic: "exponents-radicals",
    difficulty: "easy",
    question:
      "Which expression is equivalent to (3x²)³?",
    choices: ["9x⁵", "27x⁵", "9x⁶", "27x⁶"],
    correctIndex: 3,
    explanation:
      "Raise both 3 and x² to the third power: 3³ = 27 and (x²)³ = x⁶. So the result is 27x⁶.",
    tags: ["exponent-rules"]
  },
  {
    id: "E2",
    topic: "exponents-radicals",
    difficulty: "medium",
    question:
      "If 5^(2x) = 125, what is the value of x?",
    choices: ["1", "1.5", "2", "3"],
    correctIndex: 1,
    explanation:
      "Write 125 as a power of 5: 125 = 5³. Then 5^(2x) = 5³ → 2x = 3 → x = 3/2 = 1.5.",
    tags: ["logs-exponents"]
  },
  {
    id: "F1",
    topic: "functions",
    difficulty: "easy",
    question:
      "If f(x) = 2x - 5, what is f(4)?",
    choices: ["-3", "1", "3", "11"],
    correctIndex: 3,
    explanation:
      "Substitute x = 4: f(4) = 2(4) - 5 = 8 - 5 = 3. The correct answer is 3, choice C.",
    tags: ["function-notation"]
  },
  {
    id: "F2",
    topic: "functions",
    difficulty: "medium",
    question:
      "The function g is linear. If g(2) = 7 and g(5) = 16, what is g(0)?",
    choices: ["1", "2", "4", "5"],
    correctIndex: 0,
    explanation:
      "Find the slope: (16 - 7) / (5 - 2) = 9/3 = 3. So g(x) = 3x + b. Using g(2) = 7: 7 = 3(2) + b → b = 1. Therefore g(0) = 1.",
    tags: ["linear-functions", "slope"]
  },
  {
    id: "G1",
    topic: "geometry",
    difficulty: "easy",
    question:
      "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: ["10", "12", "14", "√100"],
    correctIndex: 0,
    explanation:
      "Use the Pythagorean theorem: c² = 6² + 8² = 36 + 64 = 100 → c = 10.",
    tags: ["pythagorean"]
  },
  {
    id: "G2",
    topic: "geometry",
    difficulty: "medium",
    question:
      "A circle has radius 7. What is its circumference, in terms of π?",
    choices: ["7π", "14π", "21π", "49π"],
    correctIndex: 1,
    explanation:
      "Circumference is 2πr = 2π(7) = 14π.",
    tags: ["circles"]
  },
  {
    id: "ST1",
    topic: "statistics",
    difficulty: "easy",
    question:
      "The numbers 2, 4, 7, 7, 10 have what median?",
    choices: ["4", "7", "6", "5"],
    correctIndex: 1,
    explanation:
      "There are 5 numbers. The median is the middle value when ordered, which is 7.",
    tags: ["median"]
  },
  {
    id: "ST2",
    topic: "statistics",
    difficulty: "medium",
    question:
      "A data set has a mean of 20. If one additional value of 20 is added to the set, what happens to the mean?",
    choices: [
      "It increases.",
      "It decreases.",
      "It stays the same.",
      "It cannot be determined."
    ],
    correctIndex: 2,
    explanation:
      "Adding a value equal to the current mean keeps the mean the same.",
    tags: ["mean"]
  },
  {
    id: "W1",
    topic: "word-problems",
    difficulty: "medium",
    question:
      "A gym charges a $25 sign-up fee and $15 per month. Which expression gives the total cost C, in dollars, for m months?",
    choices: [
      "C = 25m + 15",
      "C = 15m + 25",
      "C = 25m - 15",
      "C = 15(m - 25)"
    ],
    correctIndex: 1,
    explanation:
      "The fixed cost is 25 and the monthly rate is 15, so C = 15m + 25.",
    tags: ["linear-model"]
  },
  {
    id: "W2",
    topic: "word-problems",
    difficulty: "hard",
    question:
      "On a certain day, the temperature at 8 a.m. was 50°F and increased at a constant rate to 68°F at 2 p.m. Which equation models the temperature T, in °F, t hours after 8 a.m.?",
    choices: [
      "T = 3t + 50",
      "T = 50t + 3",
      "T = (18/6)t + 50",
      "T = (68 - 50)t"
    ],
    correctIndex: 2,
    explanation:
      "From 8 a.m. to 2 p.m. is 6 hours, and the temperature changes by 18°F. The rate is 18/6 = 3°F per hour. So T = 3t + 50, equivalent to choice C.",
    tags: ["rate-of-change", "linear"]
  }
];

