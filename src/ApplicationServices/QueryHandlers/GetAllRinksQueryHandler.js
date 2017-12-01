//const Player = require('../../Domain/Player');
const RinkDto = require('shared/Contracts/DTOs/RinkDto');


function GetAllRinksQueryHandler(repo, mapper){
    this.repo = repo;
    this.mapper = mapper;

    this.handle = (query)=>{
        return repo.getAll()
        .then(rinks => {
            let rinkDtos = rinks.map(function(rink) {
                let rinkDto = new RinkDto(rink.Id);
                mapper.map(rink,rinkDto);
                return rinkDto;
            });

            rinkDtos.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            return rinkDtos;
        })        
    }
}

module.exports = GetAllRinksQueryHandler;