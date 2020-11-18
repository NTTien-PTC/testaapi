// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const test = require('./routes/product.router'); // Imports routes for the products
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.raw())
const dbConfig = 'mongodb://localhost:27017/exam-vmo';
const mongoose = require('mongoose');

// Connecting to the database
mongoose.set('useCreateIndex', true);
mongoose.connect(dbConfig, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use('/test', test);

let port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});