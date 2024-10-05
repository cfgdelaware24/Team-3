import Event from "../components/event";
import Navbar from "../components/navbar";

export default function EventDetail() {
  const firstEvent = {
    name: "Wilmington Charter School",
    location: "100 N Dupont Rd, Wilmington, DE 19807",
    sponsor: "JP Morgan",
    dateTime: "10/24/2024 5:00PM",
    volunteersCount: 4,
    ekg: 4,
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto">
          <div className="text-3xl font-semibold py-4">
            Hi John, you've selected, "{firstEvent.name}"
          </div>
          <div className="flex flex-col flex-wrap justify-center">
            <Event event={firstEvent} status = "registered" />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
