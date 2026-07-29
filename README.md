# Elevate Field Notes — setup guide

A field-book app for survey crews: header page, instrument setups, grid sketches,
PDF markup, photo pages, dictation, and one-tap PDF export to WhatsApp.
Works offline once installed. No accounts, no server — notes live on each phone.

## Files
- `index.html` — the whole app
- `sw.js` — offline cache (service worker)
- `manifest.json`, `icon-192.png`, `icon-512.png` — install/home-screen support

## Host it free on GitHub Pages (~5 min, once)
1. Create a GitHub account (or use an existing one) and click **New repository**.
   Name it `fieldnotes`, set it to Public, create.
2. Click **uploading an existing file** and drag in all 5 files. Commit.
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / root → Save.
4. After a minute your app is live at `https://YOURNAME.github.io/fieldnotes/`

## Crew install (each phone, once)
- **iPhone:** open the link in Safari → Share → **Add to Home Screen**
- **Android:** open the link in Chrome → menu ⋮ → **Add to Home screen / Install app**

Open it once while online; after that it works with no signal.

## Daily use
1. New note → fill the header (job #, address, purpose, crew, equipment, weather)
2. Add pages: **Setup** (⊼/BS/HI/HT/ΔH/ΔV + tie lines), **Sketch**, **Mark up a PDF**, **Photo**
3. Export PDF → share sheet → WhatsApp group. The filename
   (`26-3568_Field_Notes_Jul_28__2026.pdf`) matches the office intake convention,
   so the field-data-intake skill files it into the job's Field/Data folder.

## Notes on legal-notes behaviour
- Setup values, once saved, can't be silently changed: edits strike through the old
  value (kept on the PDF) and record the new one.
- Tie/check lines, once saved, are struck (⊘) rather than deleted.

## Dictation
- The 🎙 button uses the phone's speech recognition (Android/Chrome; needs signal).
- On any phone, the keyboard mic key also dictates into every field — works offline.

## Limits in v1
- PDF markup and export need the two library files cached — open the app online once
  after install and they're saved for offline use.
- Notes are per-phone. Clearing browser data clears notes, so export at end of day.
