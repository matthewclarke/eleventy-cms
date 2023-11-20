// app.js
const express = require('express');  // include the "express" module
const path = require('path');
const fs = require('fs');
const app = express();
const port = 9000;

app.use(require('body-parser').json())
app.post('/post', (req, res) => {
    console.log(req.body);
    fs.writeFileSync('api/data.json', JSON.stringify(req.body));
  res.send('Got a POST request');
});
app.get('/get', (req, res) => {
    fs.readFile('api/data.json', function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
res.setHeader('Content-type', 'application/json' );
        res.end(data);
      }
    });


});
// Define route for get request at '/'
//app.get('/', (req, res) => res.send('hello, express world'));
// Define the static resource (HTML/CSS/JS/images)
//app.use(express.static(path.join(__dirname, '/api')));
app.use(express.static('api'));             // URL '/' (root) maps to 'public' directory
//app.use('/static', express.static('public'));  // URL '/static' also maps to 'public' directory

app.listen(port, () => console.log(`Server listening at port ${port}...`));
