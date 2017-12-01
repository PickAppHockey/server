const request = require('request');
let key = "AIzaSyBZFAMef8RWEOzQ0zjaKUIDdOgVhAofLBI";
let query = "outdoor+rinks+Toronto";
path = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key="+ key;

request(path, function (error, response, body) {
    let rinks = JSON.parse(body).results;


    

  });
