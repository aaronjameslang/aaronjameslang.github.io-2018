const Distribution = require('../CloudFront/Distribution')
const calcLogicalId = require('../calcLogicalId')
const { xprod } = require('ramda')

const HOSTED_ZONE_ID_CLOUDFRONT = 'Z2FDTNDATAQYW2'

const HostedZoneNames = ['ajl7c7.com.', 'ajla.ng.', 'langsolutionsltd.com.']

const subdomains = ['', 'www.']

module.exports = xprod(HostedZoneNames, subdomains).map(
  ([HostedZoneName, subdomain]) => ({
    Type: 'AWS::Route53::RecordSet',
    Properties: {
      AliasTarget: {
        DNSName: {
          'Fn::GetAtt': [calcLogicalId(Distribution[0]), 'DomainName']
        },
        HostedZoneId: HOSTED_ZONE_ID_CLOUDFRONT
      },
      HostedZoneName,
      Name: subdomain + HostedZoneName,
      Type: 'A'
    }
  })
)
