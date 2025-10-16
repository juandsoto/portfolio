import { IExperience, IOrientation } from "types";
import Dot from "./Dot";
import { useState } from "react";
import { Circle } from "@mui/icons-material";
import { useBreakpoint } from "hooks";

interface Props {
	experience: IExperience;
	orientation?: IOrientation;
}

const ROOT_CLASSNAME: Record<IOrientation, string> = {
	'left': 'text-justify sm:text-start',
	'right': 'ml-auto items-end text-justify sm:text-end',
}

const COMPANY_CLASSNAME: Record<IOrientation, string> = {
	'left': '',
	'right': 'text-end',
}

const MAX_DESCRIPTION_LENGTH = 600;

const Experience = ({ experience, orientation = 'left' }: Props) => {
	const { sm } = useBreakpoint();
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => setIsExpanded(prev => !prev);

	const description = isExpanded ? experience.description : experience.description.slice(0, MAX_DESCRIPTION_LENGTH);
	const seeMoreLabel = isExpanded ? ' See less' : '... See more';
	
	return (
		<div className={`flex flex-col md:w-[70%] ${ROOT_CLASSNAME[orientation]}`}>
			<div className="flex max-h-32 items-center gap-4 mb-4">
				<a
					className={`flex max-h-32 items-center rounded-lg px-4 py-2 max-w-12 overflow-hidden hover:scale-110 transition-transform ${experience.logoClassName}`}
					href={ experience.company_link }
					target="_blank"
				>
					<h3 className="company-name">{experience.company}</h3>
				</a>
			</div>
			{ experience.roles.map(role => (
					<div key={ role.name } className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
						<span className={`capitalize text-secondary font-semibold ${COMPANY_CLASSNAME[orientation]}`}>{ role.name }</span>
						<p className='flex gap-2 items-center'>
							<Circle className="text-secondary" sx={ { fontSize: "6px", display: sm() ? 'none' : 'block'  } } />
							<span>{ role.startDate }</span>{ "-" }<span>{ role.endDate }</span>
						</p>
					</div>
				)) }
			<p dangerouslySetInnerHTML={{__html: description}} />
			{ experience.description.length > MAX_DESCRIPTION_LENGTH && (
				<button className="inline-flex text-secondary font-semibold mt-2" onClick={toggleExpand}>{seeMoreLabel}</button>
			) }
			{ experience.tools.length > 0 && (
				<div className="mt-4 flex flex-wrap gap-2">
					{ experience.tools.map((tool, idx) => (
						<div key={ tool } className="flex items-center gap-2">
							<span className="capitalize">{ tool }</span>
							{ idx < experience.tools.length - 1 && <Dot /> }
						</div>
					)) }
				</div>
			) }
		</div>
	);
};

export default Experience;
