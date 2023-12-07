import { Request, Response } from "express";
import * as ProjectService from "../services/projectService";

export const getProjects = async (req: Request, res: Response) => {
	try {
		const projects = await ProjectService.getAllProjects();
		res.json(projects);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getProject = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const project = await ProjectService.getProjectById(id);
		if (project) {
			res.json(project);
		} else {
			res.status(404).send("Project not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getProjectUsers = async (req: Request, res: Response) => {
	const projectId = parseInt(req.params.projectId);
	try {
		const projectWithUsers =
			await ProjectService.getProjectWithUsers(projectId);
		if (projectWithUsers) {
			res.json(projectWithUsers);
		} else {
			res.status(404).send("Project not found.");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createProject = async (req: Request, res: Response) => {
	try {
		const project = await ProjectService.createProject(req.body);
		res.status(201).json(project);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const updateProject = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const project = await ProjectService.updateProject(id, req.body);
		res.json(project);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteProject = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		await ProjectService.deleteProject(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).send(error.message);
	}
};
