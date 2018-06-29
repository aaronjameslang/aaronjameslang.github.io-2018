#! /bin/sh
set -eux

prettier 'src/**/*.{js,json,md}' --write
standard --fix
node -e 'require("./src/stack").validateTemplate()'
