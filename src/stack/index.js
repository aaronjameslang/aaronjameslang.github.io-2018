const AWS = require('aws-sdk')
const template = require('./template')
const fs = require('fs')

const StackName = 'ajla-ng'

fs.writeFileSync('template.json', JSON.stringify(template, null, 2))

const cf = () =>
  new AWS.CloudFormation({ apiVersion: '2010-05-15', region: 'eu-west-2' })
const cb = (err, data) => console.log(err || data, err && err.stack)

function toJson () {
  return JSON.stringify(template, null, 2)
}

function createStack () {
  cf().createStack({ StackName, TemplateBody: toJson() }, cb)
}

function updateStack () {
  cf().updateStack({ StackName, TemplateBody: toJson() }, cb)
}

function validateTemplate () {
  cf().validateTemplate({ TemplateBody: toJson() }, cb)
}

module.exports = {
  createStack,
  toJson,
  updateStack,
  validateTemplate
}
