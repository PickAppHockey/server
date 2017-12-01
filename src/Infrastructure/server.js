const Boostrapper = require('./Bootstrapper');
var cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const CommandProcessor = require('./MessengerServices/CommandProcessor');
const QueryProcessor = require('./MessengerServices/QueryProcessor');


Boostrapper.registerServices(Boostrapper.container);


const port = '8080';

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/Commands', (req, res) =>{
    if (!req.body) return res.sendStatus(400);
    let cmd = req.body;
    CommandProcessor.execute(cmd)
    .then(data =>{
        dataJson = JSON.stringify(data);
        res.send(dataJson);

    }).catch(error=>{
        console.log(error);
        let jsonError = JSON.stringify(error);
        res.status(400).send(jsonError);    
    })
})

app.get('/Queries', (req, res) =>{
    if (!req.query) return res.sendStatus(400);
    let query = req.query;
    QueryProcessor.handle(query)
    .then(data =>{
        dataJson = JSON.stringify(data);
        res.send(dataJson);

    }).catch(error=>{
        console.log(error);
        let jsonError = JSON.stringify(error);
        res.status(400).send(jsonError);    
    })
})



app.listen(port,()=>{
    console.log("listening on port: " + port);
});