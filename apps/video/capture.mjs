import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("public", { recursive: true });

const BASE = "http://localhost:5174";
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

async function shot(url, path, waitMs = 2500) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(waitMs);
  await page.screenshot({ path });
  console.log("✓", path);
}

// 1. Landing: wait for GSAP to settle, disable reduced motion so hero renders
await page.emulateMedia({ reducedMotion: "reduce" });
await shot(`${BASE}/`, "public/landing-hero.png", 2000);

// 2. Problem section — scroll past the pinned hero
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollTo({ top: 3500, behavior: "instant" }));
await page.waitForTimeout(1500);
await page.screenshot({ path: "public/landing-problem.png" });
console.log("✓ public/landing-problem.png");

// 3. Solution section
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollTo({ top: 5500, behavior: "instant" }));
await page.waitForTimeout(1500);
await page.screenshot({ path: "public/landing-solution.png" });
console.log("✓ public/landing-solution.png");

// 4. Dashboard – Escenarios
await shot(`${BASE}/app`, "public/dashboard-scenarios.png", 3000);

// 5. Dashboard – Simulador + run simulation
await page.goto(`${BASE}/app?tab=simulador`, { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
try {
  const submitBtn = page.locator("button.sim-submit");
  await submitBtn.waitFor({ timeout: 6000 });
  await submitBtn.click();
  await page.waitForTimeout(4000);
} catch {
  // capture form as-is if still loading
}
await page.screenshot({ path: "public/dashboard-simulator.png" });
console.log("✓ public/dashboard-simulator.png");

// 6. Dashboard – Asesor IA
await shot(`${BASE}/app?tab=agente`, "public/dashboard-agent.png", 3000);

await browser.close();
console.log("All screenshots captured.");
