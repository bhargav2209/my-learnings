import {Stack, StackProps} from "@aws-cdk/core";
import {Construct} from "constructs";
import {Code, Function as LambdaFunction, Runtime} from "@aws-cdk/aws-lambda";
import { join } from "path";
import {LambdaIntegration} from "@aws-cdk/aws-apigateway";


export class LambdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new LambdaFunction(this, 'HelloLambda', {
            runtime: Runtime.NODEJS_16_X,
            handler: 'hello.main',
            code: Code.fromAsset(join(__dirname, '..', '..', 'services'))
       })
       this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }
}
