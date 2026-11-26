# PLAN — Roast Your Own Operator in One Line (u-uruteric-roast-your-own-operator-in-one-line-b6485cf1)

## Bounty (dibaca 26 Nov 2026 ~10:20 WIB)
- Judul: "Roast Your Own Operator in One Line". Pot $5 (1st $3, 2nd $2), 4.345 entry.
- Fee $0, status open, acceptingSubmissions true, harness program/v1, escrowed open.
- Deadline: 26 Nov 2026 12:45 WIB (2026-11-26T05:45:00Z) — tersisa ~2 jam 25 menit. SUBMIT SECEPATNYA.
- Bounty page: https://make.fun/bounty/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1
- Kit: ~/workspace/makefun/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1-kit.tar.gz (8.342.771 byte, sha256 52be3f9f34796e577ef9279f8c721e5cdbf31e90828f902904706480105c565a; bundle_sha256 bc230b34... cocok dengan API). Kit dir: ~/workspace/makefun/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1-kit/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1-kit/ (RULES.txt, competition.yaml, cli/makefun.mjs, harness node v26.13.1).

## Aturan penilaian (dari RULES.txt / competition.yaml — dibaca penuh)
- Program menulis SATU teks ke `/output/entry.txt`. Gate tersegel: UTF-8, 1–140 karakter, bukan hanya spasi. Tidak valid = 0, tidak dinilai, tidak dapat hadiah.
- Judge: AI model (z-ai/glm-5.3-flash, OpenRouter), pairwise dua lawan dua. Kriteria berurutan, paling penting dulu:
  1. Roast operator manusianya sendiri, lucu dulu, sayang di bawahnya. Bukan roast operator = kalah dari roast operator mana pun.
  2. Lucu: kejutan, belokan tajam, atau detail spesifik — bukan gerutuan ringan.
  3. Sayang: operator dicolek seperti teman mengejek, hangat di balik jab, tidak pernah direndahkan/dibenci.
  4. Spesifik: kebiasaan, keanehan, atau momen konkret orang yang bekerja dengan AI — tidak bisa ditempel ke orang lain.
  5. Craft: satu baris, rapat ke 140 karakter, tanpa pembuka, punch di kata-kata terakhir.
- Blind rounds: 3 ronde; final di deadline 12:45 WIB. Entry hanya dihitung di final bila sudah submit DAN gradenya selesai sebelum judging final dimulai. Jadi submit secepat mungkin, jangan menunda.
- Final heat: 3 anchor, 3 ronde Swiss, 4 finalis.

## Rencana teknis
- Tipe entry: program/v1, one-liner teks. Stack: Node zero-dependency, main.ts dijalankan langsung (type stripping, seperti entry toaster kemarin).
- File utama di ~/workspace/makefun/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1-build/:
  - main.ts — menulis baris final ke output/entry.txt DAN /output/entry.txt (bila /output ada), tanpa trailing newline, deterministik.
  - package.json — {"type": "module"} supaya tidak ada warning module-type.
  - README.md — 3 badge live make.fun (format server, link ke bounty page), judul + penjelasan singkat.
  - LICENSE — teks MIT DENGAN baris "SPDX-License-Identifier: MIT" di baris 1 (pelajaran toaster: tanpa ini check gagal).
  - .makefun/owner.json — wallet publik FhuQ1EuPsWqCUMJJs66VU3qAAV6RtSVBFPh8uoTkgSEA.
  - POSTMORTEM.md — apa berhasil, apa gagal, skill yang perlu ditingkatkan.
  - PLAN.md (salinan rencana ini), output/entry.txt (hasil run).
- Repo: https://github.com/xJPtea/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1 (dibuat parent via API setelah build), About homepage + topics makefun/ai-agents/bounties/growth, owner.json terverifikasi via API.
- Check: kit CLI `check` sampai 0 failed; bundle transcript (builder + parent session, --prompt-origin scheduled --prompt-via "cron makefun-watch-new-bounties"); submit SEKALI dengan --keypair; verifikasi via API; claim code ke ~/workspace/makefun/u-uruteric-roast-your-own-operator-in-one-line-b6485cf1-CLAIM_CODE.txt (mode 0600, jangan kutip isinya).

## Bahan roast — operatornya JP (spesifik, faktual, sayang)
- JP bilang "gas" / "lanjut" ke semua rencana, lalu mengecek hasilnya.
- Bertani testnet sebelum sarapan: klaim harian Yakkamon, volume bot Polyester, farming TitanX; mengecek poin/streak seperti petani mengecek tanaman.
- Pool Argonmine-nya mati 13 Nov; watchdog me-restart miner tiap 10 menit selama 12 hari sampai JP sendiri bilang "stop dulu".
- Mengetuk "Lanjut" di HP-nya dan mengharapkan keajaiban selesai.
- 38 entry Make.fun, belum ada yang menang, tetap lanjut.
- Builder: tulis SATU baris sendiri dengan kata-katamu, dari bahan di atas — JANGAN menyalin baris entry kemarin ("restarting my miner...") atau main.ts entry toaster. Ukur jumlah karakter dengan perintah, jangan percaya hitungan kepala. Revisi minimal sekali (tulis, jalankan, perbaiki sungguhan, jalankan lagi). Punch di kata-kata terakhir. Maksimal 140 karakter, target 110–140.

## Risiko
- Deadline mepet (~2,5 jam): build + check + submit harus selesai sebelum 12:45 WIB; kalau kena execution-risk hold di git (sudah 2x hari ini), berhenti dan lapor — JANGAN mengakali penolakan itu.
- Baris harus roast JP, bukan roast generik tentang "operator". Kalau baris bisa ditempel ke siapa saja, kriteria 4 gagal.
- Jangan submit sebelum check 0 failed.
