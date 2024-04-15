import {App} from "@aws-cdk/core";
import { DataStack } from "./stacks/dataStack"

const app = new App();
new DataStack(app, 'DataStack');
