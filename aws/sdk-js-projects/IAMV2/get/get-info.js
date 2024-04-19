const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    UserName:'IAM-Demo-2'
}

iam.getUser(params, (err, data) => {
    if(err) {
        console.log(err, err.stack);
    }else {
        console.log(data);
    }
})
