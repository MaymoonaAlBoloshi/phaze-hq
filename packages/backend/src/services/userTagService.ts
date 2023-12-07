import { PrismaClient, UserTag } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUserTags = async (): Promise<UserTag[]> => {
	return prisma.userTag.findMany();
};

export const getUserTag = async (
	userId: number,
	tagId: number
): Promise<UserTag | null> => {
	return prisma.userTag.findUnique({
		where: {
			userId_tagId: {
				userId,
				tagId,
			},
		},
	});
};

export const createUserTag = async (userTagData: {
	userId: number;
	tagId: number;
}): Promise<UserTag> => {
	return prisma.userTag.create({
		data: userTagData,
	});
};

export const deleteUserTag = async (
	userId: number,
	tagId: number
): Promise<UserTag> => {
	return prisma.userTag.delete({
		where: {
			userId_tagId: {
				userId,
				tagId,
			},
		},
	});
};
