import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const PORT = 4173;
const CV_URL = `http://localhost:${PORT}/cv`;
const OUTPUT_PATH = path.join(distDir, "cv.pdf");

async function generatePDF() {
  // Start the Astro preview server
  const { preview } = await import("astro");
  const server = await preview({
    root: path.resolve(__dirname, ".."),
    server: { port: PORT, host: "localhost" },
  });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(CV_URL, { waitUntil: "networkidle" });

    await page.pdf({
      path: OUTPUT_PATH,
      format: "Letter",
      margin: { top: "0.5in", right: "0.6in", bottom: "0.5in", left: "0.6in" },
      printBackground: false,
      preferCSSPageSize: true,
    });

    console.log(`PDF generated: ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
    await server.stop();
  }
}

generatePDF().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
