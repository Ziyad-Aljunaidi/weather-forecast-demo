
const request = require('request');
const
    express = require('express'),
    fetch = require('node-fetch'),
    bodyparser = require('body-parser'),
    fs = require('fs'),
    path = require("path"),
    querystring = require('querystring'),
    app = express().use(bodyparser.json()); // Creates http server

require('dotenv').config();
const ApiKey = process.env.openWeatherMap_KEY;

'use strict'
// Import dependencie and set up http server







app.listen(process.env.PORT || 3000, () => console.log('Server is listening'));


app.get("/test", async function(req, res) {

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=cf22601fba0f59ed4907897feb56c11d`;
    const fetch_response = await fetch(api_url);
    const jsondata = await fetch_response.json();
    console.log(jsondata)
    res.json(jsondata);
});


