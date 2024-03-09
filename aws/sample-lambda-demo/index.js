const express = require('express');
const { login} = require('./login');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', login);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

