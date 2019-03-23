const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require("dotenv").config({
    path: path.join(__dirname, "./.env")
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server is running on port ${Port}.`));