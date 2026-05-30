"use client";

import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const sideBarLinks = (
    <>
      <li>
        <Link
          href={"/my-listing"}
          className={`${pathname == "/my-listing" ? "text-[#ED8262] font-bold" : ""} font-medium`}
        >
          My Listing
        </Link>
      </li>

      <li>
        <Link
          href={"/add-pet"}
          className={`${pathname == "/add-pet" ? "text-[#ED8262] font-bold" : ""} font-medium`}
        >
          Add Pet
        </Link>
      </li>

      <li>
        <Link
          href={"/my-request"}
          className={`${pathname == "/my-request" ? "text-[#ED8262] font-bold" : ""} font-medium`}
        >
          My Requests
        </Link>
      </li>
    </>
  );

  return <Navbar sideBarLinks={sideBarLinks}></Navbar>;
};

export default DashboardNavbar;
