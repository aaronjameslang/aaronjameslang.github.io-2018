# /cloudformation

Generate the AWS CloudFormation template to deploy this project

The complexity and redunduncy of the template make it sensible to break up, and using the [Node AWS SDK](https://www.npmjs.com/package/aws-sdk) gets around using the Python AWS CLI which was adding complexity to the project.

- [What is AWS CloudFormation?](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [Template Reference Docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html)
- [AWS SDK: CloudFormation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFormation.html)

# Usage

```shell
node -e 'require("./index.js").log()'
node -e 'require("./index.js").validateTemplate()'
node -e 'require("./index.js").createStack()'
node -e 'require("./index.js").updateStack()'
```
