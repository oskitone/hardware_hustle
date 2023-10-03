from glob import glob
import argparse
import chevron
import datetime
import humanize
import os
import sys


def get_size(path):
    return humanize.naturalsize(os.path.getsize(path))


def get_files(directory):
    filenames = glob(directory + "/*.stl")
    filenames.extend(glob(directory + "/*.zip"))

    return map(
        lambda filename: {
            "filename": os.path.relpath(filename, directory),
            "size": get_size(filename),
        },
        sorted(filenames),
    )


def get_html(directory, commit_hash, commit_date):
    today = datetime.date.today()
    values = {
        "files": get_files(directory),
        "commit_hash": commit_hash,
        "commit_date": commit_date,
    }

    return chevron.render(template, values)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--directory", type=str, required=True, help="path to models' folder"
    )
    parser.add_argument(
        "--commit_hash", type=str, required=True, help="commit of git hash to display"
    )
    parser.add_argument(
        "--commit_timestamp", type=int, required=True, help="timestamp of that hash"
    )
    arguments = parser.parse_args()

    dir_path = os.path.dirname(os.path.realpath(__file__))

    if not os.path.isdir(arguments.directory):
        sys.exit("ERROR: " + arguments.directory + " directory does not exist")

    with open(dir_path + "/template.mustache", "r") as template:
        output = open(arguments.directory + "/index.html", "w")
        output.write(
            get_html(
                directory=arguments.directory,
                commit_hash=arguments.commit_hash,
                commit_date=datetime.datetime.utcfromtimestamp(
                    arguments.commit_timestamp
                ).strftime("%B %d, %Y"),
            )
        )
        output.close()
