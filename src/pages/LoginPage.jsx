import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../contexts/AuthContext';
import { MData } from '../data/MockData';
import LoginForm from '../components/Authentication/LoginForm';

const LoginPage = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login } = UseAuth();

  const handleLogin = ({ email, password }) => {
    const user = MData.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Don't store password in localStorage
      const { password: _, ...userWithoutPassword } = user;
      login(userWithoutPassword);
      navigate('/');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <LoginForm onLogin={handleLogin} />
      {loginError && <div className="error-message">{loginError}</div>}
    </div>
  );
};

export default LoginPage;
