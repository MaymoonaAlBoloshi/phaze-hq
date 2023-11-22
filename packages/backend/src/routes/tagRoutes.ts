import express from 'express';
import * as TagController from '../controllers/tagController';

const router = express.Router();

router.get('/', TagController.getTags);
router.get('/:id', TagController.getTag);
router.post('/', TagController.createTag);
router.put('/:id', TagController.updateTag);
router.delete('/:id', TagController.deleteTag);

export default router;
