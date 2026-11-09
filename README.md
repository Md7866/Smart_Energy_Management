# Smart Home Energy Management

**A fuzzy-logic powered dashboard that estimates per-appliance energy usage and recommends savings — entirely in the browser.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix-000000)](https://ui.shadcn.com)

> Live preview: [lovable.dev/projects/952fe229-2da3-4bbc-84ba-fa230d35c776](https://lovable.dev/projects/952fe229-2da3-4bbc-84ba-fa230d35c776)

---

## Why this project

Most smart-home demos simply toggle a light on and off. This project focuses on the harder and more interesting question: **how much energy is each appliance actually using, and what should the user do about it?**

The dashboard combines four environmental signals — temperature, time of day, overall energy usage, and whether someone is home — through a fuzzy-logic-style rule engine. Every slider movement instantly recomputes usage for five appliances, updates a distribution chart, and produces actionable, per-appliance recommendations.

It is a fully client-side React application: no backend, no accounts, no setup. Open it and start moving sliders.

## Features

- **Real-time energy estimates** for AC, Oven, Refrigerator, Fan, and Light.
- **Fuzzy-logic rule engine** that models temperature, time of day, energy load, and occupancy.
- **Actionable recommendations** generated per appliance from usage thresholds.
- **Interactive energy graph** (toggleable) for comparing appliance distribution at a glance.
- **Three themes** — Light, Purple, and Green — with persisted preference.
- **Responsive layout** built with Tailwind CSS and shadcn/ui.
- **Zero backend** — inputs never leave the browser.

## How the engine works

All raw inputs are normalized to a 0–1 range before rules are applied:

| Input | Range | Normalization | Drives |
|-------|-------|---------------|--------|
| Temperature | 0–40 °C | `temperature / 40` | AC, Fan |
| Time of day | 0–24 h | `timeOfDay / 24` | Oven, Light |
| Energy usage | 0–100 % | `energyUsage / 100` | All appliances |
| User presence | Present / Absent | boolean multiplier | All appliances |

Each appliance output is clamped to **0–100** and rounded. For example, AC usage rises with temperature and is penalized by high overall energy usage, while the refrigerator is always on and inversely follows the energy load. The full rule set, band boundaries, and formulas are documented in [docs/fuzzy-logic.md](docs/fuzzy-logic.md).

Recommendations are then derived from usage thresholds:

| Usage | Recommendation |
|-------|----------------|
| > 70% | Consider reducing usage to save energy |
| 51–70% | Moderate usage — consider optimizing |
| ≤ 50% | Usage is low — keep it up |

## Tech stack

| Layer | Technology |
|-------|------------|
| UI framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix primitives) |
| Charts | Recharts |
| Icons | Lucide React |
| Routing | React Router 6 |
| Forms / validation | React Hook Form + Zod |
| Data layer | TanStack Query |
| Theming | Custom provider with class-based themes |

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```sh
# 1. Clone the repository
git clone https://github.com/Shanmukh4449/Smart_Energy_Management.git
cd Smart_Energy_Management

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
smart-home-harmony-engine/
├── docs/                       # PRD, architecture, fuzzy-logic documentation
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── ApplianceCard.tsx    # Per-appliance usage card
│   │   ├── EnergyGraph.tsx      # Toggleable usage chart
│   │   ├── RangeSlider.tsx      # Labeled slider input
│   │   ├── RecommendationList.tsx
│   │   ├── RecommendationHeader.tsx
│   │   ├── theme-provider.tsx   # Theme context and persistence
│   │   └── ui/                  # shadcn/ui primitives
│   ├── hooks/                   # Reusable React hooks
│   ├── lib/                     # Shared utilities (cn helper)
│   ├── pages/
│   │   ├── Index.tsx            # Main dashboard
│   │   └── NotFound.tsx
│   ├── utils/
│   │   └── fuzzyLogic.ts        # Calculation + recommendation engine
│   ├── App.tsx                  # Router and providers
│   └── main.tsx                 # Entry point
├── index.html
├── tailwind.config.ts
└── vite.config.ts
```

## Documentation

- [Product Requirements Document](docs/prd.md) — goals, users, features, success metrics.
- [Architecture](docs/architecture.md) — system design, component tree, data flow.
- [Fuzzy Logic Reference](docs/fuzzy-logic.md) — every rule and formula.

## Roadmap

- Persist inputs and results to `localStorage`.
- Add historical usage trends and export to CSV/PDF.
- Connect to real smart-meter or IoT APIs.
- Add automated unit tests for the rule engine.

## Author

**N. Chetan** — [@Shanmukh4449](https://github.com/Shanmukh4449)

If you found this project useful or interesting, feel free to star the repository.