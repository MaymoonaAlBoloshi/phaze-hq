import { PrismaClient, Tag } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTags = async (): Promise<Tag[]> => {
	return prisma.tag.findMany();
};

export const getTagById = async (id: number): Promise<Tag | null> => {
	return prisma.tag.findUnique({
		where: { id },
	});
};

export const createTag = async (tagData: { tagName: string }): Promise<Tag> => {
	return prisma.tag.create({
		data: tagData,
	});
};

export const updateTag = async (
	id: number,
	tagData: { tagName: string }
): Promise<Tag> => {
	return prisma.tag.update({
		where: { id },
		data: tagData,
	});
};

export const deleteTag = async (id: number): Promise<Tag> => {
	return prisma.tag.delete({
		where: { id },
	});
};
