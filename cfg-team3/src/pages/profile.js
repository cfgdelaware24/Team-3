import Event from "../components/event";
import Navbar from "../components/navbar";

export default function EventDetail() {
  const RegisteredEvents = [
    {
      id: "sandflkadns",
      name: "Wilmington Charter School",
      location: "100 N Dupont Rd, Wilmington, DE 19807",
      sponsor: "JP Morgan",
      dateTime: "10/24/2024 5:00PM",
      volunteersCount: 4,
      ekg: 4,
    },
  ];

  const FinishedEvents = [
    {
      id: "asdf",
      name: "Tower Hill High School",
      location: "2813 W 17th St, Wilmington, DE 19806",
      sponsor: "Chase",
      dateTime: "11/14/2024 5:00PM",
      volunteersCount: 5,
      ekg: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto pb-[200px]">
          <div className="text-3xl font-semibold py-4">
            Hi John Doe! Here are your events:
          </div>
          <div className="flex flex-col flex-wrap justify-center">
            {RegisteredEvents.map((event, idx) => {
              return <Event key={idx} event={event} status="registered" />;
            })}
            {FinishedEvents.map((event, idx) => {
              return <Event key={idx} event={event} status="finished" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
