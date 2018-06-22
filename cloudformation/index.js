const AWS = require('aws-sdk')
const Resources = require('./Resources')

const cf = () => new AWS.CloudFormation({apiVersion: '2010-05-15', region: 'eu-west-2'});
const cb = (err, data) => console.log(err||data, err&&err.stack)

function createStack() {
  cf().createStack({StackName: 'ajla-ng', TemplateBody: this.toJson()}, cb)
}

function updateStack() {
  cf().updateStack({StackName: 'ajla-ng', TemplateBody: this.toJson()}, cb)
}

function log() {
  console.log(this.toJson())
}

function validateTemplate() {
  cf().validateTemplate({ TemplateBody: this.toJson() }, cb)
}

function toJson() {
  return JSON.stringify(this, null, 2)
}

module.exports = {
  AWSTemplateFormatVersion: '2010-09-09',
  Resources,
  createStack,
  log,
  toJson,
  updateStack,
  validateTemplate,
}
