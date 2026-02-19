import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const fileListOutput = execSync(
  "rg --files -g 'app/**/*.{ts,tsx,css,md}' -g 'components/**/*.{ts,tsx,css,md}' -g 'lib/**/*.{ts,tsx,css,md}'",
  { cwd: ROOT, encoding: "utf8" },
);

const files = fileListOutput.split("\n").filter(Boolean);
const allowedDomains = new Set([
  "images.unsplash.com",
  "secure.notion-static.com",
  "prod-files-secure.s3.us-west-2.amazonaws.com",
]);

const forbiddenDomain = "static.readdy.ai";
const imageUrlPattern = /https?:\/\/[^\s"')]+/g;
const imagePathHints = [".png", ".jpg", ".jpeg", ".webp", ".gif", "images.unsplash.com", "notion-static.com", "s3.us-west-2.amazonaws.com"];

const violations = [];

for (const relativePath of files) {
  const content = readFileSync(join(ROOT, relativePath), "utf8");
  const matches = content.match(imageUrlPattern) ?? [];

  for (const match of matches) {
    if (!imagePathHints.some((hint) => match.includes(hint))) {
      continue;
    }

    const url = new URL(match);
    if (url.hostname === forbiddenDomain) {
      violations.push(`${relativePath}: forbidden domain ${forbiddenDomain} -> ${match}`);
      continue;
    }

    if (!allowedDomains.has(url.hostname)) {
      violations.push(`${relativePath}: external image domain not allowlisted -> ${match}`);
    }
  }
}

if (violations.length) {
  console.error("Image policy check failed:\n");
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log(`Image policy check passed (${files.length} files scanned).`);
