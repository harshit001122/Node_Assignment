const notificationService = require('../services/notificationService');

async function getUserNotifications(req, res) {
  try {
    const notifications = await notificationService.getUserNotifications(req.user.id);
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function markNotificationsAsRead(req, res) {
  try {
    await notificationService.markNotificationsAsRead(req.user.id, req.body.notification_ids);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getUserNotifications,
  markNotificationsAsRead
};
