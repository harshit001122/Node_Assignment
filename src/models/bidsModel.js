const knex = require('knex')(require('../../knexfile').development);

function createBid(bid) {
  return knex('bids').insert(bid).returning('*');
}

function getBidsByItemId(itemId) {
  return knex('bids').where({ item_id: itemId }).select('*');
}

module.exports = {
  createBid,
  getBidsByItemId
};
