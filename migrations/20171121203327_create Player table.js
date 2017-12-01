
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('Players', function(table){
      table.uuid('id').primary();
      table.string('username').notNullable();
      table.string('hash').notNullable();
      table.string('position');
      table.string('skillLevel');
      table.string('gender');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Players')
  };
