const { xprod } = require('ramda')

const HOSTED_ZONE_ID_CLOUDFRONT = 'Z2FDTNDATAQYW2'

const HostedZoneNames = [
  'ajl7c7.com.',
  'ajla.ng.',
  'langsolutionsltd.com.'
]

const subdomains = ['', 'www.']

module.exports = xprod(HostedZoneNames, subdomains)
  .map(([HostedZoneName, subdomain]) => ({
    Type: 'AWS::Route53::RecordSet',
    Properties: {
      AliasTarget: {
        DNSName: 'dpabyrld1suna.cloudfront.net', // TODO name distribution
        // DNSName : '!GetAtt Distribution.DomainName', // TODO name distribution
        HostedZoneId: HOSTED_ZONE_ID_CLOUDFRONT
      },
      Comment: new Date(),
      HostedZoneName,
      Name: subdomain + HostedZoneName,
      Type: 'A'
    }
  }))
