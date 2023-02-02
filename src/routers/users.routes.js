import express from 'express';
import { getUsers, createUser, getUser } from '../controllers/users.controllers.js';

const UserRoutes = express.Router();

UserRoutes.route('/users')
  .get(getUsers)
  .post(createUser);

UserRoutes.route('/users/:id')
  .get(getUser)

export default UserRoutes;