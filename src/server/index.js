const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
//const cors = require('cors');
//app.use(cors());

app.use(express.static('dist'));

// Setup Server
const port = 8081;
const server = app.listen(port, listening);
function listening(){
  console.log('Running on localhost '+port);
};

app.post('/', function (req, res){
  console.log('coco');
  console.log(req.body.textToEvaluate);

var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
textapi.sentiment({
    'text': req.body.textToEvaluate
}, function(error, response) {
  // now we are sending the answer from the API to the client
    if (error === null) {
        console.log(response);
    res.send(response);
    }
});
    });