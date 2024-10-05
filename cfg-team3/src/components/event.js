import Button from "./button";
import { Link } from "react-router-dom";

export default function Event({ event, status }) {
  return (
    <div className="group rounded-sm bg-white shadow-lg m-4">
      <div className="p-8 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-medium text-3xl">{event.name}</div>
          <div className="font-light text-lg">{event.location}</div>
          <div className="font-light text-lg">
            Volunteers: {event.volunteersCount}
          </div>
          <div className="font-light text-lg">EKGs: {event.ekg}</div>
          <div className="font-light text-lg">
            Sponsored by: {event.sponsor}
          </div>
        </div>
        <div className="md:text-right gap-2 flex mt-4 md:mt-0 md:flex-col md:items-end items-center justify-between">
          <div className="font-light text-2xl md:text-3xl">
            {event.dateTime}
          </div>
          <div className="font-light text-lg">{event.phone}</div>
          {status === "not-registered" && (
            <Link className="text-white" to="/event-registration" state={event}>
              <Button text="Register" size="xs" color="red" />
            </Link>
          )}
          {status === "in-progress" && (
            <div className="flex rounded-sm px-3 py-3 border-none text-xl font-semibold bg-green-300">
              Sign Up Below!
            </div>
          )}
          {status === "registered" && (
            <div className="flex rounded-sm px-3 py-3 border-none text-xl font-semibold bg-green-300">
              Registered!
            </div>
          )}
          {status === "finished" && (
            <div className="flex rounded-sm px-3 py-3 border-none text-xl font-semibold bg-rose-300">
              Finished
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
