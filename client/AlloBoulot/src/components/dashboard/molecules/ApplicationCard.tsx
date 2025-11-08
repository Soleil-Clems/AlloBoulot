import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import type { ApplicationCardProps } from '../../../types/application.types';
import { useNavigate } from 'react-router';
import { StatusBadge } from '../atoms/StatusBadge';

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, onViewDetails }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/offer/${application.id}`);
    onViewDetails(application.id);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            {application.companyLogo}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800 mb-1">
              {application.jobTitle}
            </h3>
            <p className="text-slate-600 font-medium">{application.company}</p>
          </div>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-slate-400" />
          <span>{application.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar size={16} className="text-slate-400" />
          <span>Postulé le {new Date(application.appliedDate).toLocaleDateString('fr-FR')}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
            {application.type}
          </span>
          <span className="text-sm font-semibold text-slate-700">
            {application.categorie}
          </span>
        </div>
      </div>

      <button 
         onClick={handleViewDetails}
        className="w-full py-2.5 border-2 border-gray-400 text-gray-500 rounded-lg font-medium hover:border-teal-700 hover:shadow-[inset_0_0_0_2px_rgba(48,150,137,0.1)] hover:bg-teal-50 transition-all"
      >
        Voir les détails
      </button>
    </div>
  );
};