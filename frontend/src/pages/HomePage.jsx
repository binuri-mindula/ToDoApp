import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskList from '../components/TaskList';
import * as taskService from '../services/taskService';
import AddTaskForm from '../components/AddTaskForm';
import toast from 'react-hot-toast'; 

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const fetchTasks = useCallback(async () => {
        try {
            const response = await taskService.getTasks();
            setTasks(response.data);
        } catch (err) {
           toast.error('Failed to fetch tasks. Please ensure the backend is running.');
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleCompleteTask = async (taskId) => {
        try {
            await taskService.updateTask(taskId, { completed: true });
            toast.success('Task marked as complete!');
            fetchTasks(); 
        } catch (err) {
            toast.error('Failed to complete task.');
            console.error(err);
        }
    };
  
    const handleTaskAdded = () => {
        setIsAddTaskModalOpen(false); 
        fetchTasks();       
    };

    return (
        <div className="container mx-auto max-w-3xl">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
                <button 
                    onClick={() => setIsAddTaskModalOpen(true)}
                    className="bg-main-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-950 transition duration-300 flex items-center gap-2"
                >
                    <FaPlus />
                    Add New Task
                </button>
            </div>

          
            
            <TaskList tasks={tasks} onComplete={handleCompleteTask} fetchTasks={fetchTasks} />

            <AddTaskForm
                isOpen={isAddTaskModalOpen}
                onClose={() => setIsAddTaskModalOpen(false)}
                onTaskAdded={handleTaskAdded}
            />
        </div>
    );
};

export default HomePage;