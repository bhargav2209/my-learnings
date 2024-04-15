import * as cdk from "aws-cdk-lib";
import {Construct} from "constructs";
import {Fn} from "aws-cdk-lib";
import {Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda';

interface PhotosHandlerStackProps extends cdk.StackProps{
  targetBucketArn: string
}
export class PhotosHandlerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
    super(scope, id, props);

    const targetBucket = Fn.importValue('photos-bucket')

    new LambdaFunction(this, 'PhotosHandler', {
      runtime: Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: Code.fromInline(`exports.handler = async (event, context) => {
        console.log('Received event:', JSON.stringify(event, null, 2));
        return {
          statusCode: 200,
          body: JSON.stringify('Hello from Lambda!'),
        };
      };
      `),
      environment: {
        TARGET_BUCKET: props.targetBucketArn,
      },
    });
  }
}
