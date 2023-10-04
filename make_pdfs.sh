#!/bin/bash

{

# Exit on error
set -o errexit
set -o errtrace

url="http://localhost:3000"

timestamp=$(git log -n1 --date=unix --format="%ad")
commit_hash=$(git log -n1 --format="%h")
stub="hardware_hustle-${commit_hash}"

# Option default(s)
dir="output/${timestamp}-${commit_hash}"

function help() {
    echo "\
Makes PDFs

Usage:
./make_pdfs.sh
./make_pdfs.sh -h                 Show this message and quit
./make_pdfs.sh -d                 Set output directory
                                  Dynamic default, currently \"${dir}\"
"
}

function confirm_url() {
    wget -q --spider "${url}" || {
        echo "${url} is not available"
        echo "Try 'npm run dev'"
        exit
    }
}

function export_pdf() {
    path="$1"
    filename="${dir}/${stub}-${path}.pdf"

    echo "Exporting ${filename}"

    node make_pdf.js "${url}/${path}" "${filename}"
}

function run() {
    confirm_url

    mkdir -pv "${dir}" >/dev/null

    export_pdf letter
    export_pdf legal
    export_pdf rules
    export_pdf roll-table
}

while getopts "h?d:" opt; do
    case "$opt" in
        h) help; exit ;;
        d) dir="$OPTARG" ;;
        *) echo; _help; exit ;;
    esac
done

run

}
