# PEP Club Educational — Site de prezentare

Website static de prezentare pentru **Clubul Educational PEP** (after-school), Galata, Iași.
Construit cu HTML + CSS + JavaScript simplu — fără dependențe de build. Se poate găzdui oriunde
(GitHub Pages, Netlify, Vercel, hosting clasic) sau deschide direct în browser.

## Structură

```
PepClubEducational/
├── index.html              # Pagina principală (toate secțiunile)
├── meniu-saptamana.html    # „Meniul Săptămânii” – pagină printabilă / PDF
├── README.md
└── assets/
    ├── css/style.css       # Tot stilul
    ├── js/main.js          # Meniu mobil, reveal la scroll, formular
    └── img/                # Pune aici fotografiile reale
```

## Cum îl rulezi local

Deschide `index.html` în browser. Pentru hartă și fonturi e nevoie de internet.
Recomandat, un server local:

```bash
cd PepClubEducational
python3 -m http.server 8000
# apoi deschide http://localhost:8000
```

## Secțiuni incluse

- **Hero** + benzi de încredere (transport ISCTR, raport 10–12, catering DSV)
- **Despre noi / Misiune / Povestea din spate** (de ce a fost creat clubul)
- **Filozofia educațională** (educație prin blândețe + reguli clare)
- **Echipa** — prezentare „umană”: poză + citat personal pentru fiecare cadru
- **Program zilnic** — orar detaliat (timeline, oră cu oră)
- **Logistică / transport** — preluarea de la școală, explicată pas cu pas
- **Efectuarea temelor** — raport max. 10–12 copii/cadru, gestionarea ritmurilor
- **Opționale** — incluse vs. extra (limbi, robotică, sport, artă, muzică, vară)
- **Tarife** — pachete transparente + costuri masă/transport
- **Meniu &amp; Nutriție** — sursă (catering DSV) + buton de descărcare meniu (calorii, alergeni, alternative)
- **Galerie** foto/video
- **Contact &amp; locație** — hartă Google Maps, formular, școlile deservite

## De completat cu date reale (placeholdere)

Caută și înlocuiește în `index.html` și `meniu-saptamana.html`:

| Marcaj / text | Ce să pui |
|---|---|
| `[Nume Prenume]` (secțiunea Echipa) | Numele reale ale cadrelor + pozele lor |
| Citatele echipei | Citate personale reale |
| `[X] lei` (Tarife) | Prețurile reale ale pachetelor și extra-urilor |
| `[Numele firmei de catering]` | Firma de catering reală **sau** „bucătărie proprie autorizată DSV” |
| Meniul din `meniu-saptamana.html` | Meniul real + caloriile/alergenii corecți |
| `Școala Nr. X` / `Școala „[Nume]”` | Școlile reale de unde se face preluarea |
| Adresă marcată *(de confirmat)* | Confirmă adresa exactă (apare și ca `Șos. Voinești 17`) |
| `contact@pepclub.ro` *(de confirmat)* | Adresa de email reală |
| Telefon `0756 266 338` | Confirmă numărul |
| Casetele din **Galerie** | Fotografii reale (`assets/img/`) |
| Emoji-urile ca placeholder foto | Înlocuiește cu `<img>` reale |

> Datele de contact au fost preluate din listări publice (Facebook, listinguri locale) și sunt
> marcate „de confirmat”. Verifică-le înainte de publicare.

## Conectarea formularului de contact

Formularul e momentan demo (afișează doar mesaj de succes). Pentru trimitere reală, în `assets/js/main.js`
conectează un serviciu fără backend: **Formspree**, **EmailJS** sau **Netlify Forms**.

## Găzduire pe Vercel

Site static, fără build. Proiectul include `vercel.json` (clean URLs + cache pentru `assets/`).

**Varianta 1 — din interfața Vercel (recomandat):**
1. Intră pe [vercel.com](https://vercel.com) → *Add New… → Project*.
2. Importă repo-ul de GitHub `pep-club-educational`.
3. Framework Preset: **Other** · Build Command: *(gol)* · Output Directory: *(gol / root)*.
4. *Deploy*. Fiecare `git push` pe `main` redeployează automat.

**Varianta 2 — din terminal:**
```bash
npm i -g vercel
vercel        # preview
vercel --prod # producție
```

## Personalizare rapidă

- **Culori:** variabilele din `:root` în `assets/css/style.css`.
- **Fonturi:** Fraunces (titluri, serif premium) + Inter (text), din Google Fonts — ambele cu suport complet pentru diacritice românești (ă â î ș ț).
- **Hartă:** în `index.html`, înlocuiește adresa din `src` al `<iframe>`-ului hărții.
