import { Request, Response } from "express";
import * as BirthdayWishService from "../services/birthdayWishService";

export const getBirthdayWishes = async (req: Request, res: Response) => {
	try {
		const birthdayWishes = await BirthdayWishService.getAllBirthdayWishes();
		res.json(birthdayWishes);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getBirthdayWish = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const birthdayWish = await BirthdayWishService.getBirthdayWishById(id);
		if (birthdayWish) {
			res.json(birthdayWish);
		} else {
			res.status(404).send("Birthday Wish not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createBirthdayWish = async (req: Request, res: Response) => {
	try {
		const birthdayWish = await BirthdayWishService.createBirthdayWish(req.body);
		res.status(201).json(birthdayWish);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const updateBirthdayWish = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const birthdayWish = await BirthdayWishService.updateBirthdayWish(
			id,
			req.body
		);
		res.json(birthdayWish);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteBirthdayWish = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		await BirthdayWishService.deleteBirthdayWish(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error.message);
	}
};
