const calcLogicalId = require('./calcLogicalId');
[
  require('./CloudFront/Distribution'),
  require('./Route53/RecordSet'),
  require('./S3/Bucket')
].forEach(resources =>
  resources.forEach(resource => {
    const logicalId = calcLogicalId(resource)
    if (exports[logicalId]) {
      throw new Error(`Duplicate ${logicalId}`)
    } else {
      exports[logicalId] = resource
    }
  })
)
