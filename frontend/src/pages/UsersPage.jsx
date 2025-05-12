import { useEffect, useState } from 'react';
import { getUsers, toggleUserActive, createUser, updateUser } from '../services/userService';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';
import '../styles/App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        toast.info('Sesión cerrada exitosamente.');
        navigate('/login');
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            toast.error('Error al cargar los usuarios.');
            console.error('Error al obtener los usuarios:', error);
        }
    };

    const handleToggleActive = async (userId) => {
        try {
            setIsSubmitting(true);
            await toggleUserActive(userId);
            toast.success('Estado del usuario cambiado exitosamente.');
            fetchUsers();
        } catch (error) {
            toast.error('Ocurrió un error al cambiar el estado del usuario.');
            console.error('Error al cambiar el estado del usuario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
    };

    const handleUserFormSubmit = async (userData) => {
        try {
            setIsSubmitting(true);
            if (userData.id) {
                await updateUser(userData.id, userData);
                toast.success('Usuario actualizado exitosamente.');
            } else {
                await createUser(userData);
                toast.success('Usuario creado exitosamente.');
                fetchUsers();
            }
            setSelectedUser(null);
        } catch (error) {
            toast.error('Ocurrió un error al guardar el usuario.');
            console.error('Error al guardar el usuario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h1>Gestión de usuarios</h1>
            {userName && <h3>Bienvenido, {userName}!</h3>}
            <button className="btn btn-secondary mb-3" onClick={handleLogout}>Cerrar Sesión</button>
            {isSubmitting && (
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            )}
            <UserForm user={selectedUser} onSubmit={handleUserFormSubmit} />
            <UserTable users={users} onToggleActive={handleToggleActive} onEdit={handleEditUser} />
        </div>
    );
};

export default UsersPage;