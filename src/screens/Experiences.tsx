import { Experience } from "components";
import { experiences } from "data";

const Experiences = () => {
  return (
    <div id="experiences" className="section">
      <h2 className="text-center font-bold mb-4">Experiences</h2>
      <div className="flex flex-col gap-4">
        {experiences.map(experience => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
