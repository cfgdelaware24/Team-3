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
            Next Lesson: {course.NextLesson}
          </div>
          <div className="mt-4">
            <div className="font-light text-lg mb-1">
              Progress: {course.Progress}%
            </div>
            <progress 
              value={course.Progress} 
              max="100" 
              className="w-full h-2 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-red-500 [&::-moz-progress-bar]:bg-red-500"
            >
              {course.Progress}%
            </progress>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <Link className="text-white" to="/event-registration">
            <Button text="Continue" size="xs" color="red" />
          </Link>
        </div>
      </div>
    </div>
  );
}