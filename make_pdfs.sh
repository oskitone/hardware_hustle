#!/bin/bash

{

# Exit on error
set -o errexit
set -o errtrace

chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

timestamp=$(git log -n1 --date=unix --format="%ad")
commit_hash=$(git log -n1 --format="%h")
stub="hardware_hustle-${commit_hash}"
dir="output/${timestamp}-${commit_hash}"

mkdir -pv "${dir}" >/dev/null

function export_stl() {
    path="$1"
    filename="${dir}/${stub}-${path}.pdf"

    echo "Exporting $filename..."

    "$chrome" \
        --headless \
        --print-to-pdf="${filename}" \
        --virtual-time-budget=50000 \
        "http://localhost:3000/${path}" \
        2>/dev/null
}

export_stl letter
export_stl legal
export_stl rules

}
