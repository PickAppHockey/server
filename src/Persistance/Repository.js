const context = require('../Infrastructure/Abstractions/ORM/Context');

function Repository(model){
    this.table = model;

    this.add = (entity)=>{
        let model = this.mapToModel(entity);
        return new this.table(model)
            .save(null, {method: 'insert'})
            .then(data =>{
                return data.attributes
            })        
    }

    this.update = (entity)=>{
        let model = this.mapToModel(entity);        
        return new this.table()
            .set(model)
            .save(null,{method:"update"})
            .then(data =>{
                return new Promise((resolve,reject)=>{resolve(data.attributes)})
            })    
    }

    this.delete = (entityId)=>{
        return new this.table({id: entityId})
            .destroy()
            .then(data =>{
                return new Promise((resolve,reject)=>{resolve(data.attributes)})
            })        
    }



    this.get = (id)=>{
        return this.table
        .where({id: id})
        .fetch()
        .then(data =>{
            return new Promise((resolve,reject)=>{resolve(data.attributes)})
        })
    }
    this.getAll = ()=>{
        return this.table
        .fetchAll()
        .then(data =>{
            let entities = data.models.map(function(element) {
                return element = element.attributes;
            });
            return new Promise((resolve,reject)=>{resolve(entities)});
        })
    }

    //this is to remove methods and extra stuff from entity
    this.mapToModel =(entity)=>{
        let model  = {};
        for(let prop in entity){
            if(typeof(entity[prop]) !== 'function' ||
            //bc want to include date, but is a function
            prop == "dateTime"){
                model[prop] = entity[prop];                
            }
        }
        return model;
    }

}

module.exports = Repository;

