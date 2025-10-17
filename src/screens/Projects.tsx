import { Categories, Project, ProjectDetails } from "@/components";
import { PROJECTS } from "@/data";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import { useStore } from "@/store";

export const Projects = () => {
	const showProjectId = useStore(state => state.showProjectId);
	const selectedProjectCategories = useStore(state => state.selectedProjectCategories);

	const filteredProjects = useMemo(() => {
		if (!selectedProjectCategories.length) return PROJECTS;
		return PROJECTS.filter(projects =>
			selectedProjectCategories.every(tag => projects.tags.includes(tag.toLowerCase()))
		);
	}, [selectedProjectCategories]);

	return (
		<div id="projects" className="section flex flex-col gap-4">
			<h2 className="text-center font-bold">Projects</h2>
			<div className="flex justify-center">
				<Categories />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
				{ filteredProjects.length ? (
					filteredProjects.map(project => <Project key={ project.id } project={ project } />)
				) : (
					<span>No project matches the categories selected</span>
				) }
			</div>
			<AnimatePresence>
				{ showProjectId !== null && <ProjectDetails project={ PROJECTS.find(project => project.id === showProjectId)! } /> }
			</AnimatePresence>
		</div>
	);
};