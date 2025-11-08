import type { Application } from '../types/application.types';

export const mockApplications: Application[] = [
  {
    id: 1,
    jobTitle: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    companyLogo: '🚀',
    location: 'Paris, France',
    type: 'CDI',
    appliedDate: '2025-10-08',
    status: 'interview',
    categorie: 'categorie1'
  },
  {
    id: 2,
    jobTitle: 'Frontend React Developer',
    company: 'Digital Innovation Lab',
    companyLogo: '💡',
    location: 'Lyon, France',
    type: 'CDI',
    appliedDate: '2025-10-05',
    status: 'pending',
    categorie: 'categorie2'
  },
  {
    id: 3,
    jobTitle: 'Lead Product Designer',
    company: 'Creative Studio',
    companyLogo: '🎨',
    location: 'Marseille, France',
    type: 'CDI',
    appliedDate: '2025-10-03',
    status: 'accepted',
    categorie: 'categorie3'
  },
  {
    id: 4,
    jobTitle: 'DevOps Engineer',
    company: 'Cloud Systems Inc',
    companyLogo: '☁️',
    location: 'Remote',
    type: 'CDI',
    appliedDate: '2025-10-01',
    status: 'rejected',
    categorie: 'categorie4'
  },
  {
    id: 5,
    jobTitle: 'Backend Node.js Developer',
    company: 'StartupHub',
    companyLogo: '🔧',
    location: 'Bordeaux, France',
    type: 'CDD',
    appliedDate: '2025-09-28',
    status: 'pending',
    categorie: 'categorie5'
  },
  {
    id: 6,
    jobTitle: 'UX/UI Designer',
    company: 'Design Agency Pro',
    companyLogo: '✨',
    location: 'Toulouse, France',
    type: 'Freelance',
    appliedDate: '2025-09-25',
    status: 'interview',
    categorie: 'categorie6'
  }
];