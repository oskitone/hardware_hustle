#!/bin/bash

{

# Exit on error
# set -o errexit # TODO: fix this not running python
set -o errtrace

dir=$(./make_pdfs.sh -e)

function help() {
    echo "\
Deploys PDFs to GitHub pages.

Usage:
downloads/deploy.sh
downloads/deploy.sh --do-it-live       Actually deploy
"
}

function bonk() {
    printf "\a"
}

function confirm_git_clean_status() {
    echo "Checking git status for uncommitted changes"
    if git_clean=$(git status --porcelain) && [ -z "$git_clean" ]; then
        echo "Clean"
        echo
    else
        echo "ERROR: Dirty."
        exit
    fi
}

function run() {
    if [[ "$1" == *"-h"* ]]; then
        help
        exit
    fi

    confirm_git_clean_status

    rm -rf $dir
    mkdir -pv $dir >/dev/null

    echo "MAKING PDFS"
    echo "-----------------"
    ./make_pdfs.sh -d "$dir"
    echo

    echo "BUILDING SITE"
    echo "-------------"
    python3 downloads/build.py \
        --directory "$dir"
    echo "Done!"
    echo

    echo "COMMITTING"
    echo "----------"
    git checkout gh-pages
    cp $dir/* "."
    git add .
    git commit -m "Deploy $dir"
    echo

    echo "DEPLOYING"
    echo "---------"
    if [[ "$1" == *"--do-it-live"* ]]; then
        git push origin gh-pages
    else
        echo "Skipped! Supply --do-it-live flag to deploy."
    fi

    git checkout "@{-1}"

    bonk
}

# Send full args string w/ spaces
run "$*"

}
