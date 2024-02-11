import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout"; // Adjust the import path based on your file structure

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                  path="/dashboard"
                  element={
                      <ProtectedRoute requiredRole={'ADMIN'}>
                          <Dashboard />
                      </ProtectedRoute>
                  }
              />
              {/* other routes */}
          </Routes>
      </div>
  );
}

export default App;
