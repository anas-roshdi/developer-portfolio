"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex flex-wrap items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className=" text-[#16f2b3] text-3xl font-bold">
            Anas Tilika
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-[#16f2b3] focus:outline-none md:hidden p-2 rounded-lg"
        >
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>

        <ul
          className={`${
            isOpen ? "flex flex-col w-full mt-4 space-y-2 py-4 border-t border-[#1b2c68a0]" : "hidden"
          } md:flex md:flex-row md:items-center md:space-x-1 md:mt-0 md:w-auto md:py-0 md:border-0 text-sm`}
          id="navbar-default"
        >
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#watira"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">WATIRA</div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;