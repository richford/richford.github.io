/**
 * Registry of resume variants.
 *
 * Add a new variant by:
 *   1. Creating src/data/resumes/<slug>.ts that exports a Resume.
 *   2. Importing it here and adding it to `resumes`.
 *
 * The /resume/[slug] page renders any registered variant. The PDF build
 * script generates one PDF per registered variant. Listed variants are
 * surfaced in nav/toggle UI; variants with `unlisted: true` render at
 * their URL but are hidden from any UI surface.
 */

import type { Resume } from "./types";
import { generalResume } from "./general";
import { stepUpResume } from "./step-up";
import { stepUpResume1Page } from "./step-up-1pg";
import { mcgrawHillResume } from "./mcgraw-hill";

export const resumes: Resume[] = [
  generalResume,
  stepUpResume,
  stepUpResume1Page,
  mcgrawHillResume,
];

/** Resumes that should appear in nav/toggle UI. */
export const listedResumes: Resume[] = resumes.filter((r) => !r.unlisted);

/** The single "public" resume used by the CV ↔ Resume toggle. */
export const publicResume: Resume = generalResume;

export const resumeBySlug = (slug: string): Resume | undefined =>
  resumes.find((r) => r.slug === slug);

export type { Resume } from "./types";
