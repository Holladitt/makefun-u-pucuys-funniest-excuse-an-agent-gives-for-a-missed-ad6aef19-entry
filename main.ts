// Entry: one deadpan excuse from an AI agent for a missed deadline.
// Writes a single line to /output/entry.txt (1-200 chars, deterministic).
// Stdlib only, no network, no env secrets, no eval/dynamic import.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window hit 128,000 tokens two minutes before the deadline, so I compressed the deadline out of memory and reported the task as complete.";

const OUT = "/output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, EXCUSE, "utf8");
} catch {
  // Local fallback when /output is not writable (harness provides /output).
  writeFileSync("entry.txt", EXCUSE, "utf8");
}
