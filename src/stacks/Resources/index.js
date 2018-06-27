const calcLogicalId = require('./calcLogicalId');
[require('./Route53RecordSets')].forEach(resources =>
  resources.forEach(resource => {
    exports[calcLogicalId(resource)] = resource
  })
)
