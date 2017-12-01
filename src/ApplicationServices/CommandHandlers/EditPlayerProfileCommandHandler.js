const Player = require('../../Domain/Player');

function EditPlayerProfileCommandHandler(repo){
    this.repo = repo;
    this.execute = (command)=>{
        let playerDto = command.player;
        let player = new Player(playerDto.id);
        player.editProfile(playerDto.username, playerDto.hash, playerDto.position, playerDto.skillLevel, playerDto.gender);
        return repo.update(player);
    }
}

module.exports = EditPlayerProfileCommandHandler;