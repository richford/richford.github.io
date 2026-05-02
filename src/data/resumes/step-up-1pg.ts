/**
 * Step Up Tutoring — 1-page compressed variant.
 *
 * Built by selecting/trimming from the canonical 2-page step-up resume.
 * Strategy: keep the summary intact, keep the current-role bullets at 4
 * (the strongest), drop everything before grad school, drop publications
 * and most awards. Skills survive but are condensed.
 *
 * If you change framing, prefer changing step-up.ts and re-deriving here.
 */

import type { Resume, ResumeRoleEntry } from "./types";
import { stepUpResume } from "./step-up";

const pickRole = (id: string, bulletIndices?: number[]): ResumeRoleEntry => {
  const role = stepUpResume.experience.find((r) => r.id === id);
  if (!role) {
    throw new Error(`Role ${id} not found in stepUpResume.experience`);
  }
  return {
    ...role,
    bullets: bulletIndices
      ? bulletIndices.map((i) => role.bullets[i]).filter(Boolean)
      : role.bullets,
  };
};

export const stepUpResume1Page: Resume = {
  ...stepUpResume,
  slug: "step-up-1pg",
  variantName: "Step Up Tutoring — 1-page",
  pdfBasename: "Adam-Richie-Halford-StepUp-1pg",
  pages: 1,
  unlisted: true,

  // Tighter summary tuned for 1-page density.
  summary:
    "Mission-driven engineering leader who ships software for kids on small, scrappy teams. Director of Technology & Innovation for ROAR at Stanford — built the engineering org and grew the platform to 309 districts and 870K+ assessment runs while staying in the code on the critical path. AI-native engineering practice (Claude Code, AI code review, generative testing, ~70-page domain-knowledge document grounding every change). The product itself is grounded in modern measurement science. 10+ years shipping production software, including open-source libraries used by labs worldwide (Nature Methods, SciPy, JOSS).",

  experience: [
    // Current role: 3 strongest bullets (org-building, hands-on, AI engineering).
    pickRole("stanford-roar-director", [0, 1, 2]),
    pickRole("stanford-roar-postdoc", [0]),
    pickRole("uw-data-science-postdoc", [0]),
    pickRole("uw-grad", [0]),
  ],

  // Surface the pre-grad-school breadth as a single short line at the bottom.
  notes: [
    "Earlier: U.S. Peace Corps (Morocco, 2011–13) · NASA JPL (2008–09) · U.S. Air Force officer (LA AFB, 2006–10; AFA Outstanding Young Scientist).",
  ],

  // No projects section on 1-page; we mention pyAFQ/Cloudknot/Groupyr in the summary already.
  projects: undefined,

  // Education: drop bachelor's detail, keep degrees.
  education: stepUpResume.education.map((e) => ({
    ...e,
    detail: e.degree.startsWith("BS") ? undefined : e.detail,
  })),

  // No publications on 1-page.
  selectedPublications: undefined,

  // No awards section on the 1-page variant — DOE fellowship surfaces in education.
  awards: undefined,

  // Skills: collapsed to one combined block.
  skills: [
    {
      category: "Leadership",
      items:
        "Hiring & team building · technical roadmap · sprint ops · incident response · vendor management · cross-functional partnership with Product/Research",
    },
    {
      category: "AI Engineering",
      items:
        "Coding agents (Claude Code, Cursor, Copilot) · generative testing · AI code review · evaluation harnesses · AI safety/QA",
    },
    {
      category: "Platforms",
      items:
        "AWS · CI/CD · observability · Postgres · REST/serverless APIs · browser-based delivery · performance",
    },
    {
      category: "Data & Safety",
      items:
        "FERPA-aligned controls · PII governance · least-privilege access · audit logging · retention/deletion · K-12 platform safety",
    },
    {
      category: "Languages",
      items: "Python · TypeScript · SQL · Bash",
    },
  ],
};

export default stepUpResume1Page;
