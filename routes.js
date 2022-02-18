const express = require('express');
const { nanoid } = require('nanoid');

// middlewares
const { auth } = require('./middlewares/auth');

// routes
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

routes.post('/login', (request, response) => {
  response.status(200).json({
    accessToken: nanoid(),
  });
});

routes.get('/me', auth, (request, response) => {
  response.status(200).json({
    id: nanoid(),
    name: 'Pedro Henrique',
    email: 'pedro@gmail.com',
    permissions: ['read'],
    roles: ['admin'],
  });
});

routes.get('/error', (req, res) => {
  const data = {
    error: 'BadRequest',
    message: 'Invalid request',
  };

  return res.status(400).json(data);
});

module.exports = { routes };
