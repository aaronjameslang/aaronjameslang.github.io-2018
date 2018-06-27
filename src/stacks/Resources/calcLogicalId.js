const camelcase = require('camelcase')

module.exports = function calcLogicalId (resource) {
  var parts = resource.Type.split('::')
  parts.shift()
  parts.push(resource.Properties.Name)
  const joined = parts.join('.')
  return camelcase(joined, { pascalCase: true })
}
