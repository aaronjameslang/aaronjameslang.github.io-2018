#! /bin/sh
set -eux

make venv
. venv/bin/activate
make test
