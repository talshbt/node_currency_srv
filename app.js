//how to use?

// npm install express
// npm install fixer api
// nmp install fetch 
// than type node app.js
// simple go to the folder contain this file(save him as app.js) and type. 

const fetch = require('node-fetch');
var express = require('express');
var app = express();
const fixer = require('fixer-api');

var key = '246c444adaf3cc610cb386eb22461825'
fixer.set({ accessKey: key })



app.get('/getcurrencydict', function(request, response) {
    response.json([{"currencyID":1, "currencyName":"ILS"},
                  {"currencyID":2, "currencyName":"EUR"},
                  {"currencyID":3, "currencyName":"USD"}]);

});


app.get('/', function(request, response) {
    response.end(`How to use my service?, simple call like this : 'http://localhost:5555/currency/123/eng/he'`);
});


app.get('/currency/:amount/:frm/:to', function(request, response) {

    var amount = parseInt(request.params.amount);
    var frm = request.params.frm;
    var to = request.params.to;
    fetch('http://data.fixer.io/api/latest?access_key=246c444adaf3cc610cb386eb22461825')
    .then(res => res.json())
    .then((obj) =>response.end("Result = " + amount * obj.rates[frm] * obj.rates[to]))
});


app.listen(5555);

console.log("node express app started at http://localhost:5555");
