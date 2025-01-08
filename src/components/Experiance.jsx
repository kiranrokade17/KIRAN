import React, { useState } from "react";
import pic from "../../public/RKM.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-26 shadow-md fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2 items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer text-white">
            Kiran Rokade
            <p className="text-sm text-gray-300">AI AND ML Software Developer</p>
          </h1>
        </div>
        {/* Desktop navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              className="hover:scale-105 duration-200 cursor-pointer text-white"
              key={id}
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black text-white z-40 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center h-16 px-4">
          <h1 className="text-xl font-semibold">Menu</h1>
          <button
            onClick={() => setMenu(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-6 mt-8 px-4">
          {navItems.map(({ id, text }) => (
            <li
              className="hover:scale-105 duration-200 font-semibold cursor-pointer"
              key={id}
            >
              <Link
                onClick={() => setMenu(false)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
