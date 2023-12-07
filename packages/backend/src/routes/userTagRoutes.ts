import express from "express";
import * as UserTagController from "../controllers/userTagController";

const router = express.Router();

router.get("/", UserTagController.getUserTags);
router.get("/:userId/:tagId", UserTagController.getUserTag);
router.post("/", UserTagController.createUserTag);
router.delete("/:userId/:tagId", UserTagController.deleteUserTag);

export default router;
