import React, { useEffect, useState } from 'react';
import { getUsers, toggleUserActive, createUser, updateUser } from '../services/userService';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
        const data =   await getUsers();
        setUsers(data);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        alert('Error al cargar los usuarios');
    }
    };

    const handleToggleActive = async (userId) => {
        await toggleUserActive(userId);
        fetchUsers();
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
    };

    const handleUserFormSubmit = async (userData) => {
        try {
            if (userData.id) {
                await updateUser(userData.id, userData);
            } else {
            await createUser(userData);
            }
            fetchUsers();
            setSelectedUser(null);
        } catch (error) {
            console.error('Error al guardar el usuario:', error);
            alert('Ocurrió un error al guardar el usuario.');
        }
    };

    return (
        <div className="container">
            <h1>Gestión de usuarios</h1>
            <UserForm user={selectedUser} onSubmit={handleUserFormSubmit} />
            <UserTable users={users} onToggleActive={handleToggleActive} onEdit={handleEditUser} />
        </div>
    );
};

export default UsersPage;