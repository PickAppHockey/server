//const Player = require('../../Domain/Player');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');
const RinkDto = require('shared/Contracts/DTOs/RinkDto');
const utilities = require('../../Shared/utilities');
const moment = require('moment');



function GetPlayTimeTrafficByRinkAndDateTimeQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        let startDateTime = new Date(query.startDateTime);
        let endDateTime = new Date(query.endDateTime);
        return repo.getPlayTimesByRinkAndDateTime(query.rinkId, startDateTime, endDateTime)
        .then(allPlaytimesInDay=>{

            //let qualityAdjustedTraffic = utilities.getQualityAdjustedTraffic({startDateTime,endDateTime},playtimeTraffic);
            let playTimeDtosInDay = allPlaytimesInDay.map(function(playTime) {
                let playTimeDto = new PlayTimeDto(null,null,null);
                mapper.map(playTime,playTimeDto);
                return playTimeDto;
            })

            let playTimeDitribution = [];
            let trafficDistribution = [];

            for(let i = 0; i < 7; i++){ // divide 24h by 6
              
                let startTime = moment(startDateTime).add(i*4,"hours");
                let endTime = moment(startTime).add(4,"hours");
                let traffic = utilities.GetPlayTimesTraffic(playTimeDtosInDay, startTime.toDate(), endTime).toDate();
                let qualityAdjustedTraffic = utilities.getQualityAdjustedTraffic(traffic, startTime, endTime);
                let label =  moment(startTime, ["h A"]).format("HH");
                
                playTimeDitribution.push({"timeInterval":(i*4), "playTimes":traffic});
                trafficDistribution.push({"timeInterval":(i*4), "traffic":qualityAdjustedTraffic});
            }
            
            return {playTimeDitribution, trafficDistribution}
        })
           
         
    }

}



module.exports = GetPlayTimeTrafficByRinkAndDateTimeQueryHandler;