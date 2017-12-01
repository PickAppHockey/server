//const Player = require('../../Domain/Player');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');


function GetPlayTimeQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.get(query.playTimeId)
        .then(playTime => {
            let playTimeDto = new PlayTimeDto(playTime.id,playTime.playerId, playTime.rinkId);
            mapper.map(playTime,playTimeDto);
            return new Promise((resolve,reject)=>{resolve(playTimeDto)})
            
        })        
    }
}

module.exports = GetPlayTimeQueryHandler;