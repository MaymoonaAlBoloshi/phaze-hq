import { Request, Response } from 'express';
import * as UserProjectService from '../services/userProjectService';

export const getUserProjects = async (req: Request, res: Response) => {
  try {
    const userProjects = await UserProjectService.getAllUserProjects();
    res.json(userProjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUserProject = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const projectId = parseInt(req.params.projectId);

  try {
    const userProject = await UserProjectService.getUserProject(userId, projectId);
    if (userProject) {
      res.json(userProject);
    } else {
      res.status(404).send('UserProject association not found.');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUserProject = async (req: Request, res: Response) => {
  try {
    const userProject = await UserProjectService.createUserProject(req.body);
    res.status(201).json(userProject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUserProject = async (req: Request, res: Response) => {
  const { userId, projectId } = req.body;
  try {
    const userProject = await UserProjectService.updateUserProject(userId, projectId, req.body);
    res.json(userProject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUserProject = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const projectId = parseInt(req.params.projectId);

  try {
    await UserProjectService.deleteUserProject(userId, projectId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
