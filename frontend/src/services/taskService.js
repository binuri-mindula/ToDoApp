import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTasks = (limit = 5) => {
    return apiClient.get(`/tasks?limit=${limit}`);
};


export const addTask = (taskData) => {
    return apiClient.post('/tasks', taskData);
};

export const updateTask = (id, taskData) => {
    return apiClient.put(`/tasks/${id}`, taskData);
};

export const deleteTask = (id) => {
    return apiClient.delete(`/tasks/${id}`);
};