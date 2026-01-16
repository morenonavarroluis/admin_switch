// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import OverallNetworkHealthCard from '../components/Cards/OverallNetworkHealthCard';
import TroubleshootingModule from '../components/TroubleshootingModule';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('userAuthenticated');
    if (!auth) {
      navigate('/login'); // Si no hay auth, bótalo al login
    }
  }, []);

  return (
    <main className="p-6 bg-[#020617] min-h-screen text-slate-300">
      {/* Grid Principal: 2 columnas en pantallas grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECCIÓN: Config & Deployment */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Config & Deployment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OverallNetworkHealthCard />
            {/* Aquí irían ResponseTimeCard, FirmwareUpdates, etc. */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 h-40">Placeholder Card</div>
          </div>
        </section>

        {/* SECCIÓN: Performance & Health */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Performance & Health</h2>
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 h-64">
             {/* Aquí iría el NetworkTopologyCard (el mapa de nodos) */}
             <p className="text-cyan-400">Network Topology View</p>
            
          </div>
        </section>

        {/* SECCIÓN: Security & Access */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Security & Access</h2>
          <div className="grid grid-cols-1 gap-4">
             <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 h-40">Security Alerts List</div>
          </div>
        </section>

        {/* SECCIÓN: Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Troubleshooting</h2>
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 h-40">Real-time Logs</div>
        </section>
 <TroubleshootingModule/>
      </div>
    </main>
    
  );
}

export default Dashboard;