const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server is running on port ${Port}.`));