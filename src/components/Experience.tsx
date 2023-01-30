import { Circle } from "@mui/icons-material";
import moment from "moment";
import { IExperience } from "types";

interface Props {
  experience: IExperience;
}

const Experience = ({ experience }: Props) => {
  const { company, company_link, description, endDate, image, role, startDate, tools } = experience;

  return (
    <div className="experience">
      <div className="flex w-full items-center justify-between gap-4 mb-1">
        <a
          className="flex items-center bg-light rounded-lg px-2 py-1 max-w-12 external-link overflow-hidden"
          href={company_link}
          target="_blank"
        >
          <img className="object-center h-full" src={image} alt={company} />
        </a>
        <div className="experience_date flex items-center text__secondary gap-2 whitespace-nowrap">
          <span>{moment(startDate).format("YYYY-MM")}</span>
          <Circle sx={{ fontSize: "4px" }} />
          <span>{moment(endDate).format("YYYY-MM")}</span>
        </div>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <span className="capitalize">{role}</span>
        <Circle sx={{ fontSize: "4px" }} />
        <span className="capitalize">{company}</span>
      </div>
      <p className="text-justify">{description}</p>
      {tools.length > 0 && (
        <div className="experience_skills">
          <div className="text__secondary">
            <p>These are some of the skills I needed to work at {company}:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <div key={tool} className="flex items-center gap-2">
                <span className="capitalize">{tool}</span>
                {idx < experience.tools.length - 1 && <Circle sx={{ fontSize: "4px" }} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
