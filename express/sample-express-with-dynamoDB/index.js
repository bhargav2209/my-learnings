const express = require('express');
const app = express();
const port = 3000;
const AWS = require('aws-sdk');
app.use(express.json());

const region = 'us-east-2';

AWS.config.update({
    region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = 'Bhargav-User'; // Replace with your table name
app.get('/', (req, res) => {
    res.send("Hello World")
});

app.post('/', async (req, res) => {
    const { userName, password } = req.body;
    const params = {
        TableName: tableName,
        Key: {
            userName
        }
    };

    try {
        const data = await docClient.get(params).promise();
        if (data.Item?.password === password) {
            res.send('log in succses');
        } else {
            res.status(401);
            res.send('log in fail');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

