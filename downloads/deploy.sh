#!/bin/bash

{

# Exit on error
# set -o errexit # TODO: fix this not running python
set -o errtrace

function help() {
    echo "\
Deploys STLs to GitHub pages.

Usage:
downloads/deploy.sh
downloads/deploy.sh -b                 Make STLs and ZIP
downloads/deploy.sh --do-it-live       Actually deploy
downloads/deploy.sh -b --do-it-live    All of the above
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

    dir=$(./make_stls.sh -e)
    commit_hash=$(./make_stls.sh -c)
    commit_timestamp=$(./make_stls.sh -t)

    mkdir -pv $dir

    # TODO: fail if STLs aren't being made or already made

    if [[ "$1" == *"-b"* ]]; then
        echo "MAKING STLS + ZIP"
        echo "-----------------"
        echo
        rm -rf $dir
        ./make_stls.sh -d "$dir"
        echo
    fi

    echo "BUILDING SITE"
    echo "-------------"
    echo
    python downloads/build.py \
        --directory "$dir" \
        --commit_hash "$commit_hash" \
        --commit_timestamp "$commit_timestamp"
    echo "Done!"
    echo

    echo "COMMITTING"
    echo "----------"
    echo
    git checkout gh-pages
    rm *.stl
    rm *.zip
    cp $dir/* "."

    git add .
    git commit -m "Deploy $dir"

    if [[ "$1" == *"--do-it-live"* ]]; then
        echo
        echo "DEPLOYING"
        echo "---------"
        echo
        git push origin gh-pages
    fi

    git checkout "@{-1}"

    bonk
}

# Send full args string w/ spaces
run "$*"

}
