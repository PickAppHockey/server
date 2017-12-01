const inversify = require('inversify');
require("reflect-metadata");

const Mapper = require('../Abstractions/Mapper/Mapper');


const InfrastructureRegistrations = {
    registerServices: (container) => registerServices(container),
}




function registerServices(container){

    var TYPES = {
        Mapper: "Mapper",
        
    };

    // Declare as injectable and its dependencies
    inversify.decorate(inversify.injectable(), Mapper);

    // Declare bindings
    container.bind(TYPES.Mapper).to(Mapper);    

}

module.exports = InfrastructureRegistrations;

