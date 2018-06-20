#! /bin/sh
set -eux

prettier '**/*.{js,json,ts,tsx}' --write
tslint --project . --fix
tsc
rm -rf dist/tsc
test ! -z ${CI-} || export REPLAY=record
jest
parcel build src/index.html --out-dir dist/parcel
sed -i- 's/="\//="/g' dist/parcel/index.html
mkdir -p dist/inline
inline-assets dist/parcel/index.html dist/inline/index.html
cp dist/inline/* ./
git diff --exit-code -- . ':(exclude)index.html'
