import { Circle, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import useStore from "store";
import { IProject } from "types";

interface ProjectDetailsProps {
  project: IProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const setShowProjectId = useStore(state => state.setShowProjectId);
  const { deployment, description, id, image, repository, tags, title, tools } = project;
  return (
    <div
      onClick={() => setShowProjectId(null)}
      className="fixed z-50 top-0 right-0 h-screen w-screen bg-dark/40 flex justify-center items-center"
    >
      <motion.div
        onClick={e => e.stopPropagation()}
        className="relative w-[95vw] sm:w-[85vw] md:w-[65vw] lg:w-[90vw] 2xl:w-[80vw] max-h-screen flex flex-col lg:flex-row rounded-lg bg-light shadow-sm shadow-light_gray dark:bg-dark"
        layoutId={project.id.toString()}
      >
        <div className="rounded-t-lg lg:rounded-lg flex self-stretch">
          <img className="object-fill rounded-t-lg lg:rounded-lg" src={image} alt={title} />
        </div>
        <div className="absolute top-0 translate-y-[-50%] right-2 flex items-center gap-2">
          <a className="icon cursor-pointer bg-light dark:bg-dark rounded-full" href={repository} target="_blank">
            <GitHub fontSize="large" />
          </a>
          <a className="btn-accent btn-hover" href={deployment} target="_blank">
            Open
          </a>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h4 className="capitalize text-lg font-bold">{title}</h4>
          <div className="flex flex-col gap-4 mb-4">
            <p className="lg:max-w-6xl xl:max-w-4xl max-h-60 text-justify">{description}</p>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Development tools</span>
              <ul className="flex flex-wrap items-center gap-1 capitalize leading-4">
                {tools.map((tool, idx) => (
                  <li key={tool}>
                    <span className="mr-1">{tool}</span>
                    {idx < tools.length - 1 && <Circle sx={{ fontSize: "4px" }} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="flex items-center gap-2 self-end mt-auto text-xs italic uppercase">
            {tags.map(tag => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
