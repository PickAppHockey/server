const Repository = require('./Repository');
//const context = require('../Infrastructure/Abstractions/ORM/context')


function PlayerRepository(context){
    Repository.call(this,context.Players);
    this.getByLogin = (name, hash)=>{
        return context.Players 
        .where({"username": name, "hash": hash})
        .fetch()
        .then(data =>{
            let player = (data===null)?null : data.attributes;
            return new Promise((resolve,reject)=>{resolve(player)})            
        })
    }
}

module.exports = PlayerRepository;

