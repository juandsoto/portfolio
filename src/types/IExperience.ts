interface IExperience {
	id: number;
	company: string;
	company_link: string;
	image: string;
	roles: Role[];
	description: string;
	tools: string[];
	logoClassName?: string;
}

interface Role {
	name: string,
	startDate: string;
	endDate: string;
}

export default IExperience;
