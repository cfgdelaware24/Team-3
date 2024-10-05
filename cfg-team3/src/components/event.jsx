import Button from "../components/button";

export default function Event({ event }) {
  return (
    <div className="group rounded-sm bg-white shadow-lg m-4">
      <div className="p-4 flex justify-between">
        <div>
          <div className="font-medium text-3xl">{event.name}</div>
          <div className="font-light text-lg">{event.location}</div>
          <div className="font-light text-lg">
            Volunteers: {event.volunteersCount}
          </div>
          <div className="font-light text-lg">
            Sponsored by: {event.sponsor}
          </div>
          <div className="font-light text-lg">EKGs: {event.ekg}</div>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="font-light text-3xl">{event.dateTime}</div>
          <div className="font-light text-lg">{event.phone}</div>
          <Button href="/" text="Register" size="xs" color="red" />
        </div>
      </div>
    </div>
  );
}
