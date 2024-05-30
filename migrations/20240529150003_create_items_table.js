exports.up = function(knex) {
    return knex.schema.createTable('items', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.decimal('starting_price').notNullable();
      table.decimal('current_price').defaultTo(0);
      table.string('image_url');
      table.timestamp('end_time').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('items');
  };
  