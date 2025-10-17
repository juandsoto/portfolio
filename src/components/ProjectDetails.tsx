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
				className="relative max-w-screen-xl w-[95vw] sm:w-[85vw] md:w-[65vw] lg:w-[90vw] 2xl:w-[80vw] md:min-h-[48rem] max-h-[80vh] flex flex-col lg:flex-row rounded-lg bg-light shadow-sm dark:shadow-gray-700 dark:bg-dark"
				layoutId={ project.id.toString() }
			>
				<div className="w-full lg:w-3/5 aspect-video rounded-t-lg lg:rounded-lg flex self-stretch">
					<img className="w-full object-cover rounded-t-lg lg:rounded-lg" src={ image } alt={ title } />
				</div>
				<div className="flex-1 w-full lg:w-2/5 flex flex-col px-2 lg:px-4 py-4 overflow-y-auto lg:overflow-y-hidden">
					<h4 className="text-xl font-bold">{ title }</h4>
					<div className="flex flex-col gap-4 mt-4 mb-12">
						<div className="lg:max-w-6xl xl:max-w-4xl lg:max-h-[28rem] lg:overflow-y-auto" dangerouslySetInnerHTML={{__html: description}}/>
						<div className="bg-gray-300 dark:bg-gray-500 h-[1px] my-2"/>
						<h5 className="text-lg font-semibold">Tools:</h5>
						<ul className="flex flex-wrap items-center gap-1 leading-4">
							{ tools.map((tool, idx) => (
								<li key={ tool }>
									<span className="mr-1">{ tool }</span>
									{ idx < tools.length - 1 && <Dot /> }
								</li>
							)) }
						</ul>
					</div>
					<div className="flex flex-wrap gap-4 mt-auto">
						<a className="flex gap-2 items-center cursor-pointer animate-bounce" href={ repository } target="_blank">
							<GitHub className="bg-white dark:bg-dark rounded-full" fontSize="large" />
							<span className="hover:underline">Code</span>
						</a>
						{deployment && (
							<a className="btn-secondary" href={ deployment } target="_blank">
								Check out the app!
							</a>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
