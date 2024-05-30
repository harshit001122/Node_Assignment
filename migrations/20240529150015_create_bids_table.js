exports.up = function(knex) {
    return knex.schema.createTable('bids', function(table) {
      table.increments('id').primary();
      table.integer('item_id').references('id').inTable('items').onDelete('CASCADE');
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.decimal('bid_amount').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('bids');
  };
  