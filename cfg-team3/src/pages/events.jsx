import Event from "../components/event";
import Navbar from "../components/navbar";

export default function Events() {
  const ScheduledEvents = [
    {
      name: "Wilmington Charter School",
      location: "100 N Dupont Rd, Wilmington, DE 19807",
      sponsor: "JP Morgan",
      dateTime: "10/24/2024 5:00PM",
      volunteersCount: 4,
      ekg: 4,
    },
    {
      name: "Tower Hill High School",
      location: "2813 W 17th St, Wilmington, DE 19806",
      sponsor: "Chase",
      dateTime: "11/14/2024 5:00PM",
      volunteersCount: 5,
      ekg: 5,
    },
    {
      name: "Dover Middle School",
      location: "1 Dover High Dr, Dover, DE 19904",
      sponsor: "Sponsor 3",
      dateTime: "12/2/2024 5:00PM",
      volunteersCount: 3,
      ekg: 6,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className=" max-w-screen-md mx-auto">
          <div className="text-3xl font-semibold py-4">Scheduled Events</div>
          <div className="flex flex-col flex-wrap justify-center ">
            {ScheduledEvents.map((event, idx) => {
              return <Event key={idx} event={event} />;
            })}
          </div>
          <div className="text-3xl font-semibold py-4">
            Want an Event in Your Area?
          </div>
          <form action="event" method="post">
            <div>
              <label htmlFor="name">Name of School</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="location">Address</label>
              <input type="text" id="location" name="location" />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
