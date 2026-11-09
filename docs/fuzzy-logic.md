# Fuzzy Logic — Smart Home Harmony Engine

This document describes every fuzzy-logic-style rule and calculation used in `src/utils/fuzzyLogic.ts` to estimate per-appliance energy usage and generate recommendations.

## 1. Input Normalization

All raw inputs are normalized to a 0–1 range before calculations:

| Input | Raw Range | Normalized Formula |
|-------|-----------|-------------------|
| Temperature | 0–40 °C | `tempNorm = temperature / 40` |
| Time of Day | 0–24 h | `timeNorm = timeOfDay / 24` |
| Energy Usage | 0–100 % | `energyNorm = energyUsage / 100` |
| User Presence | 0 (Absent) / 1 (Present) | used as boolean multiplier |

## 2. Appliance Usage Calculations

Each appliance output is clamped to 0–100 and rounded to the nearest integer.

### AC
```
if userPresence == 0:
    ac = 0
else:
    ac = min(100, (tempNorm * 100) - (energyNorm * 20))
```
- Driven by temperature (higher temp → higher AC usage) and penalized by high energy usage.
- Zero when the user is absent.

### Oven
```
if userPresence == 0:
    oven = 0
else if 0 <= timeOfDay <= 12:          # Morning
    oven = min(100, (0.5 - energyNorm) * 120)
else if 12 < timeOfDay <= 18:          # Afternoon
    oven = min(100, (0.7 - energyNorm) * 140)
else:                                   # Night (18–24h)
    oven = min(100, (0.3 - energyNorm) * 100)
oven = max(0, oven)
```
- Time-of-day bands determine the base coefficient; high energy usage reduces output.
- Clamped to non-negative.

### Refrigerator
```
refrigerator = max(30, 100 - (energyNorm * 50))
```
- Always on (minimum 30%).
- Usage decreases as normalized energy usage increases (inverse relationship).

### Fan
```
if userPresence == 0:
    fan = 0
else:
    fan = min(100, (tempNorm * 120) - (energyNorm * 10))
```
- Driven by temperature (hotter → faster fan), penalized slightly by energy usage.
- Zero when the user is absent.

### Light
```
if userPresence == 0:
    light = 0
else if 5 <= timeOfDay <= 10:          # Morning
    light = 40
else if 10 < timeOfDay <= 17:          # Afternoon
    light = 20
else if 17 < timeOfDay <= 23:          # Evening / Night
    light = 80
else:                                   # Late night / Early morning
    light = 30
```
- Time-of-day bands assign fixed usage levels; highest in the evening/night.
- Zero when the user is absent.

## 3. Return Value

`calculateApplianceUsage` returns a typed `ApplianceOutput`:

```ts
export type ApplianceOutput = {
  ac: number;
  oven: number;
  refrigerator: number;
  fan: number;
  light: number;
};
```

All values are integers in the range [0, 100].

## 4. Recommendations

`getRecommendations(usages)` produces one `ApplianceRecommendation` per appliance:

```ts
export type ApplianceRecommendation = {
  appliance: string;
  usage: number;
  recommendation: string;
};
```

Recommendation rules by usage threshold:

| Usage Range | Recommendation Message |
|-------------|------------------------|
| > 70 | `Consider reducing the usage of {appliance} to save energy.` |
| > 50 | `{appliance} is using a moderate amount of energy. Consider optimizing its usage.` |
| <= 50 | `{appliance} usage is low. Keep it up!` |

## 5. Data Flow

```
User Inputs
  ├─ temperature (0–40)
  ├─ timeOfDay (0–24)
  ├─ energyUsage (0–100)
  └─ userPresence (0/1)
        ↓ (normalize to 0–1)
calculateApplianceUsage()
  ├─ AC: temp-driven, energy-penalized
  ├─ Oven: time-band driven, energy-penalized
  ├─ Refrigerator: inverse energy relationship
  ├─ Fan: temp-driven, energy-penalized
  └─ Light: time-band fixed levels
        ↓ (clamp 0–100, round)
ApplianceOutput
        ↓
getRecommendations()
        ↓
ApplianceRecommendation[] (per-appliance advice)
        ↓
UI: ApplianceCard ×5 + RecommendationList (+ optional EnergyGraph)
```

## 6. Source File

All logic lives in:
`smart-home-harmony-engine/src/utils/fuzzyLogic.ts`
