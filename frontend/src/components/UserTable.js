import React, { useEffect, useState } from 'react';
import { getUsers, toggleUserActive } from '../services/userService';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleToggleActive = async (userId, isActive) => {
        await toggleUserActive(userId, !isActive);
        fetchUsers();
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Usuarios</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Correo Electrónico</th>
                        <th>Fecha Creación</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>{user.isActive ? 'Sí' : 'No'}</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => handleToggleActive(user.id, user.isActive)}
                                >
                                    {user.isActive ? 'Desactivar' : 'Activar'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;