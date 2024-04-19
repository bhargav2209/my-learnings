const AWS = require( "aws-sdk" );

const iam= new AWS.IAM()


const params = {
    Password: 'Mypassword1',
    PasswordResetRequired:true,
    UserName: 'newUser'
}

iam.createLoginProfile(params, function (err, data){
    if (err){
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
})
