import { motion } from "framer-motion";
import useStore from "store";
import { IProject } from "types";

interface ProjectProps {
	project: IProject;
}

const Project = ({ project }: ProjectProps) => {
	const setShowProjectId = useStore(state => state.setShowProjectId);
	const { id, image, title } = project;
	return (
		<motion.div className="project cursor-pointer" layoutId={ id.toString() } onClick={ () => setShowProjectId(id) }>
			<div className="overflow-hidden rounded-lg h-full w-full">
				<img className="project__image h-full w-full object-cover" src={ image } alt={ title } />
			</div>
		</motion.div>
	);
};

export default Project;
