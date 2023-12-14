"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RightArrowSvg from "./RightArrowSvg";

const Layout = () => {
  const router = usePathname();
  return (
    <div className="flex flex-col gap-3 m-10">
      <p className="text-3xl font-medium leading-5">Gallery</p>
      {router !== "/" ? (
        <p className="flex gap-4">
          <Link href="/">
            <span className="text-base text-blue-600 font-medium cursor-pointer">
              Home
            </span>
          </Link>
          <RightArrowSvg />
          <span className="text-base text-blue-600 font-medium capitalize">
            {router.split("/")[1]}
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default Layout;
