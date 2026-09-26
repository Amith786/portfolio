# Amith Anand — Portfolio

A personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

The build output goes to `dist/`.

## Project structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer
│   ├── sections/     Hero, About, Experience, Education, Research,
│   │                 Achievements, Certifications, Projects, Contact,
│   │                 and their card/modal sub-components
│   └── ui/            Shared primitives — Modal, Reveal, SectionHeading,
│                       PlaceholderImage, BrandIcons
├── data/               All content lives here as plain TypeScript objects.
│                       Edit these files to update the site — you generally
│                       never need to touch a component to change content.
├── lib/                Language context + small hooks (scroll-spy, reveal)
├── assets/             Drop your own images into the matching subfolder
├── App.tsx
└── main.tsx
```

## How to add your content

Everything below is a plain edit to a file in `src/data/` or `src/assets/` —
no component code needs to change.

| What | File to edit | Notes |
|---|---|---|
| **Profile photo** | `src/data/profile.ts` → `photo.src` | Drop the image in `src/assets/profile/` first, e.g. `src/assets/profile/amith.jpg`, then set `photo.src = "/src/assets/profile/amith.jpg"`. Until set, the hero shows a placeholder silhouette. |
| **CV / résumé** | `src/data/profile.ts` → `cvUrl` | Drop the PDF in `src/assets/profile/` and point `cvUrl` at it. |
| **Email** | `src/data/profile.ts` → `email` | Used by the footer, contact section and mailto links. |
| **GitHub / LinkedIn** | `src/data/profile.ts` → `socials` | Set `url` and flip `isPlaceholder` to `false`. |
| **Project images** | `src/data/projects.ts` → each project's `image` | Drop files in `src/assets/projects/`. |
| **Project GitHub/demo links** | `src/data/projects.ts` → `githubUrl` / `demoUrl` | |
| **Certificates** | `src/data/certifications.ts` | Add `image` (from `src/assets/certificates/`) and `credentialUrl`. |
| **Achievements** | `src/data/achievements.ts` | Add `image` (from `src/assets/achievements/`), `date`, `description`. |
| **Journals** | `src/data/research.ts` | Fill in `journal`, `doi`, `publisherUrl`, `pdfUrl`, `certificateUrl`, `presentationUrl`, `githubUrl`, `bibtex` as each becomes available. Any field left as `""` renders as "to be added" automatically. |
| **Conferences** | `src/data/conferences.ts` | Same pattern — replace the placeholder entry, or add more the same way. |
| **Experience / Education** | `src/data/experience.ts`, `src/data/education.ts` | |
| **Skills** | `src/data/skills.ts` | Grouped by category; add/remove strings freely. |
| **German translations** | `src/data/translations.ts` | Navigation, headings and buttons are translated; long-form bio/project copy is intentionally left in English for now (see the comment at the top of the file) — extend it if you want full localisation. |

## Contact form

The contact form (`src/components/sections/Contact.tsx`) is frontend-only —
it doesn't send anything yet. There's a comment right in the `onSubmit`
handler showing exactly where to add **Formspree** or **EmailJS** to make it
functional; both are drop-in with no backend needed.

## Deploying

**Vercel / Netlify:** connect the repo (or drag-and-drop the `dist/` folder
after `npm run build`) — both auto-detect Vite. Build command
`npm run build`, output directory `dist`.

**GitHub Pages:**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://<user>.github.io/<repo>"` to `package.json`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. If deploying to a subpath, set `base: "/<repo>/"` in `vite.config.ts`
5. `npm run deploy`

## Notes

- Motion respects `prefers-reduced-motion` throughout.
- Every image slot falls back to a quiet abstract placeholder until you add
  a real file — nothing needs code changes to swap them in.
- No PDF design reference was attached when this was built, so the visual
  system (warm paper/void palette, gold accent, Fraunces + Inter type) was
  designed from the written brief. Swap tokens in `tailwind.config.js` if you
  want to adjust it once you compare against your reference.
