const utilities ={
    getQualityAdjustedTraffic:(trafficPlayTimes, startDateTime, endDateTime)=>{
        let trafficUnits = 0;
        trafficPlayTimes.forEach(playTime=>{
            let otherStartTime = new Date(Math.max.apply(null,[startDateTime, playTime.startDateTime]));
            let otherEndTime = new Date(Math.min.apply(null,[endDateTime, playTime.endDateTime]));
            let trafficUnit = (otherEndTime-otherStartTime)/(endDateTime - startDateTime)
            trafficUnits += trafficUnit;
        });
        return trafficUnits;
    },

    GetPlayTimesTraffic: (playTimes, startDateTime, endDateTime)=>{
        let traffic = []
        playTimes.forEach(playTime=>{
            if(playTime.startDateTime < endDateTime
            && playTime.endDateTime > startDateTime){
                traffic.push(playTime);
            }
        })
        return traffic;
    }
}

module.exports = utilities;