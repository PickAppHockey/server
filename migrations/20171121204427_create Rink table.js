
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('Rinks', function(table){
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('playerCapacity').notNullable();
      table.bool('hasNets')
      table.string('iceCondition');
      table.string('latitude').notNullable();
      table.string('longitute').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Rinks')
  };

