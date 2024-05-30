const { Notification } = require('../models');

async function getUserNotifications(userId) {
  const notifications = await Notification.findAll({ where: { user_id: userId } });
  return notifications;
}

async function markNotificationsAsRead(userId, notificationIds) {
  await Notification.update({ is_read: true }, { where: { id: notificationIds, user_id: userId } });
}

module.exports = {
  getUserNotifications,
  markNotificationsAsRead,
};
