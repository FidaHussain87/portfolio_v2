"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavLink from "./NavLink";

const menus = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {menus.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className=" md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-[#0F172A] rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Fida</span>
          <span className="w-12 h-8 rounded bg-white text-[#0F172A] flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className=" hidden md:flex gap-4  w-1/3">
        <Link href="/">
          <FaGithub size={24} />
        </Link>
        <Link href="/">
          <FaFacebook size={24} color="#1877F2" />
        </Link>
        <Link href="/">
          <FaLinkedin size={24} color="#0077b5" />
        </Link>
      </div>
      {/* RESPONSIVE Menu */}
      <div className=" md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleMenu}
        >
          <div className="w-10 h-1 bg-[#0F172A] rounded"></div>
          <div className="w-10 h-1 bg-[#0F172A] rounded"></div>
          <div className="w-10 h-1 bg-[#0F172A] rounded"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {menus?.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
