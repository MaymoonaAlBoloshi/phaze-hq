import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllUsers = async () => {
	return await prisma.user.findMany();
};

export const findUserById = async (id: number) => {
	return await prisma.user.findUnique({
		where: { id },
	});
};

export const getUserWithProjects = async (userId: number) => {
	return prisma.user.findUnique({
		where: { id: userId },
		include: {
			userProjects: {
				include: {
					project: true, // Include all project fields
				},
			},
		},
	});
};

export const createUser = async (userData: any) => {
	return await prisma.user.create({
		data: userData,
	});
};

export const updateUser = async (id: number, userData: any) => {
	return await prisma.user.update({
		where: { id },
		data: userData,
	});
};

export const deleteUser = async (id: number) => {
	return await prisma.user.delete({
		where: { id },
	});
};
