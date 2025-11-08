import React from 'react';
import { LayoutDashboard, Building2, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: 'applications' | 'companies' | 'table' | 'profile') => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  isCollapsed, 
  onToggleCollapse 
}) => {
  const menuItems = [
    { id: 'applications', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'companies', label: 'Entreprises', icon: Building2 },
    { id: 'profile', label: 'Mon profil', icon: User },
  ];

  return (
    <aside
      className={`h-screen fixed bg-black border-r border-slate-700 p-4 flex flex-col transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggleCollapse}
        className="mb-6 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white self-end transition-colors"
        aria-label={isCollapsed ? 'Étendre la sidebar' : 'Réduire la sidebar'}
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Main Menu */}
      <nav className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-primary/40 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon size={20} />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};
