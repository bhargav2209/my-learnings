const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');
const lambda = require('aws-cdk-lib/aws-lambda');

class SampleAwsCdkDeployDemoStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create an SQS queue
    const queue = new sqs.Queue(this, 'SampleAwsCdkDeployDemoQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    // Create a Lambda function
    const lambdaFn = new lambda.Function(this, 'SampleLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`exports.handler = async (event, context) => {
        console.log('Received event:', JSON.stringify(event, null, 2));
        return {
          statusCode: 200,
          body: JSON.stringify('Hello from Lambda!'),
        };
      };`),
    });

    // Grant permission to Lambda function to send messages to the SQS queue
    queue.grantSendMessages(lambdaFn);
  }
}

module.exports = { SampleAwsCdkDeployDemoStack };
