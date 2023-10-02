#!/bin/bash

{

# Exit on error
set -o errexit
set -o errtrace

chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

url="http://localhost:3000"

timestamp=$(git log -n1 --date=unix --format="%ad")
commit_hash=$(git log -n1 --format="%h")
stub="hardware_hustle-${commit_hash}"
dir="output/${timestamp}-${commit_hash}"

mkdir -pv "${dir}" >/dev/null

function confirm_url() {
    wget -q --spider "${url}" || {
        echo "${url} is not available"
        echo "Try 'npm run dev'"
        exit
    }
}

function export_stl() {
    path="$1"
    filename="${dir}/${stub}-${path}.pdf"

    echo "Exporting ${filename}"

    "$chrome" \
        --headless \
        --print-to-pdf="${filename}" \
        --virtual-time-budget=50000 \
        "${url}/${path}" \
        2>/dev/null
}

confirm_url

export_stl letter
export_stl legal
export_stl rules

}
