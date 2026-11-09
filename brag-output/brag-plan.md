# Brag Plan: Smart Home Harmony Engine

## What is this app?
A client-side smart home energy dashboard that estimates per-appliance energy usage (AC, Oven, Refrigerator, Fan, Light) using fuzzy-logic-style rules from simple inputs — temperature, time of day, energy usage %, and user presence — all running in the browser with no backend.

## The angle
"Your home is wasting energy. You just can't see it." The video shows the dashboard alive: sliders move, appliance cards update in real time, the energy graph pops in, and themes cycle. It proves the product does its thing rather than describing it.

## Hook (first 2-3 seconds)
Black screen → white type slams in: "Your home is wasting energy." Hold. Then: "You just can't see it." Cut to the dashboard already running.

## Key moments (the middle)
- The four input sliders (Temperature, Time of Day, Energy Usage, User Presence) move and the five appliance cards update their percentages live.
- The "Show Energy Graph" button toggles the recharts bar chart into view.
- The theme toggle cycles Light → Purple → Green → Dark, changing the whole page palette.

## Outro / punchline
Final frame: "Smart Home Harmony Engine — fuzzy-logic energy estimates. All in the browser." Hold on the dashboard with all five cards visible.

## User flow worth showing
Entry → move temperature slider → watch AC and Fan percentages jump → toggle presence off → watch AC/Fan/Oven/Light drop to zero → toggle graph → switch theme. This is the centerpiece: the app responding to real input.

## Tone
- Preset: polished
- Creative direction: clean, serious, recruiter-facing, feature-forward
- Interpretation: restraint as the creative choice. Longer holds per scene (4-6s). No caps, no exclamation marks. The product speaks for itself.

## Format: landscape — 1920x1080
## Duration: 20 seconds

## Visual identity (from the project)
- Background: #f3f4f6 (light) / #111827 (dark)
- Accent: #9b87f5 (smart-purple)
- Text: #1f2937 (light) / #e5e7eb (dark)
- Display font: system-ui / Inter fallback
- Body font: system-ui / Inter fallback
- Strongest visual element: the five appliance cards with progress bars + the recharts energy graph

## Share copy (draft)
Smart Home Harmony Engine: fuzzy-logic energy estimates for every appliance, all in the browser. No backend, no setup — just move the sliders and watch your home respond.

## Audio direction
- Role: sparse professional accents
- Music: none only if disabled/missing/intentionally silent; prefer a warm professional bed if a royalty-free track is available
- Music treatment: low volume under UI reveals, duck for major transitions, fade out under final logo
- Music cue guidance: to be detected at composition via `npx hyperframes beats`; 1-3 strongCue targets for major reveals (graph toggle, theme switch, final logo)
- Audio-reactive treatment: subtle; music RMS breathes the hero glow and card presence, no waveform bars
- SFX posture: sparse, motion-matched; card arrival ticks, slider nudge clicks, graph toggle snap, theme switch chime
- Audio-coupled moments: slider moves = subtle click ticks; appliance cards arriving one by one = card ticks; graph toggle = snap; theme switch = chime; final logo = soft hit
- Restraint rule: no beep-per-event; one material set in one room; fewer events than beats

## Storyboard

### Scene 1 — Hook — 3s
Black background. White display type: "Your home is wasting energy." settles for ~1.5s, then "You just can't see it." cuts in. Both lines hold long enough to read.
Sequential/interaction: none — text appears one line at a time.
Audio intent: quiet, weighty. A single low hit on each line.
Audio-coupled idea: typed text with subtle key ticks if Hyperframes uses typing animation.
Music: none / soft bed entry.
Transition mood: hard cut → Scene 2

### Scene 2 — Reveal dashboard — 4s
The full dashboard fades in: header, four sliders on the left, five appliance cards (AC, Oven, Refrigerator, Fan, Light) on the right. Cards arrive one by one (AC → Oven → Refrigerator → Fan → Light) at 0.5s intervals.
Sequential/interaction: yes — five cards arrive one by one.
Audio intent: clean, confident arrival.
Audio-coupled idea: card-by-card sequence with card ticks.
Music: bed enters at low volume.
Transition mood: soft crossfade → Scene 3

### Scene 3 — Live fuzzy logic — 5s
Sliders move in real time: Temperature 25→35, Time of Day 12→19, Energy Usage 50→80, User Presence toggles off then on. Appliance percentages update live as sliders move (AC rises with temp, drops when absent, etc.).
Sequential/interaction: yes — simulated slider drags + presence toggle click.
Audio intent: responsive, mechanical. Slider nudge clicks + card percentage ticks.
Audio-coupled idea: slider moves = click ticks; card updates = percentage ticks.
Music: bed continues, subtle RMS-reactive glow on cards.
Transition mood: clean wipe → Scene 4

### Scene 4 — Graph + Theme — 4s
"Show Energy Graph" button clicks → recharts bar chart slides in. Theme toggle cycles Light → Purple → Green → Dark, page palette shifts with each.
Sequential/interaction: yes — graph toggle + theme switch clicks.
Audio intent: snappy, decisive. Graph toggle snap + theme chimes.
Audio-coupled idea: graph reveal snap; theme switch chime per cycle.
Music: bed holds steady.
Transition mood: hard cut → Scene 5

### Scene 5 — Outro — 4s
Dashboard holds at rest. Final line: "Smart Home Harmony Engine — fuzzy-logic energy estimates. All in the browser." Stacked below: "No backend. No setup." Fade to black on the product name.
Sequential/interaction: none.
Audio intent: confident close. Soft hit on final line, ring out to silence.
Audio-coupled idea: typed final line then hold.
Music: bed ducks under final line, fades out.
Transition mood: fade to black.

**Music mood for this video:** professional / clean
**Audio summary:** A warm professional bed at low volume under the whole video; sparse SFX (card ticks, slider clicks, graph snap, theme chimes) matched to motion; final soft hit then silence.
