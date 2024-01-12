import { Categories, Project, ProjectDetails } from "components";
import { projects } from "data";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import useStore from "store";

const Projects = () => {
	const showProjectId = useStore(state => state.showProjectId);
	const selectedProjectCategories = useStore(state => state.selectedProjectCategories);

	const filteredProjects = useMemo(() => {
		if (!selectedProjectCategories.length) return projects;
		return projects.filter(projects =>
			selectedProjectCategories.every(tag => projects.tags.includes(tag.toLowerCase()))
		);
	}, [selectedProjectCategories]);

	return (
		<div id="projects" className="section md:mx-0 xl:mx-8 flex flex-col gap-4">
			<h2 className="text-center font-bold">Projects</h2>
			<p className="md:w-[75%] mx-auto text-center">
				This is my work. Some of these applications were made based on my Software Engineering career projects
			</p>
			<div className="flex justify-center">
				<Categories />
			</div>
			<div className="projects__container">
				{ filteredProjects.length ? (
					filteredProjects.map(project => <Project key={ project.id } project={ project } />)
				) : (
					<span>No project matches the categories selected</span>
				) }
			</div>
			<AnimatePresence>
				{ showProjectId !== null && <ProjectDetails project={ projects.find(project => project.id === showProjectId)! } /> }
			</AnimatePresence>
		</div>
	);
};

export default Projects;
