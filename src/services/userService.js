const { User } = require('../models');

async function register(username, password, email) {
  // Check if the username or email is already taken
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ username }, { email }],
    },
  });
  if (existingUser) {
    throw new Error('Username or email is already taken');
  }

  // Create a new user
  const newUser = await User.create({ username, password, email });
  return newUser;
}

async function login(username, password) {
  // Find user by username
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Check if the password is correct
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  const token = user.generateAuthToken();

  return { user, token };
}

module.exports = {
  register,
  login,
};
