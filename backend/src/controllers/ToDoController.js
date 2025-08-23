import Task from '../models/ToDoModel.js';

//create task
export const createTask = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const task = await Task.create({
            name,
            description,
        });

        res.status(201).json({ message: 'Task created!', data: task });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error: error.message });
    }
};

//get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { completed: false },      // only get completed tasks
            order: [['createdAt', 'DESC']], // newest first
            limit: 5                          // most recent 5 tasks
        });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};

//get by id
export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error: error.message });
    }
};

//update task
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, completed } = req.body;

        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.name = name || task.name;
        task.description = description || task.description;
        if (completed !== undefined) {
          task.completed = completed;
        }

        await task.save();

        res.status(200).json({ message: 'Task updated!', data: task });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error: error.message });
    }
};

//delete task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy();

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};