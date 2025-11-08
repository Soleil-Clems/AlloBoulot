import React from 'react';
import { Clock, Settings, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { StatusBadgeProps } from '../../../types/application.types';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const badges = {
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'En attente' },
    accepted: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Accepté' },
    rejected: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle, label: 'Refusé' },
    interview: { bg: 'bg-teal-100', text: 'text-teal-800', icon: AlertCircle, label: 'Entretien' },
    test: { bg: 'bg-purple-100', text: 'text-purple-800', icon: Settings, label: 'Test' }
  };
  
  const badge = badges[status];
  const Icon = badge.icon;
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
      <Icon size={14} />
      {badge.label}
    </span>
  );
};