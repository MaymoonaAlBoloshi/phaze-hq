import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export const getAllUsers = async (req: Request, res: Response) => {
  console.log('getAllUsers');
  try {
    const users = await UserService.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserService.findUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserService.updateUser(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await UserService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
