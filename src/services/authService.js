const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const knex = require('knex')(require('../../knexfile').development);

const secret = process.env.JWT_SECRET;

async function register(username, password, email) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [user] = await knex('users').insert({
    username,
    password: hashedPassword,
    email
  }).returning('*');
  return user;
}

async function login(username, password) {
  const user = await knex('users').where({ username }).first();
  if (!user) {
    throw new Error('User not found');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });
  return { user, token };
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error('Invalid token');
  }
}

module.exports = {
  register,
  login,
  verifyToken
};
