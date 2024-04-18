const AWS = require( "aws-sdk" );

iam = new AWS.IAM()


const params = {
    PolicyArn: "arn:aws:iam::263546120889:policy/newuserfullpolicy",
    UserName: "IAM-demo-user-1"
}
iam.attachUserPolicy(params, function(err, data) {

    if(err) {
        console.log(err);

    }else {
        console.log(data);

    }



})
