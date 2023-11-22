import express from 'express';
import * as ProjectController from '../controllers/projectController';

const router = express.Router();

router.get('/', ProjectController.getProjects);
router.get('/:id', ProjectController.getProject);
router.post('/', ProjectController.createProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

export default router;
