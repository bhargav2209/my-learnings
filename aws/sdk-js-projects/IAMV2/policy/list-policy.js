const AWS = require( "aws-sdk" );

iam = new AWS.IAM()

const params = {
    Scope: "Local" // "all"
}

iam.listPolicies(params, function (err, data){
    if (err){
        console.log(err);
    }
    else {
        console.log(data);
    }
})
