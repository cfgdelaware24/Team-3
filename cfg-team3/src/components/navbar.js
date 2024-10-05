"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../images/HeartintheGameLogo.png";
import burgerSVG from "../images/burger-menu.svg";

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(prev => !prev);
  };

  const navItems = [
    { id: 1, text: "About", path: "/about" },
    { id: 2, text: "Events", path: "/events" },
    { id: 3, text: "Contact", path: "/contact" },
    { id: 4, text: "Profile", path: "/profile" },
    { id: 5, text: "Education", path: "/education" },
    { 
      id: 6, 
      text: "Donate", 
      path: "https://www.heartinthegame.org/checkout/donate?donatePageId=652c1c06b0199d1c5ae4026a", 
      external: true // An external link
    },
  ];

  return (
    <nav>
      <div className="relative flex items-center justify-between px-12 py-4 bg-white border-b border-grey">
        {/* Desktop */}
        <Link to="/">
          <img
            id="heart-in-the-game-logo"
            priority
            src={logoImage}
            width="100"
            height="100"
            alt="Heart in the Game Logo"
          />
        </Link>

        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.external ? (
                <a
                  className="p-3 rounded-md bg-rose-300 hover:bg-rose-400 duration-300 mx-2 cursor-pointer" // Always styled donate button
                  href={item.path} // Use href for external links
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" 
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  className="p-3 rounded-md hover:bg-rose-300 hover:scale-125 mx-2 cursor-pointer duration-300"
                  to={item.path}
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Burger Menu */}
        <div onClick={handleBurger} className="block md:hidden">
          <img
            src={burgerSVG}
            width="20"
            height="20"
            alt={burger ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {burger && (
        <div className="md:hidden overflow-hidden flex flex-col bg-white">
          <ul className="flex flex-col items-center w-full">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                {item.external ? (
                  <a
                    className="p-3 rounded-md bg-rose-300 hover:bg-rose-400 flex items-center justify-center cursor-pointer duration-300 w-full" // Always styled
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    className="p-3 rounded-md hover:bg-teal flex items-center justify-center cursor-pointer duration-300 w-full"
                    to={item.path}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
