import React from "react";
import { HomeIcon } from "@heroicons/react/outline";

type Props = {};

function Bottombar({}: Props) {
  return (
    <nav className="btm-nav flex list-none items-center justify-around px-2 md:hidden">
      <li className="group flex cursor-pointer flex-col items-center gap-1 p-2 text-primary transition-colors duration-200">
        <HomeIcon className="h-8 w-8" />
      </li>
    </nav>
  );
}

export default Bottombar;
