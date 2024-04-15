import * as cdk from "aws-cdk-lib";
import {Construct} from "constructs";
import {Bucket} from "aws-cdk-lib/aws-s3";
import {CfnOutput, Fn} from "aws-cdk-lib";

export class PhotosStack extends cdk.Stack {
    private stackSuffix: string;
    public readonly photosBucketArn: string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.initializeSuffix();

        const photosBucket = new Bucket(this, 'PhotosBucket2',{
            bucketName: `photos-bucket-${this.stackSuffix}`
        });

        this.photosBucketArn = photosBucket.bucketArn;


        //4th :::> set lambda function and deploy it
        // this.initializeSuffix();
        //
        // const photosBucket = new Bucket(this, 'PhotosBucket2',{
        //     bucketName: `photos-bucket-${this.stackSuffix}`
        // });
        //
        // new CfnOutput(this, 'photos-bucket',{
        //     value: photosBucket.bucketArn,
        //     exportName: 'photos-bucket'
        // });

        // 1st :::> This is the logical ID " PhotosBucket ", the logical ID is required by CloudFormation to use this ID inside CloudFormation.
        // bucketName: 'photosbucket223KJ55' is the physical ID.
        // new Bucket(this, 'PhotosBucket',{
        //     bucketName: 'photosbucket-223kj55'
        // });

        // 2nd :::> Create a new resource first to delete the old one in aws, set physical ID
        // const  myBucket = new Bucket(this, 'PhotosBucket2',{
        //     bucketName: 'photosbucket-223kj25'
        // });
        // (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotoBuncket223')

        // 3rd :::> set the stack id using intrinsic functions
        // this.initializeSuffix();
        // new Bucket(this, 'PhotosBucket',{
        //     bucketName: `photos-bucket-${this.stackSuffix}`
        // });
    }

    private initializeSuffix(){
        const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
        this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId))
    }

    // 3rd :::> set the stack id using intrinsic functions
    // private initializeSuffix(){
    //     const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
    //     this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId))
    // }
}
