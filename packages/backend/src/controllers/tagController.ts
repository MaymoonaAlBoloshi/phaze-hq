import { Request, Response } from 'express';
import * as TagService from '../services/tagService';

export const getTags = async (req: Request, res: Response) => {
  try {
    const tags = await TagService.getAllTags();
    res.json(tags);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getTag = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const tag = await TagService.getTagById(id);
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).send('Tag not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createTag = async (req: Request, res: Response) => {
  try {
    const tag = await TagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateTag = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const tag = await TagService.updateTag(id, req.body);
    res.json(tag);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await TagService.deleteTag(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
