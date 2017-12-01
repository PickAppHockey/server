//const Player = require('../../Domain/Player');
const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');


function GetPlayerByLoginQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.getByLogin(query.playerName, query.playerHash)
        .then(player => {
            let playerDto = new PlayerDto(player.Id);
            mapper.map(player,playerDto);
            return new Promise((resolve,reject)=>{resolve(playerDto)})
            
        })        
    }
}

module.exports = GetPlayerByLoginQueryHandler;