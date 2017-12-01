const PlayTime = require('../../Domain/PlayTime');

function DeletePlayTimeCommandHandler(repo){
    this.repo = repo;
    this.execute = (command)=>{
        return repo.delete(command.playTimeId);
    }
}

module.exports = DeletePlayTimeCommandHandler;