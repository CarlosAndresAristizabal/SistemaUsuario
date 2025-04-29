import api from './api';

const userService = {
    getAllUsers: async () => {
        const response = await api.get('/users');
        return response.data;
    },

    getUserById: async (id) => {
        const response = await api.get(`/users/${id}`);
        return response.data;
    },

    createUser: async (userData) => {
        const response = await api.post('/users', userData);
        return response.data;
    },

    updateUser: async (id, userData) => {
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    },

    toggleUserActive: async (id, isActive) => {
        const response = await api.patch(`/users/${id}`, { active: isActive });
        return response.data;
    },

    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    }
};

export default userService;