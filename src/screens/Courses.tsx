import { Course } from "components";
import { courses } from "data";

const Courses = () => {
	return (
		<div id="certificates" className="section md:mx-0 xl:mx-8 flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h2 className="text-center font-bold">Certificates</h2>
				<p className="mx-auto text-center">These are some of the courses I have taken</p>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
				{ courses.map(course => (
					<Course key={ course.id } course={ course } />
				)) }
			</div>
		</div>
	);
};

export default Courses;
