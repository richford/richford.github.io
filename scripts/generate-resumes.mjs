/**
 * Build script: render each resume variant to a PDF.
 *
 * Flow:
 *   1. Run `astro build` first (so /resume/<slug>/index.html exists in dist/).
 *   2. Boot `astro preview` on a private port.
 *   3. For each variant in src/data/resumes/index.ts, navigate to
 *      /resume/<slug>?print=1 and render to dist/resumes/<basename>.pdf.
 *   4. Tear down the preview server.
 *
 * Usage:
 *   npm run build && npm run resumes
 *
 * The output PDFs are placed in dist/ so a subsequent deploy/upload picks them
 * up alongside the rest of the static site (mirrors the existing cv.pdf flow).
 */
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");
const outDir = path.join(distDir, "resumes");

const PORT = 4174; // a port the existing generate-pdf.mjs doesn't use

async function loadResumes() {
  // Hard-coded build map — keep in sync with src/data/resumes/index.ts.
  // We avoid importing the TS registry directly because Node doesn't run
  // TypeScript without a loader; a manual entry here is fine.
  return [
    { slug: "general", pdfBasename: "Adam-Richie-Halford-Resume" },
  ];
}

async function generateAll() {
  // Sanity-check that `astro build` ran first.
  try {
    await fs.access(distDir);
  } catch {
    console.error(
      `dist/ not found at ${distDir}. Run 'npm run build' before 'npm run resumes'.`,
    );
    process.exit(1);
  }

  await fs.mkdir(outDir, { recursive: true });

  const { preview } = await import("astro");
  const server = await preview({
    root: projectRoot,
    server: { port: PORT, host: "localhost" },
  });

  // Use the full "Chrome for Testing" build in new headless mode rather than the
  // separate chromium_headless_shell download (which Playwright fetches lazily
  // and which can hang/fail). `channel: "chromium"` reuses the browser installed
  // by `npx playwright install chromium`.
  const browser = await chromium.launch({ channel: "chromium" });
  const page = await browser.newPage();

  try {
    const resumes = await loadResumes();
    for (const r of resumes) {
      const url = `http://localhost:${PORT}/resume/${r.slug}?print=1`;
      const outPath = path.join(outDir, `${r.pdfBasename}.pdf`);
      console.log(`→ ${r.slug}  ${url}`);
      await page.goto(url, { waitUntil: "networkidle" });
      // Force light/print color scheme so any prefers-color-scheme rules
      // emit the print-clean variant.
      await page.emulateMedia({ media: "print", colorScheme: "light" });
      await page.pdf({
        path: outPath,
        format: "Letter",
        // Margins are owned by the @page rule in resume-print.css; we ask
        // Chromium to honor preferCSSPageSize so behavior matches the
        // browser's File → Print path.
        preferCSSPageSize: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        printBackground: false,
      });
      const stat = await fs.stat(outPath);
      console.log(`  wrote ${outPath}  (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  } finally {
    await browser.close();
    await server.stop();
  }
}

generateAll().catch((err) => {
  console.error("Resume PDF generation failed:", err);
  process.exit(1);
});
