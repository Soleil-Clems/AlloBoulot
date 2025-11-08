import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { StatCardProps } from '../../../types/application.types';

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color, showTrending }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          {icon}
        </div>
        {showTrending && <TrendingUp className="text-green-500" size={20} />}
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-1">{value}</h3>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
};
