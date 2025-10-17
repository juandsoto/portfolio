import { Course } from '@/components';
import { COURSES } from '@/data';

export const Courses = () => {
  return (
    <div id="certificates" className="section flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-bold">Certificates</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
