import { Experience } from "@/components";
import { EXPERIENCES } from "@/data";
import { useBreakpoint } from "@/hooks";

export const Experiences = () => {
	const {sm} = useBreakpoint();
	return (
		<div id="experience" className="section">
			<h2 className="text-center font-bold mb-4">Experience</h2>
			<div className="flex flex-col gap-8">
				{ EXPERIENCES.map((experience, index) => (
					<Experience key={ experience.id } experience={ experience } orientation={index % 2 === 0 || sm() ? 'left' : "right"} />
				)) }
			</div>
		</div>
	);
};