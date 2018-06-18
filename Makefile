default:
	false

venv:
	virtualenv venv
venv/bin/aws:
	pip install awscli --upgrade
awscli: venv/bin/aws

test: awscli
	aws cloudformation validate-template --template-body file://template.yml

deploy: awscli test
	aws cloudformation deploy --template-file template.yml --stack-name api-github-ajla-ng
