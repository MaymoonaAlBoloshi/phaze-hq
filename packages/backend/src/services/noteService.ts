import { PrismaClient, Note } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllNotes = async (): Promise<Note[]> => {
  return prisma.note.findMany();
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  return prisma.note.findUnique({
    where: { id },
  });
};

export const createNote = async (noteData: { userId: number; content: string; }): Promise<Note> => {
  return prisma.note.create({
    data: noteData,
  });
};

export const updateNote = async (id: number, noteData: { content: string; }): Promise<Note> => {
  return prisma.note.update({
    where: { id },
    data: noteData,
  });
};

export const deleteNote = async (id: number): Promise<Note> => {
  return prisma.note.delete({
    where: { id },
  });
};
