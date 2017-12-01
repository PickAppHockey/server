const Repository = require('./Repository');
//const context = require('../Infrastructure/Abstractions/ORM/context')


function RinkRepository(context){
    Repository.call(this,context.Rinks);

}

module.exports = RinkRepository;

