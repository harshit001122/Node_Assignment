const authService = require('../services/authService');

async function register(req, res) {
  try {
    const { username, password, email } = req.body;
    const user = await authService.register(username, password, email);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const { user, token } = await authService.login(username, password);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getProfile(req, res) {
  res.json(req.user);
}

module.exports = {
  register,
  login,
  getProfile
};
