import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

// Creamos un componente para envolver las páginas que SÍ llevan Sidebar
const AdminLayout = ({ children }) => (
  <div className="flex h-screen bg-[#020617] overflow-hidden">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-y-auto">
      <Header />
      <div className="p-4">
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTA INDEPENDIENTE: Sin Sidebar ni Header */}
        <Route path="/login" element={<LoginPage />} />

        {/* RUTAS CON LAYOUT: Aquí envolvemos el Dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          } 
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;