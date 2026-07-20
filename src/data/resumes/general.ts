/**
 * Engineering-leadership resume.
 *
 * Audience-agnostic, 2-page, ATS-friendly. This is the single public resume —
 * the one a visitor reaches by clicking "Resume" from the site, and the one the
 * /resume/[slug] renderer and PDF build produce.
 *
 * Framing: engineering leadership, AI-native engineering, ed-tech platforms at
 * scale, open-source, research-to-practice.
 */

import type { Resume } from "./types";

export const generalResume: Resume = {
  slug: "general",
  variantName: "General",
  pdfBasename: "Adam-Richie-Halford-Resume",
  pages: 2,

  name: "Adam Richie-Halford",
  headline:
    "Engineering Leader · Ed-Tech Platforms at Scale · Senior Manager of Engineering, McGraw Hill",

  contact: {
    email: "richiehalford@gmail.com",
    web: "richiehalford.org",
    github: "github.com/richford",
    linkedin: "linkedin.com/in/richiehalford",
  },

  summary:
    "Mission-driven engineering leader who builds software for kids and the adults in their corner. I'm a Senior Manager of Engineering at McGraw Hill, where I lead the integration of ROAR — the K-12 reading-assessment platform I built and led at Stanford, now licensed by McGraw Hill as a third-party assessment. At Stanford, as Director of Technology & Innovation for ROAR, I built the engineering organization from scratch and grew that open-source platform to 309 school districts, 2,700+ schools, and 160K+ students with 870K+ assessment runs. Hands-on builder (Nature Methods, SciPy, JOSS) who treats AI as a force multiplier across the engineering lifecycle and cares about the safety, evaluation, and psychometric-integrity bar required when the users are children.",

  experience: [
    {
      id: "mcgraw-hill",
      years: "2026 — Present",
      title: "Senior Manager of Engineering",
      org: "McGraw Hill — Insights, Personalization & Assessment",
      location: "Remote",
      bullets: [
        "Lead the engineering integration of ROAR — the K-12 reading-assessment platform I built and led at Stanford — into McGraw Hill's assessment offering, where it is licensed as a third-party assessment.",
        "Work on assessment engineering more broadly within the Insights, Personalization & Assessment group.",
      ],
    },
    {
      id: "stanford-roar-director",
      years: "2023 — 2026",
      title: "Director of Technology & Innovation",
      org: "Stanford University — ROAR / Graduate School of Education",
      location: "Stanford, CA / Remote",
      bullets: [
        "Built the engineering organization from one to six and scaled ROAR from a research prototype to a platform serving 309 K-12 districts, 2,708 schools, and 160K+ students with 873K+ assessment runs.",
        "Stayed hands-on with the codebase while owning roadmap, hiring, and team cadence. Sprint planning, technical reviews, releases, and delivery reporting all sat with me.",
        "Pioneered AI-accelerated engineering on the team. Coding agents (Claude Code), AI code review on every PR, and generative tests on the code paths where mistakes would matter most. All of it backed by a ~70-page domain-knowledge document that grounds every AI-assisted change.",
        "Inside the product itself, the focus was psychometric integrity: shipping validated reading assessments grounded in modern measurement theory (computerized adaptive testing, latent-ability models, IRT item banks). Validation work in partnership with Stanford's Accelerator for Learning, with results published in peer-reviewed journals.",
        "Technical owner for data governance, privacy, and user safety on a K-12 platform. System-of-record decisions, retention and deletion, least-privilege access, vendor security review, and FERPA-aligned controls on student PII.",
        "Stood up the engineering foundations: monitoring, audit logging, error tracking, CI/CD, environment management, on-call. The work that turned a research codebase into something districts trust for classroom use.",
        "Led a multi-stage platform modernization onto a TypeScript Vue front-end, Express services, and Postgres with FGA-based authorization. The work moved fragile research-era logic into explicit, testable services aligned to the user journey (rostering → assignment → assessment delivery → reporting). 800K+ historical assessment runs migrated without a single integrity incident.",
        "Ran the technology budget and the vendor stack. Partnered directly with Product, research PIs, and district stakeholders to translate ambiguous organizational priorities into shippable scope.",
      ],
    },
    {
      id: "stanford-roar-postdoc",
      years: "2022 — 2023",
      title: "Postdoctoral Scholar & Software Engineer — ROAR",
      org: "Stanford University — Developmental-Behavioral Pediatrics",
      location: "Stanford, CA",
      bullets: [
        "Built browser-based, validated reading assessments. This was the engineering foundation of what later became the ROAR platform I went on to lead. TypeScript front-end, Python data pipelines, hand-tuned for cross-device delivery in real classrooms.",
      ],
    },
    {
      id: "uw-data-science-postdoc",
      years: "2020 — 2022",
      title: "Data Science Postdoctoral Fellow & Open-Source Maintainer",
      org: "University of Washington — eScience Institute",
      location: "Seattle, WA",
      bullets: [
        "Designed APIs, shipped releases, and ran the user community for open-source software used by labs worldwide: pyAFQ (Nature Methods), Groupyr (JOSS), AFQ-Insight (PLOS Computational Biology), Cloudknot (SciPy 2018). Reviewed external PRs, triaged issues, and owned the release pipeline.",
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
        "Platform I built and led at Stanford, now licensed by McGraw Hill as a third-party assessment. Browser-based, validated assessments for K-12 reading skills deployed in 309 districts with 870K+ runs and FERPA-grade data handling. Housed in the Stanford Graduate School of Education, with research partnership with the Accelerator for Learning and validation work in peer-reviewed journals.",
    },
    {
      name: "pyAFQ — Automated Fiber Quantification",
      description:
        "Open-source neuroimaging analysis library; co-developer; used by labs worldwide. Published in Nature Methods.",
    },
    {
      name: "Cloudknot",
      description:
        "Python library that lets researchers run existing code on AWS Batch with minimal config. Created and maintain. Published at SciPy 2018.",
    },
    {
      name: "Groupyr",
      description:
        "Sparse group lasso for high-dimensional ML, scikit-learn compatible. Lead developer. Published in JOSS.",
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

  awards: undefined,

  notes: [
    "Honors: DOE Computational Science Graduate Fellowship (2013–17) · UW Data Science Postdoctoral Fellowship (2020) · AWS Cloud Credits for Research ($40K total, 2022 + 2016) · AFA General Phillips Award — Outstanding Young Scientist (2009).",
  ],

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

export default generalResume;
