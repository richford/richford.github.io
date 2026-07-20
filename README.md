# richiehalford.org

Personal site, long-form CV, and tailored resumes — all built from one repo.

Stack: [Astro](https://astro.build/) + Tailwind v4 + a Playwright-driven build
step that renders each tailored resume to a PDF.

## Site map

```
/                              landing
/about                          about + how-i-work
/projects                       project cards (ROAR, pyAFQ, Cloudknot, …)
/cv                             long-form academic CV (web view + print)
/resume/<slug>                  tailored, ATS-friendly resume (web view)
/resumes/<basename>.pdf         the printed PDF, generated at build time
```

## Project structure

```
src/
├── components/                ProjectCard, TimelineItem
├── data/
│   ├── cv.ts                  master CV record (long-form, academic-style)
│   └── resumes/
│       ├── types.ts           Resume type + factory contract
│       ├── general.ts         the resume (2-page, ATS-friendly)
│       └── index.ts           registry consumed by /resume/[slug]
├── layouts/Layout.astro       site chrome (nav, footer)
├── pages/
│   ├── index.astro            hero
│   ├── about.astro            about + how-i-work
│   ├── projects.astro         project cards
│   ├── cv.astro               long-form CV
│   └── resume/[slug].astro    dynamic resume renderer
└── styles/
    ├── global.css
    ├── cv-print.css           print rules for /cv
    └── resume-print.css       print rules for /resume/<slug>
scripts/
├── generate-pdf.mjs           builds dist/cv.pdf (long-form)
└── generate-resumes.mjs       builds dist/resumes/<basename>.pdf for each variant
```

## Adding a new tailored resume

1. Create `src/data/resumes/<slug>.ts` exporting a `Resume` (see `general.ts` for shape).
2. Register it in `src/data/resumes/index.ts`.
3. Add the slug + pdfBasename pair to `loadResumes()` in `scripts/generate-resumes.mjs`.
4. `npm run build && npm run resumes`. The PDF lands in `dist/resumes/<basename>.pdf` and the
   page is at `/resume/<slug>`.

ATS guidance baked into the system: single-column, system fonts, real text (no images
of text), real `<h1>`/`<h2>`/`<h3>`, no headers/footers in the printable area.

## Commands

| Command              | What it does                                                     |
| :------------------- | :--------------------------------------------------------------- |
| `npm run dev`        | Local dev server on `localhost:4321`                             |
| `npm run build`      | Static build to `./dist/`                                        |
| `npm run preview`    | Preview the built site                                           |
| `npm run pdf`        | Render `/cv` to `dist/cv.pdf`                                    |
| `npm run resumes`    | Render each tailored resume to `dist/resumes/<basename>.pdf`     |
| `npm run build:all`  | `build` + `pdf` + `resumes` — what your deploy pipeline should run |

`npm run resumes` requires `npm run build` to have completed first, since it serves
the freshly built dist/ via `astro preview` to a headless Chromium.

## Deploying

The deploy expects `dist/` (Cloudflare Pages, GitHub Pages, Netlify all work). Make
sure your CI runs `npm run build:all` rather than just `npm run build` so the
resume PDFs ship alongside the site.
