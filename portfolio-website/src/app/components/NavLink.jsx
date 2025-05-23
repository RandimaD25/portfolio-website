import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      rel="stylesheet"
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-md rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
