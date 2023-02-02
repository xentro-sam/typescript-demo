const express = require('express');
const Todo = require('../controllers/users.controllers');

const UserRoutes = express.Router();

UserRoutes.route('/users')
  .get(Todo.getUsers)
  .post(Todo.createUser);

UserRoutes.route('/users/:id')
  .get(Todo.getUser)

module.exports = UserRoutes;