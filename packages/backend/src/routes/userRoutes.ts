import express from "express";
import * as UserController from "../controllers/userController";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);
router.get("/:userId/projects", UserController.getUserProjects);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
