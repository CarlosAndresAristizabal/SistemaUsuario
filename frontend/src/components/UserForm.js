import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser, updateUser } from '../services/userService';

const UserForm = ({ user, isEdit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (isEdit && user) {
            setFullName(user.fullName);
            setEmail(user.email);
            setIsActive(user.isActive);
        }
    }, [isEdit, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            fullName,
            email,
            password,
            isActive,
        };

        try {
            if (isEdit) {
                await updateUser(user.id, userData);
            } else {
                await createUser(userData);
            }
            history.push('/users');
        } catch (error) {
            console.error('Error al guardar usuario:', error);
        }
    };

    return (
        <div className="container">
            <h2>{isEdit ? 'Editar Usuario' : 'Crear Usuario'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={!isEdit}
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label className="form-check-label">Activo</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    {isEdit ? 'Actualizar Usuario' : 'Crear Usuario'}
                </button>
            </form>
        </div>
    );
};

export default UserForm;