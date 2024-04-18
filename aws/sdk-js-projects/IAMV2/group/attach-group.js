const AWS = require( "aws-sdk" );

iam = new AWS.IAM()


const params = {
    GroupName: 'RDSAdmins',
    PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
}
iam.attachGroupPolicy(params, function(err, data) {

    if(err) {
        console.log(err, err.stack);

    }else {
        console.log(data);

    }



})
