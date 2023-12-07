import { Request, Response } from "express";
import * as DepartmentService from "../services/departmentService";

export const getDepartments = async (req: Request, res: Response) => {
	try {
		const departments = await DepartmentService.getAllDepartments();
		res.json(departments);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getDepartment = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const department = await DepartmentService.getDepartmentById(id);
		if (department) {
			res.json(department);
		} else {
			res.status(404).send("Department not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createDepartment = async (req: Request, res: Response) => {
	try {
		const department = await DepartmentService.createDepartment(req.body);
		res.status(201).json(department);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const updateDepartment = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const department = await DepartmentService.updateDepartment(id, req.body);
		res.json(department);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteDepartment = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		await DepartmentService.deleteDepartment(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error.message);
	}
};
