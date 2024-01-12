import moment from "moment";
import { IExperience } from "types";
import Dot from "./Dot";

interface Props {
	experience: IExperience;
}

const Experience = ({ experience }: Props) => {
	return (
		<div className="experience">
			<div className="flex items-center gap-4 mb-1">
				<a
					className="flex items-center dark:bg-white rounded-lg px-2 py-1 max-w-12 overflow-hidden"
					href={ experience.company_link }
					target="_blank"
				>
					<img className="object-center h-full" src={ experience.image } alt={ experience.company } />
				</a>
				<div className="flex items-center gap-2 whitespace-nowrap">
					{ experience.endDate.length === 0 ? (
						<span>Since { moment(experience.startDate).format("YYYY-MM") }</span>
					) : (
						<>
							<span>{ moment(experience.startDate).format("YYYY-MM") }</span>
							<Dot />
							<span>{ moment(experience.endDate).format("YYYY-MM") }</span>
						</>
					) }
				</div>
			</div>
			{ experience.roles.length === 1 ? (
				<div key={ experience.roles[0].name } className="flex gap-2 items-center mb-2">
					<span className="capitalize text-secondary font-semibold">{ experience.roles[0].name }</span>
				</div>
			) : experience.roles.map((role, index) => {
				if (index === 0) return (
					<div key={ role.name } className="flex gap-2 items-center mb-2">
						<span className="capitalize text-secondary font-semibold">{ role.name }</span>
						<Dot />
						{ role.endDate.length === 0
							? (
								<span className="capitalize">Since { moment(role.startDate).format("YYYY-MM") }</span>
							)
							: (
								<>
									<span>{ moment(role.startDate).format("YYYY-MM") }</span>
									{ "-" }
									<span>{ moment(role.endDate).format("YYYY-MM") }</span>
								</>
							)
						}
					</div>
				);
				return (
					<div key={ role.name } className="flex gap-2 items-center mb-2">
						<span className="capitalize font-semibold">{ role.name }</span>
						<Dot />
						<span>{ moment(role.startDate).format("YYYY-MM") }</span>
						{ "-" }
						<span>{ moment(role.endDate).format("YYYY-MM") }</span>
					</div>
				);
			}) }
			<p>{ experience.description }</p>
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
