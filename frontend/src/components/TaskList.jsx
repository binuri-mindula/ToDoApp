import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete }) => {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500">No tasks to show. Add one above!</p>;
    }

    return (
        <div className="space-y-4">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onComplete={onComplete} />
            ))}
        </div>
    );
};

export default TaskList;