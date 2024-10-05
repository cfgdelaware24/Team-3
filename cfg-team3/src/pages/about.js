import React, { useState } from 'react';
import "./about.css";
import ArticleCard from './articles/articleCard.js';
import Navbar from "../components/navbar";
import Greer from "../images/Greer.jpg";
import Drezner from "../images/drezner.png";
import PHW from "../images/ParentHeartWatch2.png";
import Button from "../components/button";
import articles from "./articles/articles.js";

function About() {
  const [isOpenSponsor, setIsOpenSponsor] = useState(false);
  const [isOpenImpact, setIsOpenImpact] = useState(false);

  // Drop down for words from our sponsor under Grace Firestone Act
  const toggleSponsor = () => {
    setIsOpenSponsor(!isOpenSponsor);
  };

  // Drop down for our impact under Grace Firestone Act
  const toggleImpact = () => {
    setIsOpenImpact(!isOpenImpact);
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="pageTitle">About Heart in the Game</h1>

      {/* Founder title, photo, and bio */}
      <div id="founders">
        <div className="verticalBundle ">
          <h2>Founder</h2>
          <img src={Greer} alt="Greer Firestone" height="30%" width="30%"/>
        </div>
        <p className="w-3/4 mx-auto pr-10 py-10">
          A phone call at midnight. "Grace had a heart attack". NO! That could
          not happen to an elite athlete. There was no family heart history. We
          soon learned that Grace suffered not a heart attack but Sudden Cardiac
          Arrest. What was that? SCA is entirely different. If one is not given
          CPR/AED within 5 minutes....yes, 5 minutes, the patient either
          succumbs or suffers cognitive issues and will never be the same. We
          did research. We gathered all the stakeholders in Delaware and created
          The Grace Firestone Act for Sudden Cardiac Awareness, mandated in
          2014. However, that was not enough. We founded Heart In The Game.org
          that same year to give Delaware students EKG screenings and to train
          in CPR/AED. A pre-participation physical for sports identifies 8% of
          heart abnormalities. Family history identifies 20%. A simple, 5
          minute, non-invasive EKG identifies 90%. Yes, an EKG can save one
          life. Knowledge of CPR/AED can save tens of lives. Parents think their
          otherwise healthy looking kids are invulnerable. The Firestone family
          certainly thought Grace was invulnerable. You never know. Why take the
          chance? - Greer Firestone
        </p>
      </div>

      {/* Link and info about Parent Heart Watch */}
      <div className="parentHeartWatch">

        <div className="horizontalBundle">
          <div className="verticalBundle w-1/3">
            <h2>Parent Heart Watch (PHW)</h2>
            <p className="text-center">
              PHW leads and empowers others by sharing information, educating 
              and advocating for change.
            </p>

            {/* Button to PHW (Parent Heart Watch) */}
            <a
                href="https://parentheartwatch.org/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button text="More Info" size="lg" color="red" />
            </a>
          </div>

          <div className="verticalBundle w-1/4">
            <img
              src={Drezner}
              alt="Dr. Jonathan Drezner"
              height="50%"
              width="50%"
            />
            <p>Dr. Jonathan Drezner</p>
          </div>

          <img src={PHW} alt="Parent Heart Watch" heigh="30%" width="30%" />
        </div>

      {/* Impact statement about Grace Firestone Act */}
      </div>
        <div className="graceFirestone">
          <h2>Grace Firestone Act</h2>
          <p className="paragraph-separation">The Important Legislation Surrounded by student athletes from Middletown High School on the first day of school, Governor Markell signed legislation that requires the Delaware Interscholastic Athletic Association (“DIAA”) to draft regulations to identify symptoms and risk factors of sudden cardiac arrest in student athletes. The legislation aims to better identify at-risk students who participate in youth sports and raise awareness among coaches and administrators. Senate Bill 205, which notes that Sudden Cardiac Arrest is the number one cause of death of student athletes while participating in practices and games, also helps ensure schools are better prepared to respond quickly and effectively should an incident occur. "Youth and high school athletics offer a phenomenal opportunity for students to learn life skills -- good sportsmanship, teamwork, overcoming adversity -- while also providing them with regular exercise that promotes their physical health and well-being,” said Governor Markell. “We must take responsibility for doing everything we can to promote the health and safety of these athletes and Senate Bill 205 recognizes that we have the ability to greatly diminish the threat of sudden cardiac arrest. Today marks important progress in ensuring Delaware schools are better equipped to prevent and respond to this frightening condition."</p>
          <p className="paragraph-separation">As a result of this law, the Delaware Interscholastic Athletic Association will develop rules for schools to deal with awareness, recognition, and management of sudden cardiac arrest in student-athletes. At a minimum, each school must give coaches and officials information on sudden cardiac arrest, including warning signs.</p>
          <p className="paragraph-separation">In addition, students and their families will need to sign a sudden cardiac arrest information sheet; athletes will answer questions about heart history before they participate; and schools will ensure all head coaches undergo CPR certification that includes training on the use of an automated external defibrillator.</p>
        </div>

        {/* Dropdown section for Sponsor words about Grace Firestone Act */}
        <h3 className="dropdown-title" onClick={toggleSponsor}>
          Words From Our Sponsor
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-down-fill ml-1 ${isOpenSponsor ? "rotate-180" : ""}`}>
            <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
          </svg>
        </h3>
        {isOpenSponsor && (
          <div className="dropdown-content">
            <p className="paragraph-separation">Bill sponsor Sen. Bethany Hall-Long, D-Middletown, said the law reinforces actions already being taken by the Delaware Interscholastic Athletic Association. Hall-Long, who authored a law requiring screenings for athletes who may have suffered a concussion, has been on the forefront of protecting the health of young athletes.</p>
            <p className="paragraph-separation">“Thanks to the tireless efforts of health advocacy groups and of Grace and the Firestone family, we’re here to provide new protection for young athletes,” Hall-Long said “With the training and information this law requires, we’re going to give young athletes a better chance of surviving, if they should suffer a sudden, unexpected cardiac incident while they’re on the field.”</p>
            <p className="paragraph-separation">Sen. Bryan Townsend, D-Newark, co-sponsored the measure, which he hopes will protect young athletes.</p>
            <p className="paragraph-separation">“It’s shocking to think that these sudden, unexpected heart attacks are the No. 1 killer of young athletes, but that’s the case,” Townsend said. “We know that, in some cases, quick reaction can save the lives of these young people which is why I supported the training this law will require.”</p>
            <p className="paragraph-separation">Added Sen. Cathy Cloutier, R-Heatherbrooke, “As a member of the General Assembly, it is my responsibility to work on and promote legislation that will serve the people of Delaware, including student athletes. I am honored to have had the opportunity to play a role in SB 205. Because of this bill that’s being signed today, young lives in our state will be saved.”</p>
            <p className="paragraph-separation">Rep. Mike Ramone, R-Pike Creek South, also a co-sponsor of the bill, stated, “As a person who has dedicated his entire adult life to running health and fitness clubs and sports programs for our young athletes, I am very proud to have helped champion this important legislation. I believe that we are making a life-saving commitment to our student athletes and their families by enacting this bill.”</p>
            <p className="paragraph-separation">SB 205 is known as the Grace Firestone Act, named for a former three-sport star at Tower Hill, who also excelled in the classroom, exemplifying the value that athletics can have as part of the educational experience. Now Grace, who attended the bill signing, is one of the rare survivors of Sudden Cardiac Arrest, having collapsed in her home two days after her high school graduation.</p>
          </div>
        )}

        {/* Dropdown section for Heart in the Game Impact */}
        <h3 className="dropdown-title" onClick={toggleImpact}>
          Our Impact
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-down-fill ml-1 ${isOpenSponsor ? "rotate-180" : ""}`}>
            <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
          </svg>
        </h3>
        {isOpenImpact && (
          <div className="dropdown-content">
            <p className="paragraph-separation">“Today, Delaware joined the increasingly pertinent nation-wide movement to provide high-school coaches, parents, and students with lifesaving CPR information,” Firestone said. “Because of persistent legislators and organizations dedicated to raising SCA awareness, Delaware is working to shift the balance to make SCA survival less of a far-reaching miracle and more of a prevailing standard. I will continue to live in gratitude for those family members, policemen, and EMT's who never gave up on my life, and promise to forever work with passion, heart, and purpose to pay that commitment forward.”</p>
            <p className="paragraph-separation">She attends the University of Delaware and has started a charity to provide athletic equipment to disadvantaged children. At the bill signing, Markell said her story "reminds us why we’re here and it helps inspire us to see that we can do more to protect our kids."</p>
            <p className="paragraph-separation">At the signing of The Grace Firestone Act is the 9th such bill in the nation. As of November of 2105 there were ONLY NINE states with similar legislation. THAT IS RIDICULOUS.For those from other states who would wish information for your legislators, please connect with me! This is a wonderfully collaborative bill, molded by all the statewide stakeholders AND budget neutral.</p>
          </div>
        )}

        <div id="articles">
          <h2 className="pageTitle">Articles</h2>
          <div id="articleCards">
            {articles.map((article, index) => (
              <div>
                <ArticleCard key = {index} article={article} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default About;
