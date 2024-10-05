import React from 'react';
import "./about.css";
import Navbar from "../components/navbar";
import Greer from "../images/Greer.jpg";
import Drezner from "../images/drezner.png";
import PHW from "../images/ParentHeartWatch2.png";
import HomeBtn from '../components/homeBtn';

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 id="pageTitle">About Heart in the Game</h1>

      <div className="founders">
        <div className="verticalBundle ">
          <h2>Founders</h2>
          <img src={Greer} alt="Greer Firestone" height="30%" width="30%"/>
        </div>
        <p className="w-3/4 mx-auto pr-10 py-10">A phone call at midnight. "Grace had a heart attack". NO! That could not happen to an elite athlete. There was no family heart history. We soon learned that Grace suffered not a heart attack but Sudden Cardiac Arrest. What was that?  SCA is entirely different. If one is not given CPR/AED within 5 minutes....yes, 5 minutes, the patient either succumbs or suffers cognitive issues and will never be the same.       We did research. We gathered all the stakeholders in Delaware and created The Grace Firestone Act for Sudden Cardiac Awareness, mandated in 2014. However, that was not enough. We founded Heart In The Game.org that same year to give Delaware students EKG screenings and to train in CPR/AED.  A pre-participation physical for sports identifies 8% of heart abnormalities. Family history identifies 20%. A simple, 5 minute, non-invasive EKG identifies 90%. Yes, an EKG can save one life. Knowledge of CPR/AED can save tens of lives. Parents think their otherwise healthy looking kids are invulnerable. The Firestone family certainly thought Grace was invulnerable. You never know. Why take the chance? - Greer Firestone</p>
      </div>

      <div className="parentHeartWatch">
        <h2>Parent Heart Watch (PHW)</h2>

        <div className="horizontalBundle">
          <div className="verticalBundle w-1/3">
            <p className="text-center">PHW leads and empowers others by sharing information, educating and advocating for change.</p>
            <HomeBtn text="More Info" isTransparent={false} />
          </div>

          <div className="verticalBundle w-1/4">
            <img src={Drezner} alt="Dr. Jonathan Drezner" height="50%" width="50%"/>
            <p>Dr. Jonathan Drezner</p>
          </div>

          <img src={PHW} alt="Parent Heart Watch" heigh="30%" width="30%" />
        </div>

      </div>

    </div>
  )
}

export default About
