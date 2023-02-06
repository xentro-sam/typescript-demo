import userService from '../services/users.services.js';
import HTTPError from '../utils/errors/HTTPError.js';
import { Request, Response } from 'express';
import { ReqUser } from '../../types';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.status(200);
    res.json(users);
  }
  catch (error: any) {
    if(error instanceof HTTPError) {
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
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    res.status(200);
    res.json(user);
  }
  catch (error: any) {
    if(error instanceof HTTPError) {
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
};

const createUser = async (req: Request, res: Response) => {
  const userData: ReqUser = req.body;
  try {
    const user = await userService.createUser(userData);
    res.status(201);
    res.json(user);

  } catch (error: any) {
    if(error instanceof HTTPError) {
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
};

export {
  getUsers,
  getUser,
  createUser,
};