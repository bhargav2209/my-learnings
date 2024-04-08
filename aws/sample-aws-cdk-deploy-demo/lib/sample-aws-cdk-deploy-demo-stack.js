const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigateway = require('aws-cdk-lib/aws-apigateway');

class SampleAwsCdkDeployDemoStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'SampleAwsCdkDeployDemoQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

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

    queue.grantSendMessages(lambdaFn);
    const api = new apigateway.RestApi(this, 'SampleApi', {
      restApiName: 'SampleApi',
    });
    const resource = api.root.addResource('hello');
    const method = resource.addMethod('GET', new apigateway.LambdaIntegration(lambdaFn));
  }
}

module.exports = { SampleAwsCdkDeployDemoStack };
