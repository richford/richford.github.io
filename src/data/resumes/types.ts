/**
 * Resume variant system.
 *
 * One canonical CV record (src/data/cv.ts) plus per-variant overlays.
 * Each variant picks which sections appear, which roles appear, and may
 * override role bullets/titles to tailor framing for a specific audience.
 *
 * Pages render the resolved Resume — they don't know about variants.
 */

export interface ContactInfo {
  email: string;
  phone?: string;
  web: string;
  github?: string;
  linkedin?: string;
  location?: string;
}

export interface ResumeRoleEntry {
  /** Stable id used by variants to select/override roles. Must match cv.ts. */
  id: string;
  years: string;
  title: string;
  org: string;
  /** Optional location string ("Remote", "Stanford, CA", etc.). */
  location?: string;
  bullets: string[];
}

export interface ResumeEducationEntry {
  years: string;
  degree: string;
  institution: string;
  detail?: string;
}

export interface ResumeProjectEntry {
  name: string;
  description: string;
  links?: { label: string; href: string }[];
}

export interface ResumePublicationEntry {
  year: number;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
}

export interface ResumeAward {
  year: string | number;
  title: string;
  detail?: string;
}

export interface Resume {
  /** URL slug, e.g. "general". */
  slug: string;
  /** Display name of this resume, e.g. "General". */
  variantName: string;
  /** PDF filename (without extension). */
  pdfBasename: string;
  /** Target page count — used by print CSS to choose density. */
  pages: 1 | 2;
  /**
   * If true, the variant renders at /resume/<slug> and gets a PDF, but is
   * deliberately not surfaced in nav, the CV page callout, or any toggle.
   * Use for tailored resumes that should only be reached by direct link
   * (e.g. shared in a job application).
   */
  unlisted?: boolean;
  name: string;
  /** Headline under the name, e.g. "AI-Native Engineering Leader · Ed-Tech". */
  headline: string;
  contact: ContactInfo;
  /** 2-4 sentence positioning statement. */
  summary: string;
  /** Ordered list of roles to show. */
  experience: ResumeRoleEntry[];
  /** Optional projects/open-source highlights. */
  projects?: ResumeProjectEntry[];
  education: ResumeEducationEntry[];
  /** Selected publications (use sparingly on tailored resumes). */
  selectedPublications?: ResumePublicationEntry[];
  awards?: ResumeAward[];
  skills?: { category: string; items: string }[];
  /** Anything you want at the very bottom. */
  notes?: string[];
}

/**
 * A variant takes the canonical CV plus extra context and returns a Resume.
 * Implementations live in src/data/resumes/<slug>.ts.
 */
export type ResumeVariantFactory = () => Resume;
