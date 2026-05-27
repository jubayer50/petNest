"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <Button size="sm" className={"bg-[#ED8262] text-white rounded-md"}>
          Login
        </Button>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
