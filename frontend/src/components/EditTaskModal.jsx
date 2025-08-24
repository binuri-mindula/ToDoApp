import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast'; 
import { FaTrash } from 'react-icons/fa';
import { updateTask, deleteTask } from '../services/taskService';

const EditTaskModal = ({ task, isOpen, onClose, onActionComplete }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (task) {
            setName(task.name);
            setDescription(task.description || '');
        }
    }, [task]);

    if (!isOpen) {
        return null;
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!name) {
            toast.error('Name cannot be empty!');
            return;
        }

        try {
            await updateTask(task.id, { name, description });
            toast.success('Task updated successfully!');
            onActionComplete(); 
        } catch (err) {
            toast.error('Failed to update task.');
            console.error(err);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await deleteTask(task.id);
                toast.success('Task deleted!');
                onActionComplete();
            } catch (err) {
                toast.error('Failed to delete task.');
                console.error(err);
            }
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 bg-opacity-50 z-40 flex justify-center items-center"
            onClick={onClose} 
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Edit Task</h2>
                    <button 
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-700 transition duration-300 text-xl"
                        title="Delete Task"
                    >
                        <FaTrash />
                    </button>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label htmlFor="edit-name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="edit-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="edit-description" className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            id="edit-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-4">
                         <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-main-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-950 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;