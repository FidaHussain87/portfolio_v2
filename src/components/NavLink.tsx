"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }: any) => {
  const pathName = usePathname();

  return (
    <Link
      className={` rounded p-1 ${
        pathName === link.url && "bg-[#0F172A] text-white "
      }  `}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
