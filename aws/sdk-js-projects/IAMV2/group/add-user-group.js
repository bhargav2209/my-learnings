const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'RDSAdmins',
    UserName:'IAM-Demo-2'
}

iam.addUserToGroup(params, (err, data) => {
    if(err) {
        console.log(err);

    }else {
        console.log(data);

    }
})
