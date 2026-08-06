#!/usr/bin/env bash

set -euo pipefail

source_directory=${1:?Usage: npm run prepare:photos -- /path/to/source-photos <lucha-libre|graduation>}
category=${2:?Usage: npm run prepare:photos -- /path/to/source-photos <lucha-libre|graduation>}
output_directory=public/images/photos/"$category"

mkdir -p "$output_directory/thumbnails" "$output_directory/full"

find "$source_directory" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.heic' -o -iname '*.tif' -o -iname '*.tiff' \) -print0 |
while IFS= read -r -d '' source_file; do
  filename=$(basename "$source_file")
  name=${filename%.*}
  slug=$(printf '%s' "$name" | tr '[:upper:] ' '[:lower:]-' | tr -cs 'a-z0-9-' '-' | sed 's/^-//; s/-$//')

  sips --resampleHeightWidthMax 1280 --setProperty format jpeg --setProperty formatOptions 80 "$source_file" --out "$output_directory/thumbnails/$slug-thumb.jpg" >/dev/null
  sips --resampleHeightWidthMax 2560 --setProperty format jpeg --setProperty formatOptions 84 "$source_file" --out "$output_directory/full/$slug.jpg" >/dev/null
done
