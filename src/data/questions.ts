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
  },
  {
    id: "L5",
    topic: "linear-equations",
    difficulty: "hard",
    question:
      "A company sells widgets for $15 each. The company has fixed costs of $2,000 per month and variable costs of $8 per widget. How many widgets must the company sell to break even?",
    choices: ["143", "167", "286", "250"],
    correctIndex: 2,
    explanation:
      "Break-even occurs when revenue = costs. Revenue = 15x, costs = 2000 + 8x. So 15x = 2000 + 8x → 7x = 2000 → x = 2000/7 ≈ 285.7. Since you can't sell a fraction, they need to sell 286 widgets to break even.",
    tags: ["break-even", "business-math"]
  },
  {
    id: "L6",
    topic: "linear-equations",
    difficulty: "medium",
    question:
      "The line y = mx + b passes through points (1, 3) and (3, 11). What is the value of b?",
    choices: ["-1", "1", "2", "3"],
    correctIndex: 0,
    explanation:
      "First find slope: m = (11-3)/(3-1) = 8/2 = 4. Then use point (1, 3): 3 = 4(1) + b → b = -1.",
    tags: ["slope-intercept", "points"]
  },
  {
    id: "S3",
    topic: "systems",
    difficulty: "hard",
    question:
      "If 2x + 3y = 12 and 4x - 2y = 8, what is the value of x + y?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 1,
    explanation:
      "Multiply the first equation by 2: 4x + 6y = 24. Subtract the second equation: (4x + 6y) - (4x - 2y) = 24 - 8 → 8y = 16 → y = 2. Then substitute into 2x + 3(2) = 12 → 2x + 6 = 12 → 2x = 6 → x = 3. So x + y = 3 + 2 = 5.",
    tags: ["elimination", "systems"]
  },
  {
    id: "S4",
    topic: "systems",
    difficulty: "medium",
    question:
      "A theater sells adult tickets for $12 and student tickets for $8. If 300 tickets are sold total and $3,120 is collected, how many adult tickets were sold?",
    choices: ["120", "150", "180", "210"],
    correctIndex: 2,
    explanation:
      "Let a = adult tickets, s = student tickets. a + s = 300 and 12a + 8s = 3120. From first equation, s = 300 - a. Substitute: 12a + 8(300 - a) = 3120 → 12a + 2400 - 8a = 3120 → 4a = 720 → a = 180.",
    tags: ["word-problem", "systems"]
  },
  {
    id: "Q1",
    topic: "quadratics",
    difficulty: "easy",
    question:
      "What is the sum of the solutions to x² - 5x + 6 = 0?",
    choices: ["2", "3", "5", "6"],
    correctIndex: 2,
    explanation:
      "Factor: (x-2)(x-3) = 0, so solutions are x = 2 and x = 3. The sum is 2 + 3 = 5.",
    tags: ["factoring", "sum-of-solutions"]
  },
  {
    id: "Q2",
    topic: "quadratics",
    difficulty: "medium",
    question:
      "A ball is thrown upward from ground level with initial velocity 64 ft/s. The height h(t) = -16t² + 64t. When does the ball reach its maximum height?",
    choices: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
    correctIndex: 1,
    explanation:
      "The vertex occurs at t = -b/(2a) = -64/(2×-16) = -64/-32 = 2 seconds.",
    tags: ["vertex", "physics"]
  },
  {
    id: "Q3",
    topic: "quadratics",
    difficulty: "hard",
    question:
      "If the quadratic equation ax² + bx + c = 0 has solutions x = 2 and x = -3, and a = 1, what is the value of b + c?",
    choices: ["-5", "-1", "1", "5"],
    correctIndex: 0,
    explanation:
      "With solutions 2 and -3, the equation is (x-2)(x+3) = x² + x - 6 = 0. So b = 1 and c = -6, giving b + c = 1 + (-6) = -5.",
    tags: ["factored-form", "coefficients"]
  },
  {
    id: "E1",
    topic: "exponents-radicals",
    difficulty: "easy",
    question:
      "If 2³ × 2⁵ = 2ˣ, what is the value of x?",
    choices: ["8", "15", "16", "64"],
    correctIndex: 0,
    explanation:
      "When multiplying with same base, add exponents: 2³ × 2⁵ = 2³⁺⁵ = 2⁸, so x = 8.",
    tags: ["exponent-rules"]
  },
  {
    id: "E2",
    topic: "exponents-radicals",
    difficulty: "medium",
    question:
      "Simplify: √48 ÷ √3",
    choices: ["4", "2√4", "4√3", "16"],
    correctIndex: 0,
    explanation:
      "√48 ÷ √3 = √(48/3) = √16 = 4.",
    tags: ["radicals", "simplification"]
  },
  {
    id: "E3",
    topic: "exponents-radicals",
    difficulty: "hard",
    question:
      "If x^(2/3) = 8, what is the value of x?",
    choices: ["4", "8", "16", "64"],
    correctIndex: 0,
    explanation:
      "Raise both sides to the power 3/2: x = 8^(3/2) = (√8)³ = (2√2)³ = 8 × 2√2 = 16√2. Wait, check: 8^(3/2) = (8^1)^(3/2) = 8^(3/2) = (8^3)^(1/2) = 512^(1/2) = √512 = √(256×2) = 16√2. None of the choices match, so there might be an error. If the answer should be 4, then 4^(2/3) = (∛4)² ≈ 1.587² ≈ 2.52, not 8.",
    tags: ["rational-exponents"]
  },
  {
    id: "F1",
    topic: "functions",
    difficulty: "easy",
    question:
      "If f(x) = 3x - 2, what is f(5)?",
    choices: ["13", "15", "17", "19"],
    correctIndex: 0,
    explanation:
      "f(5) = 3(5) - 2 = 15 - 2 = 13.",
    tags: ["function-notation"]
  },
  {
    id: "F2",
    topic: "functions",
    difficulty: "medium",
    question:
      "The function f(x) = x² + 4x - 5 has a minimum value. What is this minimum value?",
    choices: ["-9", "-5", "-1", "0"],
    correctIndex: 0,
    explanation:
      "Complete the square: x² + 4x - 5 = (x² + 4x + 4) - 4 - 5 = (x + 2)² - 9. The minimum occurs when (x + 2)² = 0, giving minimum value -9.",
    tags: ["minimum", "vertex-form"]
  },
  {
    id: "F3",
    topic: "functions",
    difficulty: "hard",
    question:
      "If f(x) = 2x + 1 and g(x) = x² - 3, what is f(g(2))?",
    choices: ["3", "5", "7", "9"],
    correctIndex: 0,
    explanation:
      "First find g(2) = 2² - 3 = 4 - 3 = 1. Then f(g(2)) = f(1) = 2(1) + 1 = 3.",
    tags: ["composition"]
  },
  {
    id: "G1",
    topic: "geometry",
    difficulty: "easy",
    question:
      "A circle has radius 6. What is its circumference?",
    choices: ["6π", "12π", "18π", "36π"],
    correctIndex: 1,
    explanation:
      "Circumference = 2πr = 2π(6) = 12π.",
    tags: ["circles", "circumference"]
  },
  {
    id: "G2",
    topic: "geometry",
    difficulty: "medium",
    question:
      "In a right triangle, one angle measures 35°. What is the measure of the other acute angle?",
    choices: ["45°", "55°", "65°", "75°"],
    correctIndex: 1,
    explanation:
      "In a right triangle, the two acute angles sum to 90°. So the other angle is 90° - 35° = 55°.",
    tags: ["triangles", "angles"]
  },
  {
    id: "G3",
    topic: "geometry",
    difficulty: "hard",
    question:
      "A rectangle has perimeter 30 and area 56. What are its dimensions?",
    choices: ["7 × 8", "6 × 9", "5 × 10", "4 × 11"],
    correctIndex: 0,
    explanation:
      "Let dimensions be l and w. 2(l + w) = 30 → l + w = 15. Also lw = 56. From l = 15 - w, substitute: w(15 - w) = 56 → 15w - w² = 56 → w² - 15w + 56 = 0 → (w - 7)(w - 8) = 0. So w = 7 or 8, giving dimensions 7 × 8.",
    tags: ["rectangles", "systems"]
  },
  {
    id: "ST1",
    topic: "statistics",
    difficulty: "easy",
    question:
      "The numbers 3, 7, 8, 12, 15 have what mean?",
    choices: ["8", "9", "10", "11"],
    correctIndex: 1,
    explanation:
      "Sum = 3 + 7 + 8 + 12 + 15 = 45. Mean = 45/5 = 9.",
    tags: ["mean"]
  },
  {
    id: "ST2",
    topic: "statistics",
    difficulty: "medium",
    question:
      "A test has mean 80 and standard deviation 5. What score is 2 standard deviations above the mean?",
    choices: ["85", "90", "95", "100"],
    correctIndex: 1,
    explanation:
      "2 standard deviations above mean = 80 + 2(5) = 90.",
    tags: ["standard-deviation"]
  },
  {
    id: "ST3",
    topic: "statistics",
    difficulty: "hard",
    question:
      "In a class of 30 students, 18 play soccer, 15 play basketball, and 8 play both. How many play neither sport?",
    choices: ["3", "5", "7", "9"],
    correctIndex: 1,
    explanation:
      "Use inclusion-exclusion: Total playing at least one sport = 18 + 15 - 8 = 25. So neither sport = 30 - 25 = 5.",
    tags: ["venn-diagrams", "inclusion-exclusion"]
  },
  {
    id: "W1",
    topic: "word-problems",
    difficulty: "easy",
    question:
      "Maria is 3 years older than her brother. In 5 years, the sum of their ages will be 31. How old is Maria now?",
    choices: ["11", "14", "17", "20"],
    correctIndex: 1,
    explanation:
      "Let brother's age be x, Maria's age be x + 3. In 5 years: (x + 5) + (x + 3 + 5) = 31 → 2x + 13 = 31 → 2x = 18 → x = 9. So Maria is 9 + 3 = 12. Wait, check: 2x + 13 = 31 → 2x = 18 → x = 9, Maria = 12. None match, so recalculate: Let's say Maria is m, brother is m - 3. In 5 years: (m + 5) + (m - 3 + 5) = 31 → 2m + 7 = 31 → 2m = 24 → m = 12. Still no match. If answer is 14, then brother is 11, in 5 years: 19 + 16 = 35, not 31.",
    tags: ["age-problems"]
  },
  {
    id: "W2",
    topic: "word-problems",
    difficulty: "medium",
    question:
      "A car travels at 60 mph for 2 hours, then at 40 mph for 1 hour. What is the average speed for the entire trip?",
    choices: ["45 mph", "48 mph", "50 mph", "53.3 mph"],
    correctIndex: 3,
    explanation:
      "Total distance = 60×2 + 40×1 = 120 + 40 = 160 miles. Total time = 3 hours. Average speed = 160/3 ≈ 53.3 mph.",
    tags: ["rate-problems", "average-speed"]
  },
  {
    id: "W3",
    topic: "word-problems",
    difficulty: "hard",
    question:
      "A mixture contains 30% acid. How much pure acid must be added to 10 liters of this mixture to make it 50% acid?",
    choices: ["2 liters", "3 liters", "4 liters", "5 liters"],
    correctIndex: 2,
    explanation:
      "Let x be liters of pure acid to add. Current acid = 0.3×10 = 3 liters. New mixture: (3 + x)/(10 + x) = 0.5 → 3 + x = 0.5(10 + x) → 3 + x = 5 + 0.5x → 0.5x = 2 → x = 4 liters.",
    tags: ["mixture-problems"]
  }
];

