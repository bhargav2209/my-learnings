#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { SampleAwsCdkDeployDemoStack } = require('../lib/sample-aws-cdk-deploy-demo-stack');

const app = new cdk.App();
new SampleAwsCdkDeployDemoStack(app, 'SampleAwsCdkDeployDemoStack', {
  env: { account: '263546120889', region: 'us-east-2' },
});

