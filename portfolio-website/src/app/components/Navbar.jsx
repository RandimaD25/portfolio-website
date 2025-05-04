import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <nav className="top-0 left-0 right-0 fixed z-50 bg-[#121212]/80 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-16 py-2">
        <Link href={"/"} className="text-3xl text-white font-semibold">
          <Image src="/logo-image.png" width={30} height={30} alt="logo" />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
