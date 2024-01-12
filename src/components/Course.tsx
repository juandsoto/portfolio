import { ICourse } from "types";

interface Props {
	course: ICourse;
}

const Course = ({ course }: Props) => {
	const { certificate_link, course_link, image, name, platform } = course;

	return (
		<div className="course">
			<div className="overflow-hidden flex items-center w-full aspect-video rounded-lg">
				<img className="rounded-lg object-fill" src={ image } alt={ name } />
			</div>
			<div className="course__overlay">
				<div className="w-6 sm:w-8 aspect-square bg-light p-1 absolute z-50 rounded-full top-0 translate-y-[-50%] right-0 translate-x-[50%] shadow-sm shadow-dark">
					<img className="object-contain h-full w-full" src={ platform } alt={ `${name} - platform` } />
				</div>
				<div className="flex-1 flex flex-col gap-4 justify-center items-center">
					<h4 className="hidden xs:block text-center font-bold text-base sm:text-lg">{ name }</h4>
					<a className="text-secondary font-semibold" href={ course_link } target="_blank" rel="noopener noreferrer">
						Go to course
					</a>
					{ certificate_link.length > 0 && (
						<a className="btn-secondary" href={ certificate_link } target="_blank" rel="noopener noreferrer">
							Certificate
						</a>
					) }
				</div>
			</div>
		</div>
	);
};

export default Course;
