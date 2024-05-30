const knex = require('knex')(require('../../knexfile').development);

function createUser(user) {
  return knex('users').insert(user).returning('*');
}

function getUserByUsername(username) {
  return knex('users').where({ username }).first();
}

module.exports = {
  createUser,
  getUserByUsername
};
