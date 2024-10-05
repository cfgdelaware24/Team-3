import React, { useState } from "react";
import "./about.css";
import ArticleCard from "./articles/articleCard.js";
import StoryCard from "./stories/storyCard.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer.js";

// Image and info imports
import Greer from "../images/Greer.jpg";
import PHW from "../images/ParentHeartWatch2.png";
import Button from "../components/button";
import articles from "./articles/articles.js";
import stories from "./stories/stories.js";
import Grace1 from "../images/Grace1.jpg";
import Grace2 from "../images/Grace2.jpg";
import Grace3 from "../images/Grace3.jpg";
import Grace4 from "../images/Grace4.jpg";

function About() {
  const [isOpenGrace, setIsOpenGrace] = useState(false);
  const [isOpenSponsor, setIsOpenSponsor] = useState(false);
  const [isOpenImpact, setIsOpenImpact] = useState(false);
  const [isOpenStats, setIsOpenStats] = useState(false);

  // Drop down for Grace's Story under Grace Firestone Act
  const toggleGrace = () => {
    setIsOpenGrace(!isOpenGrace);
  }

  // Drop down for words from our sponsor under Grace Firestone Act
  const toggleSponsor = () => {
    setIsOpenSponsor(!isOpenSponsor);
  };

  // Drop down for our impact under Grace Firestone Act
  const toggleImpact = () => {
    setIsOpenImpact(!isOpenImpact);
  };

  // Drop down for our impact under Grace Firestone Act
  const toggleStats = () => {
    setIsOpenStats(!isOpenStats);
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl font-semibold py-4 text-center">
        About Heart in the Game
      </h1>

      {/* Founder title, photo, and bio */}
      <div className="bg-rose-300">
        <div className="flex flex-col md:flex-row p-4 max-w-screen-lg mx-auto items-center">
          <div className="flex flex-col items-center rounded-sm bg-white shadow-lg m-4 mr-8 pb-2">
            <div className="w-60">
              <img src={Greer} alt="Greer Firestone" />
            </div>
            <h2>Greer Firestone</h2>
            <p>Founder</p>
          </div>
          <p>
            A phone call at midnight. "Grace had a heart attack". NO! That could
            not happen to an elite athlete. There was no family heart history.
            We soon learned that Grace suffered not a heart attack but Sudden
            Cardiac Arrest. What was that? SCA is entirely different. If one is
            not given CPR/AED within 5 minutes....yes, 5 minutes, the patient
            either succumbs or suffers cognitive issues and will never be the
            same. We did research. We gathered all the stakeholders in Delaware
            and created The Grace Firestone Act for Sudden Cardiac Awareness,
            mandated in 2014. However, that was not enough. We founded Heart In
            The Game.org that same year to give Delaware students EKG screenings
            and to train in CPR/AED. A pre-participation physical for sports
            identifies 8% of heart abnormalities. Family history identifies 20%.
            A simple, 5 minute, non-invasive EKG identifies 90%. Yes, an EKG can
            save one life. Knowledge of CPR/AED can save tens of lives. Parents
            think their otherwise healthy looking kids are invulnerable. The
            Firestone family certainly thought Grace was invulnerable. You never
            know. Why take the chance? - Greer Firestone
          </p>
        </div>
      </div>

      {/* Link and info about Parent Heart Watch */}
      <div className="bg-white">
        <div className="flex flex-row flex-wrap p-4 max-w-screen-lg mx-auto items-center justify-center">
          <div className="w-96">
            <img src={PHW} alt="Parent Heart Watch" />
          </div>
          <div className="flex flex-col justify-between max-w-60 p-4">
            <h2>Parent Heart Watch (PHW)</h2>
            <p>
              PHW leads and empowers others by sharing information, educating
              and advocating for change.
            </p>

            {/* Button to PHW (Parent Heart Watch) */}
            <a
              className="text-white mt-4"
              href="https://parentheartwatch.org/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Learn More" size="lg" color="red" />
            </a>
          </div>
        </div>
      </div>

      {/* Card views for available press */}
      <div className="bg-rose-300">
        <div>
          <h2 className="text-1xl font-semibold py-4 text-center">More Stories</h2>
          <div id="storyCards">
            {stories.map((story, index) => (
              <div>
                <StoryCard className="mx-auto" key={index} story={story} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact statement about Grace Firestone Act */}
      <div className="graceFirestone">
        <h2>Grace Firestone Act</h2>
        <p className="paragraph-separation">
          The Important Legislation Surrounded by student athletes from
          Middletown High School on the first day of school, Governor Markell
          signed legislation that requires the Delaware Interscholastic Athletic
          Association (“DIAA”) to draft regulations to identify symptoms and
          risk factors of sudden cardiac arrest in student athletes. The
          legislation aims to better identify at-risk students who participate
          in youth sports and raise awareness among coaches and administrators.
          Senate Bill 205, which notes that Sudden Cardiac Arrest is the number
          one cause of death of student athletes while participating in
          practices and games, also helps ensure schools are better prepared to
          respond quickly and effectively should an incident occur. "Youth and
          high school athletics offer a phenomenal opportunity for students to
          learn life skills -- good sportsmanship, teamwork, overcoming
          adversity -- while also providing them with regular exercise that
          promotes their physical health and well-being,” said Governor Markell.
          “We must take responsibility for doing everything we can to promote
          the health and safety of these athletes and Senate Bill 205 recognizes
          that we have the ability to greatly diminish the threat of sudden
          cardiac arrest. Today marks important progress in ensuring Delaware
          schools are better equipped to prevent and respond to this frightening
          condition."
        </p>
        <p className="paragraph-separation">
          As a result of this law, the Delaware Interscholastic Athletic
          Association will develop rules for schools to deal with awareness,
          recognition, and management of sudden cardiac arrest in
          student-athletes. At a minimum, each school must give coaches and
          officials information on sudden cardiac arrest, including warning
          signs.
        </p>
        <p className="paragraph-separation">
          In addition, students and their families will need to sign a sudden
          cardiac arrest information sheet; athletes will answer questions about
          heart history before they participate; and schools will ensure all
          head coaches undergo CPR certification that includes training on the
          use of an automated external defibrillator.
        </p>
      </div>
      
      {/* Dropdown section for Grace's Story */}
      <h3 className="dropdown-title" onClick={toggleGrace}>
        Grace's Story
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-caret-down-fill ml-1 ${
            isOpenSponsor ? "rotate-180" : ""
          }`}
        >
          <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
        </svg>
      </h3>
      {isOpenGrace && (
        <div className="dropdown-content">
          <p className="paragraph-separation">
            Gracie Firestone, Tower Hill 2011, Survivor of Sudden Cardiac Arrest Grace Firestone, Tower Hill School, 2011, was selected as a 
            2012 recipient of the “National High School Spirit of Sport Award” by the National Federation of State High School Associations (NFHS). 
            The National High School Spirit of Sport Award was created to recognize those individuals who exemplify the ideals of the spirit 
            of sport that represent the core mission of education-based athletics. Grace - one of eight recipients from across the country - 
            was the winner of Section 2, which includes DE, Washington D.C, KY, MD, Ohio, PA, VA and WVA. Additionally, in November of 2012, 
            she was honored with the Youth in Philanthropy Award by the Brandywine Chapter of the Association of Fundraising Professionals. 
            An elite high school athlete, Grace earned 15 varsity letters and garnered All-state honors in all of her three sports, including 
            1st Team All State soccer for 3 years. She was a 6-time sports captain and maintained a 3.93 GPA. She was student body president 
            her senior year. She created a number of community service projects while in high school, including “Let the Kids Play,” which 
            later would raise thousands of dollars for her adopted orphanage in Kenya.
          </p>
          <div className="graceImages">
            <img src={Grace1} alt="Grace" width="10%" height="10%" className="mx-4"/>
            <img src={Grace2} alt="Grace" width="10%" height="10%" className="mx-4"/>
          </div>
          <p className="paragraph-separation">
            On June 6, 2011, just two days after graduating from Tower Hill, Grace went to her mother’s room to say that she wasn’t feeling well. 
            Seconds later she collapsed on the bed. Her heart stopped. Her mother immediately called 911. Her brother Grant administered CPR during 
            the three minutes before the New Castle County (DE) EMS arrived. NCC Policeman Officer Justison was first on the scene, directing the 
            incoming emergency personnel. (Officer Justison was later to visit Gracie in the hospital several times. The EMS team visited as well.)
          </p>
          <p className="paragraph-separation">
            Grace was paddled 6 times. The EMS team drilled into her shin (interosseous) to provide quicker IV access to the brain. 
            Her heart stopped three times that night. On the way to Christiana Hospital she stopped breathing. 
          </p>
          <p className="paragraph-separation">
            An hour later, in an ER room, a doctor gets on his knee in front of Gracie's family. "There's a good chance we will lose her".  
            Gracie was put on a ventilator and an induced coma. 
          </p>
          <p className="paragraph-separation">
            Ten days later Grace left Christiana with an implanted defibrillator (ICD). No permanent damage. She began walking and working out.  
            She entered U of Delaware Honors in September 2011.  The doctor who implanted the defib/pacemaker warned again engaging in contact 
            sports.  But these were the sports in which she thrived in high school. Gracie decided to live her own life.
          </p>
          <p className="paragraph-separation">
            After a few months of physical and cognitive rehabilitation, she felt more than ever that she needed to help others. 
            “Once I realized I was OK, I was frustrated with people telling me I wasn’t OK,” she says. “That gave me the inspiration to do 
            something drastic to show I was physically and mentally able.” 
          </p>
          <p className="paragraph-separation">
            With the aid of US Sen Chris Coons and wife Annie, Grace created a fund raiser collecting $8,000.00 which eventually went to her 
            adopted orphanage in Kenya. On Christmas Day 2012, Gracie left for Africa. She climbed Mt. Kilimanjaro. While in Africa, Grace 
            visited the orphanage and played soccer with the kids.
          </p>
          <p className="paragraph-separation">
            At U of Delaware, she has played center mid position for UD Club Soccer. The team went to the national club soccer finals all 4 years.
          </p>
          <p className="paragraph-separation">
            Through the efforts of Gracie, State Sens. Cathy Cloutier, Bethany Hall-Long and Kevin Charles of the DIAA (DE Interscholastic 
            Athletic Assoc.), the Grace Firestone SCA Awareness Act was passed in 2014.
          </p>
          <p className="paragraph-separation">
            Dr. Grace Firestone is a resident in family care at Stanford Medical Center -  O'Connor Hospital in CA Stanford - O'Connor 
            Family Medicine Residency. Dr. Firestone graduated from the Sydney Kimmel Medical College of Thomas Jefferson University in 
            Philadelphia. 
          </p>
          <div className="graceImages">
            <img src={Grace3} alt="Grace" width="10%" height="10%" className="mx-4"/>
            <img src={Grace4} alt="Grace" width="10%" height="10%" className="mx-4"/>
          </div>
        </div>
      )}

      {/* Dropdown section for Sponsor words about Grace Firestone Act */}
      <h3 className="dropdown-title" onClick={toggleSponsor}>
        Words From Our Sponsor
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-caret-down-fill ml-1 ${
            isOpenSponsor ? "rotate-180" : ""
          }`}
        >
          <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
        </svg>
      </h3>
      {isOpenSponsor && (
        <div className="dropdown-content">
          <p className="paragraph-separation">
            Bill sponsor Sen. Bethany Hall-Long, D-Middletown, said the law
            reinforces actions already being taken by the Delaware
            Interscholastic Athletic Association. Hall-Long, who authored a law
            requiring screenings for athletes who may have suffered a
            concussion, has been on the forefront of protecting the health of
            young athletes.
          </p>
          <p className="paragraph-separation">
            “Thanks to the tireless efforts of health advocacy groups and of
            Grace and the Firestone family, we’re here to provide new protection
            for young athletes,” Hall-Long said “With the training and
            information this law requires, we’re going to give young athletes a
            better chance of surviving, if they should suffer a sudden,
            unexpected cardiac incident while they’re on the field.”
          </p>
          <p className="paragraph-separation">
            Sen. Bryan Townsend, D-Newark, co-sponsored the measure, which he
            hopes will protect young athletes.
          </p>
          <p className="paragraph-separation">
            “It’s shocking to think that these sudden, unexpected heart attacks
            are the No. 1 killer of young athletes, but that’s the case,”
            Townsend said. “We know that, in some cases, quick reaction can save
            the lives of these young people which is why I supported the
            training this law will require.”
          </p>
          <p className="paragraph-separation">
            Added Sen. Cathy Cloutier, R-Heatherbrooke, “As a member of the
            General Assembly, it is my responsibility to work on and promote
            legislation that will serve the people of Delaware, including
            student athletes. I am honored to have had the opportunity to play a
            role in SB 205. Because of this bill that’s being signed today,
            young lives in our state will be saved.”
          </p>
          <p className="paragraph-separation">
            Rep. Mike Ramone, R-Pike Creek South, also a co-sponsor of the bill,
            stated, “As a person who has dedicated his entire adult life to
            running health and fitness clubs and sports programs for our young
            athletes, I am very proud to have helped champion this important
            legislation. I believe that we are making a life-saving commitment
            to our student athletes and their families by enacting this bill.”
          </p>
          <p className="paragraph-separation">
            SB 205 is known as the Grace Firestone Act, named for a former
            three-sport star at Tower Hill, who also excelled in the classroom,
            exemplifying the value that athletics can have as part of the
            educational experience. Now Grace, who attended the bill signing, is
            one of the rare survivors of Sudden Cardiac Arrest, having collapsed
            in her home two days after her high school graduation.
          </p>
        </div>
      )}

      {/* Dropdown section for Heart in the Game Impact */}
      <h3 className="dropdown-title" onClick={toggleImpact}>
        Our Impact
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-caret-down-fill ml-1 ${
            isOpenSponsor ? "rotate-180" : ""
          }`}
        >
          <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
        </svg>
      </h3>
      {isOpenImpact && (
        <div className="dropdown-content">
          <p className="paragraph-separation">
            “Today, Delaware joined the increasingly pertinent nation-wide
            movement to provide high-school coaches, parents, and students with
            lifesaving CPR information,” Firestone said. “Because of persistent
            legislators and organizations dedicated to raising SCA awareness,
            Delaware is working to shift the balance to make SCA survival less
            of a far-reaching miracle and more of a prevailing standard. I will
            continue to live in gratitude for those family members, policemen,
            and EMT's who never gave up on my life, and promise to forever work
            with passion, heart, and purpose to pay that commitment forward.”
          </p>
          <p className="paragraph-separation">
            She attends the University of Delaware and has started a charity to
            provide athletic equipment to disadvantaged children. At the bill
            signing, Markell said her story "reminds us why we’re here and it
            helps inspire us to see that we can do more to protect our kids."
          </p>
          <p className="paragraph-separation">
            At the signing of The Grace Firestone Act is the 9th such bill in
            the nation. As of November of 2105 there were ONLY NINE states with
            similar legislation. THAT IS RIDICULOUS.For those from other states
            who would wish information for your legislators, please connect with
            me! This is a wonderfully collaborative bill, molded by all the
            statewide stakeholders AND budget neutral.
          </p>
        </div>
      )}

      {/* Info and statistics section for sudden cardiac arrest*/}
      <div className="bg-rose-300">
        <h2 className="text-1xl font-semibold py-4 text-center">Sudden Cardiac Arrest (SCA) Facts</h2>

        {/* Heart Attack VS SCA comparison boxes */}
        <div id="heartAttackVSsca">
          <div className="infoBox">
            <h2>HEART ATTACK: A Plumbing Problem</h2>
            <p className="p-4">
              A heart attack occurs when a blocked artery prevents oxygen-rich blood from reaching a section of the heart. 
              If the blocked artery is not reopened quickly, the part of the heart normally nourished by that artery begins to die. 
              The longer a person goes without treatment, the greater the damage. Symptoms of a heart attack may be immediate and intense. 
              More often, though, symptoms start slowly and persist for hours, days or weeks before a heart attack. 
              Unlike with sudden cardiac arrest, the heart usually does not stop beating during a heart attack. 
              The heart attack symptoms in women can be different than men. 
            </p>
          </div>
          <div className="infoBox">
            <h2>SCA: An Electrical Problem</h2>
            <p className="p-4">
              Sudden cardiac arrest occurs suddenly and often without warning. 
              It is triggered by an electrical malfunction in the heart that causes an irregular heartbeat (arrhythmia). 
              With its pumping action disrupted, the heart cannot pump blood to the brain, lungs and other organs. 
              Seconds later, a person loses consciousness and has no pulse. Death occurs within minutes if the victim does not receive treatment. 
            </p>
          </div>
        </div>

        {/* Statistics behind SCA dropdown */}
        <h3 className="dropdown-title" onClick={toggleStats}>
          Statistics Behind SCA
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-caret-down-fill ml-1 ${
              isOpenSponsor ? "rotate-180" : ""
            }`}
          >
            <path d="M4.5 6.5L8 10l3.5-3.5H4.5z" />
          </svg>
          </h3>
          {isOpenStats && (
            <div className="dropdown-content-pink">
              <p className="paragraph-separation">
              SCA is a leading cause of death in the United States, taking the lives of over 350,000 people per year in the United States. 
              Nearly 90% of out-of-hospital cardiac arrests are fatal.
              </p>
              <p className="paragraph-separation">
              Survival rates are lower for African American than non-African American populations.
              Most sudden cardiac deaths occur in individuals without a history of heart disease and importantly, with relatively normal function
              </p>
              <p className="paragraph-separation">
              Sports-related, sudden deaths are more frequent in elite than other student-athletes, with an incidence of 1:8,253 per year per the National Collegiate Athletic Association (NCAA). 
              NCAA Division I male basketball players have a 1:5200 incidence of sudden death.
              </p>
            </div>
          )}
      </div>

      {/* Card views for available press */}
      <div>
        <h2 className="text-1xl font-semibold py-4 text-center">Articles</h2>
        <div className="articleCards">
          {articles.map((article, index) => (
            <div>
              <ArticleCard key={index} article={article} />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
