import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/LoginPage.css';

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!fullName.trim() || !email.trim() || !password.trim()) {
            toast.error('Por favor, complete todos los campos.');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:4002/api'}/auth/register`, { fullName, email, password, isActive });
            if (response.status === 201) {
                toast.success('Usuario registrado exitosamente. Ahora puede iniciar sesión.');
                setTimeout(() => navigate('/login'), 2000);
            } else {
                toast.error('Error al registrar el usuario. Inténtelo de nuevo.');
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error('Ocurrió un error al intentar registrar el usuario. Inténtelo de nuevo más tarde.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo-section">
                <img src='../assets/img/icon.webp' alt="Logo" className="login-logo" />
            </div>
            <div className="login-form-section">
                <div className="login-card">
                    <h2>Registro</h2>
                    <form onSubmit={handleRegister} noValidate>
                        <div className="form-group">
                            <label htmlFor="fullName">Nombre Completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                aria-label="Nombre Completo"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Correo Electrónico"
                            />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-label="Contraseña"
                            />
                        </div>
                        <div className="form-group text-center mx-auto justify-content-center align-items-center">

                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="isActive"
                                checked={isActive}
                                onChange={(e) => setIsActive(e.target.checked)}
                                aria-label="Activo"
                            />
                            <label htmlFor="isActive">Activo</label>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Registrando...' : 'Registrarse'}
                        </button>
                        </div>
                    </form>
                    <div className="login-link">
                        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;