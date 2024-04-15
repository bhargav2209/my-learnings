import {App} from "@aws-cdk/core";
import { DataStack } from "./stacks/dataStack"
import {LambdaStack} from "./stacks/lambdaStack";
import {ApiStack} from "./stacks/apiStack";

const app = new App();
new DataStack(app, 'DataStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack');
new ApiStack(app, 'ApiStack', {
    helloLambdaIntegration: lambdaStack.helloLambdaIntegration
})