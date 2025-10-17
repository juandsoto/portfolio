export interface TCourse {
  id: number;
  name: string;
  image: string;
  platform: string;
  course_link: string;
  certificate_link: string;
}

interface TRole {
  name: string;
  startDate: string;
  endDate: string;
}

export interface TExperience {
  id: number;
  company: string;
  company_link: string;
  roles: TRole[];
  description: string;
  tools: string[];
  logoClassName: string;
}

export type TOrientation = 'left' | 'right';

export interface TProject {
  id: number;
  title: string;
  description: string;
  image: string;
  repository: string;
  deployment: string;
  tags: string[];
  tools: string[];
}

export interface TSkill {
  name: string;
  image: string;
}

export type TCategory = 'algorithm' | 'AI' | 'cms' | 'game' | 'optimization';
