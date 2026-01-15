// src/components/Cards/OverallNetworkHealthCard.jsx
import React from 'react';
import PieChart from '../Charts/PieChart';

function OverallNetworkHealthCard({ healthPercentage = 95 }) {
  const data = [
    { name: 'Healthy', value: healthPercentage },
    { name: 'Unhealthy', value: 100 - healthPercentage }
  ];

  return (
    <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 shadow-lg hover:border-slate-700 transition-all">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-slate-100">Overall Network Health</h3>
        <button className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20 hover:bg-cyan-500/20">
          DETAILS
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <PieChart data={data} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-2xl font-bold text-white">{healthPercentage}%</span>
             <span className="text-[10px] text-slate-500 uppercase">Status</span>
          </div>
        </div>

        <div className="w-full mt-6 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 3 Devices Offline
            </span>
            <span className="text-rose-400 font-bold">!</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> 2 Critical Alerts
            </span>
            <span className="text-rose-400 font-bold">!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverallNetworkHealthCard;