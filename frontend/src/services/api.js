import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error en la búsqueda de usuarios:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error al borrar usuario:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};