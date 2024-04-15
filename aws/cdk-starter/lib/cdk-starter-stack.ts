import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, CfnBucket} from "aws-cdk-lib/aws-s3";
import {CfnOutput, CfnParameter, Duration} from "aws-cdk-lib";

class L3Bucket extends Construct{
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id );

    new Bucket(this, "L3Bucket",{
      lifecycleRules: [{
        expiration: Duration.days(expiration)
      }]
    });
  }
}
export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //set the duration of bucket life cycle
    const  duration = new CfnParameter(this, 'duration',{
      default: 6,
      minValue: 1,
      maxValue: 10,
      type: 'Number'
    });

    // creat an 3 s3 bucket 3 ways:
    const myL1Bucket = new Bucket(this, "L1Bucket",{
      lifecycleRules: [{
          expiration: Duration.days(duration.valueAsNumber)
      }]
    });

    // set a bucket name in Cfn output
    new CfnOutput(this, 'MyL1BucketName',{
      value: myL1Bucket.bucketName
    });

    new CfnBucket(this, "L2Bucket",{
        lifecycleConfiguration:{
          rules:[{
            expirationInDays: 1,
            status: 'Enabled'
          }]
        }
      });

    new L3Bucket(this, "L3Bucket" , 3);
  }
}
