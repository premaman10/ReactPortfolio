import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-1 max-width"> {/* Reduced py from 2 to 1 */}
      <div className="flex justify-between items-center py-1 md:py-5"> {/* Reduced py from 2 to 1 and md:py from 10 to 5 */}
        <a href="/" onClick={() => window.location.reload()}>
          <img className="w-12 rounded-full" src={logos.logogradient} alt="logo" /> {/* Reduced width from w-14 to w-12 */}
        </a>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-4 md:mr-10"> {/* Reduced space-x-5 to space-x-4 */}
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-2 md:my-0 md:space-x-4 md:mr-5"> {/* Reduced my-5 to my-2 and space-x-5 to space-x-4 */}
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              {/* Twitter SVG */}
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              {/* LinkedIn SVG */}
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              {/* GitHub SVG */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;