const cdk = require('aws-cdk-lib');
const { Stack, Construct, Duration } = require('aws-cdk-lib');
const { SampleAwsCdkDeployDemoStack } = require('../lib/sample-aws-cdk-deploy-demo-stack');
const lambda = require('@aws-cdk/aws-lambda');
const stepfunctions = require('@aws-cdk/aws-stepfunctions');
const tasks = require('@aws-cdk/aws-stepfunctions-tasks');

class MyStepFunctionStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define Lambda functions
    const helloFunction = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return "Hello";
        };
      `)
    });

    const worldFunction = new lambda.Function(this, 'WorldFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return "World";
        };
      `)
    });

    // Define Step Function
    const definition = new stepfunctions.Pass(this, 'Step1', {
      result: stepfunctions.Result.fromObject({}),
    });

    const helloTask = new tasks.LambdaInvoke(this, 'Hello Task', {
      lambdaFunction: helloFunction,
      resultPath: '$.hello',
    });

    const worldTask = new tasks.LambdaInvoke(this, 'World Task', {
      lambdaFunction: worldFunction,
      resultPath: '$.world',
    });

    definition.next(helloTask).next(worldTask);

    const stateMachine = new stepfunctions.StateMachine(this, 'MyStateMachine', {
      definition,
      timeout: Duration.minutes(5),
    });
  }
}

const app = new cdk.App();
new MyStepFunctionStack(app, 'MyStepFunctionStack');
