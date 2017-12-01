const inversify = require('inversify');
require("reflect-metadata");

const PlayerRepository = require('../../Persistance/PlayerRepository');
const PlayTimeRepository = require('../../Persistance/PlayTimeRepository');
const RinkRepository = require('../../Persistance/RinkRepository');

const Mapper = require('../Abstractions/Mapper/Mapper');

//cmds
const RegisterPlayerCommandHandler = require('../../ApplicationServices/CommandHandlers/RegisterPlayerCommandHandler');
const AddPlayTimeCommandHandler = require('../../ApplicationServices/CommandHandlers/AddPlayTimeCommandHandler');
const EditPlayerProfileCommandHandler = require('../../ApplicationServices/CommandHandlers/EditPlayerProfileCommandHandler');
const EditPlayTimeCommandHandler = require('../../ApplicationServices/CommandHandlers/EditPlayTimeCommandHandler');
const DeletePlayTimeCommandHandler = require('../../ApplicationServices/CommandHandlers/DeletePlayTimeCommandHandler');
const LoginCommandHandler = require('../../ApplicationServices/CommandHandlers/LoginCommandHandler');


//queries
const GetPlayerQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayerQueryHandler');
const GetPlayerByLoginQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayerByLoginQueryHandler');
const GetPlayTimeQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayTimeQueryHandler');
const GetPlayTimesByPlayerIdQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayTimesByPlayerIdQueryHandler');
const GetRinkQueryHandler = require('../../ApplicationServices/QueryHandlers/GetRinkQueryHandler');
const GetAllRinksQueryHandler = require('../../ApplicationServices/QueryHandlers/GetAllRinksQueryHandler');
const GetPlayTimeCardInfoQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayTimeCardInfoQueryHandler');
const GetPlayTimeTrafficByRinkAndDateTimeQueryHandler = require('../../ApplicationServices/QueryHandlers/GetPlayTimeTrafficByRinkAndDateTimeQueryHandler');




const ApplicationServicesRegistrations = {
    registerServices: (container) => registerServices(container),
}




function registerServices(container){

    var TYPES = {
        PlayerRepository: "PlayerRepository",
        PlayTimeRepository: "PlayTimeRepository",
        RinkRepository: "RinkRepository",
        Mapper: "Mapper",

        //cmds
        RegisterPlayerCommandHandler: "RegisterPlayerCommandHandler",
        AddPlayTimeCommandHandler: "AddPlayTimeCommandHandler",
        EditPlayerProfileCommandHandler: "EditPlayerProfileCommandHandler",
        EditPlayTimeCommandHandler: "EditPlayTimeCommandHandler",
        DeletePlayTimeCommandHandler: "DeletePlayTimeCommandHandler",
        LoginCommandHandler: "LoginCommandHandler",
        

        //queries
        GetPlayerQueryHandler: "GetPlayerQueryHandler",
        GetPlayerByLoginQueryHandler: "GetPlayerByLoginQueryHandler",
        GetPlayTimeQueryHandler: "GetPlayTimeQueryHandler",
        GetPlayTimesByPlayerIdQueryHandler: "GetPlayTimesByPlayerIdQueryHandler",
        GetRinkQueryHandler: "GetRinkQueryHandler",
        GetAllRinksQueryHandler: "GetAllRinksQueryHandler",
        GetPlayTimeCardInfoQueryHandler: "GetPlayTimeCardInfoQueryHandler",
        GetPlayTimeTrafficByRinkAndDateTimeQueryHandler: "GetPlayTimeTrafficByRinkAndDateTimeQueryHandler",
    };

    // Declare as injectable and its dependencies
    inversify.decorate(inversify.injectable(), RegisterPlayerCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayerRepository), RegisterPlayerCommandHandler,0);

    inversify.decorate(inversify.injectable(), EditPlayerProfileCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayerRepository), EditPlayerProfileCommandHandler,0);

    inversify.decorate(inversify.injectable(), AddPlayTimeCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), AddPlayTimeCommandHandler,0);

    inversify.decorate(inversify.injectable(), EditPlayTimeCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), EditPlayTimeCommandHandler,0);

    inversify.decorate(inversify.injectable(), DeletePlayTimeCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), DeletePlayTimeCommandHandler,0);

    inversify.decorate(inversify.injectable(), LoginCommandHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayerRepository), LoginCommandHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), LoginCommandHandler,1);




    //---------------------------------------------------------------------------------------------

    inversify.decorate(inversify.injectable(), GetPlayerQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayerRepository), GetPlayerQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayerQueryHandler,1);


    inversify.decorate(inversify.injectable(), GetPlayerByLoginQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayerRepository), GetPlayerByLoginQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayerByLoginQueryHandler,1);


    inversify.decorate(inversify.injectable(), GetPlayTimeQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), GetPlayTimeQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayTimeQueryHandler,1);

    inversify.decorate(inversify.injectable(), GetPlayTimesByPlayerIdQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), GetPlayTimesByPlayerIdQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayTimesByPlayerIdQueryHandler,1);

    inversify.decorate(inversify.injectable(), GetRinkQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.RinkRepository), GetRinkQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetRinkQueryHandler,1);

    inversify.decorate(inversify.injectable(), GetAllRinksQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.RinkRepository), GetAllRinksQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetAllRinksQueryHandler,1);

    inversify.decorate(inversify.injectable(), GetPlayTimeCardInfoQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), GetPlayTimeCardInfoQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayTimeCardInfoQueryHandler,1);

    inversify.decorate(inversify.injectable(), GetPlayTimeTrafficByRinkAndDateTimeQueryHandler);   
    inversify.decorate(inversify.inject(TYPES.PlayTimeRepository), GetPlayTimeTrafficByRinkAndDateTimeQueryHandler,0);
    inversify.decorate(inversify.inject(TYPES.Mapper), GetPlayTimeTrafficByRinkAndDateTimeQueryHandler,1);

    
    

    // Declare bindings
    container.bind(TYPES.RegisterPlayerCommandHandler).to(RegisterPlayerCommandHandler);
    container.bind(TYPES.EditPlayerProfileCommandHandler).to(EditPlayerProfileCommandHandler);
    container.bind(TYPES.AddPlayTimeCommandHandler).to(AddPlayTimeCommandHandler);
    container.bind(TYPES.EditPlayTimeCommandHandler).to(EditPlayTimeCommandHandler);
    container.bind(TYPES.DeletePlayTimeCommandHandler).to(DeletePlayTimeCommandHandler);
    container.bind(TYPES.LoginCommandHandler).to(LoginCommandHandler);
    
    

    container.bind(TYPES.GetPlayerQueryHandler).to(GetPlayerQueryHandler);    
    container.bind(TYPES.GetPlayerByLoginQueryHandler).to(GetPlayerByLoginQueryHandler);
    container.bind(TYPES.GetPlayTimeQueryHandler).to(GetPlayTimeQueryHandler);
    container.bind(TYPES.GetPlayTimesByPlayerIdQueryHandler).to(GetPlayTimesByPlayerIdQueryHandler);
    container.bind(TYPES.GetRinkQueryHandler).to(GetRinkQueryHandler);
    container.bind(TYPES.GetAllRinksQueryHandler).to(GetAllRinksQueryHandler);
    container.bind(TYPES.GetPlayTimeCardInfoQueryHandler).to(GetPlayTimeCardInfoQueryHandler);
    container.bind(TYPES.GetPlayTimeTrafficByRinkAndDateTimeQueryHandler).to(GetPlayTimeTrafficByRinkAndDateTimeQueryHandler);
    
    

}

module.exports = ApplicationServicesRegistrations;

