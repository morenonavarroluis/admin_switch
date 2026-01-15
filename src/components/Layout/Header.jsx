import React from 'react';
import { Bell, Search, User, ChevronDown, Globe } from 'lucide-react';

function Header() {
  return (
  <header className="flex items-center justify-between px-8 py-4 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 w-full">
      {/* Sección Izquierda: Título Dinámico */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Network <span className="text-cyan-400">Dashboard</span>
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">
            Sistema Operativo • Región: Latam-01
          </span>
        </div>
      </div>

      {/* Sección Derecha: Herramientas y Perfil */}
      <div className="flex items-center gap-6">
        
        {/* Buscador Rápido */}
        <div className="hidden md:flex items-center bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-1.5 focus-within:border-cyan-500/50 transition-all">
          <Search size={16} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Buscar switch o IP..." 
            className="bg-transparent border-none focus:ring-0 text-sm text-slate-300 ml-2 w-48 placeholder:text-slate-600"
          />
        </div>

        {/* Iconos de Acción */}
        <div className="flex items-center gap-4 text-slate-400">
          <button className="hover:text-cyan-400 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0f172a]"></span>
          </button>
          <button className="hover:text-cyan-400 transition-colors">
            <Globe size={20} />
          </button>
        </div>

        {/* Perfil de Usuario */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-sm font-semibold text-slate-200">Admin_NMS</span>
            <span className="text-[10px] text-cyan-500 font-bold uppercase">Super User</span>
          </div>
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-slate-700 p-0.5 group-hover:border-cyan-500 transition-all">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                 <User size={20} className="text-slate-400" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0f172a] rounded-full flex items-center justify-center">
              <ChevronDown size={10} className="text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;