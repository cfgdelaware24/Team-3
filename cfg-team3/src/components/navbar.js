"use client";

import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Events", path: "/events" },
    { id: 4, text: "Contact", path: "/contact" },
    { id: 5, text: "Profile", path: "/profile" },
  ];

  return (
    <nav>
      <div className="relative flex items-center justify-between px-12 py-4 bg-white border-b border-grey">
        {/* Desktop */}
        <Link to="/">
          <img
            id="heart-in-the-game-logo"
            priority
            src={"/images/HeartintheGameLogo.png"}
            width="100"
            height="100"
            alt="Heart in the Game Logo"
          />
        </Link>

        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                className="p-3 rounded-md hover:bg-teal hover:text-white mx-2 cursor-pointer duration-300"
                to={item.path}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div onClick={handleBurger} className="block md:hidden">
          {burger ? (
            <img
              src={"/images/x.svg"}
              width="20"
              height="20"
              alt="burger-menu-close"
            />
          ) : (
            <img
              src={"/images/burger-menu.svg"}
              width="20"
              height="20"
              alt="burger-menu-open"
            />
          )}
        </div>
      </div>
      <div className={burger ? "burger is-open" : "burger"}>
        <ul className={"md:hidden overflow-hidden flex flex-col bg-white"}>
        {navItems.map((item) => (
            <li key={item.id}>
              <Link
                className="p-3 rounded-md hover:bg-teal hover:text-white mx-2 cursor-pointer duration-300"
                to={item.path}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}