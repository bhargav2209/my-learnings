const { Stack, App, Duration } = require('@aws-cdk/core');
const { StateMachine, Choice, Condition, Pass } = require('@aws-cdk/aws-stepfunctions');
const { Function, Runtime, Code } = require('@aws-cdk/aws-lambda');

class StepFunctionStack extends Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // Create a Lambda function
        const myLambda = new Function(this, 'MyLambda', {
            runtime: Runtime.NODEJS_16_X,
            handler: 'index.handler', // assuming your handler is in index.js file and named handler
            code: Code.fromAsset('.'), // path to your lambda function code
        });

        // Define the states for the step function
        const firstState = new Pass(this, 'FirstState');

        const secondState = new Pass(this, 'SecondState');

        // Define the choice state
        const choice = new Choice(this, 'Is Input 1 Greater Than 10?');
        const condition = Condition.numberGreaterThanEquals('$.input1', 10);
        choice.when(condition, firstState);
        choice.otherwise(secondState);

        // Define the state machine
        new StateMachine(this, 'MyStateMachine', {
            definition: choice,
            timeout: Duration.minutes(5), // Optionally set a timeout for the state machine
        });
    }
}

const app = new App();
new StepFunctionStack(app, 'StepFunctionStack');
app.synth();
