import { PrismaClient, UserProject } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUserProjects = async (): Promise<UserProject[]> => {
  return prisma.userProject.findMany();
};

export const getUserProject = async (
  userId: number,
  projectId: number,
): Promise<UserProject | null> => {
  return prisma.userProject.findUnique({
    where: {
      userId_projectId: {
        userId,
        projectId,
      },
    },
  });
};

export const createUserProject = async (
  userProjectData: { userId: number; projectId: number },
): Promise<UserProject> => {
  return prisma.userProject.create({
    data: userProjectData,
  });
};

export const updateUserProject = async (
  userId: number,
  projectId: number,
  userProjectData: { userId: number; projectId: number },
): Promise<UserProject> => {
  return prisma.userProject.update({
    where: {
      userId_projectId: {
        userId,
        projectId,
      },
    },
    data: userProjectData,
  });
};

export const deleteUserProject = async (
  userId: number,
  projectId: number,
): Promise<UserProject> => {
  return prisma.userProject.delete({
    where: {
      userId_projectId: {
        userId,
        projectId,
      },
    },
  });
};

