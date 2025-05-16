"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="top-0 left-0 right-0 fixed z-50 bg-[#121212]/80 backdrop-blur-md opacity-97 px-6 sm:px-16">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 xl:px-16 py-2">
        <Link href={"/"}>
          <Image src="/logo-image.png" width={45} height={45} alt="logo" />
        </Link>

        <div className="mobile-menu block sm:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-purple-600 text-slate-200 hover:text-white hover:border-pink-600 cursor-pointer"
            >
              <Bars3Icon className="h-4 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-purple-600 text-slate-200 hover:text-white hover:border-pink-600 cursor-pointer"
            >
              <XMarkIcon className="h-4 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden sm:block sm:w-auto" id="navbar">
          <ul className="flex p-4 sm:p-0 sm:flex-row sm:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
