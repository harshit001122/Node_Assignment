const knex = require('knex')(require('../../knexfile').development);

function createItem(item) {
  return knex('items').insert(item).returning('*');
}

function getAllItems() {
  return knex('items').select('*');
}

function getItemById(id) {
  return knex('items').where({ id }).first();
}

function updateItem(id, item) {
  return knex('items').where({ id }).update(item).returning('*');
}

function deleteItem(id) {
  return knex('items').where({ id }).del();
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
};
