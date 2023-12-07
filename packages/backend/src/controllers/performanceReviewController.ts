import { Request, Response } from "express";
import * as PerformanceReviewService from "../services/performanceReviewService";

export const getPerformanceReviews = async (req: Request, res: Response) => {
	try {
		const performanceReviews =
			await PerformanceReviewService.getAllPerformanceReviews();
		res.json(performanceReviews);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getPerformanceReview = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const performanceReview =
			await PerformanceReviewService.getPerformanceReviewById(id);
		if (performanceReview) {
			res.json(performanceReview);
		} else {
			res.status(404).send("Performance Review not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createPerformanceReview = async (req: Request, res: Response) => {
	try {
		const performanceReview =
			await PerformanceReviewService.createPerformanceReview(req.body);
		res.status(201).json(performanceReview);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const updatePerformanceReview = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const performanceReview =
			await PerformanceReviewService.updatePerformanceReview(id, req.body);
		res.json(performanceReview);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deletePerformanceReview = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		await PerformanceReviewService.deletePerformanceReview(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error.message);
	}
};
