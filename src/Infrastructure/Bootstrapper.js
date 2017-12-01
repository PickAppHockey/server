const inversify = require('inversify');
require("reflect-metadata");
const PersistanceRegistrations = require('./IOC/PersistanceRegistrations');
const ApplicationServicesRegistrations = require('./IOC/ApplicationServicesRegistrations');
const InfrastructureRegistrations = require('./IOC/InfrastructureRegistrations');

const Bootstrapper = {
    container: new inversify.Container(),
    registerServices: (container)=>registerServices(container)
    
}


function registerServices(container){
    PersistanceRegistrations.registerServices(container);
    ApplicationServicesRegistrations.registerServices(container);
    InfrastructureRegistrations.registerServices(container);
}

module.exports = Bootstrapper;