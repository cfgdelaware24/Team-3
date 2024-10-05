import Button from "./button";
import { Link } from "react-router-dom";

export default function Course({ course }) {
  return (
    <div className="group rounded-sm bg-white shadow-lg m-4">
      <div className="p-4 flex justify-between">
        <div>
          <div className="font-medium text-3xl">{course.CourseName}</div>
          <div className="font-light text-lg">{course.Instructor}</div>
          <div className="font-light text-lg">
            Modules Left: {course.ModulesLeft}
          </div>
          <div className="font-light text-lg">
            Sponsored by: {course.NextLesson}
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <Link to="/event-registration">
            <Button text="Resume" size="xs" color="red" />
          </Link>
        </div>
      </div>
    </div>
  );
}
