// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const navigate = useNavigate();

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
