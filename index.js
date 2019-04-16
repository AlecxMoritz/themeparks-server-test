require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const parks = require('./controllers/parksController');

app.use(bodyParser.json())
app.use(require('./middleware/headers'));

app.use('/parks', parks);

app.listen(process.env.PORT, function() {
    console.log("Server is listening on ", process.env.PORT)
})