const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');

function LoginCommandHandler(repo, mapper){
    this.repo = repo;
    this.execute = (command)=>{
        let username = command.username;
        let hash = command.hash;
        return repo.getByLogin(username, hash)
        .then(player => {
            
            let playerDto = null
            if(player !==null){
                playerDto = new PlayerDto(player.Id);
                mapper.map(player,playerDto);    
            }
            return new Promise((resolve,reject)=>{resolve(playerDto)})
        })
    }
}

module.exports = LoginCommandHandler;