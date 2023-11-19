// app.js
const express = require('express');  // include the "express" module
const path = require('path');
const app = express();
const port = 9000;

// Define route for get request at '/'
app.get('/', (req, res) => res.send('hello, express world'));
// Define the static resource (HTML/CSS/JS/images)
app.use(express.static(path.join(__dirname, '/www')));
//app.use(express.static('api'));             // URL '/' (root) maps to 'public' directory
//app.use('/static', express.static('public'));  // URL '/static' also maps to 'public' directory

app.listen(port, () => console.log(`Server listening at port ${port}...`));
