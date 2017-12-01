//const Player = require('../../Domain/Player');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');
const RinkDto = require('shared/Contracts/DTOs/RinkDto');
const utilities = require('../../Shared/utilities');



function GetPlayTimeCardInfoQueryHandler(playTimeRepo, mapper){
    this.playTimeRepo = playTimeRepo;
    this.mapper = mapper;

    this.handle = (query)=>{
        let playTimeId = query.playTimeId;
        let selectedPlayTimeDto = null;
        let associatedRinkDto = null;
        return getPlayTimeWithRink(playTimeRepo, playTimeId, mapper)
        .then(data =>{
            selectedPlayTimeDto = data.playTimeDto;
            associatedRinkDto = data.rinkDto;
            return getPlayTimesByRinkAndDateTime(playTimeRepo, selectedPlayTimeDto)
        }) 
        .then(trafficPlayTimes=>{
            let trafficPlayTimeDtos = trafficPlayTimes.map(function(playTime) {
                let playTimeDto = new PlayTimeDto(null,null,null);
                mapper.map(playTime,playTimeDto);
                return playTimeDto;
            })
            let qualityAdjustedTraffic = utilities.getQualityAdjustedTraffic(trafficPlayTimeDtos, selectedPlayTimeDto.startDateTime, selectedPlayTimeDto.endDateTime);
            let cardInfo = {
                    trafficPlayTimes:trafficPlayTimeDtos,
                    rink:associatedRinkDto,
                    playTimeId:selectedPlayTimeDto.id,
                    qualityAdjustedTraffic
            }
            return cardInfo;           
        })
 
           
    
               
        
            
         
    }

}

function getPlayTimeWithRink(repo, playTimeId, mapper){
    return repo.getPlayTimeWithRink(playTimeId)
    .then(cardInfo => {
        let playTime = cardInfo.playTime;
        let rink = cardInfo.rink;
        let playTimeDto = new PlayTimeDto(playTime.id, playTime.playerId, playTime.rinkId);
        let rinkDto = new RinkDto(rink.id);

        mapper.map(playTime,playTimeDto);
        mapper.map(rink,rinkDto);
        
        return {playTimeDto, rinkDto}
    })
}


function getPlayTimesByRinkAndDateTime(repo, playTime){
    let startDateTime = playTime.startDateTime;
    let endDateTime = playTime.endDateTime
    return repo.getPlayTimesByRinkAndDateTime(playTime.rinkId, startDateTime, endDateTime);
}


module.exports = GetPlayTimeCardInfoQueryHandler;