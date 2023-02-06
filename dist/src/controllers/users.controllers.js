var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userService from '../services/users.services.js';
import HTTPError from '../utils/errors/HTTPError.js';
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.getUsers();
        res.status(200);
        res.json(users);
    }
    catch (error) {
        if (error instanceof HTTPError) {
            res.status(error.status);
            res.json({ message: error.message });
            return;
        }
        else {
            res.status(500);
            res.json({ message: error.message });
            return;
        }
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.getUser(id);
        res.status(200);
        res.json(user);
    }
    catch (error) {
        if (error instanceof HTTPError) {
            res.status(error.status);
            res.json({ message: error.message });
            return;
        }
        else {
            res.status(500);
            res.json({ message: error.message });
            return;
        }
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const user = yield userService.createUser(userData);
        res.status(201);
        res.json(user);
    }
    catch (error) {
        if (error instanceof HTTPError) {
            res.status(error.status);
            res.json({ message: error.message });
            return;
        }
        else {
            res.status(500);
            res.json({ message: error.message });
            return;
        }
    }
});
export { getUsers, getUser, createUser, };
