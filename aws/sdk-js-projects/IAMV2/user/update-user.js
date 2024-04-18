const AWS = require( "aws-sdk" );

const iam= new AWS.IAM()

const params = {
    NewUserName: 'IAM-demo-user-1',
    UserName: 'ai'
}

iam.updateUser(params, function (err, data){
    if (err){
        console.log(err);
    }
    else {
        console.log(data);
    }
})
