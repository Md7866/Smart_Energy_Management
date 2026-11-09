# Hyperframes Composition Brief: Smart Home Harmony Engine

## Objective
Create a short launch-style brag video (~20s, landscape 1920x1080) for the Smart Home Harmony Engine — a client-side smart home energy dashboard. Recruiter-facing, polished tone, showing real UI from the product in action.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: `C:\Users\iamsi\OneDrive\Desktop\Projects\Smart home management\smart-home-harmony-engine`
- Primary files read: `src/pages/Index.tsx`, `src/utils/fuzzyLogic.ts`, `src/components/ApplianceCard.tsx`, `src/components/EnergyGraph.tsx`, `src/components/RangeSlider.tsx`, `src/components/theme-provider.tsx`, `docs/prd.md`, `docs/fuzzy-logic.md`
- Product name: Smart Home Harmony Engine
- Tagline / strongest claim: "fuzzy-logic energy estimates for every appliance, all in the browser"
- Key UI or visual moment to recreate: the dashboard with sliders, five appliance cards, energy graph, and theme toggle
- Copy that must appear verbatim:
  - "Smart Home Harmony Engine"
  - "Fuzzy Logic Powered"
  - "Energy Saving Recommendations"
  - Appliance names: AC, Oven, Refrigerator, Fan, Light
  - "Show Energy Graph" / "Hide Energy Graph"
  - Input labels: Temperature, Time of Day, Energy Usage, User Presence

## Creative Direction
- Tone preset: polished
- Creative direction: clean, serious, recruiter-facing, feature-forward
- Interpretation: restraint as the creative choice. 3-4 scenes, 4-6s each. Soft crossfades. Mixed case. Light-to-medium weight. No caps, no exclamation marks.
- Angle: "Your home is wasting energy. You just can't see it." — show the dashboard alive, sliders moving, cards updating, graph and theme toggling.
- Hook: black screen, white type "Your home is wasting energy." then "You just can't see it."
- Outro / punchline: "Smart Home Harmony Engine — fuzzy-logic energy estimates. All in the browser."
- Avoid:
  - Generic SaaS language ("streamline your workflow")
  - Abstract filler visuals
  - Unrelated visual redesign

## Visual Identity
- Background: #f3f4f6 (light) / #111827 (dark)
- Text: #1f2937 (light) / #e5e7eb (dark)
- Accent: #9b87f5 (smart-purple)
- Display font: system-ui (Inter fallback)
- Body font: system-ui (Inter fallback)
- Visual references from the project: appliance cards with progress bars, recharts bar graph, range sliders, presence switch, theme selector buttons

## Storyboard
Use `brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 3s — "Your home is wasting energy." / "You just can't see it." on black
2. Reveal dashboard — 4s — full dashboard fades in, five appliance cards arrive one by one
3. Live fuzzy logic — 5s — sliders move, appliance percentages update live, presence toggles
4. Graph + Theme — 4s — energy graph toggles in, theme cycles Light→Purple→Green→Dark
5. Outro — 4s — final line + "No backend. No setup." fade to black

## Audio
- Audio role: sparse professional accents
- Audio arc: quiet hook hits → clean card arrivals → responsive slider clicks → snappy graph/theme SFX → confident close then silence
- Music: none unless a royalty-free warm professional bed is available at composition time; if present, low volume under UI reveals, ducks under final line
- Music treatment: fade-in at scene 2, duck under final logo/scene 5, fade out to silence
- Music cue guidance: detect at composition via `npx hyperframes beats`; optional strongCue locks at graph toggle (~12s) and final logo (~18s) within ±0.15s
- Audio-reactive treatment: subtle; music RMS breathes card glow and hero presence, no waveform bars
- Audio-coupled moments:
  - Scene 2 — card-by-card arrival — card ticks
  - Scene 3 — slider moves — click ticks; card updates — percentage ticks
  - Scene 4 — graph toggle — snap; theme switch — chime per cycle
  - Scene 5 — final line — soft hit
- SFX selection guidance: card sounds for card reveals, short announcement cues for major payoffs, key/click sounds for text/actions, restraint when edit is busy
- Exact SFX choice: Hyperframes chooses filenames, timestamps, density, volume based on implemented animation
- Audio files: copy chosen music/SFX into `brag-output/composition/assets/music/` and `assets/sfx/`

## Hyperframes Instructions
Load `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. /brag is its own workflow — do not enter the hyperframes entry-point intent interview or route into its generic promo/launch-video workflow.

Requirements:
- Show at least one real UI, copy, or visual element from the source project (dashboard, sliders, appliance cards, graph, theme toggle).
- Keep all text readable in the final render (reading-time floors: short label ~0.8s settled; sentence ~0.3s/word).
- Keep the video within 15-25 seconds (target 20s).
- Include planned music/SFX layer unless audio disabled or intentionally silent.
- Treat /brag audio notes as guidance; choose SFX after visual animation exists.
- Major reveals may move toward nearby strong cues within ±0.15s; smaller entrances may align to beats within ±0.10s. Use 1-3 strong cue locks max.
- Use SFX to support motion and interaction.
- Honor planned music treatment (fade-outs, ducking, beat-aligned reveals).
- Use local assets for audio.
- Run `npx hyperframes check` before render — it is brag's single gate.
- Keep creation and rendering local.

## Grounding factual claims
All claims on screen must appear in the project: appliance names (AC, Oven, Refrigerator, Fan, Light), input labels (Temperature 0-40°C, Time of Day 0-24h, Energy Usage 0-100%, User Presence Present/Absent), fuzzy-logic-powered, recommendations thresholds (>70 reduce, >50 moderate, <=50 low), energy graph, theme switching, client-side/no-backend. No invented metrics.
