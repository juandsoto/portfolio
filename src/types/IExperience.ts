export interface IExperience {
	id: number;
	company: string;
	company_link: string;
	roles: Role[];
	description: string;
	tools: string[];
	logoClassName: string;
}

export type IOrientation = 'left' | 'right';

interface Role {
	name: string,
	startDate: string;
	endDate: string;
}
