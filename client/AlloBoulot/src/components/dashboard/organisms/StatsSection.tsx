import React from 'react';
import { FileText, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import type { Application } from '../../../types/application.types';
import { StatCard } from '../atoms/StatCard';

interface StatsSectionProps {
  applications: Application[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ applications }) => {
  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    interview: applications.filter(a => a.status === 'interview').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    test: applications.filter(a => a.status === 'test').length,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
      <StatCard
        icon={<FileText className="text-teal-600" size={24} />}
        value={stats.total}
        label="Total candidatures"
        color="bg-teal-100"
        showTrending
      />
      <StatCard
        icon={<Clock className="text-yellow-600" size={24} />}
        value={stats.pending}
        label="En attente"
        color="bg-yellow-100"
      />
      <StatCard
        icon={<AlertCircle className="text-teal-600" size={24} />}
        value={stats.interview}
        label="Entretiens"
        color="bg-teal-100"
      />
      <StatCard
        icon={<CheckCircle className="text-green-600" size={24} />}
        value={stats.accepted}
        label="Acceptées"
        color="bg-green-100"
      />
      <StatCard
        icon={<CheckCircle className="text-purple-600" size={24} />}
        value={stats.test}
        label="Test"
        color="bg-purple-100"
      />
      <StatCard
        icon={<CheckCircle className="text-red-600" size={24} />}
        value={stats.rejected}
        label="Rejetées"
        color="bg-red-100"
      />
    </div>
  );
};
