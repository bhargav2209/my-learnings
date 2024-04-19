const AWS = require( "aws-sdk" );

const iam= new AWS.IAM()


const params = {
    NewPassword:'Mypassword1',
    OldPassword:'+aeZ(1[O'
}

iam.changePassword(params, function (err, data){
    if (err){
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
})
