import React, { useState, useEffect, useCallback } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import * as taskService from '../services/taskService';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const fetchTasks = useCallback(async () => {
        try {
            const response = await taskService.getTasks();
            setTasks(response.data);
        } catch (err) {
            setError('Failed to fetch tasks.');
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);


    const handleCompleteTask = async (taskId) => {
        try {
           
            await taskService.updateTask(taskId, { completed: true });
            fetchTasks(); 
        } catch (err) {
            setError('Failed to complete task.');
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto max-w-3xl">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
            <AddTaskForm fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} onComplete={handleCompleteTask} />
        </div>
    );
};

export default HomePage;