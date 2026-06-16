## Overview

Build a polished dark-mode personal portfolio for **Shruthi Ram R S** — Digital Marketing & Data Science — using the four mockup screenshots as the exact visual spec and the uploaded resume as the source of truth for content.

## Design System

- Dark theme: near-black background (`#0B0B0D`), elevated card surface (`#15151A`), subtle borders
- Accent: vivid orange `#FF6A1A` → gradient to softer `#FF8A3D`
- Typography: clean sans (Inter or similar) for body, bold display weight for hero headings; small-caps uppercase mono labels (e.g. `CORE COMPETENCIES`, `PROFESSIONAL JOURNEY`)
- All tokens defined in `src/styles.css` as semantic CSS variables (no hardcoded colors in components)
- Reusable primitives: rounded cards (`rounded-2xl`), gradient orange CTA button, ghost button, mono uppercase eyebrow label

## Routes (TanStack Start, file-based)

```
src/routes/
  __root.tsx       → shared <Nav /> + <Footer />, html head defaults
  index.tsx        → Home
  about.tsx        → About / Skills
  work.tsx         → Experience
  projects.tsx     → Projects
```

Shared nav links: Home · About · Work · Projects + orange "Get in Touch" CTA (mailto). Each route gets its own `head()` with unique title + meta description.

## Page content (from resume + mockups)

**Home (`/`)**
- Hero: "Hey, I'm Shruthi. Digital Marketing & Data Science" + intro paragraph, `View Projects` + `My Journey` buttons, stat card (e.g. "Research Papers Published: 2", "Top 3 in M.Sc cohort")
- Objective & Vision (two-paragraph objective adapted from resume) + 4 capability cards: Predictive Analytics, Omnichannel Strategy, Growth Engineering, Visual Content
- Professional Ecosystem: 3 numbered cards — 01 Growth (Social Media Management), 02 Analytics (Power BI / Tableau / SQL), 03 Creative (Content Strategy)
- Featured Projects preview (3 cards linking to /projects): E-RCBLM, Hybrid BioNER, Climate Crop Recommendation
- "Ready to Accelerate?" CTA band

**About (`/about`)**
- Hero: "Engineering Growth through Data & Logic" eyebrow `CAPABILITIES & MILESTONES`
- Expertise Matrix: Programming (Python, SQL, Automation), Digital Marketing (SEO, SSM), Analytical Toolkit (SEMrush, Power BI, SQL), with side chips for SEO / SSM specialties
- Validation & Achievements: numbered list — Top 3 M.Sc cohort, Scopus-indexed publications, Kaggle + Code Galatta certifications, Power BI workshop
- Closing CTA card "Ready to start a Growth project?" → Email Me / LinkedIn

**Projects (`/projects`)**
- Eyebrow `SELECTED WORKS 2026`, headline "Engineering Intelligence. Shaping Digital Growth."
- Featured project card: **E-RCBLM: Long-Document Summarization** (Python, PyTorch, Scopus Indexed) + body + "View Case Study"
- Two side-by-side: **Hybrid Biomedical NER** (Scikit-learn, Scopus), **Climate-Based Crop Recommendation** (Python, Flask)
- "Behind the Designs" + orange "Let's build something meaningful together" card with `Say Hello` button

**Work (`/work`)**
- Eyebrow `PROFESSIONAL JOURNEY`, "Merging Data with Strategy."
- Vertical alternating timeline with 3 experience entries from resume: Aikyne Technologies (current), ANTIMARKETED (remote), Elevate Labs (data analyst)
- Education: M.Sc Data Science (Kalasalingam, In Progress), B.Sc Mathematics (St Xavier's, Completed)
- Tech Stack chips row: Python, Power BI, SQL, SEO Strategy, SSM, Google Analytics, Data Visualization
- Closing "Let's build something meaningful together" CTA card

**Footer** (all pages): "Shruthi Ram R S" + LinkedIn / GitHub / Twitter / Email links + copyright line "© 2026 Shruthi Ram R S · Built with Precision"

## Project images

The mockups use stylized 3D/orange-circuit imagery for the project cards. Generate 3 abstract dark+orange tech images via `imagegen` (E-RCBLM circuit, BioNER DNA, Crop/landscape grid) and a hero portrait-style decorative image for the home hero data card. No real photo of Shruthi will be invented — the home hero right-side card will instead show a stylized stats/data visual.

## Technical notes

- Pure presentation; no backend, no Lovable Cloud
- All copy uses real resume data; placeholders like phone/email kept generic with `mailto:` link (use a placeholder address the user can swap)
- Mobile responsive: nav collapses, grids stack, timeline becomes single column
- SEO: unique `<title>` + meta description per route, single H1 per page, semantic sections

## Out of scope

- Contact form / backend
- Blog / CMS
- Individual project case-study sub-pages (the "View Case Study" link can scroll/anchor or be omitted for now)

Please confirm and I'll build it. Let me know if you'd like a different accent color, a contact form, or real case-study sub-pages added.