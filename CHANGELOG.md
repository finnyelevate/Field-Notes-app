# Elevate Field — Changelog

## Build 35.5 — 2026-11-27 (all crews)
Only `index.html` and this file changed. `sw.js` is the same as 34.1. **Includes everything in 35.4** (which was not uploaded on its own).
- **Site map from the home screen** (Finny: "accessible even on the main screen before starting a field note, as some initial legal searches and looking for monuments may apply before the crew creates field notes"). New **🗺 Map** button beside Notes / Resources / Training. It opens the same Site map with no note: it starts on the phone's GPS position, with lot lines, PIDs, house numbers, monuments, job pins, ＋ Points, Go to and follow me all as usual. Back returns to the home screen.
  - It never reuses the last note's address — there is no SITE pin until you search for one.
  - **Type N, E works there too.** With no note to keep them in, typed points are held until the app is closed (the legend says so). Typed points on a note's map are still kept with that note, and the two don't mix.
- **Go to an address** (Finny: "the ability to type in an address"). New **🔍** button on the map — on the home-screen map and on a note's map. Type a street address and city (`16120 96 Ave, Surrey`) or an intersection (`152 St and 68 Ave, Surrey`); the map jumps there and drops a black pin **labelled with the address the province's finder actually matched**, so a wrong match is obvious. Tap the pin for Go to / Drive there, or "remove pin".
  - If only the street or the town was matched (no house number), the info says **"treat this as approximate"** and the map zooms out instead of pretending to be on the lot.
  - A poor match is refused with a message (check spelling, add the city). No signal and "finder didn't answer" each say so. BC addresses only.
  - Searching does not change the note's own address or its orange SITE pin, and nothing is saved.
  - Searching switches follow me off, so the map doesn't jump straight back to you.
- Checked on the province's real address finder (from Finny's Chrome): a civic address, an intersection, a street-only search, a town name and nonsense all come back the way the app expects (matched address, score, and how precise the match is).
- Tests: Site map suite 187 checks (25 new: Map button, no-note map opens on GPS with no geocode and no SITE pin, typed point with no note not saved, search sheet, found / approximate / refused / finder down / offline, pin drawn and tappable, remove pin, Back to home, a note's map unaffected); real-browser-with-service-worker 9; note-loss 23; symbol snap 20; storage 12 — all green. Home screen, search sheet and found-address screens rendered at phone size and checked by eye.
- **Not re-run: the 116-check upload suite** (still to be rebuilt before the upload go-live build). The upload code is untouched.
- Not checked: on a real phone — the four buttons across the home screen on a narrow phone, the keyboard's Search key in the address box, and everything listed under 35.4.

## Build 35.4 — 2026-11-26 (all crews)
Only `index.html` and this file changed. `sw.js` is the same as 34.1.
From Finny loading `3692-gps search-pts.txt` (205 calculated corners, no descriptions) on a phone at 22-1945: the points were hidden until "Every point" was ticked, then came up as tiny dots with no numbers.
- **Every imported point is shown by default** (Finny: "I would default to showing all points, especially if no control points are there, as these could be search points"). "Every point" now starts ticked; untick it to see control and pins only.
- **Every point carries its point number** (Finny: "the point number should definitely be shown"). Numbers appear from the same zoom as before for control (zoom 18). One guard: if more than 250 uncoded points are on screen at once — a full topo file — their numbers wait until you zoom right in (19.5), so the map isn't buried. Control, pins and typed points are always numbered from 18.
- **Point numbers stand out in their own colour** (Finny: "sticking out in a different, similar color just so it's visible to the field members"). The number beside a dot is now a lighter tint of the dot's colour instead of white, so it can't be mistaken for the white PID, house-number and street text. Numbers are also slightly larger (12 px) with a heavier dark outline. As before: our control is magenta with pink numbers; pins and posts are black with white numbers.
- **Follow me** (Finny: "useful for the location of the phone to be interactively moving as they're moving around on the map, instead of having to hit the pin button each time"). Tap 📍 once: the button lights blue and the map now re-centres on you by itself as you walk. Zooming in or out keeps following. **Drag the map to look around and it stops following** (the button goes dark, a short message says so; the blue dot keeps updating); tap 📍 to follow again. A freshly opened map is not following — it opens on the site as before. The GPS position is also refreshed more often (accepts a fix up to 1 second old, was 5).
- **Dots are bigger** (3.2 px, was 2.2) with a dark outline.
- **Points-file colours changed** so a file is never red, purple or emerald (the province's monuments), magenta (our control), orange (lot lines, SITE) or blue (GPS dot, job pins). First file is bright yellow-green, then white, mint, tan, lavender.
- **Wording:** a point with no description is called a "point", not a "shot". The message for a file with no control or pin codes now reads "… shown as dots with their point numbers (zoom in for the numbers)" instead of telling you to tick a box.
- **Legend tidy:** the line about magenta control and black pins sits on its own line instead of wrapping beside the tick box.
- Tests: Site map suite 162 checks (17 new or changed: follow on from 📍, map re-centres on a new fix, zoom keeps following, drag stops it, dot still updates when not following, 📍 resumes, new map not following; shown by default, untick / re-tick, a no-code search file drawn untouched, its message, file colour and tint, numbers written and in the tint colour, numbers off below zoom 18, the 250-point guard, dot colour, "point" wording); real-browser-with-service-worker 9; note-loss 23; symbol snap 20; storage 12 — all green. A phone-sized map with a search-points file rendered and checked by eye on a stand-in background.
- **Not re-run: the 116-check upload suite** (still to be rebuilt before the upload go-live build). The upload code is untouched.
- Not checked: follow me on a real phone while walking (how smooth it feels, battery use over a long day — the GPS was already running whenever the map was open, so no extra drain is expected); the yellow-green on a real air photo in daylight; the real `3692-gps search-pts.txt` (I did not have the file — the test used a file of the same shape: number, N, E, 0.000, no description).
- **Differs from Office until it follows:** the "show every point by default", point-number tint, file colours and follow me are Field-only for now.

## Build 35.3 — 2026-11-26 (all crews)
Only `index.html` and this file changed. `sw.js` is the same as 34.1.
- **Our control stands out in its own colour on the Site map** (Finny, on the Office map: "Usually, all of our control is in a green color. It might help it stick out a little bit more from the map… even the pt# text / desc text color of the control match that color… if you're already using green for monuments, maybe some other color, just a color so we know what's what"). Follows **Office 1.48.2**, same colours:
  - **Magenta symbols** for traverse hubs, control nails and spikes — the 12 codes AutoMap puts on the CONTROL layer: OCN, OCNT, OPM, ORLT, OSPK, OCC, OIB, OMAG, ORBR, OSC, OSM, OSP. Magenta rather than green because green, purple and red are already the province's monuments.
  - **The point number beside each is a lighter pink** of the same colour.
  - **Pins and posts stay black with the white edge** (iron posts, lead plugs, the various posts, our control monuments — the PINS-layer symbols), with white point numbers.
  - Legend line under the map: "our control (magenta) and found pins (black) are drawn as on your plans · tap one for its legend name".
- Nothing else changed: against the live Build 35.2 the differences are the two colour constants, the ink in the symbol's second pass, the label colour and that legend line. Symbol shapes, sizes and tap wording are as 35.2. The What's-new card is not shown again (still Build 35).
- Tests: Site map suite 145 checks (7 new: the two colours, exactly the 12 CONTROL codes take magenta, pixel checks that a hub is magenta and an iron post still black, pink number beside control and white beside a pin); real-browser-with-service-worker 9; note-loss 23; symbol snap 20; storage 12 — all green. Symbol sheet and a phone-sized map re-rendered and checked by eye on a stand-in background.
- **Not re-run: the 116-check upload suite** (still to be rebuilt before the upload go-live build). The upload code is untouched.
- Not checked: magenta on a real air photo on a phone in daylight; Office 1.48.2 itself (colours taken from its project notes).

## Build 35.2 — 2026-11-26 (all crews)
Only `index.html` and this file changed. `sw.js` is the same as 34.1.
- **Control symbols redrawn to match the plan and the frame legend** (Finny, on the Office map: "Seem a little goofy… All of these seem to have a circle around them… a little bit big as well and kind of crowding up the picture"; then "See the latest build and update accordingly"). The Site map now follows **Office 1.48.1** — same table, same drawing rules:
  - **No white disc and no coloured ring.** Each symbol is just the symbol, with a thin white edge so it still reads on the aerial. Set posts (open circle, open square) are white inside, as the wipeout makes them on a plan.
  - **Sized from the frame legend**, not all the same: iron post smallest, then lead plug, traverse hub, capped and non-standard post, then control monument / concrete post / rock post (the same size as the province's triangles), Dominion iron post, and aluminum post largest. Sizes are the Office chat's measurements of the legend in the 2026 frames (250.dwg).
  - **Tap a symbol and the info says what it is on the plan**, in the legend's words — e.g. "101 OIP — found pin / post — on the plan: standard iron post found".
  - The tapped symbol keeps its size and gets one light-blue ring; its point number moves out to clear the ring. Point numbers otherwise sit a little closer (10 px) now that the disc is gone.
- **What is lost:** the ring in the points file's colour. With two files loaded you can no longer tell at a glance which file a symbol came from — the file name is in the tap info, and the coloured square beside each file name under the map is unchanged.
- **Gaps, the same as Office:** OIPT still has no symbol (plain dot); OPP uses the non-standard post symbol; OIPIPE2 has a symbol but no line on the frame legend, so its tap info adds no wording.
- **Unchanged:** topo shots (small dots under "Every point"), typed coordinates (yellow diamonds), the province's green / purple / red triangles. Legend line under the map now reads "control and posts are drawn as on your plans · tap one for its legend name".
- Nothing else in the app changed: compared with the live Build 35.1, outside the symbol code the only differences are the tap-info wording and that legend line. The What's-new card is not shown again (still Build 35).
- Tests: Site map suite 138 checks (was 124 — the symbol block rewritten: table, sizes and legend wording, drawn size, pixel checks for the white edge, no disc further out, white inside the set lead plug, the light-blue ring, wording in the tap info and none for OIPIPE2 / OIPT); real-browser-with-service-worker 9; note-loss 23; symbol snap 20; storage 12 — all green. A sheet of all 20 symbols drawn by the app's own code on a mottled background, and a phone-sized map with one of each, were rendered and checked by eye.
- **Not re-run: the 116-check upload suite** (still to be rebuilt before the upload go-live build). The upload code is untouched.
- Not checked: the symbols against the frame legend itself — I have not seen the frame drawing; shapes, sizes and wording are the Office chat's reading of it. Also not checked: Office 1.48.1 itself (not on GitHub when this was built), and how the thin white edge reads on a real aerial on a phone in daylight.

## Build 35.1 — 2026-11-26 (all crews)
Only `index.html` and this file changed. `sw.js` is the same as 34.1.
- **Control drawn with Elevate's plan symbols on the Site map** (Finny: "look at the latest update on Elevate Office for the maps regarding symbols and update accordingly"). Points from a loaded .msz / points file that are survey control or found posts now show the symbol from the plan legend — iron post, lead plug, capped post, rock post, hub / nail, control monument and the rest — instead of a plain triangle or dot. **Same table and same drawing rules as Office 1.48.0** (20 symbols, 36 control codes), so the PM job map, the Points map and the Field map match: each symbol sits on a white disc so it reads on the photo, with a ring in the points file's colour; the tapped one is larger with a light-blue ring. Point numbers sit a little further right to clear the symbol.
- **Where the symbols come from**: the Office chat read them on 2026-11-26 from `ELEV-AUTOMAP-2026.csv` and the block drawings in the 2016 `BLOCKS` / `CUSTOMBLOCKS` folders; this build copies that table exactly from the Office 1.48.0 spec. **Two gaps, the same as Office:** OIPT has no AutoMap row, so it stays a plain dot; OPP's own block isn't in the folder, so it uses the OIPNS symbol.
- **Unchanged**: topo shots never get a control symbol (still small dots under "Every point"); typed coordinates stay yellow diamonds; the province's monuments keep their green / purple / red triangles. Legend line under the map now reads "control and posts are drawn with your plan symbols".
- Nothing else in the app changed: compared line by line with the live Build 35, the only differences are the point-drawing code and that legend line. The What's-new card is not shown again (still Build 35).
- Tests: Site map suite 124 checks (12 new: the table's counts and code mapping, which points get a symbol and which don't, drawn size and ring colour, the selected state, pixel checks that the symbol and its white disc are really on the canvas, provincial monuments untouched); real-browser-with-service-worker 9; note-loss 23; symbol snap 20; storage 12 — all green. A sheet of all 20 symbols drawn by the app's own code, and a phone-sized map with one of each, were rendered and checked by eye.
- **Not re-run: the 116-check upload suite.** The working copy was lost when the build workspace was recycled, and the copy that came back is an early version that predates most of the upload features. The upload code is byte-for-byte what is live in Build 35, so this build can't have changed it — but that suite needs rebuilding before the upload go-live build.
- Not checked: the symbols against the frame legend (the Office build's `control-symbols-1.48.0.png` and this build's sheet should look the same — please compare one with the legend), and how they read on a real aerial on a phone in daylight.

## Build 35 — 2026-11-25 (all crews)
Three additions to the Site map, from Finny's morning in the field. `sw.js` is unchanged from 34.1 — only `index.html` and this file need uploading.
- **Interest lines look different from lot lines** (Finny: "some of these circles are interest lines … tree covenants, rightaways, or easements"). Rights-of-way, covenants and easements are now **light-blue** lines; lot lines stay orange. Own tick box ("Interest lines"), and both are on the legend. Tap open ground on or inside one (zoomed in) and the map asks the province what is there: e.g. "Interest parcels here (not a lot line): Statutory right of way · plan EPP103478". **Built to the same settings as Office 1.47.0** (same tile requests, same tint, same tick-box name, same lookup and wording) so the office and the crew see the same picture.
  - What the province's data can and can't say: an interest carries a kind and a plan number, no PID. The kinds are Statutory RoW, Volumetric SRW, Volumetric Interest, or plain "Interest" — covenants and easements are **not** named as such, so the app says "Interest (covenant, easement or other — the kind is on the plan)". Only interests ParcelMap BC has drawn as parcels appear; a charge on title that isn't in the parcel fabric won't.
- **Type a coordinate** (Finny: "so we don't have to import a point each time"). **Type N, E** on the map: northing, easting, optional label — or paste a pair (`5438812.345 514508.120`, with or without N/E letters) or a whole points-file line into the Northing box. NAD83(CSRS) UTM zone 10 only: a local or assumed coordinate is refused with the reason; northing and easting typed the wrong way round are swapped and flagged. Typed points are yellow diamonds, always shown.
  - **Kept with the note** (Finny's ruling: "as long as the note is still active … if it gets reopened, perhaps it's useful again"): they come back whenever that note's map is opened and go when the note is deleted or cleaned up. They are a working aid — not printed, not in the PDF, and adding one does not mark the field notes as edited. Remove one from its info box, or "clear all" on the legend. Imported files are still for the session only.
- **Directions to a point** (Finny: "get some directions right to a certain point on the map"). Tap an imported point, a typed point, a monument, a job pin or the SITE pin:
  - **Drive there ↗** opens the phone's maps app with that exact spot as the destination (Apple Maps on iPhone, Google Maps otherwise).
  - **➤ Go to** — a banner with a big **arrow and the distance** (Finny's ruling: arrow and distance, no bearing numbers, relative to where they're facing), and a dashed line on the map from the blue dot to the target. The arrow follows the phone's compass; while walking it follows the direction of travel instead, which is steadier. Inside the GPS's own accuracy the arrow gives way to "Within GPS accuracy — look around". With no compass it says so and points as on the map (north up). ✕ stops it; leaving the map stops it.
  - Limits: phone GPS is good to a few metres — it gets the crew to the right corner of the lot, not onto the pin. The compass can be 10–20° out beside the truck, rebar or steel fencing; the distance stays good. iPhones ask once for permission to use the compass.
- **Info card floats over the map** instead of opening underneath it. Before, every tap resized the map and shifted everything on it, so the next tap landed off target (found while rendering this build; it has been so since 34).
- **Legend shortened** to one line: geodetic · benchmark · destroyed · lot line · interest line · typed.
- Monument and SITE colours confirmed identical to Office 1.47.0 (green #22c55e, purple #c084fc, red #ef4444, orange #f97316).
- **Checked on the province's real data** (from Finny's Chrome): the lot-line picture with interests filtered out and the interests-only picture both load; pixel comparison confirms the filter removes exactly the interest outlines; the tint turns the province's orange (rgb 224,144,0) into bright light blue (rgb 0,240,240); the point lookup answers in a fraction of a second.
- **Upload pilot unchanged** (`live` still false). The upload go-live will be the next whole build number.
- Tests: 292 checks green — Site map suite 112 (was 62), real-browser-with-service-worker 9 (run twice), upload 116, note-loss 23, symbol snap 20, storage 12 — plus a phone-sized render of each new screen.
- **Not tested on a real phone, and can't be from here:** the compass (iPhone permission prompt, Android heading, behaviour near metal), direction-of-travel while walking, the hand-off to the maps app, and the light-blue tint on a real aerial in sunlight. Please try Go to on both an iPhone and an Android before relying on it.

## Build 34.1 — 2026-11-25 (all crews) — upload **sw.js** as well as index.html
- **Fix — parcel lines missing, monuments / PIDs / house numbers only where the map first opened** (Finny's first field look at 34, 26-3647 at 152 St & 68 Ave, then 177A St & 101 Ave): the app's service worker (`sw.js`) cached every successful download and matched saved copies **ignoring the query string**. The province's map services put everything that differs — the area asked for — in the query string, so the first answer for a layer was replayed for every later request: monuments and labels never changed when panning, and lot-line picture requests (same address path as the label data) were answered with saved label data, so no linework drew. A second note would also have been placed at the first note's geocoded position. `sw.js` now leaves every request to another site alone (map tiles, map data, geocoder, Microsoft Graph go straight to the network); only the app's own files are cached. Cache name bumped to `efn-v7`, which deletes the polluted cache on phones; the saved-positions key is renewed (`efn-geo2`).
- **Same bug, upload pilot**: Microsoft Graph answers were being cached the same way, so job-folder listings, the Uploads viewer and job-details lookups could show a saved answer instead of the current one. Fixed by the same change.
- **Destroyed monuments shown in red** (Finny, with ParcelMap BC's legend as the reference): green = published geodetic, purple = benchmark, **red = destroyed** — tap one and it says DESTROYED, don't rely on it. Own tick box ("Destroyed") to take them off the map. Unpublished and unknown ones are still left out. A legend line under the map explains the colours.
- **Monuments from further out**: drawn from zoom 14 (about 2 km across a phone) instead of 15, 1000 per request — so zooming out to find the nearest good monument works. When a ticked layer isn't drawn at the current zoom the map says so ("Zoom in to see lot lines and monuments", "Zoom in closer for house numbers and PIDs").
- **Site marker**: an orange pin labelled SITE standing above its point (it was a green dot that read as a monument and sat on top of one at the same intersection).
- **Lot labels no longer print over each other** on narrow lots: a label that would overlap one already drawn drops lines, then is skipped.
- **Checked against the province's real services** (from Finny's Chrome, same web address the app uses): lot-line pictures, lot data, house numbers and monuments all answer in well under a second. Around 152 St & 68 Ave: 38 monuments within about a kilometre — 24 good, 11 destroyed, 3 unpublished. Around 177A St & 101 Ave: 51 — 27 good, 19 destroyed, 5 unpublished.
- **Why testing missed it, and what changed**: Build 34's tests ran without the service worker. New `test_sw.js` runs the app in a real browser with its real service worker installed and pans the map — it fails five ways on Build 34 and passes on 34.1 (8 checks, run three times). Site map suite now 62 checks; all suites 241 green.

## Build 34 — 2026-11-25 (all crews)
- **Site map on every note** (Finny, 2026-11-25: "so crew can start looking through items without just relying on the aerial and the parcel map screenshot we give them"): a **🗺 Site map** button at the top of every note opens a full-screen map centred on the note's site address (BC Address Geocoder; green point). Ported from the Elevate Office PM job map (1.44–1.46.1) so both apps draw the same thing from the same public sources: Esri aerial photo (or street map), **ParcelMap BC lot lines**, **PID + plan labels** and **house numbers** when zoomed in (house number joined onto its lot, exactly as in Office), **street names**, and the province's **control monuments from GeoNetBC** (MASCOT layer as the fallback). Monument rule is Office 1.46.1's: green = published geodetic, purple = vertical benchmark, destroyed / unpublished / unknown left out; tap one for its tablet number, GCM number, municipality, distance, and **Open its record** (coordinates and elevation live on the provincial record).
- **Where you stand**: the phone's GPS position is a blue dot with its accuracy circle (location permission asked once); distances on tapped items read "42 m from you". 📍 re-centres on you. The watch runs only while the map is open.
- **Phone handling**: one-finger drag, two-finger pinch, double-tap and ＋/− zoom; tick boxes for each layer (remembered on the phone); scale bar.
- **＋ Points — your own points on the aerial** (Finny: "so they can actually see where their legal is"): loads a job's **.msz / .mbz** package or a points **.txt / .csv / .asc** file. Same rules as the Office job map: NAD83(CSRS) UTM zone 10 only (an assumed/local job is refused with a plain message), a file more than 2 km from the site is held behind "Show it anyway", control-layer codes are highlighted (▲ control, ● pins/posts) with point numbers, other shots hidden until "Every point" is ticked; tap a point for its description and N/E/Z. Points stay on the map for the session only — nothing is written into the note.
- **Our existing jobs as pins** (Finny): blue pins from the jobs master (`Elev_Jobs_Master.csv` in Job Files), read with the crew member's Microsoft sign-in and kept on the phone for the day; tap a pin for the job number(s) and address. Nothing from the jobs master lives in the app file. Phones that aren't signed in simply don't show job pins — so until IT widens the sign-in group beyond the three pilot accounts, job pins appear only on those phones. Everything else on the map needs no sign-in.
- **Needs signal**: the map is fetched live; with no service it opens with a plain "No signal" note and fills in when connected. A note with no address, or an address the geocoder can't place, says so and falls back to the GPS position. The rest of the app stays fully offline as before.
- **Button row moved**: 🗺 Site map and (pilot phones) 📂 Job uploads now sit side by side at the top of the note instead of below the header card.
- **Upload pilot unchanged**: `live` stays false — the SharePoint upload features are still only on test-mode phones. This build is numbered 34 because the map is for everyone (it gets a What's-new card); upload go-live will be the next whole number.
- Tests: new Site map suite, 59 checks against stand-in map services (sources and URLs, monument filtering, GeoNetBC→MASCOT fallback, label/house-number join, UTM conversion, .msz stored + compressed, refusals, touch gestures, GPS, job pins + caching, offline / no-address paths), plus a phone-sized render in a real browser that caught and fixed spiky label outlines, the scale bar under the attribution strip, and the button being out of sight. All suites: 230 checks green (upload suite is 116 — the "117" quoted for 33.6 counted the summary line). Not verified on a real phone: live tiles/monuments (same services Office already uses from the same web address), iPhone pinch, the location prompt, opening an .msz from OneDrive on a phone.

## Build 33.6 — 2026-10-28 (pilot)
- **Corrected job # now swaps the auto-filled address** (Finny's pilot comment: fix job A's auto-filled address stayed behind after correcting the job # to B): the app remembers exactly what IT wrote into Address/City. On a new lookup, a field still holding that auto value is replaced with the new job's address — or cleared when the new job is unknown — while anything the crew typed or hand-edited is never touched.
- **View the job's Uploads folder** (Finny, 2026-10-28): crews can now see what the office posted under `<job>/Field/Uploads` — the dated packages they work from. Reachable from three places: a "📂 View uploads" link on the job-check hint (new-note form + scan-upload sheet) and a "📂 View job uploads" button on the open note above the Pages list (same gate as the other upload UI — test-mode phones only this week). The sheet lists dated folders newest first with item counts; tapping a folder shows its files (name, size, date); every row and the folder itself carry an **Open in OneDrive ↗** link, where the real viewers (PDF/DWG/images) live. Read-only — the app never changes anything in Uploads. No Uploads folder yet → "Nothing posted for this job yet." Verified against the real 26-3665 structure.
- The View-uploads link also appears when a job resolves but its details file is missing — old jobs without details can still be browsed.
- 117 checks in the upload suite (+26: autofill swap/clear/hand-edit matrix, viewer listing/sort/drill/back, OneDrive links, no-Uploads and unknown-job messages, gating) + three regression suites green.

## Build 33.5 — 2026-10-27 (pilot)
- **Jobs matched by their last digits** (Finny: sequences are unique across year prefixes, "just look at the last four digits"): if the typed job folder isn't found, the app lists the range folder and matches any `YY-<seq>` — so `26-1055`, `20-1055` or bare `1055` all resolve to the real `20-1055`. The exact typed name still wins when it exists; a prefix mismatch is flagged in red ("you typed 26-1055") on the hint and the confirm screen, and the UPLOAD goes to the resolved folder. The impossible case of two years sharing a sequence warns and falls back to Field Inbox.
- **Old jobs (20-1000+) recognized**: details files are also found at the JOB ROOT (pre-modern jobs have no Office folder — verified against the real 20-1055 via SharePoint). Per Finny's ruling, old folder LAYOUTS are not otherwise accommodated: a job without `Field/Data` (e.g. legacy "Field Data") sends uploads to Field Inbox with a clear "old layout — office will file it" reason, since those folders get tidied to the modern structure anyway.
- 91 checks in the upload suite.

## Build 33.4 — 2026-10-27 (pilot)
- **Job check now shows the SITE ADDRESS, not the file's first lines** (Finny's 26-3439 trial: hint showed Client/Contact/Email and pre-filled nothing — Site Address is the 5th field in the office's job-details format): the whole details file is parsed as key:value lines; the hint and the pre-upload confirm screen show **Site Address · Client**, and the new-note form pre-fills empty Address ("5186 Masex Dr") and City ("Delta, BC") from the Site Address value's comma split. Files with no recognizable keys fall back to the old first-lines display and street-ish autofill.
- **Older job-details files verified against Finny's real samples** (20-1046 from 2020, 22-2000 from 2022): underscore filenames (`…-job_details.txt`) are now found by the Office-folder scan alongside space/quote-named ones; colon-without-space values (`Phone:604…`), slashed multi-client lines, empty keys, and trailing free-text crew instructions all parse or skip cleanly. Both samples are baked into the test suite verbatim (85 checks total).

## Build 33.3 — 2026-10-27 (pilot)
- **Unrenamed job-details files found** (Finny's 26-3447 trial: the details file still carried the quote number, `Quote-26-191-job details.txt`, so the lookup warned "No job details found"): when `<job>-job details.txt` is missing, the app scans the job's Office folder for any `…job details….txt` (case-insensitive; covers quote-named files and sub-call variants like `26-3465-job details (24-165-1).txt`), preferring a name starting with the job number. One shared resolver (`msDetailsLines`) now feeds both the type-ahead hints and the confirm screen; confirm-screen lines are HTML-escaped.
- **Job # field fixed to full width** (Finny: only ~5 characters visible): the lookup hint had landed beside the field inside the form row, halving the input. Hint moved below the input inside the field; the job box now spans the row with slight letter-spacing — 7+ characters clearly visible. (The scan sheet's field was already correct.)

## Build 33.2 — 2026-10-27 (pilot — Finny, Gurbir, Harman only, rest of the week)
- **Still gated**: `live` stays false and BUILD stays 33 (no What's-new card fires) — Finny's ruling: keep it a demo this week. Everything below is visible only on test-mode phones (long-press the build line). The new 🎓 Training guide "Upload to job folder" IS in the Training tab for everyone, which is harmless (it describes buttons they don't have yet) — flag if it should be gated too. Go-live later = live:true + BUILD 34 + the three-item What's-new card (text preserved in the project spec) + IT widens the security group.
- **Check-before-upload** (Finny, after spotting the wrong-job-number risk): nothing uploads until the crew taps Upload on a confirm screen that shows the destination AND the job's first job-details lines (address) fetched from `<job>/Office/<job>-job details.txt` — "Not your site? Cancel and check the job #." Details file unreadable → told to double-check themselves. Field-Inbox fallback also confirms first. **Folder creation is deferred until confirm** (previously the dated/batch folder was created during resolution, so a cancel could leave an empty stray folder — fixed). Retry keeps context; partial-failure folder-create errors surface instead of hanging.
- **Address auto-fill from the job number** (Finny): typing a job # on the new-note form looks up the job details and shows "26-3465: 2275 Midas Street · Abbotsford …" right under the field — wrong number = stranger's address before the day starts. Empty address/city fields pre-fill from it (street-ish line + following clean line); typed values are never overwritten. Same live hint on the scan-upload sheet's job # field. Lookup is fail-silent offline/signed-out.
- **Export sheet reorganized** (Finny: destination was unclear): two labelled sections — "To the job folder — SharePoint" (⤴️ **Notes + data → job folder**: the finished notes PDF plus added files; 📤 **Data files only → job folder**: photos/videos/collector files without the notes, e.g. mid-day) and "By WhatsApp — the old way" (Field notes PDF; ZIP package). Every button carries a one-line plain-language description.
- **PDF-only upload fixed / sheet-first staging**: the three upload modes open the staging sheet immediately (＋ Add more files opens the picker) — cancelling the picker no longer dead-ends, and "Notes + data" with zero added files uploads the PDF alone ("Upload PDF only"). ZIP flow unchanged (picker-first, as crews know it).
- 67 checks in the upload suite (confirm gating incl. zero-uploads-before-confirm and cancel, address lookup + no-overwrite autofill, both hint sites, deferred folder creation) + three regression suites all green.

## Build 33.1 — 2026-10-26 (pilot)
- **Paper field notes join the pipeline** (Finny, 2026-10-27): crews who write manual notes and scan them can upload through the app without creating an app note. New home-screen button "⇪ Upload scans / data to job folder" (same double gate as the Export buttons — IDs AND live/test-mode, so still invisible to crews) → small sheet asking **job #** (remembered per phone) and **field date** (defaults to today; = the last day on the paper notes) → the familiar staging sheet → same engine: job-folder resolution, field-date descriptor-folder reuse, Field Inbox batch fallback (`<job> <date>`), rename-on-conflict, chunked uploads, per-file ✓/✗ + retry (retry keeps the job/date context). Files upload under their own names; no note is created or stamped. `msUploadFlow` gained job/date overrides.
- **SharePoint upload armed for pilot**: client + tenant IDs from Resolved IT (ticket T20261021.0164) baked into the `M365` config; tenant ID cross-checked against the org's Graph tenant. `live` stays **false** — upload buttons appear only on phones with test mode on (long-press the build line). IT limited sign-in to the security group **"SG-Elevate Field app"**: pilot testers (Finny, GG) must be added to that group or Microsoft refuses the sign-in (AADSTS50105); when rolling out to all crews, have IT add everyone or remove the assignment requirement. No other changes; BUILD constant stays 33 (no new What's-new card).

## Build 33 — 2026-10-21 (dormant)
- **Direct SharePoint upload — plumbing** (Finny's rulings 2026-10-21; spec in project doc `claude/field-upload-spec.md`): Export gains "Upload to job folder" (notes PDF + picked files, loose not zipped) and "Send files only" — both hidden until the `M365` config block carries the client + tenant IDs from the admin (hand-off note sent). Microsoft sign-in is hand-rolled OAuth2 auth-code + PKCE (no MSAL lib; SPA token endpoint is CORS-open; refresh-token rotation handled; WebCrypto guard for non-installed contexts). Destination: `range/range/job/Field/Data/<date>/` computed from the note's job #; dated subfolders with office descriptors ("2026-10-21 topo") are reused by date-token, bare date created otherwise; job folder missing/typo'd → batch subfolder under **Field Inbox** with a warning (the app NEVER creates job folders — standing rule). Uploads: `conflictBehavior=rename` (never overwrite), <3.5 MB simple PUT, larger via Graph upload sessions in 3.2 MB chunks with per-file progress; per-file ✓/✗ sheet with retry; a clean full upload stamps `note.exported` without bumping `mod` (fixed in-build: the first cut bumped mod and the "unexported" tag never cleared). WhatsApp/ZIP flows untouched. 32 new checks against mocked Microsoft endpoints (PKCE round-trip, token refresh + rotation, range math incl. 3-digit sequences, descriptor-folder reuse, inbox fallback, chunk ranges, dormant invisibility). **Multi-day notes**: every day a note is actually edited is recorded automatically (`note.days`); the note's date on the home card, note header and printed pages becomes a compact range ("Oct 15–19, 2026") when work spans days, single date otherwise. Dated subfolders use the **LAST field day on the note** (Finny's ruling, Oct 15–19 example → folder `2026-10-19`), not the upload day — data sent a day or two late still files under the day it was shot, and matches the office's existing descriptor folder for that date. Rollout is gated twice: buttons need IDs AND (`M365.live` OR per-phone test mode, toggled by long-pressing the build line on the home screen — short tap still opens What's-new). Plan: 33.1 = IDs in, live:false → Finny + GG pilot quietly on test-mode phones; go-live for all crews = live:true + real What's-new card. What's-new for 33 says plumbing only.

## Build 32 — 2026-10-16
- **FIX — notes deleted after attaching an image** (crew report, started ~Oct 13): Android kills the PWA during the camera; the relaunch cold-boots to home, where the Build-29 30-day cleanup sheet fired — and mid-October is exactly when the first notes crossed 30 days. The sheet listed old notes **pre-ticked** with a destructive primary button, so one rushed tap on the way back to the note deleted them, and the 8-s UNDO expired unseen. No code had changed since Sep 24; the trigger was the calendar. Fixes: cleanup never runs on a camera-interrupted boot (the `efn-pendph` stash marks it; the once-a-day flag isn't burned, so it still asks on the next normal open); nothing is ever pre-ticked; Delete is disabled until something is ticked and shows a count ("Delete 2 notes"); bulk-delete UNDO widened 8 → 30 s. Ask-first ruling unchanged.
- **Note lifeboat**: every camera launch now snapshots the whole note to localStorage (skipped above ~4.5 MB, quota-safe). On boot the snapshot is restored iff it's newer than the stored copy (`mod` compare), then cleared — so a hard kill can no longer lose booked work even if the fire-and-forget IndexedDB save never landed.
- **Photo-page camera guard**: the Take-a-photo / gallery chooser (29.x) never set the crash stash or saved before launching — that path got no recovery toast and was the open door to the cleanup ambush. Both paths now use the same `preCamera()` guard as row/invert photos (sync stash + snapshot → click → save, iOS gesture rule preserved).
- **iPhone storage hardening** (GG confirmed he's on iPhone; iOS is prone to IndexedDB failing or hanging on the first open after a relaunch): `store.init` now retries the open up to 4× with backoff and a 2.5 s timeout per attempt instead of giving up after one silent failure. If storage still won't open, the app runs on a localStorage backup: every save mirrors to `efn-membk-<id>`, the home list folds those in (notes no longer LOOK deleted), a loud banner says storage is temporary and to fully close and reopen, and the next successful boot folds the backups into real storage (newer-`mod` wins) and clears them.

## Build 31 — 2026-09-24
- **Symbols snap to corners**: reported by Finny — no way to accurately drop a symbol on a shown corner by finger, and dragging a misplaced one back didn't snap either. Symbols (place-by-tap, place-via-picker, and drag with Select) now magnet onto the nearest line/poly/dim/arc endpoint within a fingertip-sized radius (`symSnapR()` = 44 screen px; shrinks in page units as you zoom in, so zooming gives fine control). Green snap square + haptic reuse the existing line-snap feedback: it flashes 0.6 s on a snapped placement and shows live during a drag. Tap jitter under 8 px never triggers the magnet, so tapping a symbol to open its invert card can't fling it to a nearby corner; text/labels and other non-symbol ops are unaffected. Line/dim endpoint snap widened 26 → 32 screen px for finger drawing.

## Build 30 — 2026-09-20
- **Surveyed-point marker (X)**: new `spx` symbol heads the Utilities group — a small stroked X (`_x`, 0.45 r ≈ 12 px arms at default size) marking a shot position exactly. Requested by Finny for building/shed corners where crews were borrowing the filled Iron-post dot, which reads heavy and imprecise on small structures; sized down from the first cut on his review. Deliberately outside `UTIL`: no auto PT#, no invert card, no label — just the mark. Appears in the export legend as SURVEYED POINT when used. Detail pages slip to Build 31.

## Build 29.3 — 2026-09-16
- **Field Package: files collect across picker rounds**: Android's picker often returns one file per visit (multi-select needs a long-press most crews don't know). The zip flow now stages picks in a sheet — file list with sizes, per-file remove, "＋ Add more files" reopens the picker, dedupe by name/size/mtime, "Build package (N)" zips. Sheet includes the long-press tip. Zip build and 29.2 one-zip share unchanged.

## Build 29.2 — 2026-09-15
- **Field Package shares as ONE zip**: primary share path now hands WhatsApp the whole `.zip`, typed `text/plain` to pass Chrome-Android's share allow-list (WhatsApp files documents by extension — proven by `.rw5` arriving as a document in the group). Tries `application/zip` second (iOS/desktop take it natively). Falls back to the old loose-files share with a toast, then to Save-ZIP-to-Downloads. Sheet copy updated; button is now "Share ZIP…". Requested by Finny — one zipped folder per job in the group chat.

## Build 29.1 — 2026-09-15
- **Share hand-off cleanup**: dropped the `title` from all `navigator.share` calls (package + single file). WhatsApp printed it as a stray auto-linked text message (the blue "…Field_Package….zip" line in the group), making a successful share look like a failed attachment. No behavior change otherwise — Android still can't take a real .zip from a web app, so Field Package continues to share loose files or save the ZIP to Downloads.

## Build 29 — 2026-08-31
- **Export: pt lists wrap in-column**: long point lists (e.g. `1005,1006,1007`) overlapped the code column on exported setup/GPS rows (GG's 26-3614). New `ptLines()` breaks only after commas (trailing comma hangs into the gutter, ranges like `1005-1010` stay whole), rows grow taller to fit the stack, following rows shift down, struck rows strike every wrapped line. Columns unchanged per Finny's ruling. Fit is measured with the device font at export time; verified by render test (`test_rows.js`).
- **Delete a sketch, PDF-markup or photo page**: 🗑 in the sketch top bar and on the page's card in the page list. Confirm sheet shows the thumbnail, page number, and warns when the page carries symbols with booked inverts (they go with it). UNDO snackbar for 8 s restores the page in its original slot; remaining pages renumber. Sketch, PDF-markup and photo pages only — setup, GPS and notes pages are legal record and carry no delete affordance (guarded in code, not just hidden). Deleting from inside the sketch ends any live Disto walk and returns to the page list. Requested by crews via HS's 26-3601 notes (scribbled sketch pages couldn't be removed).
- **Photo page source chooser + multi-select**: "Photo page" now offers Take a photo / Choose from gallery, and gallery allows selecting several images at once — each becomes its own photo page (single pick opens the page as before; multi-pick lands on the page list with a count toast). Requested by GG. Chooser, and gallery allows multi-select (`multiple` attr) — each image becomes its own photo page, sequentially loaded; single pick opens the page, multi-pick lands on the page list with a count toast. Requested by crew on WhatsApp (Aug 31). Chooser is Take a photo / Choose from gallery (was camera-only via `capture="environment"`). Second file input without `capture`; both feed one handler; `.click()` stays inside the tap gesture per the 28.1 iOS rule.
- **Note deletion + 30-day cleanup**: 🗑 on every note card on the home screen and in the note top bar (old confirm replaced) — confirm sheet, 8-s UNDO, red "phone copy is the ONLY copy" warning on never-exported notes. On app open, notes untouched ≥30 days are offered in a tick-list cleanup prompt (all pre-ticked, unexported flagged red, "Not now" snoozes, asks at most once per day via `efn-cleanask`). Nothing auto-deletes silently — Finny's ruling: all notes eligible, ask-first. Cards within 7 days of the window show "purges in X d". UNDO restores to store and resets the note's 30-day clock.
- **Training**: Sketch tools guide gains the page-delete step.
- Held for Build 30: detail pages (live-view zoom regions), uppercase forcing on sketch text (awaiting ruling).

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
