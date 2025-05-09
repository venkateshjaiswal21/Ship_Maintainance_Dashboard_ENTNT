import { useState } from 'react';
import LoginForm from '../components/Authentication/LoginForm';
import { MData } from '../data/MockData';

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const handleLogin = ({ email, password }) => {
    const foundUser = MData.users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#242424'
    }}>
      {!user ? (
        <>
          <LoginForm onLogin={handleLogin} />
          {loginError && (
            <div className="error-message" style={{ textAlign: 'center' }}>{loginError}</div>
          )}
        </>
      ) : (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Role: {user.role}</p>
          <button className="login-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
