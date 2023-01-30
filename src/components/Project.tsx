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
    <motion.div className="project cursor-pointer" layoutId={id.toString()} onClick={() => setShowProjectId(id)}>
      <div className="overflow-hidden rounded-lg">
        <img className="project__image" src={image} alt={title} />
      </div>
      <div className="project__name flex items-center justify-center absolute top-0 left-0 w-full h-full">
        <span className="px-2 py-1 text-center w-full font-semibold capitalize text-xl bg-light text-dark dark:bg-dark dark:text-white">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

export default Project;
