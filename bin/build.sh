#! /bin/sh
set -eux

node src/stack/log.js > template.json

test ! -z $CI || exit 0

bin/aws.sh s3 sync src/client s3://ajla.ng \
  --acl public-read
bin/aws.sh cloudformation validate-template \
  --template-body file://template.json
bin/aws.sh cloudformation update-stack \
  --template-body file://template.json \
  --stack-name ajla-ng
