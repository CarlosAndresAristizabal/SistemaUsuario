import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="mt-4">Sistema de Información de Usuarios</h1>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;