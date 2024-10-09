import { IExperience } from "types";
import Dot from "./Dot";

interface Props {
	experience: IExperience;
}

const Experience = ({ experience }: Props) => {
	return (
		<div className="experience">
			<div className="flex max-h-32 items-center gap-4 mb-4">
				<a
					className={`flex max-h-32 items-center rounded-lg px-2 py-1 max-w-12 overflow-hidden ${experience.logoClassName ? experience.logoClassName : ''}`}
					href={ experience.company_link }
					target="_blank"
				>
					<img className={`object-center h-full`} src={ experience.image } alt={ experience.company } />
				</a>
			</div>
			{ experience.roles.map(role => (
					<div key={ role.name } className="flex gap-2 items-center mb-2">
						<span className="capitalize text-secondary font-semibold">{ role.name }</span>
						<Dot />
						{ role.endDate.length === 0
							? (
								<span className="capitalize">Since { role.startDate }</span>
							)
							: (
								<>
									<span>{ role.startDate }</span>{ "-" }<span>{ role.endDate }</span>
								</>
							)
						}
					</div>
				)) }
			<p dangerouslySetInnerHTML={{__html: experience.description}}></p>
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
