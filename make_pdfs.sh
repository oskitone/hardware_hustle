#!/bin/bash

# TODO: merge with make_pdf.js

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

function update_screenshot() {
    path="$1"
    input="${dir}/${stub}-${path}.pdf"
    output="screenshot.png"

    echo "Updating ${output} from ${filename}"

    convert \
        -density 150 \
        "${input}" \
        -colorspace LinearGray \
        "${output}"
}

function run() {
    confirm_url

    mkdir -pv "${dir}" >/dev/null

    export_pdf single
    export_pdf letter
    export_pdf legal
    export_pdf rules
    export_pdf roll-table

    echo

    update_screenshot single
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