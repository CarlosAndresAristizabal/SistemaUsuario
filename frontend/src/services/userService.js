const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4002';

export const getUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.info('Token:', token);
    if (!response.ok) {
        throw new Error('Error en la búsqueda de usuarios');
    }
    return await response.json();
};

export const toggleUserActive = async (userId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users/${userId}/toggle-active`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Error al cambiar el estado del usuario');
    }
};

export const createUser = async (userData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Error al crear usuario');
    }
    return await response.json();
};

export const updateUser = async (userId, userData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
    }
    return await response.json();
};

export const deleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
    }
};