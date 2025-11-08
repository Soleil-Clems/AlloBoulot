import React from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from '../molecules/Sidebar';
import Header from '../../header/Header';

interface DashboardLayoutProps {
  activeTab: 'applications' | 'companies' | 'table' | 'profile';
  onTabChange: (tab: 'applications' | 'companies' | 'table' | 'profile') => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const HEADER_HEIGHT = 80;

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  activeTab,
  onTabChange,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Header fixe */}
      <Header  />

      {/* Sidebar fixe */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={onTabChange}
        isCollapsed={isCollapsed}
        onToggleCollapse={onToggleCollapse}
      />

      {/* Contenu scrollable */}
      <main
        className={`flex-1 pt-[${HEADER_HEIGHT}px] transition-all duration-300 overflow-y-auto bg-slate-50 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};
