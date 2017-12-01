const config = require('../../config');
var knex = require('knex')(config.connectionString); 
var bookshelf = require('bookshelf')(knex);

const Player = bookshelf.Model.extend({
    tableName: 'Players',
    playTimes: function(){return this.hasMany(PlayTime)}
});

const Rink =  bookshelf.Model.extend({
    tableName: 'Rinks',
    playTimes: function(){return this.hasMany(PlayTime)}
});

const PlayTime = bookshelf.Model.extend({
    tableName: 'PlayTimes',
    player: function(){return this.belongsTo(Player);},
    rink: function(){return this.belongsTo(Rink,"rinkId");}
    
})



function Context() {
    this.Players = Player;
    this.Rinks = Rink;
    this.PlayTimes = PlayTime; 
    
    
}

module.exports = Context;

