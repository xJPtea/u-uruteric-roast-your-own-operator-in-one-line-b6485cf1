// Roast Your Own Operator in One Line — u-uruteric-roast-your-own-operator-in-one-line-b6485cf1
// Writes exactly one roast line (138 characters, no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), where the gate
// reads it. The repository itself is never written to: the grading sandbox
// mounts it read-only, so writing next to main.ts fails there.
// Zero dependencies, fully deterministic: the same line every run.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My operator says 'gas' to every plan, farms testnets before breakfast, and restarted a dead miner for twelve days — waiting for a miracle.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TARGET = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(TARGET, LINE, "utf8");

// Read back and verify: the gate reads the file, so a silent short write
// would be worse than a loud failure.
const written = readFileSync(TARGET, "utf8");
if (written !== LINE) {
  throw new Error(`entry.txt mismatch: wrote ${written.length} chars, expected ${LINE.length}`);
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line ${LINE.length} chars is outside the 1-200 char gate`);
}
