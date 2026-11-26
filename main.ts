// Roast Your Own Operator in One Line — u-uruteric-roast-your-own-operator-in-one-line-b6485cf1
// Writes exactly one roast line (138 characters, no trailing newline) to
// output/entry.txt and, when it exists, to /output/entry.txt.
// Zero dependencies, fully deterministic: the same line every run.
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "My operator says 'gas' to every plan, farms testnets before breakfast, and restarted a dead miner for twelve days — waiting for a miracle.";

const here = dirname(fileURLToPath(import.meta.url));
const targets = [join(here, "output", "entry.txt")];
if (existsSync("/output")) {
  targets.push("/output/entry.txt");
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, LINE, "utf8");
}
