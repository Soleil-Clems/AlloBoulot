export interface Application {
  id: number;
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  type: string;
  appliedDate: string;
  status: 'pending' | 'accepted' | 'rejected' | 'interview';
  categorie: string;
}

export interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  showTrending?: boolean;
}

export interface ApplicationCardProps {
  application: Application;
  onViewDetails: (id: number) => void;
}

export interface StatusBadgeProps {
  status: 'pending' | 'accepted' | 'rejected' | 'interview';
}

export interface TopBarProps {
  activeTab: string;
  onTabChange: (tab: 'applications' | 'companies' | 'table' | 'profile') => void;
  userName: string;
  userInitials: string;
  userRole: string;
  onSearch?: (query: string) => void;
}
