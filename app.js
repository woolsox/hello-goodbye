const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
 res.send(`Welcome! Visit /hello or /goodbye for a special messsage! (Try adding your name to the URL!)`);
});

app.get('/hello/:name', function(req, res) {
 res.send(`Hello there, ` + req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1) + `!`);
});

app.get('/goodbye/:name', function(req, res) {
 res.send(`See you later, ` + req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1) + `!`);
});

app.listen(port, function () {
 console.log('App starting...');
});
