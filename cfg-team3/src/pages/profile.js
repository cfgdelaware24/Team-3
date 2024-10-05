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
      <div className="ml-[200px]  flex justify-between items-start px-10">
        {/* Icon section */}
        <div className="flex-shrink-0 mt-20">
          <img
            src={MyIcon}
            alt="My SVG Icon"
            style={{ width: "200px", height: "200px" }} // Adjust the size as necessary
          />
          <p className="ml-[55px] text-2xl">John Doe</p>
        </div>

        {/* Event cards section */}
        <div className="max-w-screen-md  flex-grow ml-10">
          <div className="flex flex-col flex-wrap justify-center pt-10">
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
