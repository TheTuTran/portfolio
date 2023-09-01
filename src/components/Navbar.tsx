"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="select-none flex justify-center gap-[3rem] mt-[2rem] text-gray-500 font-bold">
      <Link href="/" className={pathname === "/" ? "text-white font=bold" : ""}>
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? "text-white font=bold" : ""}
      >
        About Me
      </Link>

      <Link
        href="/tech"
        className={pathname === "/tech" ? "text-white font=bold" : ""}
      >
        Tech Stack
      </Link>

      <Link
        href="/projects"
        className={pathname === "/projects" ? "text-white font=bold" : ""}
      >
        Projects
      </Link>

      <Link
        href="/experience"
        className={pathname === "/experience" ? "text-white font=bold" : ""}
      >
        Experience
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? "text-white font=bold" : ""}
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
