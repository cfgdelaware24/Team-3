import React from "react";
import lifelineIcon from "../images/lifelineIcon.svg";
import HomeBtn from "../components/homeBtn";
import SchoolImg from "../images/schoolExample.svg";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import StudentImg from "../images/zachExample.svg";
import Button from "../components/button";

export default function home() {
  return (
    <>
      <Navbar />
      <div className="bg-black w-full section">
        <div className="flex container mx-auto items-center w-full text-white p-20 gap-10 px-28">
          <div className="hero-left flex flex-col gap-5">
            <p className="text-2xl">
              Sudden Cardiac Arrest is the #1 cause of death for student
              athletes.
            </p>
            <p className="text-5xl">Save a life.</p>
            <div className="button-container flex flex-col max-w-xs text-xl">
              <Link to="/events">
                <Button text="Register for an Event" size="md" color="red" />
              </Link>
              <Link to="/donate">
                <Button text="Donate" size="md" color="black" />
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img src={lifelineIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="text-black w-full section">
        <div className="flex container mx-auto items-center p-5 px-28 gap-10">
          <div className="hero-left my-10">
            <img src={SchoolImg} alt="" />
          </div>
          <div className="hero-right flex flex-col gap-5 w-1/2">
            <p className="text-5xl">It starts with you.</p>
            <p>
              One in 300 youth has an undetected heart condition that puts them
              at risk for SCA. By providing screenings, we aim to improve
              survival from sudden cardiac arrest by educating the community on
              the importance and simplicity of bystander CPR.
            </p>
            <div className="button-container flex justify-between gap-5 text-xl">
              <Link className="w-full" to="/about">
                <Button text="More Info" size="lg" color="red" />
              </Link>
              <Link className="w-full" to="/volunteer">
                <Button text="Volunteer Signup" size="lg" color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black w-full section mt-10">
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-slate-400 rounded-full h-48 w-48 flex items-center justify-center">
              <img className="rounded-full" src={StudentImg} alt="" />
            </div>
            <p className="mt-2 text-center max-w-xs">
              A free non evasive EKG took less than 15 minutes and kept Zach
              from possibly being a statistic
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-400 rounded-full h-48 w-48 flex items-center justify-center">
              <img className="rounded-full" src={StudentImg} alt="" />
            </div>
            <p className="mt-2 text-center max-w-xs">
              A free non evasive EKG took less than 15 minutes and kept Zach
              from possibly being a statistic
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-400 rounded-full h-48 w-48 flex items-center justify-center">
              <img className="rounded-full" src={StudentImg} alt="" />
            </div>
            <p className="mt-2 text-center max-w-xs">
              A free non evasive EKG took less than 15 minutes and kept Zach
              from possibly being a statistic
            </p>
          </div>
        </div>
        <div className="button-container flex justify-center my-10">
          <Link to="/about">
            <Button text="View More Stories" size="lg" color="red" />
          </Link>
        </div>
      </div>
    </>
  );
}
