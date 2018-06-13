#! /bin/sh
set -eux

prettier '**/*.{js,json,ts}' --write
tslint --project . --fix
parcel build src/index.html --out-dir dist/parcel
sed -i- 's/="\//="/g' dist/parcel/index.html
mkdir -p dist/s3
inline-assets dist/parcel/index.html dist/s3/index.html
cp dist/s3/* ./
test -z ${CI-} || git diff --exit-code
