import { PrismaClient, PerformanceReview } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPerformanceReviews = async (): Promise<
	PerformanceReview[]
> => {
	return prisma.performanceReview.findMany();
};

export const getPerformanceReviewById = async (
	id: number
): Promise<PerformanceReview | null> => {
	return prisma.performanceReview.findUnique({
		where: { id },
	});
};

export const createPerformanceReview = async (performanceReviewData: {
	userId: number;
	content: string;
	reviewDate?: Date;
}): Promise<PerformanceReview> => {
	return prisma.performanceReview.create({
		data: performanceReviewData,
	});
};

export const updatePerformanceReview = async (
	id: number,
	performanceReviewData: { content?: string; reviewDate?: Date }
): Promise<PerformanceReview> => {
	return prisma.performanceReview.update({
		where: { id },
		data: performanceReviewData,
	});
};

export const deletePerformanceReview = async (
	id: number
): Promise<PerformanceReview> => {
	return prisma.performanceReview.delete({
		where: { id },
	});
};
