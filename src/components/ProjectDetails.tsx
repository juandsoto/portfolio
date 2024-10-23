import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import useStore from "store";
import { IProject } from "types";
import Dot from "./Dot";

interface ProjectDetailsProps {
	project: IProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	const setShowProjectId = useStore(state => state.setShowProjectId);
	const { deployment, description, image, repository, tags, title, tools } = project;
	return (
		<div
			onClick={ () => setShowProjectId(null) }
			className="fixed z-50 top-0 right-0 h-screen w-screen bg-dark/40 flex justify-center items-center px-4"
		>
			<motion.div
				onClick={ e => e.stopPropagation() }
				className="relative max-w-screen-xl w-[95vw] sm:w-[85vw] md:w-[65vw] lg:w-[90vw] 2xl:w-[80vw] min-h-[70vh] max-h-screen flex flex-col lg:flex-row rounded-lg bg-light shadow-sm dark:shadow-gray-700 dark:bg-dark"
				layoutId={ project.id.toString() }
			>
				<div className="w-full lg:w-2/3 aspect-video rounded-t-lg lg:rounded-lg flex self-stretch">
					<img className="w-full object-cover rounded-t-lg lg:rounded-lg" src={ image } alt={ title } />
				</div>
				<div className="absolute top-0 translate-y-[-50%] right-2 flex items-center gap-2">
					<a className="icon cursor-pointer" href={ repository } target="_blank">
						<GitHub className="bg-white dark:bg-dark rounded-full" fontSize="large" />
					</a>
					{deployment && (
						<a className="btn-secondary" href={ deployment } target="_blank">
							Open
						</a>
					)}
				</div>
				<div className="flex-1 w-full lg:w-1/3 flex flex-col px-4 py-2">
					<h4 className="capitalize text-lg font-bold">{ title }</h4>
					<div className="flex flex-col gap-4 mb-4">
						<p className="lg:max-w-6xl xl:max-w-4xl max-h-60">{ description }</p>
						<div className="flex flex-col gap-1">
							<span className="font-semibold">Development tools</span>
							<ul className="flex flex-wrap items-center gap-1 capitalize leading-4">
								{ tools.map((tool, idx) => (
									<li key={ tool }>
										<span className="mr-1">{ tool }</span>
										{ idx < tools.length - 1 && <Dot /> }
									</li>
								)) }
							</ul>
						</div>
					</div>
					<ul className="text-secondary flex items-center gap-2 self-end mt-auto text-sm italic uppercase">
						{ tags.map(tag => (
							<li key={ tag }>#{ tag }</li>
						)) }
					</ul>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
