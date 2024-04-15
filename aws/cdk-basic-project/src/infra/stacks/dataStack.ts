import { Stack, StackProps } from "@aws-cdk/core";
import { Construct } from "constructs"


export class DataStack extends Stack{
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
    }
}
