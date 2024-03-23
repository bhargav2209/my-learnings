const handler = require('./index.cjs').handler;
const AWS = require('aws-sdk');

const region = 'us-east-2';

AWS.config.update({
    region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = 'Bhargav-User'; // Replace with your table name
const localRun = async () => {
    const params = {
        TableName: tableName,
        Key: {
            userName: 'admin'
        }
    };

    try {
        const data = await docClient.get(params).promise();
        const loginStatus = await handler({userName: data.Item?.userName, password: data.Item?.password});
        console.log('loginStatus ==>', loginStatus);
    } catch (error) {
        console.error(error);
    }
}

localRun();

