const knex = require('knex')(require('../../knexfile').development);

function createNotification(notification) {
  return knex('notifications').insert(notification).returning('*');
}

function getNotificationsByUserId(userId) {
  return knex('notifications').where({ user_id: userId }).select('*');
}

function markNotificationAsRead(id) {
  return knex('notifications').where({ id }).update({ is_read: true }).returning('*');
}

module.exports = {
  createNotification,
  getNotificationsByUserId,
  markNotificationAsRead
};
