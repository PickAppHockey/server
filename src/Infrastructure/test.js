//player id "f052b850-d202-11e7-9c5b-23b6fa98e7d8"
//rink   id "26666e10-d216-11e7-8ed2-b510951af1a4"
//playtime id ""

const Boostrapper = require('./Bootstrapper');
const RegisterPlayerCommand = require('shared/Contracts/Commands/RegisterPlayerCommand');
const AddPlayTimeCommand = require('shared/Contracts/Commands/AddPlayTimeCommand');
const EditPlayerProfileCommand = require('shared/Contracts/Commands/EditPlayerProfileCommand');
const EditPlayTimeCommand = require('shared/Contracts/Commands/EditPlayTimeCommand');
const DeletePlayTimeCommand = require('shared/Contracts/Commands/DeletePlayTimeCommand');
const LoginCommand = require('shared/Contracts/Commands/LoginCommand');

const GetPlayerQuery = require('shared/Contracts/Queries/GetPlayerQuery');
const GetPlayerByLoginQuery = require('shared/Contracts/Queries/GetPlayerByLoginQuery');
const GetPlayTimeQuery = require('shared/Contracts/Queries/GetPlayTimeQuery');
const GetPlayTimesByPlayerIdQuery = require('shared/Contracts/Queries/GetPlayTimesByPlayerIdQuery');
const GetRinkQuery = require('shared/Contracts/Queries/GetRinkQuery');
const GetAllRinksQuery = require('shared/Contracts/Queries/GetAllRinksQuery');
const GetPlayTimeCardInfoQuery = require('shared/Contracts/Queries/GetPlayTimeCardInfoQuery');
const GetPlayTimeTrafficByRinkAndDateTimeQuery = require('shared/Contracts/Queries/GetPlayTimeTrafficByRinkAndDateTimeQuery');



const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');

const uuidv1 = require('uuid/v1');
const CommandProcessor = require('./MessengerServices/CommandProcessor');
const QueryProcessor = require('./MessengerServices/QueryProcessor');



Boostrapper.registerServices(Boostrapper.container);

const Rink = require("../Domain/Rink");
const request = require('request');
let key = "AIzaSyBZFAMef8RWEOzQ0zjaKUIDdOgVhAofLBI";
let query = "outdoor+rinks+Toronto";
path = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key="+ key;
let repo = Boostrapper.container.get("RinkRepository");

request(path, function (error, response, body) {
    let rinks = JSON.parse(body).results;

    rinks.forEach(function(elem) {
        let rink = new Rink(uuidv1());        
        rink.name = elem.name;
        rink.latitude = elem.geometry.location.lat
        rink.longitute = elem.geometry.location.lng
        rink.hasNets = true;
        rink.iceCondition = "good";
        rink.playerCapacity = 20;


        
            repo.add(rink);
            
        
    });
    

  });

  // const uuidv1 = require('uuid/v1');
// const Rink = require("../Domain/Rink");
// const request = require('request');
// let key = "AIzaSyBZFAMef8RWEOzQ0zjaKUIDdOgVhAofLBI";
// let query = "outdoor+rinks+Toronto";
// path = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key="+ key;
// let repo = Boostrapper.container.get("RinkRepository");

// request(path, function (error, response, body) {
//     let rinks = JSON.parse(body).results;
//     let array = [];
//     rinks.forEach(function(elem) {
//         let rink = new Rink(uuidv1());        
//         rink.name = elem.name;
//         rink.latitude = elem.geometry.location.lat
//         rink.longitute = elem.geometry.location.lng
//         rink.hasNets = true;
//         rink.iceCondition = "good";
//         rink.playerCapacity = 20;

//         array.push(rink);

        
//             //repo.add(rink);
            
        
//     });
//     console.log(array);
    

//   });






// let query = new GetPlayTimeTrafficByRinkAndDateTimeQuery("461ebe70-d51c-11e7-9bfd-8348d494a5c3",);
// let processor = QueryProcessor;
// processor.handle(query)
// .then(data=>{
//     console.log(data);
// })

// let player = new PlayerDto(uuidv1());
// player.username = 'evan';
// player.hash = "pass";
// player.position = 'player';
// player.skillLevel = 'great';
// player.gender = "male";
// let cmd = new LoginCommand(player.username,"player");
// CommandProcessor.execute(cmd)
// .then(data=>{
//     console.log(data);
// })





// const Rink = require('../Domain/Rink'); 






