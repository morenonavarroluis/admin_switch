import React from 'react';
import { Search, RotateCcw, Box, Maximize2 } from 'lucide-react';

const TroubleshootingModule = () => {
  return (
    <section className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header del Módulo */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-slate-800 bg-slate-900/30">
        <h2 className="text-slate-200 font-semibold tracking-wide">Troubleshooting & Ports</h2>
        <div className="flex gap-4 text-slate-500">
          <Search size={16} className="hover:text-cyan-400 cursor-pointer" />
          <RotateCcw size={16} className="hover:text-cyan-400 cursor-pointer" />
          <Box size={16} className="hover:text-cyan-400 cursor-pointer" />
          <Maximize2 size={16} className="hover:text-cyan-400 cursor-pointer" />
        </div>
      </div>

      {/* Grid de Contenido */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Columna Izquierda */}
        <div className="space-y-6">
          {/* Card: Port Security Slots */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-lg p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Port Security Slots</h3>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-3/4 shadow-[0_0_10px_#06b6d4]"></div>
              </div>
              <p className="text-[10px] text-slate-500">75% Capacity Reached - Secure Mode Active</p>
            </div>
          </div>

          {/* Card: Port Scanning Status (Gráfico pequeño) */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-lg p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Port Scanning Status</h3>
            <div className="h-24 w-full bg-slate-900/50 rounded flex items-end p-2 gap-1">
              {/* Simulación de gráfico de barras/ondas */}
              {[40, 70, 45, 90, 65, 80, 30, 50].map((h, i) => (
                <div 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  className="flex-1 bg-emerald-500/20 border-t-2 border-emerald-400"
                />
              ))}
            </div>
            <div className="flex justify-end mt-2">
              <button className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20 uppercase font-bold">
                Running
              </button>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          {/* Card: Virtual Front Panel (Imagen de Hardware) */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-lg p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Virtual Front Panel</h3>
            <div className="relative group overflow-hidden rounded-md border border-slate-800 bg-black">
              {/* Aquí iría la imagen del switch/router */}
              <div className="aspect-video bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
                 <div className="grid grid-cols-12 gap-1 px-4">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-sm ${i < 18 ? 'bg-emerald-500 shadow-[0_0_5px_emerald]' : 'bg-slate-800'}`}></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Card: Port Security Logs */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-lg p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Recent Security Events</h3>
            <ul className="text-[11px] space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">•</span>
                <span>Port 0/1: MAC Address authorized successfully.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500">•</span>
                <span>Port 0/5: Unauthorized access attempt blocked.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>System: Port mirroring active on VLAN 10.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TroubleshootingModule;