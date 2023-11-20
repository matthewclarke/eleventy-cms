// app.js
const express = require('express');  // include the "express" module
const path = require('path');
const fs = require('fs');
const app = express();
const port = 9000;
const { JsonDB, Config }  = require('node-json-db');

let db;
let init = async () => {
    db = new JsonDB(new Config("api/cms-database", true, false, '/'));
    await db.push("/pages",[{"name":"first-page", "template":"first-page.njk"}]);
    let data = await db.getData("/pages");
    console.log(data);
    return;
}

init();

// need this to parse JSON
app.use(require('body-parser').json())
// post aand get  for sample JSON
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

let getTable = async (t) => {

    let o = await db.getData(t);
    console.log(o);
    return o;

};
// Get for Pages
app.get('/get-pages', async (req, res) => {
    let data =  await db.getData('/pages');
    res.setHeader('Content-type', 'application/json' );
    res.end(JSON.stringify(data));


    /*
    fs.readFile('api/cms-database.json', function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', 'application/json' );
        res.end(data["pages);
      }
    });
*/

});

// Define route for get request at '/'
//app.get('/', (req, res) => res.send('hello, express world'));
// Define the static resource (HTML/CSS/JS/images)
//app.use(express.static(path.join(__dirname, '/api')));
app.use(express.static('api'));             // URL '/' (root) maps to 'public' directory
//app.use('/static', express.static('public'));  // URL '/static' also maps to 'public' directory

app.listen(port, () => console.log(`Server listening at port ${port}...`));
