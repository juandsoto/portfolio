import { motion } from "framer-motion";
import { useStore } from "@/store";
import { TProject } from "@/types";

interface ProjectProps {
	project: TProject;
}

export const Project = ({ project }: ProjectProps) => {
	const setShowProjectId = useStore(state => state.setShowProjectId);
	const { id, image, title } = project;
	return (
		<motion.div className="project cursor-pointer" layoutId={ id.toString() } onClick={ () => setShowProjectId(id) }>
			<div className="overflow-hidden rounded-lg h-full w-full">
				<img className="project__image h-full w-full object-cover aspect-video" src={ image } alt={ title } />
			</div>
		</motion.div>
	);
};