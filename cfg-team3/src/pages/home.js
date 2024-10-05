import React from "react";
import lifelineIcon from "../images/lifelineIcon.svg";
import HomeBtn from "../components/homeBtn";

export default function home() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-black w-full">
        <div className="flex container mx-auto items-center w-full bg-black text-white p-5 px-28">
          <div className="hero-left flex flex-col gap-5">
            <p className="text-2xl">
              Sudden Cardiac Arrest is the #1 cause of death for student
              athletes.
            </p>
            <p className="text-5xl">Save a life.</p>
            <div className="button-container flex flex-col max-w-xs gap-5 text-xl">
              <HomeBtn text="Register for an Event" isTransparent={false} />
              <HomeBtn text="Donate" isTransparent={true} />
            </div>
          </div>
          <div className="hero-right mx-10">
            <img src={lifelineIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
