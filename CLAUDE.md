# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static presentation website (no build step, no `package.json`, no dependencies) for **Clubul Educational PEP**, an after-school program in Galata, Iași. Plain HTML + CSS + vanilla JS. All site content is in **Romanian** — preserve diacritics (ă â î ș ț) in any edits; the fonts are loaded specifically for full Romanian support.

## Run & deploy

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
Opening `index.html` directly works too, but the Google Maps iframe and Google Fonts need internet.

Deploy is automatic: **every push to `main` redeploys on Vercel**. `vercel.json` sets clean URLs and a 1-year immutable cache on `/assets/*` — so when you replace an existing asset, the old version may stay cached; prefer a new filename over overwriting if you need an immediate change to show.

There are no tests, linter, or build commands.

## Architecture

Two largely independent pages — know which one you're editing:

- **`index.html`** — the full one-page site (hero, despre, echipă, program, tarife, meniu, galerie, contact). Links to the **external** `assets/css/style.css` and `assets/js/main.js`.
- **`meniu-saptamana.html`** — a standalone, print/PDF-oriented weekly-menu sheet. It is **fully self-contained**: its own inline `<style>` in `<head>` and its own `:root` CSS variables. It does **not** use `style.css`. Style changes to the main site do not affect it, and vice versa.

`assets/js/main.js` is one vanilla IIFE wiring four things, each guarded by element presence:
1. footer year (`#year`), 2. mobile nav toggle (`#navToggle`/`#navLinks`, toggles `.open`), 3. scroll reveal via `IntersectionObserver` — elements with class `.reveal` get `.in` when visible, 4. the contact form (`#contactForm`) which is a **demo only**: it validates then shows `#formSuccess` and never sends anything. To enable real submissions, wire Formspree / EmailJS / Netlify Forms at the marked spot in `main.js`.

## Conventions

- **Theming**: edit CSS custom properties in `:root` at the top of `assets/css/style.css` (and separately in `meniu-saptamana.html`'s inline `:root`). Avoid hardcoding colors elsewhere.
- **Images** live in `assets/img/`. The brand logo (`logo-pep.jpg`) is a JPEG with a white background — over dark backgrounds (footer, menu header) it's placed on a white rounded card on purpose.
- **Placeholders**: real-world data is still stubbed. The README has a table of markers to replace (e.g. `[Nume Prenume]`, `[X] lei`, `[Numele firmei de catering]`, `contact@pepclub.ro`, school names, the menu itself). Treat bracketed `[...]` text and "*(de confirmat)*" notes as intentionally unfilled.

## Pushing

The repo carries several MB of photos in `assets/img/`. A `git push` may fail with `HTTP 400` because the default HTTP post buffer is too small — if so, run `git config http.postBuffer 524288000` and push again.
