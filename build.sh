#! /bin/sh
set -eux

prettier '**/*.{js,json,ts}' --write
tslint --project . --fix
parcel build src/index.html --out-dir dist/parcel
sed -i- 's/="\//="/g' dist/parcel/index.html
inline-assets dist/parcel/index.html dist/index.html
cp dist/index.html ./
test -z ${CI-} || git diff --exit-code
