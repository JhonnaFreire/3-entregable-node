const { Task, Category } = require('../models');

exports.createTaskForUser = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.params.userId
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.params.userId },
      include: [{ model: Category, as: 'category' }]
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.toggleTaskCompleted = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.taskId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
