const express = require('express');
const {Schema} = require("mongoose");
const mongoose = require('mongoose');
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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

