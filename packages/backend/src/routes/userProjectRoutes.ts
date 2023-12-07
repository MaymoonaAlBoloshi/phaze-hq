import express from "express";
import * as UserProjectController from "../controllers/userProjectController";

const router = express.Router();

// Route for getting all user-project associations
router.get("/", UserProjectController.getUserProjects);

// Route for getting a single user-project association
router.get("/:userId/:projectId", UserProjectController.getUserProject);

// Route for creating a new user-project association
router.post("/", UserProjectController.createUserProject);

// Route for updating an existing user-project association
// Note: PUT requests typically replace an entire resource, but here we're using it to update an association
router.put("/", UserProjectController.updateUserProject);

// Route for deleting a user-project association
router.delete("/:userId/:projectId", UserProjectController.deleteUserProject);

export default router;
