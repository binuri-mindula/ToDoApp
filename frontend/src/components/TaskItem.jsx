import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onComplete }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <h3 className="font-bold text-lg">{task.name}</h3>
                <p className="text-gray-600">{task.description}</p>
            </div>
            <button
                onClick={() => onComplete(task.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
            >
                <FaCheck />
                Done
            </button>
        </div>
    );
};

export default TaskItem;