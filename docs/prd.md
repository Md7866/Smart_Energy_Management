# Product Requirements Document (PRD)
## Smart Home Harmony Engine

### 1. Overview
The Smart Home Harmony Engine is a client-side dashboard that estimates per-appliance energy usage using fuzzy-logic-style rules based on environmental inputs (temperature, time of day, energy usage %, and user presence). It surfaces appliance-level consumption, an optional energy graph, and actionable recommendations to help users optimize home energy efficiency.

### 2. Goals
- Provide real-time appliance energy usage estimates from simple inputs.
- Offer energy-saving recommendations per appliance based on usage thresholds.
- Support light/dark theme switching.
- Allow toggling optional energy graph visualization.
- Run entirely in the browser (no backend required).

### 3. Target Users
- Homeowners and renters interested in monitoring energy consumption.
- Users wanting quick, no-setup estimates of appliance-level energy use.

### 4. Features

#### 4.1 Input Parameters
- **Temperature** (0–40 °C) via RangeSlider.
- **Time of Day** (0–24 h) via RangeSlider.
- **Energy Usage** (0–100 %) via RangeSlider.
- **User Presence** (Present / Absent) via toggle Switch.

#### 4.2 Appliance Usage Calculation
Calculates usage % for five appliances:
- AC
- Oven
- Refrigerator
- Fan
- Light

Logic is defined in `src/utils/fuzzyLogic.ts` (`calculateApplianceUsage`). Inputs are normalized to a 0–1 range, and each appliance's output is computed with time-of-day / temperature / energy / presence rules, clamped to 0–100.

#### 4.3 Recommendations
`getRecommendations(usages)` generates per-appliance advice:
- Usage > 70: "Consider reducing the usage of X to save energy."
- Usage > 50: "X is using a moderate amount of energy. Consider optimizing its usage."
- Usage ≤ 50: "X usage is low. Keep it up!"

#### 4.4 Energy Graph
Conditionally rendered `EnergyGraph` component showing appliance usage distribution. Toggled via "Show/Hide Energy Graph" button.

#### 4.5 Theme Support
- Light / Dark / System theme via `next-themes` with `class` strategy.
- Theme toggle button in the header (`Sun` / `Moon` icons).
- CSS variables defined in `src/index.css`; Tailwind `dark:` variants used throughout.

### 5. Tech Stack
- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- next-themes (theme management)
- lucide-react (icons)
- TanStack Query, react-router-dom, recharts, sonner, react-hook-form, zod

### 6. Non-Goals
- No backend / API integration.
- No user accounts or persistence beyond session state.
- No real IoT device control.

### 7. Success Metrics
- Appliance usage values clamp correctly to 0–100.
- Theme toggle persists via `next-themes` class strategy.
- Recommendations render for all five appliances.
- Graph toggles visibility without errors.

### 8. Future Considerations
- Persist inputs/theme to localStorage.
- Add historical usage trends.
- Connect to real smart-meter / IoT APIs.
- Export usage report (CSV/PDF).
