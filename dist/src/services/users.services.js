var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuidv4 } from 'uuid';
import Joi from 'joi';
import db from '../models/index.js';
import HTTPError from '../utils/errors/HTTPError.js';
const schema = Joi.object({
    id: Joi.string().uuid().required(),
    name: Joi.string().min(1).max(30).required(),
    email: Joi.string().email().required(),
});
const validateId = Joi.object({
    id: Joi.string().uuid().required()
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(user)) {
        throw new HTTPError('Input is not in JSON', 400);
    }
    const id = uuidv4();
    const newUser = Object.assign(Object.assign({}, user), { id });
    yield schema.validateAsync(newUser);
    db.push(newUser);
    return newUser;
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = db;
    if (!users.length) {
        throw new HTTPError('No user found', 404);
    }
    return users;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield validateId.validateAsync({ id });
    const user = db.filter((user) => user.id === id);
    if (!user.length) {
        throw new HTTPError(`User with id ${id} was not found`, 404);
    }
    return user;
});
const userService = {
    createUser,
    getUsers,
    getUser,
};
export default userService;
