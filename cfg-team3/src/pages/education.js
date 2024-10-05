import Course from "../components/course";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Courses() {
  const CoursesInProgress = [
    //Sample courses with course name, instructor, # modules left, the next upcoming lesson 
    {
      CourseName: "Recognizing Sudden Cardiac Arrest: Signs and Symptoms",
      Instructor: "Heart in the Game",
      ModulesLeft: "5",
      NextLesson: "Understanding the Difference Between Heart Attack and Sudden Cardiac Arrest",
      Progress: 30, // Progress in percentage
    },
    {
      CourseName: "CPR Basics: Your First Line of Defense",
      Instructor: "American Red Cross",
      ModulesLeft: "3",
      NextLesson: "Hands-Only CPR Technique",
      Progress: 60, // Progress in percentage
    },
    {
      CourseName: "AED Essentials: Using Automated External Defibrillators",
      Instructor: "American Red Cross",
      ModulesLeft: "2",
      NextLesson: "AED Pad Placement",
      Progress: 75, // Progress in percentage
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto pb-[200px]">
          <div className="text-3xl font-semibold py-4 text-center">Courses</div>
          <div className="flex flex-col flex-wrap justify-center">
            {CoursesInProgress.map((course, idx) => (
              <Course key={idx} course={course} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}