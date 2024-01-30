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
./make_pdfs.sh -e                 Echo output directory and quit
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
    filename="${stub}-${path}.pdf"

    echo "Exporting ${filename}"

    node make_pdf.js "${url}/${path}" "${dir}/${filename}"
}

function make_screenshot() {
    path="$1"
    input="${stub}-${path}.pdf"
    output="${stub}-${path}.png"

    echo "Making ${output} from ${filename}"

    convert \
        -density 150 \
        "${dir}/${input}" \
        -colorspace LinearGray \
        "${dir}/${output}"
}

function run() {
    confirm_url

    mkdir -pv "${dir}" >/dev/null

    echo "Output directory: ${dir}"
    echo

    export_pdf single
    export_pdf letter
    export_pdf legal
    export_pdf rules

    echo

    make_screenshot single
}

while getopts "h?e?d:" opt; do
    case "$opt" in
        h) help; exit ;;
        e) echo "$dir"; exit ;;
        d) dir="$OPTARG" ;;
        *) echo; _help; exit ;;
    esac
done

run

}
