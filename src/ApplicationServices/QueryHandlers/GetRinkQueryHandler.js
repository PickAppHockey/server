//const Player = require('../../Domain/Player');
const RinkDto = require('shared/Contracts/DTOs/RinkDto');


function GetRinkQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.get(query.rinkId)
        .then(rink => {
            let rinkDto = new RinkDto(rink.Id);
            mapper.map(rink,rinkDto);
            return new Promise((resolve,reject)=>{resolve(rinkDto)})
            
        })        
    }
}

module.exports = GetRinkQueryHandler;