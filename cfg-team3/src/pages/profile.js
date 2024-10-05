import Event from "../components/event";
import Navbar from "../components/navbar";
import MyIcon from "../images/usericon.svg";

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
    {
      id: "asdf",
      name: "Deleware State High School",
      location: "2813 W 17th St, Wilmington, DE 19806",
      sponsor: "Team 3",
      dateTime: "11/14/2024 5:00PM",
      volunteersCount: 5,
      ekg: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto pb-[200px] flex">
          <div className="w-1/4 p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto"
              />
              <div className="text-center mt-4">
                <div className="text-xl font-semibold">John Doe</div>
                <div className="text-gray-600">
                  Registered Events: {RegisteredEvents.length}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 p-4">
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
      </div>
    </>
  );
}
