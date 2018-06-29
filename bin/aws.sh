#! /bin/sh
set -e

test -e venv || virtualenv venv
. venv/bin/activate
test -e venv/bin/aws || pip install --upgrade awscli
aws "$@"
