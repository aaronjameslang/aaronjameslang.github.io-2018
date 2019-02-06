#! /bin/sh
set -eux

# server
mkdir -p dist/server
zip -r dist/server.zip src/server
# stack
node src/stack/log.js > template.json

test ! -z $CI || exit 0

# server
bin/aws.sh lambda update-function-code \
  --function-name ajla-ng \
  --zip-file fileb://dist/server.zip
# stack
bin/aws.sh s3 sync src/client s3://ajla.ng \
  --acl public-read
bin/aws.sh cloudformation validate-template \
  --template-body file://template.json
# update-stack fails if there are no changes, which is annoying
bin/aws.sh cloudformation update-stack \
  --template-body file://template.json \
  --stack-name ajla-ng
