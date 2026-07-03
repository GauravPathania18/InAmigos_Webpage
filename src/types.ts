export interface Project {
  id: string;
  title: string;
  category: 'Education' | 'Environment' | 'Community';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl: string;
  impactMetric: string;
  goal?: number;
  raised?: number;
  beneficiaries: string;
  location: string;
  milestones: string[];
}

export interface ImpactMetric {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  iconName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  imageUrl: string;
  projectImpacted: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  commentsCount: number;
  viewsCount: number;
  imageUrl: string;
  readTime: string;
  summary: string;
  fullContent: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  fullContent: string;
  imageUrl: string;
  category: string;
  likes: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export type ModalType = 
  | 'none' 
  | 'donate' 
  | 'volunteer' 
  | 'partner' 
  | 'spread-word' 
  | 'project-details' 
  | 'story-details'
  | 'blog-details'
  | 'settings';

export interface DonationReceipt {
  id: string;
  amount: number;
  type: 'one-time' | 'monthly';
  project: string;
  date: string;
  donorName: string;
}
