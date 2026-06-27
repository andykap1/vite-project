  import { TaskController } from '../Controllers/TaskControllers';
import { protect } from '../middleware/authMiddleware';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import { Router } from 'express';

const router = Router();

// protected task routes
router.get('/', protect, TaskController.getTasks);
router.post('/', protect, TaskController.createTask);
router.put('/:id', protect, TaskController.updateTask);

// Soft delete
router.delete('/:id', protect, TaskController.deleteTask);

// Trash routes
router.get('/trash', protect, TaskController.getTrashedTasks);
router.put('/:id/restore', protect, TaskController.restoreTask);
router.delete('/:id/permanent', protect, TaskController.permanentDeleteTask);

export default router;