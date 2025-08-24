import React, { useState } from 'react';
import toast from 'react-hot-toast'; 
import * as taskService from '../services/taskService';

const AddTaskForm = ({ isOpen, onClose, onTaskAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) {
          
            toast.error('Name is required!');
            return;
        }

        try {
            const response = await taskService.addTask({ name, description });
            
            toast.success(response.data.message || 'Task added successfully!');

            setName('');
            setDescription('');
            onTaskAdded(); 

        } catch (err) {
        
            toast.error('Failed to add task. Please try again.');
            console.error(err);
        }
    };

    const handleClose = () => {
   
        setName('');
        setDescription('');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 bg-opacity-50 z-40 flex justify-center items-center"
            onClick={handleClose}
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="add-name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="add-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: Buy groceries"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="add-description" className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            id="add-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: Milk, bread, cheese"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                         <button
                            type="button"
                            onClick={handleClose}
                            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-main-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-950 transition duration-300"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;