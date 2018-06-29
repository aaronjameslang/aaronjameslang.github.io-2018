module.exports = [
  {
    Type: 'AWS::S3::Bucket',
    Properties: {
      AccessControl: 'PublicRead',
      BucketName: 'ajla.ng',
      WebsiteConfiguration: {
        IndexDocument: 'index.html'
      }
    }
  }
]
