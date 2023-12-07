import { Request, Response } from "express";
import * as UserTagService from "../services/userTagService";

export const getUserTags = async (req: Request, res: Response) => {
	try {
		const userTags = await UserTagService.getAllUserTags();
		res.json(userTags);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getUserTag = async (req: Request, res: Response) => {
	const userId = parseInt(req.params.userId);
	const tagId = parseInt(req.params.tagId);

	try {
		const userTag = await UserTagService.getUserTag(userId, tagId);
		if (userTag) {
			res.json(userTag);
		} else {
			res.status(404).send("UserTag not found.");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createUserTag = async (req: Request, res: Response) => {
	try {
		const userTag = await UserTagService.createUserTag(req.body);
		res.status(201).json(userTag);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteUserTag = async (req: Request, res: Response) => {
	const userId = parseInt(req.params.userId);
	const tagId = parseInt(req.params.tagId);

	try {
		await UserTagService.deleteUserTag(userId, tagId);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error.message);
	}
};
