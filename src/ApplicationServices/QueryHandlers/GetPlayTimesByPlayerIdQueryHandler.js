//const Player = require('../../Domain/Player');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');


function GetPlayTimesByPlayerIdQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.getByPlayerId(query.playerId)
        .then(playTimes => {
            let playTimeDtos = playTimes.map(function(playTime) {
                let playTimeDto = new PlayTimeDto(playTime.Id, playTime.playerId, playTime.rinkId);
                mapper.map(playTime,playTimeDto);
                return playTimeDto;
            });
            playTimeDtos.sort(function(a,b){
                return a.startDateTime - b.startDateTime;
              });
            return playTimeDtos;
            
        })        
    }
}

module.exports = GetPlayTimesByPlayerIdQueryHandler;