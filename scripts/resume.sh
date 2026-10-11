#!/usr/bin/env bash
# Regenerate public/resume.pdf from the canonical resume HTML, minus the phone number.
#
#   pnpm resume                       # uses ~/Desktop/cv/SeungwaAkpan_CV.html
#   pnpm resume path/to/resume.html
#
# The source file is never modified; the public copy is rendered from a temp file.
set -euo pipefail

SRC="${1:-$HOME/Desktop/cv/SeungwaAkpan_CV.html}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/resume.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

[[ -f "$SRC" ]] || { echo "resume source not found: $SRC" >&2; exit 1; }
[[ -x "$CHROME" ]] || { echo "Chrome not found; set CHROME=/path/to/chrome" >&2; exit 1; }

TMP="$(mktemp -d)"
trap 'rm -r "$TMP"' EXIT

# Drop "· +<country code> ..." phone segments from the contact line.
sed -E 's# *<span class="sep">·</span> *\+[0-9][0-9 ()-]{6,}##g' "$SRC" > "$TMP/resume.html"

if grep -qE '\+[0-9]{3} ?[0-9]{3} ?[0-9]{3}' "$TMP/resume.html"; then
  echo "a phone number survived the strip; check the contact markup in $SRC" >&2
  exit 1
fi

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$TMP/resume.html" 2>/dev/null

echo "wrote $OUT ($(du -k "$OUT" | cut -f1) KB) from $SRC"
