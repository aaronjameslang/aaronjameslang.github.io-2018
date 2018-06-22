#! /bin/sh
set -eux

prettier 'cloudformation/*.{js,json,md}' --write
standard --fix
