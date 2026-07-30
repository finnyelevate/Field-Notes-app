# Elevate Field Notes — Changelog

## Build 19 — 2026-07-30
**Setups**
- Resection setup type (toggle in instrument setup): computed station pt#, HI,
  overall QUALITY/RMS, CHK BS with ΔH/ΔV; prints with a RESECTION tag
- GPS localization toggle (works with Base+Rover or Rover only): LOCALIZED tag
  on the printed header, new LOC row type for the control points used
**Printed notes**
- Comment-only rows (e.g. NOTE) print across the full row width; long comments
  on any row wrap full-width instead of squeezing into the right column
- Job number now prints top-left on every page (JOB 26-XXXX)
- Optional SITE SUMMARY on the title page (new field in the note header)
- Auto-LEGEND page at the end when sketch symbols are used ("DENOTES ..." lines,
  only for symbols actually placed)
**Sketch / PDF markup canvas**
- Two-finger pan and pinch-zoom work in any tool; one finger keeps drawing
- Floating side controls: ＋ / － / ✋ pan / ORTHO (zoom removed from toolbar)
- New Line tool (straight, snaps to existing line ends)
- New Polyline tool (tap vertices, ✓ to finish, undo removes last vertex)
- ORTHO toggle snaps Line/Polyline segments to 45° increments
- Symbol library: 19 monument/pin symbols (filled = found, hollow = set) and
  8 utility symbols (manholes, inspection chambers, catch basins)
**Reliability**
- App requests durable storage from the OS (protects notes from cleanup)
- "Saved ✓ time" indicator and a manual 💾 Save button on the note screen
- Red warning banner when running uninstalled (e.g. WhatsApp's in-app browser)
- Fixed: reopening a saved GPS setup opened the wrong screen

## Builds 1–18 — 2026-07-29 (summary)
- 1–9: core app — header, TS setups with strike-through corrections, grid
  sketches, PDF markup, photo pages, dictation, PDF export named
  {job}_Field_Notes_{date}.pdf, offline PWA on GitHub Pages
- 10: dimension lines switched to azimuth convention (0° up, clockwise)
- 11: forgiving endpoint snapping; tap a dim line to edit/delete it
- 12: "＋ Add another" in setup editor; carries HT / receiver forward
- 13: update fix — app checks for new builds when online (network-first)
- 14: labeled row fields (pt# / description / code / HT / comments) + printed
  column headers
- 15: blank setups auto-remove when abandoned
- 16: export "ready" dialog (Android share-sheet timing fix)
- 17: ZIP dialog offers Share files (PDF + attachments to WhatsApp) or Save ZIP
- 18: free-form Notes pages (full-width text, prints in handwriting style)
