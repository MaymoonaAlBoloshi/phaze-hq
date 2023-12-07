import express from "express";
import * as DepartmentController from "../controllers/departmentController";

const router = express.Router();

router.get("/", DepartmentController.getDepartments);
router.get("/:id", DepartmentController.getDepartment);
router.post("/", DepartmentController.createDepartment);
router.put("/:id", DepartmentController.updateDepartment);
router.delete("/:id", DepartmentController.deleteDepartment);

export default router;
