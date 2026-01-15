// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

function App() {
  return (
    <Router>
      {/* Añadimos flex y h-screen para que ocupe toda la pantalla */}
      <div className="flex h-screen bg-[#020617] overflow-hidden">
        <Sidebar />
        
        {/* Este contenedor debe crecer (flex-1) y tener scroll independiente */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;