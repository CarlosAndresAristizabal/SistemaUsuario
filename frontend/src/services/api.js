const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4002';

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
            throw new Error('Error en la búsqueda de usuarios');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en la búsqueda de usuarios:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Error al crear usuario');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await fetch(`${API_URL}/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Error al actualizar el usuario');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        console.info('Credenciales enviadas:', credentials);
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        console.info('Respuesta del servidor:', response);
        const data = await response.json();
        console.info('Datos recibidos:', data);
        if (!response.ok) {
            throw new Error('Error al iniciar sesión');
        }
        console.info('Token:', data);
        console.info('Token:', data.accessToken);
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
        }
        return data.accessToken;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};