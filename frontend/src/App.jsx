import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import RegisterPage from './pages/RegisterPage';
import Error from './pages/Error';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-4">Sistema de Información de Usuarios</h1>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;