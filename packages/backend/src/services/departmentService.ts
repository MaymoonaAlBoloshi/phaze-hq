import { PrismaClient, Department } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDepartments = async (): Promise<Department[]> => {
  return prisma.department.findMany();
};

export const getDepartmentById = async (id: number): Promise<Department | null> => {
  return prisma.department.findUnique({
    where: { id },
  });
};

export const createDepartment = async (departmentData: any): Promise<Department> => {
  return prisma.department.create({
    data: departmentData,
  });
};

export const updateDepartment = async (id: number, departmentData: any): Promise<Department> => {
  return prisma.department.update({
    where: { id },
    data: departmentData,
  });
};

export const deleteDepartment = async (id: number): Promise<Department> => {
  return prisma.department.delete({
    where: { id },
  });
};
