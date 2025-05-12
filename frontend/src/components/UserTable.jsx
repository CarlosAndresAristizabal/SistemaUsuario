import React, { useEffect, useState } from 'react';
import { getUsers, toggleUserActive, deleteUser } from '../services/userService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [visiblePasswords, setVisiblePasswords] = useState({});

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const handleToggleActive = async (userId, isActive) => {
        try {
            await toggleUserActive(userId, !isActive);
            toast.success(`Estado del usuario cambiado a ${!isActive ? 'Activo' : 'Inactivo'}.`);
            fetchUsers();
        } catch (error) {
            toast.error('Ocurrió un error al cambiar el estado activo del usuario.');
            console.error('Error al cambiar el estado activo:', error);
        }
    };

    const handleDelete = async (userId) => {
        if (window.confirm('¿Está seguro de que desea eliminar este usuario?')) {
            try {
                await deleteUser(userId);
                toast.success('Usuario eliminado exitosamente.');
                fetchUsers();
            } catch (error) {
                toast.error('Ocurrió un error al eliminar el usuario.');
                console.error('Error al eliminar usuario:', error);
            }
        }
    };

    const togglePasswordVisibility = (userId) => {
        setVisiblePasswords((prevState) => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Usuarios</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre Completo</th>
                            <th>Correo Electrónico</th>
                            <th>Contraseña</th>
                            <th>Acción</th>
                            <th>Activo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td style={{ maxWidth: '200px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                    {visiblePasswords[user.id] ? user.password : '••••••••'}
                                </td>
                                <td>
                                <button
                                        className="btn btn-sm btn-secondary ml-2"
                                        onClick={() => togglePasswordVisibility(user.id)}
                                    >
                                        {visiblePasswords[user.id] ? 'Ocultar' : 'Mostrar'}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={`btn btn-sm ${user.isActive ? 'btn-success' : 'btn-danger'}`}
                                        onClick={() => handleToggleActive(user.id, user.isActive)}
                                    >
                                        {user.isActive ? 'Activo' : 'Inactivo'}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;