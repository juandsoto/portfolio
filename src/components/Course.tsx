import { ICourse } from "types";

interface Props {
	course: ICourse;
}

const Course = ({ course }: Props) => {
	const { certificate_link, course_link, image, name, platform } = course;

	return (
		<div className="course">
			<div className="overflow-hidden flex items-center w-full aspect-video rounded-lg">
				<img className="rounded-lg object-contain w-full h-full" src={ image } alt={ name } />
			</div>
			<div className="course__overlay">
				<div className="w-6 sm:w-8 aspect-square bg-light p-1 absolute z-50 rounded-full top-0 translate-y-[-50%] right-0 translate-x-[50%] shadow-sm shadow-dark">
					<img className="object-contain h-full w-full rounded-full" src={ platform } alt={ `${name} - platform` } />
				</div>
				<div className="flex-1 flex flex-col gap-4 justify-center items-center overflow-y-auto px-2 py-4">
					<h4 className="text-center font-bold text-base">{ name }</h4>
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
