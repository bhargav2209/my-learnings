#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { SampleAwsCdkDeployDemoStack } = require('../lib/sample-aws-cdk-deploy-demo-stack');
const lambda = require('@aws-cdk/aws-lambda');
const stepfunctions = require('@aws-cdk/aws-stepfunctions');
const tasks = require('@aws-cdk/aws-stepfunctions-tasks');

const app = new cdk.App();
const stack = new SampleAwsCdkDeployDemoStack(app, 'SampleAwsCdkDeployDemoStack');

// Define Lambda functions
const helloFunction = new lambda.Function(stack, 'HelloFunction', {
  runtime: lambda.Runtime.NODEJS_16_X,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`
    exports.handler = async (event) => {
      return "Hello";
    };
  `)
});

const worldFunction = new lambda.Function(stack, 'WorldFunction', {
  runtime: lambda.Runtime.NODEJS_16_X,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`
    exports.handler = async (event) => {
      return "World";
    };
  `)
});

// Define Step Function
const definition = new stepfunctions.Pass(stack, 'Step1', {
  result: stepfunctions.Result.fromObject({}),
});

const helloTask = new tasks.LambdaInvoke(stack, 'Hello Task', {
  lambdaFunction: helloFunction,
  resultPath: '$.hello',
});

const worldTask = new tasks.LambdaInvoke(stack, 'World Task', {
  lambdaFunction: worldFunction,
  resultPath: '$.world',
});

definition.next(helloTask).next(worldTask);

const stateMachine = new stepfunctions.StateMachine(stack, 'MyStateMachine', {
  definition,
  timeout: cdk.Duration.minutes(5),
});
