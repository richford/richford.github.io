/**
 * McGraw-Hill — strategic engineering-leadership hire.
 *
 * URL-only (unlisted). Tailored framing assumes McGraw-Hill is evaluating
 * Adam as a strategic engineering leader who can come into an established
 * ed-tech publisher and bring research credibility + AI fluency + platform
 * discipline. Different from the Step Up variant in that it leans LESS into
 * "scrappy startup" and MORE into "platform at scale, partnerships,
 * governance, transformation."
 *
 * NOTE: this is a first pass without a specific JD in hand. Refine bullets
 * once a McGraw-Hill role is identified — the structure here is the
 * skeleton, not the final pitch.
 */

import type { Resume } from "./types";

export const mcgrawHillResume: Resume = {
  slug: "mcgraw-hill",
  variantName: "McGraw-Hill — Strategic Engineering Hire",
  pdfBasename: "Adam-Richie-Halford-McGrawHill",
  pages: 2,
  unlisted: true,

  name: "Adam Richie-Halford",
  headline:
    "Engineering Leader · Ed-Tech Platforms at Scale · AI in Education · Director of Technology, Stanford ROAR",

  contact: {
    email: "richiehalford@gmail.com",
    web: "richiehalford.org",
    github: "github.com/richford",
    linkedin: "linkedin.com/in/richiehalford",
  },

  summary:
    "Engineering leader who turns research-grade software into K-12 platforms that school districts adopt at scale. As Director of Technology & Innovation for ROAR at Stanford, I built the engineering organization and grew the platform to 309 K-12 districts, 2,700+ schools, and 160K+ students with 870K+ assessment runs — owning architecture, data governance, FERPA-grade student-data handling, and the team's AI engineering practice. Hands-on builder (Nature Methods, SciPy, JOSS) with a track record of operationalizing peer-reviewed measurement science. ROAR is housed in the Stanford Graduate School of Education, with research partnership with the Accelerator for Learning and validation work published in peer-reviewed journals.",

  experience: [
    {
      id: "stanford-roar-director",
      years: "2023 — Present",
      title: "Director of Technology & Innovation",
      org: "Stanford University — ROAR / Graduate School of Education",
      location: "Stanford, CA / Remote",
      bullets: [
        "Own engineering strategy, architecture, and execution for ROAR — a research-grade reading-assessment platform deployed in 309 K-12 districts and 2,708 schools, with 873K+ assessment runs to date and 25+ active district partnerships.",
        "Built and lead a cross-functional team of six engineers; defined the hiring bar, the engineering operating cadence, and the standards for code review, release, and incident response that turn research code into a platform districts can rely on.",
        "Lead a multi-stage platform modernization and data-migration program — onto a TypeScript Vue front-end, Express services, and Postgres with FGA-based authorization — moving fragile research-era logic into explicit, testable services aligned to the user journey (rostering → assignment → assessment delivery → reporting) and preserving integrity for 800K+ historical runs.",
        "Defined the engineering practice around AI — coding agents (Claude Code), AI code review on every PR, generative tests on highest-risk paths, backed by a ~70-page domain-knowledge document that grounds every AI-assisted change.",
        "Inside the product itself, the focus is psychometric integrity: shipping validated reading assessments grounded in modern measurement theory (computerized adaptive testing, latent-ability models, IRT item banks). Validation work in partnership with Stanford's Accelerator for Learning, with results published in peer-reviewed journals.",
        "Technical owner for data governance, privacy, and student safety: system-of-record decisions, retention and deletion practices, least-privilege access, vendor security review, and FERPA-aligned controls on student PII.",
        "Stood up the engineering foundations — monitoring, audit logging, error tracking, CI/CD, environment management, on-call — and instituted release and reliability practices that took ROAR from research-cadence to production-cadence delivery.",
        "Steward the technology budget; manage vendor and contractor relationships; partner with Product, research PIs, district stakeholders, and 40+ college and university collaborators to translate organizational priorities into delivery.",
      ],
    },
    {
      id: "stanford-roar-postdoc",
      years: "2022 — 2023",
      title: "Postdoctoral Scholar & Software Engineer — ROAR",
      org: "Stanford University — Developmental-Behavioral Pediatrics",
      location: "Stanford, CA",
      bullets: [
        "Built browser-based, validated reading assessments — the engineering foundation of what later became the ROAR platform I now lead. Co-authored validation work later published in Frontiers in Education.",
      ],
    },
    {
      id: "uw-data-science-postdoc",
      years: "2020 — 2022",
      title: "Data Science Postdoctoral Fellow & Open-Source Maintainer",
      org: "University of Washington — eScience Institute",
      location: "Seattle, WA",
      bullets: [
        "Designed APIs, shipped releases, and ran the global user community for production-grade open-source software used by neuroimaging labs worldwide — pyAFQ (Nature Methods), Groupyr (JOSS), AFQ-Insight (PLOS Computational Biology), Cloudknot (SciPy 2018).",
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
        "Platform I lead at Stanford. Browser-based, validated assessments for K-12 reading skills deployed in 309 districts with 870K+ runs and FERPA-grade data handling. Housed in the Stanford Graduate School of Education, with research partnership with the Accelerator for Learning and validation work in peer-reviewed journals.",
    },
    {
      name: "pyAFQ — Automated Fiber Quantification",
      description:
        "Open-source neuroimaging analysis library; co-developer; used by research labs worldwide. Published in Nature Methods.",
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
        "Hiring & team building, technical roadmap, sprint operations, incident response, vendor management, cross-functional partnership with Product, Research, and district stakeholders",
    },
    {
      category: "AI Engineering Practice",
      items:
        "Coding agents (Claude Code), AI code review on every PR, generative testing on highest-risk paths, domain-knowledge documentation as scaffolding, evaluation harnesses, prompt-engineering for production systems, AI safety/QA in K-12 contexts",
    },
    {
      category: "Psychometrics & Measurement",
      items:
        "Item-response theory (IRT), computerized adaptive testing (CAT), latent-ability models, validation studies in partnership with Stanford's Accelerator for Learning",
    },
    {
      category: "Platforms & Infrastructure",
      items:
        "Cloud architecture (AWS), CI/CD, observability, Postgres, REST/serverless APIs, browser-based application delivery, performance optimization, multi-language readiness",
    },
    {
      category: "Data, Privacy & Compliance",
      items:
        "FERPA-aligned controls, student-PII governance, least-privilege access, audit logging, retention/deletion, vendor security review, K-12 platform safety workflows",
    },
    {
      category: "Languages",
      items: "Python, TypeScript/JavaScript, SQL, Bash",
    },
  ],
};

export default mcgrawHillResume;
