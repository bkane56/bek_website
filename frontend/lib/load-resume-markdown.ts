import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getResumeMarkdown(): Promise<string> {
  const resumePath = path.join(process.cwd(), "content", "resume.md");
  return readFile(resumePath, "utf8");
}
