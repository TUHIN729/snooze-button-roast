// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one single-line roast (max 200 chars) of an alarm clock ringing
// at 6 AM on a Saturday morning to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "At 6 AM on a Saturday, my alarm clock rings like a debt collector with a megaphone — and the snooze button just lets it come back in nine minutes, with interest.";

// The gate requires 1–200 characters: refuse to ship an over-long line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} chars; must be 1–200.`);
}

// The grader mounts /output root-owned: never remove the directory itself,
// only clear its contents, then write the entry.
mkdirSync("/output", { recursive: true });
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
