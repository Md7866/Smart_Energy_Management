# Architecture Document
## Smart Home Harmony Engine

### 1. System Overview
Single-page React application built with Vite. All logic runs client-side. The app takes environmental inputs, computes per-appliance energy usage via a fuzzy-logic-style calculator, and renders appliance cards, recommendations, and an optional energy graph.

### 2. Project Structure
```
smart-home-harmony-engine/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── components.json
├── eslint.config.js
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── main.tsx              # Entry point; wraps App with ThemeProvider
│   ├── App.tsx               # Router + QueryClient + Toaster providers
│   ├── index.css             # Tailwind base + CSS variables (light/dark)
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── theme-provider.tsx# next-themes wrapper (class strategy)
│   │   ├── ApplianceCard.tsx # Per-appliance usage card
│   │   ├── EnergyGraph.tsx   # Optional usage chart
│   │   ├── RangeSlider.tsx   # Labeled slider input
│   │   ├── RecommendationHeader.tsx # Usage legend
│   │   ├── RecommendationList.tsx # Recommendation list
│   │   └── ui/               # shadcn/ui Radix primitives (~60 components)
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts          # cn() helper (clsx + tailwind-merge)
│   ├── utils/
│   │   └── fuzzyLogic.ts     # calculateApplianceUsage + getRecommendations
│   └── pages/
│       ├── Index.tsx         # Main dashboard page + ThemeToggle
│       └── NotFound.tsx
├── docs/
│   ├── prd.md
│   └── architecture.md
└── bun.lockb / package-lock.json
```

### 3. Component Architecture

#### 3.1 App (`src/App.tsx`)
- Wraps the app in `QueryClientProvider` (TanStack Query), `TooltipProvider`, `Toaster` (sonner), and `BrowserRouter`.
- Routes: `/` → `Index`; `*` → `NotFound`.

#### 3.2 Index Page (`src/pages/Index.tsx`)
- State: `temperature`, `timeOfDay`, `energyUsage`, `userPresence`, `showGraph`, `appliances`.
- `useEffect` recomputes `appliances` whenever inputs change via `calculateApplianceUsage`.
- `getRecommendations(appliances)` derives recommendations on every render.
- Renders:
  - Header (title, badges, theme toggle).
  - Input column (RangeSliders + presence switch + graph toggle button).
  - Results column (5 `ApplianceCard`s, conditional `EnergyGraph`, `RecommendationList`).

#### 3.3 Theme Provider (`src/components/theme-provider.tsx`)
- Wraps `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`.
- Mounted at `src/main.tsx` so the `dark` class is toggled on `<html>`.

#### 3.4 Fuzzy Logic (`src/utils/fuzzyLogic.ts`)
- `ApplianceOutput` type: `{ ac, oven, refrigerator, fan, light: number }`.
- `ApplianceRecommendation` type: `{ appliance, usage, recommendation }`.
- `calculateApplianceUsage(temperature, timeOfDay, energyUsage, userPresence)`:
  - Normalizes inputs to 0–1.
  - Computes per-appliance output with time/temp/energy/presence rules.
  - Clamps results to 0–100 and rounds.
- `getRecommendations(usages)`: maps usage values to advice strings by threshold.

#### 3.5 UI Layer (`src/components/ui/`)
- shadcn/ui built on Radix UI primitives.
- Styled with Tailwind CSS using CSS variables (`--background`, `--primary`, etc.) defined in `src/index.css`.
- Supports dark mode via `dark:` variants and `.dark` class on `<html>`.

### 4. Styling & Theming
- Tailwind CSS v3 with `darkMode: ["class"]`.
- CSS variables for light and dark palettes in `src/index.css`.
- Custom brand colors under `theme.colors.smart.*` (purple, green, yellow, etc.).
- Theme toggle (`Sun` / `Moon`) persists preference via `next-themes`.

### 5. Data Flow
```
User Input (RangeSlider / Switch)
        ↓
Index state (temperature, timeOfDay, energyUsage, userPresence)
        ↓ (useEffect on input change)
calculateApplianceUsage() → ApplianceOutput
        ↓
getRecommendations() → ApplianceRecommendation[]
        ↓
Render: ApplianceCard ×5, EnergyGraph (optional), RecommendationList
```

### 6. Dependencies (key)
- `react`, `react-dom` — UI framework
- `next-themes` — dark mode
- `tailwindcss`, `tailwindcss-animate` — styling
- `clsx`, `tailwind-merge`, `class-variance-authority` — class utilities
- `lucide-react` — icons
- `zod`, `react-hook-form`, `@hookform/resolvers` — forms
- `@tanstack/react-query` — server state (installed, lightly used)
- `react-router-dom` — routing
- `recharts`, `sonner`, `vaul`, `embla-carousel-react`, `cmdk`, `date-fns`, `react-day-picker`, `react-resizable-panels`, `input-otp` — UI libraries

### 7. Build & Run
```powershell
cd smart-home-harmony-engine
npm install
npm run dev      # dev server (default port 5173)
npm run build    # production build
npm run lint     # eslint
npm run preview  # preview production build
```

### 8. Limitations
- Entirely client-side; no persistence of inputs or theme beyond session (theme is persisted by next-themes via cookie/localStorage depending on config).
- No real device integration; usage values are estimates.
- Single-page; no authentication or multi-user support.
