import { v4 as uuidv4 } from 'uuid';
import Joi from 'joi';
import db  from '../models/index.js';
import HTTPError from '../utils/errors/HTTPError.js';

const schema = Joi.object({
  id: Joi.string().uuid().required(),
  name: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().required(),
});

const validateId = Joi.object({
  id: Joi.string().uuid().required()
});

const createUser = async (user) => {
  if(Array.isArray(user)) {
    throw new HTTPError('Input is not in JSON', 400);
  }
  const id = uuidv4();
  const newUser = {
    ...user,
    id,
  }
  await schema.validateAsync(newUser);
  db.push(newUser);
  return newUser;
};

const getUsers = async () => {
  const users = db;
  if (!users.length) {
    throw new HTTPError('No user found', 404);
  }
  return users;
};

const getUser = async (id) => {
  await validateId.validateAsync({ id });
  const user = db.filter((user) => user.id === id);
  if (!user.length) {
    throw new HTTPError(`User with id ${id} was not found`, 404);
  }
  return user;
};

const userService = {
  createUser,
  getUsers,
  getUser,
};

export default userService;