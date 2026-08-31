# Elevate Field — Changelog

## Build 28.1 — 2026-08-31
- **FIX — photo Camera/Gallery buttons dead on iPhone**: all three camera launchers awaited an IndexedDB save before clicking the hidden file input; iOS Safari only honours file-input clicks inside a live tap gesture, so the click was silently dropped (Android/desktop tolerated the gap). Now: sync stash → click → save without awaiting. Crash-safety preserved. Reported by GG (iPhone 16), broken since the crash-safe photo work landed.

## Build 28 — 2026-08-20
- **Disto walk auto-refit**: a typed distance that would leave the page rescales the whole drawing uniformly to fit (60px headroom) — booked distances unchanged, symbols/text/labels keep their size, page scale follows so later legs stay consistent. Toast announces it. ⤢ fit button on the walk bar refits/centres on demand.
- **Label & box page-edge detection**: page borders join the clash registry as obstacles; any invert label that would cross the edge boxes its symbol (boxes clamp on-page). Nothing auto-placed draws off-page.
- **Boxed inverts toggle**: checkbox on the invert card forces the CAD-style block per symbol from the start (invBox flag); auto-boxing on crowding unchanged.
- **Pipe size chips**: 100–300 chips on the invert card suffix the value (e.g. 2.05 200mm); free-typed sizes respected (mm/in/" detected, no double-suffix).
- **Tap-to-edit text**: ✥ + clean tap on plain or circled text reopens the modal pre-filled (Save in place, size/rotation kept).
- **Training**: new guide — When the sketch gets busy (boxes, edge fitting, tap-to-edit, landscape). Walkthrough videos wired: Disto walk incl. auto-fit (Point of commencement guide) and Legal sketch — monuments, lines, labels (Sketch tools guide).
- Held for the next build: detail pages (live-view zoom regions).

## Build 27 — 2026-08-19
- **Training videos**: guides can now carry a walkthrough video (repo /videos folder, streamed on demand, preload none). First one: Booking inverts (2 min). Offline: baked-in diagrams and steps remain the canonical content; the player politely notes it needs signal.
- **FIX — tuck tabs overlapped the tool rails**: the ‹ › collapse tabs anchored at the same 40% height as the clusters one z-layer up, shadowing the top of whichever button sat there (✋ on desktop). Tabs now sit below the clusters.
- **FIX — invisible toast was eating taps**: the notification toast hid by fading to opacity 0 but stayed in the DOM at z-40 across the bottom band, silently swallowing clicks on + Add page, Add INV, Export and anything else it covered (worse in 25–27 as toast traffic grew). Toasts and the error banner are now pointer-events:none — informational strips can never intercept input again.
- **Boxed invert blocks (auto)**: a pre-pass detects clashing utility clusters; any multi-invert symbol involved renders its inverts as a CAD-style stacked box (title: symbol · PT#, one line per direction in compass order, D markers kept) placed in the clearest of 8 spots around the symbol, single leader to the rim. PT# folds into the box title.
- **Sketch label clash detection**: single-invert labels and PT# tags dodge each other and avoid covering symbols; PT# tags try all 8 directions before sliding. Per-label leader lines dropped (superseded by boxes). Fixes wiped-out numbers on tight IC/MH clusters.
- **Tool rails auto-fade + tuck**: side clusters drop to 15% opacity while a pointer is down on the canvas; ‹ › edge tabs collapse either rail entirely (persisted per device).
- **Landscape sketches**: ⤢ button on the sketch page flips page.orient; canvas, grid, thumbnails, clamps and label placement all follow; exports rotate 90° to fill the portrait sheet. Flipping is non-destructive.
- **Misc manhole symbol (mh)**: plain circle with MH for type-undetermined manholes; full utility behaviour (inverts, PT# tag, invert card, clash dodging); legend prints MANHOLE - TYPE UNDETERMINED.

## Build 26 — 2026-08-19
- **Wrong HT rows (HT✗)** on TS and GPS setups: PT# (one / list / range), wrong HT, correct HT, comments. Prints boxed in red inline; cover page gets a ⚠ HT CORRECTIONS — FIX BEFORE DRAFTING box listing every correction with page reference. Struck HT✗ rows excluded from the cover box.
- **Endpoint snap**: pen and line grab nearby endpoints (tight screen-based radius) — green square indicator + haptic tick. Snap overrides ortho. Poly and Disto POC use the same radius.
- **Block lettering**: sketch text, dimension labels, 'D' markers and free-form note pages render in ui-monospace print — legal field book standard. Existing sketches update automatically. Case preserved as typed.
- **GPS rows**: TIME column removed (receiver logs it); COMMENTS column in its place. Legacy booked times print folded into comments as "@ hh:mm".
- **Print clash fixes**: long codes wrap within their column; GPS base line (BASE @ / ANT / KNOWN-AVERAGED tag) measures itself and flows to a second line instead of overprinting.
- **Training**: two new guides — Sketch tools (annotated screen map) and Wrong HT. Standing policy: crew-facing features ship with their guide in the same build.

## Build 25 — 2026-08-17
- **🎓 Training tab** on the home screen (next to Notes and Resources):
  offline how-to guides with numbered steps and field-book-style diagrams.
  First three: Point of commencement, Booking inverts, Photos on control
  & ties. Each opens with a "why it matters" line. Content is baked into
  the app — no signal needed. More guides added as features get under-used.
- **GPS rover pages fixed (data-loss bug).** Rover-only GPS setups were judged
  "empty" by looking only at the base-station fields, so a page with receiver
  and rover HT filled: (a) refused "＋ Add another" with a misleading
  "still empty" toast, and (b) was silently deleted by Save setup / back.
  Reported by GG on 26-3583. Blank/keep logic now counts receiver, rover HT
  and receiver IDs — but values inherited from the previous GPS setup via
  "＋ Add another" don't count, so an untouched chained page still cleans
  itself up. (Build 24.2 folded into this build — never deployed separately.)

## Build 24.1 — 2026-08-11
- Real undo on sketches: ↩ now steps back through history — deletions, moves,
  rotations, invert-card edits, anything — instead of only removing the last
  drawn item. A deleted manhole comes back with its PT# and all its inverts.
  ↩ also floats on the right cluster now, and 🧭 north joins the left one
- Deleting a setup line shows an UNDO button for a few seconds
- Moving utility symbols fixed: with ✥ Select, dragging a selected manhole now
  moves it — the invert card only opens on a clean tap (no finger movement),
  instead of hijacking every second touch
- Setup rows re-laid on two lines — type · pt # · code on the first, HT ·
  prism · 📷 · ✕ on the second — so the fields are full width and readable
  again on phones (they'd gotten squeezed when prism and the camera joined
  the row)

## Build 24 — 2026-08-11
**Photos everywhere**
- Every tie/set/check row (TS and GPS) has a 📷 — photograph pins, tags, TBMs;
  the ⊼ station and BS points (and GPS base point) get cameras too, so control
  locations are documented for future recovery
- All shot photos print on the Measurement Record pages with matching captions
  ("⊼ @ 100 · SETUP", "PT# 102 · OCN"), alongside the invert photos
- In-app photo viewer: tap any 📷 marker to see the photo immediately —
  Replace (camera or gallery), Rotate, or Remove on the spot; no more finding a
  blurry shot only after export
**Export reminder**
- If work from the last session never got exported, a banner says so — once,
  on the first open of the day. "Don't remind for these" mutes test/demo notes
  permanently; a passive "unexported" tag stays on note cards. Today's active
  work is never flagged
**Editor**
- Rod height carries to the next row automatically (both setup types), like
  prism; NOTE rows now show just the type + full-width comment box
- Ⓓ Circled tool retired (symbols + PT# IDs replaced it); existing circled
  labels still render and move
**Canvas**
- Quick-tools cluster on the left edge: ✏️ pen · Ａ text · ◉ symbol · ✥ select,
  synced with the bottom toolbar; navigation stays on the right
**Resources & security**
- Job Maps link — the live Google My Maps job map, opens in the Maps app
- PDF/ZIP libraries are now hosted inside the app's own repo instead of a
  third-party CDN — no outside code source to trust, and exports load faster
  and more reliably offline

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
