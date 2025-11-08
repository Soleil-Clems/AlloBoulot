import React, { useState } from 'react';
import type { Application } from '../../../types/application.types';
import { ApplicationCard } from '../molecules/ApplicationCard';
import { StatsSection } from './StatsSection';
import { SearchBar } from '../molecules/SearchBar';
import { mockApplications } from '../../../data/mockData';

interface ApplicationsListProps {
  applications: Application[];
}

export const ApplicationsList: React.FC<ApplicationsListProps> = ({ applications }) => {
  const [filteredApps, setFilteredApps] = useState(applications);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleViewDetails = (id: number) => {
    console.log('Voir détails pour candidature:', id);
  };

  const handleSearch = (query: string) => {
    let filtered = applications;

    // Appliquer le filtre de recherche
    if (query) {
      filtered = filtered.filter(app => 
        app.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        app.company.toLowerCase().includes(query.toLowerCase()) ||
        app.location.toLowerCase().includes(query.toLowerCase()) ||
        app.categorie.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Appliquer le filtre de statut
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(app => app.status === selectedFilter);
    }

    setFilteredApps(filtered);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    
    let filtered = applications;
    if (filter !== 'all') {
      filtered = applications.filter(app => app.status === filter);
    }
    setFilteredApps(filtered);
  };

  return (
    <div>
      <StatsSection applications={mockApplications} />
      
      {/* Barre de recherche et filtres */}
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Mes candidatures</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Rechercher un poste, entreprise, ville..."
            className="w-full sm:max-w-md"
          />
          <select 
            value={selectedFilter}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-auto"
          >
            <option value="all">Toutes les candidatures</option>
            <option value="pending">En attente</option>
            <option value="interview">Entretiens</option>
            <option value="accepted">Acceptées</option>
            <option value="rejected">Refusées</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredApps.map((app) => (
          <ApplicationCard
            key={app.id}
            application={app}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredApps.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">Aucune candidature trouvée</p>
        </div>
      )}
    </div>
  );
};
