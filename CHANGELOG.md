# Elevate Field — Changelog

## Build 23.1 — 2026-08-05
- Misclosure note now clash-detects before placing itself: it checks every
  dimension label, wall, symbol, and text box on the page, tries the box
  centre first, and slides below/above/beside the figure when the box is too
  small to hold it — so it never covers your dimensions. (Notes already placed
  by 23 can just be dragged clear with ✥.)

## Build 23 — 2026-08-05
**Inverts & symbols**
- Two-tap inverts: ◉ then tap the manhole — the card opens directly; the symbol
  library only opens on a second tap of the ◉ button. In ✥ Select, tapping an
  already-selected utility symbol opens its card too
- 📷 opens the camera directly again; new 🖼 button picks from the gallery
  (both on the add row and per invert entry; force-save safety net unchanged)
- Labels keep clear of each other: PT# automatically takes a side with no
  inverts (and pushes further out if all eight are busy), diagonal invert
  stacks sit wider, and dimension labels on short walls step off the line
**Walk mode**
- Closure rework: every wall is held exactly as measured — nothing snaps.
  Closing a box (auto-detected at the POC, or the Close button) prints a
  MISC. ΔN / ΔE note inside the figure (page-up = north, per the field-book
  convention; crews declare true orientation with the north arrow). One note
  per box; movable with ✥, deletable
**Setups**
- Prism column on instrument setups: RND / 360 / MINI / RL dropdown per row,
  new rows inherit the previous prism; prints between HT and comments
  (per the Field Survey Guidelines requirement)

## Build 22 — 2026-08-04 (fixes from first field use of 21)
- Disto photos rebuilt to survive Android closing the app during the camera:
  📷 now sits on the add row (photo + value + Add in one motion, or photo
  auto-adds if the value's already typed); the note force-saves before the
  camera opens; the picker also allows choosing from the gallery — the safest
  habit is snap with the camera app, then attach from gallery; if the app does
  get closed mid-photo, it tells you on restart instead of silently losing it
- Structure labels now print as "PT# 5133" so IDs can't be misread as inverts
  (Measurement Record captions match)
- Walk mode: tap any wall while walking to edit its distance/azimuth or delete
  it — everything after it shifts to stay connected, and the walk continues
  from the corrected corner; ↩ still steps back one reading

## Build 21 — 2026-08-04
**The app is now "Elevate Field"** — notes plus field resources in one place.
**Resources tab (home screen)**
- Office contacts with tap-to-call (Selene = Admin)
- Documents: Field Survey Guidelines, Code List 2026, Job Requirements sample,
  Leica Captivate reset guide + Technical Reference, Coordinate Systems,
  MetroVan network + source-table quickguides
- ★ on any doc saves it for offline; managed via resources.json in the repo
**Disto workflow**
- 📏 Disto walk mode: tap the point of commencement, enter distance + direction,
  walls draw themselves; auto-detects and snaps closure onto the POC; Close
  button computes the final leg for checking against the last reading
- 📷 per-invert Disto photos → printed on Measurement Record pages, captioned
  "Pt 5133 · SW 1.96 D"
- Structure IDs: every utility symbol auto-numbers across the note (1, 2, 3…),
  overridable with the collector pt # on the invert card; printed beside the
  symbol
- ᴰ tag on laser-measured dimensions and inverts (auto via walk mode or photo,
  toggleable on the dim card and invert list); page footnote defines it
**Other**
- Change symbol on the invert card (sanitary ↔ storm etc.) keeping inverts + ID
- Description column removed from setup rows — pt # / code / HT / comments;
  old descriptions print merged into comments
- Fixed a startup crash introduced by the walk bar (caught in testing)

## Build 20.1 — 2026-08-01 (fixes from Finny's demo)
- Invert labels were rendering too small to read at the phone's default zoom —
  now sized like dimension labels, with heavier leader ticks; clearly legible
  without zooming in
- Offset reworked: tap the line, enter the distance, then BOTH sides appear as
  dashed previews — tap the one you want to keep (undo cancels the preview)
- Lines/polylines/arcs are easier to grab for offset (wider tap zone)

## Build 20 — 2026-07-31
**Sketch / markup tools**
- Offset: tap a polyline, line, or arc with the ∥ tool, type a width in metres —
  a parallel (mitred/concentric) copy draws on the side you tapped
- Arcs: 3-point arc tool (start, end, through-point) with endpoint snapping
- Select (✥): tap symbols, text, circled labels, or the north arrow to drag them
  to a new position; ✕ deletes the selected item
- North arrow rotates: select it and tap ↻ (15° steps)
- Writing colors: ink / red / blue / green / orange for pen strokes, text, and
  circled labels (linework and monument symbols stay ink)
- Pen and eraser sizes: S / M / L per tool
**Inverts**
- Tap a placed utility symbol (manholes, inspection chambers, catch basins) with
  the ◉ tool to open its invert card: compass grid (N/E/S/W + diagonals + single
  INV), multiple inverts allowed in the same direction, values stack outward on
  the drawing with leader ticks
- All labels (inverts, dimensions, text) print with a paper-coloured knockout so
  linework never crosses the numbers
- Works on sketches, PDF markups, and photo pages; inverts move with their symbol
**Printed notes**
- Every page header now shows JOB # (left), date · crew (centre), P x|y (right)
**In-app**
- "What's new" card shows automatically once per build; tap the build number on
  the home screen to reopen it anytime

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
