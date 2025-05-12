import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUser, updateUser } from '../services/userService';
import '../styles/App.css';

const UserForm = ({ user, isEdit, onUserCreated }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        isActive: true,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        if (isEdit && user) {
            setFormData({
                fullName: user.fullName || '',
                email: user.email || '',
                password: '',
                isActive: user.isActive || true,
            });
        }
    }, [isEdit, user]);

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo no tiene un formato válido.';
        }
        if (!isEdit && (!formData.password || formData.password.length < 6)) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            if (isEdit) {
                await updateUser(user.id, formData);
                toast.success('Usuario actualizado satisfactoriamente.');
            } else {
                await createUser(formData);
                setFormData({ fullName: '', email: '', password: '', isActive: true });
                toast.success('Usuario creado satisfactoriamente.');
                if (onUserCreated) onUserCreated();
            }
        } catch (error) {
            toast.error('Ocurrió un error al guardar el usuario.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h2>{isEdit ? 'Editar Usuario' : 'Crear Usuario'}</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Nombre Completo</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        aria-label="Nombre completo"
                        pattern="[a-zA-Z0-9]+"
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Correo electrónico"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={handleChange}
                        required={!isEdit}
                        aria-label="Contraseña"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        id="isActive"
                        name="isActive"
                        className="form-check-input"
                        checked={formData.isActive}
                        onChange={handleChange}
                        aria-label="Activo"
                    />
                    <label htmlFor="isActive" className="form-check-label">Activo</label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Guardando...' : isEdit ? 'Actualizar Usuario' : 'Crear Usuario'}
                    {isSubmitting && <div className="loader">
                        <div className="inner one"></div>
                        <div className="inner two"></div>
                        <div className="inner three"></div>
                    </div>}
                </button>
            </form>
        </div>
    );
};

export default UserForm;