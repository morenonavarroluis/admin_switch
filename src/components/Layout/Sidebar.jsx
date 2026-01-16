import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Database, Shield, Settings, Activity, Server, Lock,LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation(); // Para marcar el item activo
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'Inventory', path: '/inventory', icon: <Database size={18} /> },
    { name: 'Security', path: '/security', icon: <Shield size={18} /> },
    { name: 'Network Health', path: '/health', icon: <Activity size={18} /> },
    { name: 'Devices', path: '/devices', icon: <Server size={18} /> },
    { name: 'Access Control', path: '/access', icon: <Lock size={18} /> },
  ];
   const handleLogout = () => {
    localStorage.removeItem('userAuthenticated');
    localStorage.removeItem('userName');
    navigate('/login');
  };
  return (
    <aside className="w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col h-screen sticky top-0">
      {/* Header del Sidebar */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <Activity className="text-white" size={20} />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">NMS <span className="text-cyan-400">CORE</span></span>
      </div>

      {/* Navegación */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-4">Main Menu</p>
        
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group ${
                isActive 
                  ? 'bg-cyan-500/10 text-cyan-400 border-r-2 border-cyan-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span className={`${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer del Sidebar / Ajustes */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-slate-400 hover:text-white transition-colors">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full text-red-400 hover:bg-red-500/10 rounded-md transition-all group"
        >
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;