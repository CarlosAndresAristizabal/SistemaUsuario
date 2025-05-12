import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LoginPage.css';
import { loginUser } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginPage = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');
  const [isSubmitting, setIsSubmitting] = useState (false);
  const navigate = useNavigate ();

  const handleLogin = async e => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    setIsSubmitting(true);
    try {
      const token = await loginUser({ email, password });
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userName', email);
        toast.success('Inicio de sesión exitoso. Redirigiendo...');
        setTimeout(() => navigate('/users'), 3000);
      } else {
        setError('Error inesperado: no se recibió un token válido.');
      }
    } catch (err) {
      if (err.message === 'Error al iniciar sesión') {
        setError('Credenciales incorrectas o usuario inactivo.');
      } else {
        setError('Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo-section">
        <img src="../assets/img/icon.webp" alt="logo" className="login-icon" />
      </div>
      <div className="login-form-section">
        <div className="login-card">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={e => setEmail (e.target.value)}
                required
                aria-label="Correo Electrónico"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword (e.target.value)}
                required
                aria-label="Contraseña"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
            </button>
          </form>
            {error &&
              <div className="alert alert-danger" role="alert">
                {error}
              </div>}
            {isSubmitting &&
              <div className="loader">
                <div className="inner one" />
                <div className="inner two" />
                <div className="inner three" />
              </div>}
          <div className="register-link">
            ¿No tienes una cuenta?{' '}
            <a href="/register">
              Regístrate aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
