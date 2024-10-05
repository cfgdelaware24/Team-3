import Course from "../components/course";
import Navbar from "../components/navbar";

export default function Courses() {
  const CoursesInProgress = [
    {
      CourseName: "Recognizing Sudden Cardiac Arrest: Signs and Symptoms",
      Instructor: "Heart in the Game",
      ModulesLeft: "5",
      NextLesson: "Understanding the Difference Between Heart Attack and Sudden Cardiac Arrest",
    },
    {
      CourseName: "CPR Basics: Your First Line of Defense",
      Instructor: "American Red Cross",
      ModulesLeft: "3",
      NextLesson: "Hands-Only CPR Technique",
    },
    {
      CourseName: "AED Essentials: Using Automated External Defibrillators",
      Instructor: "American Red Cross",
      ModulesLeft: "2",
      NextLesson: "AED Pad Placement",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className=" max-w-screen-md mx-auto">
          <div className="text-3xl font-semibold py-4">Courses</div>
          <div className="flex flex-col flex-wrap justify-center ">
            {CoursesInProgress.map((course, idx) => {
              return <Course key={idx} course={course} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
