const express = require('express');
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/users', userController.createUser);
router.post('/users/:userId/tasks', taskController.createTaskForUser);
router.get('/users/:userId/tasks', taskController.getUserTasks);
router.put('/tasks/:taskId/completed', taskController.toggleTaskCompleted);
router.delete('/tasks/:taskId', taskController.deleteTask);
router.post('/categories', categoryController.createCategory);

module.exports = router;
