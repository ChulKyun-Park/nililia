import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const samplePath = join(ROOT, "scripts/notion-thumbnail-samples.json");
const samples = JSON.parse(readFileSync(samplePath, "utf8")).samples;

const hosts = [...new Set(samples.map((url) => new URL(url).hostname))].sort();

console.log("Notion thumbnail sample hosts:");
for (const host of hosts) {
  console.log(`- ${host}`);
}
