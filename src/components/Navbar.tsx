"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const routes = [
    "/",
    "/about",
    "/tech",
    "/projects",
    "/experience",
    "/contact",
  ];
  const currentIndex = routes.indexOf(pathname);

  const hoverAnimation =
    "hover:text-white active:scale-100 transition-transform transform hover:scale-105";

  if (pathname == "/") {
    return;
  }

  return (
    <nav className="flex justify-center gap-[3rem] mt-[2rem] text-gray-500 font-bold z-40">
      {currentIndex > 0 ? (
        <Link href={routes[currentIndex - 1]} className={hoverAnimation}>
          ←
        </Link>
      ) : (
        <span className="text-white">←</span>
      )}

      <Link
        href="/"
        className={
          pathname === "/" ? "text-white font-bold" : `${hoverAnimation}`
        }
      >
        Home
      </Link>

      <Link
        href="/about"
        className={
          pathname === "/about" ? "text-white font=bold" : `${hoverAnimation}`
        }
      >
        About Me
      </Link>

      <Link
        href="/tech"
        className={
          pathname === "/tech" ? "text-white font=bold" : `${hoverAnimation}`
        }
      >
        Tech Stack
      </Link>

      <Link
        href="/projects"
        className={
          pathname === "/projects"
            ? "text-white font=bold"
            : `${hoverAnimation}`
        }
      >
        Projects
      </Link>

      <Link
        href="/experience"
        className={
          pathname === "/experience"
            ? "text-white font=bold"
            : `${hoverAnimation}`
        }
      >
        Experience
      </Link>

      <Link
        href="/contact"
        className={
          pathname === "/contact" ? "text-white font=bold" : `${hoverAnimation}`
        }
      >
        Contact Me
      </Link>

      {currentIndex < routes.length - 1 ? (
        <Link href={routes[currentIndex + 1]} className={hoverAnimation}>
          →
        </Link>
      ) : (
        <span className="text-white">→</span>
      )}
    </nav>
  );
};

export default Navbar;
