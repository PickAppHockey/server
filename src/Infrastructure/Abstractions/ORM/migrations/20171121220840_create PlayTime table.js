

exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('PlayTimes', function(table){
      table.uuid('id').primary();
      table.dateTime('startDateTime').notNullable();
      table.dateTime('endDateTime').notNullable();      
      table.uuid('playerId').references("Players.id").notNullable();
      table.uuid('rinkId').references("Rinks.id").notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('PlayTimes')
  };
