/**
 * Step Up Tutoring — Staff Engineer (Director of Engineering scope) resume.
 *
 * Tailored for the JD's emphasis on:
 *   - AI-accelerated engineering as a force multiplier on a small team
 *   - Platform rebuild / data migration leadership
 *   - Privacy / safety / FERPA on a K-12 platform
 *   - Reliability fundamentals (monitoring, incident response, CI/CD)
 *   - Strategic partnership with Product
 *   - Mission-driven ed-tech with district partners
 *
 * Default render: 2 pages. A 1-page compressed variant is generated from
 * step-up-1pg.ts, which selects a subset of these bullets/roles.
 */

import type { Resume } from "./types";

export const stepUpResume: Resume = {
  slug: "step-up",
  variantName: "Step Up Tutoring — Staff Engineer",
  pdfBasename: "Adam-Richie-Halford-StepUp",
  pages: 2,
  unlisted: true,

  name: "Adam Richie-Halford",
  headline:
    "Engineering Leader for K-12 Ed-Tech · AI-Native Builder · Director of Technology, Stanford ROAR",

  contact: {
    email: "richiehalford@gmail.com",
    web: "richiehalford.org",
    github: "github.com/richford",
    linkedin: "linkedin.com/in/richiehalford",
    location: "Remote",
  },

  summary:
    "Mission-driven engineering leader who builds software for kids and the adults in their corner. As Director of Technology & Innovation for ROAR at Stanford, I built the engineering organization from scratch and grew the platform to 309 K-12 school districts and 870K+ assessment runs. I lead a lean team that delivers like one many times its size, and I still write code on the things that matter most. Ten+ years shipping production software, from open-source libraries used by labs worldwide (Nature Methods, SciPy, JOSS) to a K-12 classroom platform with FERPA-grade data handling and validated psychometric assessments. I treat AI as a force multiplier across the engineering lifecycle — coding agents, AI code review, and generative testing on the highest-risk paths — and care deeply about the safety, evaluation, and integrity bar required when the users are children.",

  experience: [
    {
      id: "stanford-roar-director",
      years: "2023 — Present",
      title: "Director of Technology & Innovation",
      org: "Stanford University — ROAR / Graduate School of Education",
      location: "Remote / Stanford, CA",
      bullets: [
        "Built the engineering org from one to six and scaled ROAR from a research prototype to a platform serving 309 K-12 districts, 2,708 schools, and 160K+ students with 873K+ assessment runs — operating on a nonprofit-research budget against a continually growing district roster.",
        "Stay hands-on on the critical path: still ship code, drive incidents, and pair with engineers on hard problems while owning roadmap, hiring, and operating cadence (sprint planning, technical reviews, release, delivery reporting).",
        "Pioneered AI-accelerated engineering on the team — coding agents (Claude Code), AI code review on every PR, generative tests on the highest-risk paths — backed by a ~70-page domain-knowledge document that grounds every AI-assisted change. The discipline that determines whether AI accelerates a small team or distracts it.",
        "Inside the product itself, the focus is psychometric integrity: shipping validated reading assessments grounded in modern measurement theory (computerized adaptive testing, latent-ability models, IRT item banks). Validation work in partnership with Stanford's Accelerator for Learning, with results published in peer-reviewed journals.",
        "Technical owner for data governance, privacy, and user safety on a K-12 platform: system-of-record decisions, retention/deletion, least-privilege access, vendor security review, and FERPA-aligned controls on student PII for a platform serving children.",
        "Stood up the engineering foundations — monitoring, audit logging, error tracking, CI/CD, environment management, on-call — that turned a research codebase into something districts trust for daily classroom use; reliability moved from best-effort to a platform schools schedule around.",
        "Leading a multi-stage platform modernization onto a TypeScript Vue front-end, Express services, and Postgres with FGA-based authorization — moving fragile research-era logic into explicit, testable services aligned to the user journey (rostering → assignment → assessment delivery → reporting) and de-risking the migration of 800K+ historical assessment runs without a single integrity incident.",
        "Run the technology budget and the vendor stack; partner directly with Product, research PIs, and district stakeholders to translate ambiguous organizational priorities into shippable scope on a small-team timeline.",
      ],
    },
    {
      id: "stanford-roar-postdoc",
      years: "2022 — 2023",
      title: "Postdoctoral Scholar & Software Engineer — ROAR",
      org: "Stanford University — Developmental-Behavioral Pediatrics",
      location: "Stanford, CA",
      bullets: [
        "Built browser-based, validated reading assessments — the engineering foundation of what later became the ROAR platform I now lead. TypeScript front-end, Python data pipelines, hand-tuned for cross-device delivery in real classrooms.",
      ],
    },
    {
      id: "uw-data-science-postdoc",
      years: "2020 — 2022",
      title: "Data Science Postdoctoral Fellow & Open-Source Maintainer",
      org: "University of Washington — eScience Institute",
      location: "Seattle, WA",
      bullets: [
        "Designed APIs, shipped releases, and ran the user community for production-grade open-source software used by labs worldwide — pyAFQ (Nature Methods), Groupyr (JOSS), AFQ-Insight (PLOS Computational Biology), Cloudknot (SciPy 2018). Reviewed external PRs, triaged production-grade issues, and owned the release pipeline.",
      ],
    },
    {
      id: "uw-grad",
      years: "2013 — 2020",
      title: "Graduate Research Assistant — DOE Computational Science Fellow",
      org: "University of Washington — Department of Physics",
      location: "Seattle, WA",
      bullets: [
        "PhD in computational physics on a DOE Computational Science Graduate Fellowship; ran Monte Carlo simulations on world-class supercomputers; lead-author result published in Physical Review Letters. Founding president of the UW Research Computing Club ($1M+ in shared compute) and member of the UW Hyak HPC Governance Board.",
      ],
    },
    {
      id: "peace-corps",
      years: "2011 — 2013",
      title: "Rural Health Educator",
      org: "United States Peace Corps — Kingdom of Morocco",
      bullets: [
        "Designed and managed federally funded youth-health-education projects in rural schools; co-organized Morocco's first national English spelling bee with local educators and a U.S. embassy program.",
      ],
    },
    {
      id: "nasa-jpl",
      years: "2008 — 2009",
      title: "Visiting Scientist",
      org: "NASA Jet Propulsion Laboratory — Communications Ground Systems",
      location: "Pasadena, CA",
      bullets: [
        "Pioneered a new space-weather measurement technique from Cassini radio-scintillation data; received the AFA General Phillips Award for Outstanding Young Scientist of the Year.",
      ],
    },
    {
      id: "usaf-systems-engineer",
      years: "2006 — 2010",
      title: "Officer / Systems Engineer & Lead Space Systems Analyst",
      org: "United States Air Force — Space and Missile Systems Center",
      location: "Los Angeles AFB, CA",
      bullets: [
        "Led the technology investment plan linking a $2.4B lab budget to a $12B satellite R&D portfolio, aligning a 21-person cross-functional group of contractors, civilians, and Air Force officers around shared priorities; later program-managed an $8M software platform used by 75+ DoD and industry users.",
      ],
    },
  ],

  projects: [
    {
      name: "ROAR — Rapid Online Assessment of Reading",
      description:
        "Platform I lead at Stanford. Browser-based, validated reading assessments deployed in 309 K-12 districts with 870K+ runs and FERPA-grade data handling. Housed in the Stanford Graduate School of Education, with research partnership with the Accelerator for Learning and validation work in peer-reviewed journals.",
      links: [{ label: "roar.stanford.edu", href: "https://roar.stanford.edu/" }],
    },
    {
      name: "pyAFQ — Automated Fiber Quantification",
      description:
        "Open-source neuroimaging analysis library; co-developer; used by labs worldwide. Published in Nature Methods.",
      links: [
        { label: "github.com/yeatmanlab/pyAFQ", href: "https://github.com/yeatmanlab/pyAFQ" },
      ],
    },
    {
      name: "Cloudknot",
      description:
        "Python library that lets researchers run existing code on AWS Batch with minimal config. Created and maintain. Published at SciPy 2018.",
      links: [
        { label: "github.com/nrdg/cloudknot", href: "https://github.com/nrdg/cloudknot" },
      ],
    },
    {
      name: "Groupyr",
      description:
        "Sparse group lasso for high-dimensional ML, scikit-learn compatible. Lead developer. Published in JOSS.",
      links: [
        { label: "github.com/richford/groupyr", href: "https://github.com/richford/groupyr" },
      ],
    },
  ],

  education: [
    {
      years: "2013 — 2020",
      degree: "PhD, Physics",
      institution: "University of Washington, Seattle",
      detail:
        "DOE Computational Science Graduate Fellow. Thesis: Quantum Monte Carlo Studies of the BCS-BEC Crossover.",
    },
    {
      years: "2008 — 2010",
      degree: "MS, Physics",
      institution: "California State University, Long Beach",
    },
    {
      years: "2001 — 2006",
      degree: "BS, Engineering Physics",
      institution: "Embry-Riddle Aeronautical University",
      detail: "Summa Cum Laude. Minor in Mathematics.",
    },
  ],

  // Awards rendered inline as a single paragraph (see notes) — keeps the
  // section short and ATS-readable without a dedicated header taking space.
  awards: undefined,

  notes: [
    "Honors: DOE Computational Science Graduate Fellowship (2013–17) · UW Data Science Postdoctoral Fellowship (2020) · AWS Cloud Credits for Research ($40K total, 2022 + 2016) · AFA General Phillips Award — Outstanding Young Scientist (2009).",
  ],

  // Publications intentionally omitted from the Step Up resume to keep a tight
  // 2-page engineering-leadership focus. They live on the long-form /cv page.
  selectedPublications: undefined,

  skills: [
    {
      category: "Engineering Leadership",
      items:
        "Hiring & team building, technical roadmapping, sprint operations, incident response, vendor management, cross-functional partnership with Product/Research/Operations",
    },
    {
      category: "AI-Accelerated Engineering",
      items:
        "Coding agents (Claude Code, Cursor, Copilot), generative testing, AI code review, evaluation harnesses, prompt-engineering for production systems, AI safety/QA practices",
    },
    {
      category: "Platforms & Infrastructure",
      items:
        "Cloud architecture (AWS), CI/CD, monitoring & observability, Postgres, REST/serverless APIs, browser-based application delivery, performance optimization",
    },
    {
      category: "Data, Privacy & Safety",
      items:
        "FERPA-aligned controls, PII governance, least-privilege access, audit logging, retention/deletion, vendor security review, K-12 platform safety workflows",
    },
    {
      category: "Languages",
      items: "Python, TypeScript/JavaScript, SQL, Bash",
    },
  ],
};

export default stepUpResume;
