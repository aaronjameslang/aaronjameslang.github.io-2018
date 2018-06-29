const calcLogicalId = require('../calcLogicalId')
const domains = require('../../domains')
const Bucket = require('../S3/Bucket')
const ORIGIN_ID = 'Origin0'

module.exports = [
  {
    Type: 'AWS::CloudFront::Distribution',
    Properties: {
      DistributionConfig: {
        Aliases: domains.client.fqdns,
        DefaultCacheBehavior: {
          Compress: true,
          DefaultTTL: 2,
          ForwardedValues: {
            Cookies: {
              Forward: 'none'
            },
            QueryString: false
          },
          MaxTTL: 2,
          TargetOriginId: ORIGIN_ID,
          ViewerProtocolPolicy: 'allow-all'
        },
        DefaultRootObject: 'index.html',
        Enabled: true,
        Origins: [
          {
            CustomOriginConfig: {
              OriginProtocolPolicy: 'http-only'
            },
            DomainName: {
              'Fn::GetAtt': [calcLogicalId(Bucket[0]), 'DomainName']
            },
            // DomainName: {
            //   'Fn::Select': [
            //     2,
            //     {
            //       'Fn::Split': [
            //         '/',
            //         {
            //           'Fn::GetAtt': [calcLogicalId(Bucket[0]), 'WebsiteURL']
            //         }
            //       ]
            //     }
            //   ]
            // },
            Id: ORIGIN_ID
            // "S3OriginConfig" : {
            //   "OriginAccessIdentity" : "origin-access-identity/cloudfront/E127EXAMPLE51Z"
            // }
          }
        ],
        ViewerCertificate: {
          CloudFrontDefaultCertificate: true
        }
      }
    }
  }
]
