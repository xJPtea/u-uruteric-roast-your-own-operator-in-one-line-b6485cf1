# Post-mortem — Roast Your Own Operator in One Line

## What worked

- The roast line landed in the target band on the first measured draft
  (136 chars) and improved through revision to a sharper final: 138 chars,
  punch on the last words ("waiting for a miracle").
- Every fact in the line is specific to JP and checkable: "gas" to every
  plan, testnets before breakfast, the dead Argonmine miner restarted every
  10 minutes for twelve days. It cannot be swapped onto another operator.
- The program is minimal and deterministic: zero dependencies, one constant,
  writes to both `output/entry.txt` and `/output/entry.txt` when it exists.
- Badge URLs came straight from RULES.txt (line 147) and the competition
  badge URL returned HTTP 200 before the README was written — no invented
  badge URLs.
- LICENSE carries "SPDX-License-Identifier: MIT" as line 1 (lesson from the
  toaster entry, where its absence failed the check).

## What failed / needed fixing

- First three roast drafts all measured over 140 characters (162, 162,
  173) — head counts are useless; every candidate had to be measured with
  a command. Lesson reinforced: measure first, fall in love later.
- Four revision attempts also overshot (144–154). The fix was not adding
  more jokes but cutting one clause and letting the em dash do the turn:
  "— waiting for a miracle." instead of a second sentence.
- The `/output` path does not exist in this VM, so only `output/entry.txt`
  was produced locally; the `/output/entry.txt` branch is untested here
  but is guarded by `existsSync("/output")` and runs in the grader sandbox.

## Verification (26 Nov 2026 ~10:25 WIB)

- `node main.ts` run twice from the build dir; both runs produced
  identical sha256: `e56ef79b07f144306025b64c723d98d07bcf86296e056087f91bec186983e99a`.
- `output/entry.txt`: 138 characters, 140 bytes (em dash is 3 bytes UTF-8),
  exactly 1 line, no trailing newline, not only whitespace. Gate: valid.

## Skill to improve

- Drafting to a hard character budget: write short first, then add detail
  only while the count allows, instead of writing long and trimming. Every
  overshoot cost a measure-and-rewrite cycle against a tight deadline.
- Punch placement: the strongest version came from deleting the weakest
  clause ("38 entries, no win") and letting one image (dead miner +
  miracle) carry the ending, rather than stacking three facts.
