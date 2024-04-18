const AWS = require( "aws-sdk" );

const iam= new AWS.IAM()

const policyDocument = {
    "Version": "2024-04-18",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}

const params = {
    PolicyDocument: JSON.stringify(policyDocument),
    PolicyName: 'newuserfullpolicy',
    Description: 'This is my full access policy'
}

iam.createPolicy(params, function (err, data){
    if (err){
        console.log(err);
    }
    else {
        console.log(data);
    }
})
