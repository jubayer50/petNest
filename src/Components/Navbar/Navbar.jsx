"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRightFromSquare,
  ChartAreaStacked,
  ChevronDown,
} from "@gravity-ui/icons";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navbar = ({ sideBarLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`${pathname == "/" ? "text-[#ED8262] font-bold" : ""} font-medium`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/all-pets"}
          className={`${pathname == "/all-pets" ? "text-[#ED8262] font-bold" : ""} font-medium`}
        >
          All Pets
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="max-w-330 mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div>
            <Link href={"/"}>
              <h2 className="text-2xl font-bold">
                Pet<span className="text-[#ED8262]">Nest</span>
              </h2>
            </Link>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <div className="flex items-center gap-3">
          {/* theme toggle */}
          <div>
            <ThemeSwitch></ThemeSwitch>
          </div>

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="px-2.5 py-1.5 hover:bg-white rounded-md relative transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#ED8262]">
                {/* user image wil come */}
              </div>

              <ChevronDown
                className={`${showProfile ? "rotate-180 transition-all duration-300" : ""}`}
              ></ChevronDown>
            </div>

            {showProfile && (
              <div className="absolute top-13.5 right-0 px-3 py-2 border rounded-md transition-all duration-300">
                <Link href={"/dashboard"}>
                  <p className="hover:bg-gray-200 px-2 py-.5 rounded-sm transition-all duration-300 flex items-center gap-2">
                    <ChartAreaStacked></ChartAreaStacked> Dashboard
                  </p>
                </Link>

                <p
                  className="hover:bg-gray-200 px-2 py-.5 rounded-sm transition-all duration-300 mt-1.5
               text-red-600 flex items-center gap-2"
                >
                  <ArrowRightFromSquare></ArrowRightFromSquare> Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            {sideBarLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
