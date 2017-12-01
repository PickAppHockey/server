const Repository = require('./Repository');
//const context = require('../Infrastructure/Abstractions/ORM/context')


function PlayTimeRepository(context){
    Repository.call(this,context.PlayTimes);
    this.getByPlayerId = (playerId)=>{
        return context.PlayTimes
        .where('playerId', playerId)
        .fetchAll()
        .then(data =>{
            let entities = data.models.map(function(element) {
                return element = element.attributes;
            });
            return new Promise((resolve,reject)=>{resolve(entities)});
        })

    }

    this.getPlayTimeWithRink = (id)=>{
        return context.PlayTimes
        .where({'id': id})
        .fetch({withRelated: ['rink']})
        .then(data =>{
            let rink = data.related('rink').attributes;
            let playTime = data.attributes;
            return {playTime,rink};
            //return new Promise((resolve,reject)=>{resolve(entities)});
        })

    }

    this.getPlayTimesByRinkAndDateTime = (rinkId, startDateTime, endDateTime)=>{
        return context.PlayTimes
        .query(qb=>{
            qb.where('rinkId', '=', rinkId)
              .andWhere('startDateTime', '<', endDateTime)
              .andWhere('endDateTime', '>', startDateTime)  
        })  
        .fetchAll()
        .then(data =>{
            let entities = data.models.map(function(element) {
                return element = element.attributes;
            });
            return entities;
            //return new Promise((resolve,reject)=>{resolve(entities)});
        })

    }

    
}

module.exports = PlayTimeRepository;

