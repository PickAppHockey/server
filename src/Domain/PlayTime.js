
function PlayTime(id, playerId, rinkId){
    this.id = id;
    this.startDateTime = null;
    this.endDateTime = null;
    this.playerId = playerId;
    this.rinkId = rinkId;

    this.editPlayTime =(dateTime, duration)=>{
        this.startDateTime = dateTime;
        this.endDateTime = duration;
    }

}

module.exports = PlayTime;