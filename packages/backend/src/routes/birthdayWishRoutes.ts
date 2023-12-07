import express from "express";
import * as BirthdayWishController from "../controllers/birthdayWishController";

const router = express.Router();

router.get("/", BirthdayWishController.getBirthdayWishes);
router.get("/:id", BirthdayWishController.getBirthdayWish);
router.post("/", BirthdayWishController.createBirthdayWish);
router.put("/:id", BirthdayWishController.updateBirthdayWish);
router.delete("/:id", BirthdayWishController.deleteBirthdayWish);

export default router;
