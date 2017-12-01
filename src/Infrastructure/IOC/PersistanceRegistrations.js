const inversify = require('inversify');
require("reflect-metadata");

const Context = require('../Abstractions/ORM/Context');
const PlayerRepository = require('../../Persistance/PlayerRepository');
const PlayTimeRepository = require('../../Persistance/PlayTimeRepository');
const RinkRepository = require('../../Persistance/RinkRepository');


const PersistanceRegistrations = {
    registerServices: (container) => registerServices(container),
}




function registerServices(container){
    var TYPES = {
        Context: "Context",
        PlayerRepository: "PlayerRepository",
        PlayTimeRepository: "PlayTimeRepository",
        RinkRepository: "RinkRepository",
    };

    // Declare as injectable and its dependencies
    inversify.decorate(inversify.injectable(), Context);    
    inversify.decorate(inversify.injectable(), PlayerRepository);
    inversify.decorate(inversify.injectable(), PlayTimeRepository);
    inversify.decorate(inversify.injectable(), RinkRepository);    
    
    inversify.decorate(inversify.inject(TYPES.Context), PlayerRepository,0);
    inversify.decorate(inversify.inject(TYPES.Context), PlayTimeRepository,0);
    inversify.decorate(inversify.inject(TYPES.Context), RinkRepository,0);
    

    // Declare bindings
    container.bind(TYPES.Context).to(Context);
    container.bind(TYPES.PlayerRepository).to(PlayerRepository);
    container.bind(TYPES.PlayTimeRepository).to(PlayTimeRepository);
    container.bind(TYPES.RinkRepository).to(RinkRepository);
    
}

module.exports = PersistanceRegistrations;

