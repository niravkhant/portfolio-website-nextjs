import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";

const SUBMISSIONS_FILE = path.join(
  process.cwd(),
  "private-data",
  "submissions.json"
);
const LEGACY_SUBMISSIONS_DIR = path.join(
  process.cwd(),
  "private-data",
  "submissions"
);

async function loadLegacySubmissionFiles() {
  try {
    const names = await fs.readdir(LEGACY_SUBMISSIONS_DIR);
    const records = [];

    for (const name of names) {
      if (!name.endsWith(".json")) continue;
      const raw = await fs.readFile(
        path.join(LEGACY_SUBMISSIONS_DIR, name),
        "utf8"
      );
      records.push(JSON.parse(raw));
    }

    records.sort((a, b) =>
      String(a.createdAt || "").localeCompare(String(b.createdAt || ""))
    );
    return records;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function readAllSubmissions() {
  try {
    const raw = await fs.readFile(SUBMISSIONS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return loadLegacySubmissionFiles();
    }
    throw error;
  }
}

export async function saveContactSubmission(payload) {
  await fs.mkdir(path.dirname(SUBMISSIONS_FILE), { recursive: true });

  const id = `${Date.now()}-${randomUUID().slice(0, 8)}`;
  const record = {
    id,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  const submissions = await readAllSubmissions();
  submissions.push(record);

  await fs.writeFile(
    SUBMISSIONS_FILE,
    `${JSON.stringify(submissions, null, 2)}\n`,
    "utf8"
  );

  return record;
}
