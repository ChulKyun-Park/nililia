import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

const IMAGE_POLICY = {
  includeDirectories: ["app", "components", "lib", "src"],
  includeFiles: ["next.config.ts", "next.config.js", "next.config.mjs", "next.config.cjs"],
  includeExtensions: new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mdx", ".mjs", ".cjs", ".json", ".css"]),
  allowedImageHosts: new Set([
    "images.unsplash.com",
    "secure.notion-static.com",
    "prod-files-secure.s3.us-west-2.amazonaws.com",
    "www.notion.so",
    "file.notion.so",
    "s3.us-west-2.amazonaws.com",
  ]),
  forbiddenHosts: new Set(["static.readdy.ai"]),
};

const IMAGE_URL_PATTERN = /https?:\/\/[^\s"')]+/g;
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"];

function isDirectory(pathname) {
  try {
    return statSync(pathname).isDirectory();
  } catch {
    return false;
  }
}

function collectFilesFromDirectory(directoryPath) {
  const files = [];
  const entries = readdirSync(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === ".next") {
      continue;
    }

    const entryPath = join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFilesFromDirectory(entryPath));
      continue;
    }

    const extension = entry.name.slice(entry.name.lastIndexOf("."));
    if (IMAGE_POLICY.includeExtensions.has(extension)) {
      files.push(entryPath);
    }
  }

  return files;
}

function collectTargetFiles() {
  const files = [];

  for (const directory of IMAGE_POLICY.includeDirectories) {
    const directoryPath = join(ROOT, directory);
    if (isDirectory(directoryPath)) {
      files.push(...collectFilesFromDirectory(directoryPath));
    }
  }

  for (const filename of IMAGE_POLICY.includeFiles) {
    const filePath = join(ROOT, filename);
    try {
      if (statSync(filePath).isFile()) {
        files.push(filePath);
      }
    } catch {
      // Ignore missing optional config files.
    }
  }

  return [...new Set(files)].sort((a, b) => a.localeCompare(b));
}

function looksLikeImageUrl(url) {
  if (IMAGE_EXTENSIONS.some((extension) => url.pathname.toLowerCase().includes(extension))) {
    return true;
  }

  return (
    url.hostname.includes("notion-static.com") ||
    url.hostname.includes("s3.us-west-2.amazonaws.com") ||
    url.hostname === "images.unsplash.com"
  );
}

function lineNumberAtIndex(content, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (content[i] === "\n") {
      line += 1;
    }
  }
  return line;
}

const targetFiles = collectTargetFiles();
const violations = [];

for (const filePath of targetFiles) {
  const content = readFileSync(filePath, "utf8");
  const matches = [...content.matchAll(IMAGE_URL_PATTERN)];

  for (const match of matches) {
    const matchedUrl = match[0];
    const url = new URL(matchedUrl);

    if (!looksLikeImageUrl(url)) {
      continue;
    }

    const host = url.hostname;
    const relativePath = relative(ROOT, filePath);
    const line = lineNumberAtIndex(content, match.index ?? 0);

    if (IMAGE_POLICY.forbiddenHosts.has(host)) {
      violations.push({
        file: relativePath,
        line,
        url: matchedUrl,
        host,
        reason: "forbidden host",
        suggestion: "Use centralized local assets/constants instead of static.readdy.ai.",
      });
      continue;
    }

    if (!IMAGE_POLICY.allowedImageHosts.has(host)) {
      violations.push({
        file: relativePath,
        line,
        url: matchedUrl,
        host,
        reason: "host not in allowlist",
        suggestion: `Add '${host}' only if required, or replace with a local asset path.`,
      });
    }
  }
}

if (violations.length > 0) {
  console.error("Image policy violations detected:\n");
  for (const violation of violations) {
    console.error(
      `- ${violation.file}:${violation.line} | ${violation.reason} | host=${violation.host} | ${violation.url}\n  suggestion: ${violation.suggestion}`,
    );
  }
  console.error(`\nSummary: scanned ${targetFiles.length} files, found ${violations.length} violation(s).`);
  process.exit(1);
}

console.log(`Image policy check passed. Scanned ${targetFiles.length} files, found 0 violations.`);
