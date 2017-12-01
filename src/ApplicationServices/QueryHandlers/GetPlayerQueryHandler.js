//const Player = require('../../Domain/Player');
const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');


function GetPlayerQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.get(query.playerId)
        .then(player => {
            let playerDto = new PlayerDto(player.Id);
            mapper.map(player,playerDto);
            return new Promise((resolve,reject)=>{resolve(playerDto)})
            
        })        
    }
}

module.exports = GetPlayerQueryHandler;