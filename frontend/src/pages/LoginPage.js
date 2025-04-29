import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const [email, setEmail]               =   useState('');
    const [password, setPassword]         =   useState('');
    const [error, setError]               =   useState('');
    const [isSubmitting, setIsSubmitting] =   useState(false);
    const history                         =   useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

            
        if (!email.trim() || !password.trim()) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        setIsSubmitting(true);
        try {
            const response =   await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                history.push('/users');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Credenciales incorrectas o usuario inactivo.');
            } else {
                setError('Ocurrió un error al intentar iniciar sesión. Inténtelo de nuevo más tarde.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className =   "container">
        <h2  className =   "mt-5">Iniciar Sesión</h2>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form  onSubmit  =   {handleLogin} noValidate>
            <div   className =   "form-group">
            <label htmlFor   =   "email">Correo Electrónico</label>
                    <input
                        type      =   "email"
                        className =   "form-control"
                        id        =   "email"
                        value     =   {email}
                        onChange  =   {(e) => setEmail(e.target.value)}
                        required
                        aria-label =   "Correo Electrónico"
                    />
                </div>
                <div   className =   "form-group">
                <label htmlFor   =   "password">Contraseña</label>
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
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;