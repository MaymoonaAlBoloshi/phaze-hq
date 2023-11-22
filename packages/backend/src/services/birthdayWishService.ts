import { PrismaClient, BirthdayWish } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBirthdayWishes = async (): Promise<BirthdayWish[]> => {
  return prisma.birthdayWish.findMany();
};

export const getBirthdayWishById = async (id: number): Promise<BirthdayWish | null> => {
  return prisma.birthdayWish.findUnique({
    where: { id },
  });
};

export const createBirthdayWish = async (birthdayWishData: { userId: number; scheduledDate: Date; status?: boolean; }): Promise<BirthdayWish> => {
  return prisma.birthdayWish.create({
    data: birthdayWishData,
  });
};

export const updateBirthdayWish = async (id: number, birthdayWishData: { scheduledDate?: Date; status?: boolean; }): Promise<BirthdayWish> => {
  return prisma.birthdayWish.update({
    where: { id },
    data: birthdayWishData,
  });
};

export const deleteBirthdayWish = async (id: number): Promise<BirthdayWish> => {
  return prisma.birthdayWish.delete({
    where: { id },
  });
};
