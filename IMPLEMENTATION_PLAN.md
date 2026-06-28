# Implementation Plan: Modern Financial Planning Workspace

## 1. Product Vision & Architecture Principle

The goal is to transition from a single-purpose EMI calculator page to a comprehensive **financial simulation platform**. It should feel banking-grade, trustworthy, calm, and performant (like Stripe, Zerodha, or CRED).

- **Architecture Principle:** Treat the system as a stateful financial scenario simulator, not a disconnected set of input forms.

## 2. UI/UX Design System (Fintech-Grade)

- **Aesthetic:** Minimalist, data-clear, ultra-clean. High contrast for data, muted backgrounds. Avoid generic calculator aesthetics.
- **Typography:** Geist (Next.js default) with strict hierarchy. Large legible numbers.
- **Color Palette:**
  - Primary: Calm, trustworthy (e.g., deep blue or subtle indigo).
  - Backgrounds: Clean whites/light grays in light mode, deep charcoal in dark mode.
  - Accents: Green for savings/positive outcomes, red/orange for debt burden warnings.
- **Micro-interactions:** Smooth, instant recalculations using sliders, animated graph transitions, reassuring copy ("Your calculated schedule is below").
- **Components:**
  - Premium sliders with clear numeric input bounds.
  - Card-based layout for isolating financial metrics.
  - Interactive Recharts wrappers (responsive container with explicit heights).

## 3. Core Logic & Computation Engine Structure (Pseudo-code)

The computation engine will reside in `src/lib/calculations/`. It must be pure, deterministic, and separate from UI components.

```typescript
// src/lib/calculations/core.ts
export interface LoanSimulationArgs {
  principal: number;
  interestRate: number;
  tenureMonths: number;
  prepayments: PrepaymentSchedule[]; // Array of extra payments
  scenarioAdjustments?: ScenarioAdjustment;
}

export function simulateLoan(args: LoanSimulationArgs): DetailedLoanResult {
  // Pure function: no side effects
  // 1. Calculate standard EMI
  // 2. Iterate month-by-month
  // 3. Apply prepayments to balance
  // 4. Recalculate remaining tenure/interest
  // 5. Generate amortization array
  // 6. Return standard EMI + adjusted timeline metrics
}

// src/lib/calculations/affordability.ts
export function calculateAffordability(
  income: number,
  expenses: number,
  existingEMI: number,
): AffordabilityScore {
  const disposableIncome = income - expenses - existingEMI;
  const maxSafeEMI = disposableIncome * 0.5; // Rule of thumb: max 50% of disposable
  // Return safe ranges, risk level, debt health score
}
```

## 4. State Management Strategy & Data Models

Use React Context / custom hooks (or a lightweight store) to manage the multi-loan workspace state without excessive prop-drilling.

```typescript
// Data Models
interface LoanEntity {
  id: string;
  type: "home" | "car" | "personal" | "custom";
  name: string;
  parameters: LoanSimulationArgs;
  resultCache: DetailedLoanResult;
}

interface WorkspaceState {
  loans: Record<string, LoanEntity>;
  activeLoanId: string | null;
  globalAssumptions: { inflationRate: number };
}
```

## 5. PWA & Offline Architecture

- **Next.js PWA:** Use a plugin like `next-pwa` to generate a Service Worker and `manifest.json`.
- **Offline Calculation:** Since all financial engines are pure local TS functions (no API dependencies), the core calculator will inherently work offline once assets are cached.
- **Persistence:** Use `localStorage` (via a sync hook) to save the user's workspace state (loans, scenarios) locally, ensuring progress is never lost between sessions.

## 6. SEO Page Template Design (Programmatic SEO)

Leveraging the existing pSEO architecture (`scripts/generate-seo-entities.ts` -> `data/generated/seo-pages.json`).

- **Dynamic Route:** `src/app/[slug]/page.tsx`
- **Template Layout:**
  1. SEO Optimized H1 & Intro.
  2. The `SeoCalculator` or a tailored variant of the `UniversalCalculator` pre-filled with context-specific defaults (e.g., Car Loan defaults to 9%, 5 years).
  3. Interactive Visualizations (Charts).
  4. Educational Content Layer (Mini-explainers, formulas rendered cleanly).
  5. FAQ Section marked up with standard Schema.org structured data.

## 7. Phased Roadmap (Highest ROI First)

### Phase 1: Foundation & High-ROI Features

- **Goal:** Establish the architecture, premium UI, and core calculation superiority.
- **Deliverables:**
  1. Premium dashboard UI shell & Reusable design tokens.
  2. Advanced core EMI engine supporting prepayments and amortization timeline.
  3. Dynamic charts (Breakdown, Principal vs Interest).
  4. Loan comparison engine (side-by-side view).
  5. Local state persistence for scenarios.
  6. Export integration (PDFUtility / CSV).

### Phase 2: Intelligence & Planning Layer

- **Goal:** Move from "calculator" to "advisor".
- **Deliverables:**
  1. Affordability scoring and goal planning ("What can I afford?").
  2. Smart suggestions engine (rule-based local logic for prepayments/tenure reduction).
  3. Multi-loan unified dashboard (combining liabilities).
  4. Financial education layer.

### Phase 3: Ecosystem & Monetization Readiness

- **Goal:** Lock in the moat and prepare for revenue.
- **Deliverables:**
  1. Full PWA offline implementation.
  2. Advanced property/car ownership calculators (insurance, taxes, maintenance).
  3. Programmatic SEO rollout for all edge cases.
  4. Hooks for future fintech integrations (affiliate APIs).
