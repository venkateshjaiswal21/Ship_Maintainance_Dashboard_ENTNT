import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, UseAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ShipsPage from './pages/ShipsPage';
import ShipDetailPage from './pages/ShipDetailPage';
import { ShipsProvider } from './contexts/ShipsContext';
import ComponentDetailPage from './pages/ComponentDetailPage';
import { ComponentsProvider } from './contexts/ComponentsContext';
import { JobsProvider } from './contexts/JobsContext';
import JobsPage from './pages/JobsPage';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <ShipsProvider>
        <ComponentsProvider>
          <JobsProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/ships" element={
                <ProtectedRoute>
                  <ShipsPage />
                </ProtectedRoute>
              } />
              <Route
                path="/ships/:id"
                element={
                  <ProtectedRoute>
                    <ShipDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/components/:id"
                element={
                  <ProtectedRoute>
                    <ComponentDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route  path="/jobs" element = {
                <ProtectedRoute>
                  <JobsPage />
                </ProtectedRoute>
              } />
            </Routes>
          </Router>
          </JobsProvider> 
      </ComponentsProvider>
      </ShipsProvider>
    </AuthProvider>
  );
}

export default App;
