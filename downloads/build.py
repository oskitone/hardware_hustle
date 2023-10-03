from glob import glob
import argparse
import chevron
import os
import sys


def get_files(directory):
    filenames = glob(directory + "/*.pdf")

    return map(
        lambda filename: {
            "filename": os.path.relpath(filename, directory),
        },
        sorted(filenames),
    )


def get_html(directory):
    values = {
        "files": get_files(directory),
    }

    return chevron.render(template, values)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--directory", type=str, required=True, help="path to models' folder"
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
            )
        )
        output.close()
