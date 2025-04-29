import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://backend:4000/api';

export const getUsers = async () => {
    try {
        const response =   await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
};

export const updateUser = async (id, userData) => {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
};

export const toggleUserActive = async (id) => {
    const response = await axios.patch(`${API_URL}/users/${id}/toggle-active`);
    return response.data;
};