const PlayTime = require('../../Domain/PlayTime');

function EditPlayTimeCommandHandler(repo){
    this.repo = repo;
    this.execute = (command)=>{
        let playTimeDto = command.playTime;
        let playTime = new PlayTime(playTimeDto.id, playTimeDto.playerId, playTimeDto.rinkId);
        playTime.editPlayTime(playTimeDto.startDateTime,playTimeDto.endDateTime);
        return repo.update(playTime);
    }
}

module.exports = EditPlayTimeCommandHandler;