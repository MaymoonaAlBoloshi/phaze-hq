import { Request, Response } from 'express';
import * as NoteService from '../services/noteService';

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteService.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const note = await NoteService.getNoteById(id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).send('Note not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const note = await NoteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const note = await NoteService.updateNote(id, req.body);
    res.json(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await NoteService.deleteNote(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
