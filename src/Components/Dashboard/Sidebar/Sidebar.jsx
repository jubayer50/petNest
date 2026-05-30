"use client";

import {
  ArrowRightFromSquare,
  Heart,
  ListCheck,
  Person,
  Plus,
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = (
    <>
      <li>
        <Link
          href={"/my-listing"}
          className={`${pathname == "/my-listing" ? "text-[#ED8262] font-bold" : ""} font-medium flex items-center gap-2`}
        >
          <ListCheck></ListCheck> My Listing
        </Link>
      </li>

      <li>
        <Link
          href={"/profile"}
          className={`${pathname == "/profile" ? "text-[#ED8262] font-bold" : ""} font-medium flex items-center gap-2`}
        >
          <Person></Person> Profile
        </Link>
      </li>

      <li>
        <Link
          href={"/add-pet"}
          className={`${pathname == "/add-pet" ? "text-[#ED8262] font-bold" : ""} font-medium flex items-center gap-2`}
        >
          <Plus></Plus> Add Pet
        </Link>
      </li>

      <li>
        <Link
          href={"/my-request"}
          className={`${pathname == "/my-request" ? "text-[#ED8262] font-bold" : ""} font-medium flex items-center gap-2`}
        >
          <Heart></Heart> My Request
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-gray-300 max-w-54 w-full py-5 hidden md:flex flex-col justify-between px-8">
      <ul className="space-y-5 mt-3">{sidebarLinks}</ul>

      <Button variant="ghost" className={"text-red-600 rounded-md w-full"}>
        <ArrowRightFromSquare></ArrowRightFromSquare> Logout
      </Button>
    </div>
  );
};

export default Sidebar;
