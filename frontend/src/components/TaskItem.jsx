import React,{useState} from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import EditTaskModal from './EditTaskModal';

const TaskItem = ({ task, onComplete, fetchTasks }) => {

    const [selectedTask, setSelectedTask] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenEditModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleActionComplete = () => {
        fetchTasks(); 
        handleCloseModal();
    };


    return (
        <>
        <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => handleOpenEditModal(task)}
                    className="text-gray-400 hover:text-main-blue transition duration-300 cursor-pointer"
                    title="Edit Task"
                >
                    <FaEdit />
                </button>
                <div>
                    <h3 className="font-bold text-lg">{task.name}</h3>
                    <p className="text-gray-600">{task.description}</p>
                </div>
            </div>
            <button
                onClick={() => onComplete(task.id)}
                className="bg-main-green cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300 flex items-center gap-2"
            >
                <FaCheck />
                Done
            </button>
        </div>
         <EditTaskModal 
                isOpen={isModalOpen}
                task={selectedTask}
                onClose={handleCloseModal}
                onActionComplete={handleActionComplete}
            />
        </>
    );
};

export default TaskItem;