const Player = require('../../Domain/Player');

function RegisterPlayerCommandHandler(repo){
    this.repo = repo;
    this.execute = (command)=>{
        let playerDto = command.player;
        let player = new Player(playerDto.id);

        player.editProfile(playerDto.username, playerDto.hash, playerDto.position, playerDto.skillLevel, playerDto.gender);
        //mapper.map(player,playerDto,false) // false to indicate to return player entity
        return repo.add(player);
    }
}

module.exports = RegisterPlayerCommandHandler;