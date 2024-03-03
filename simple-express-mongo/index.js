const express = require('express');
const {Schema} = require("mongoose");
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/localDb');
const UserModel = mongoose.model('users', new Schema({userName: String, password: String}));

app.get('/', async (req, res) => {
    res.send('Hello World!')
})

app.post('/', async(req, res) => {
    const response = await UserModel.findOne({userName: req.body.userName, password: req.body.password});
    console.log("response data ==> ", response);

    if(response) {
        res.send('log in succses');
    }else {
        res.status(401);
        res.send('log in fail');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

