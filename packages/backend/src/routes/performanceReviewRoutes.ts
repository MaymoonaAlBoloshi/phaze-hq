import express from "express";
import * as PerformanceReviewController from "../controllers/performanceReviewController";

const router = express.Router();

router.get("/", PerformanceReviewController.getPerformanceReviews);
router.get("/:id", PerformanceReviewController.getPerformanceReview);
router.post("/", PerformanceReviewController.createPerformanceReview);
router.put("/:id", PerformanceReviewController.updatePerformanceReview);
router.delete("/:id", PerformanceReviewController.deletePerformanceReview);

export default router;
