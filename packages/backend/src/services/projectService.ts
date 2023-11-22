import { PrismaClient, Project } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProjects = async (): Promise<Project[]> => {
  return prisma.project.findMany();
};

export const getProjectById = async (id: number): Promise<Project | null> => {
  return prisma.project.findUnique({
    where: { id },
  });
};

export const createProject = async (projectData: any): Promise<Project> => {
  return prisma.project.create({
    data: projectData,
  });
};

export const updateProject = async (id: number, projectData: any): Promise<Project> => {
  return prisma.project.update({
    where: { id },
    data: projectData,
  });
};

export const deleteProject = async (id: number): Promise<Project> => {
  return prisma.project.delete({
    where: { id },
  });
};
