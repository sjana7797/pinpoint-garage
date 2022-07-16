import Link from "next/link";
import React from "react";
import { APP_NAME } from "../../configs/app";
import { HomeIcon } from "@heroicons/react/outline";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="navbar sticky top-0 z-50 flex h-auto flex-col-reverse items-center justify-between gap-2 border-b border-b-primary/10 bg-neutral py-4 px-5 text-neutral-content shadow-md md:flex-row md:px-10">
      <h1 className="btn btn-ghost text-2xl font-bold normal-case italic tracking-wide text-primary">
        <Link href="/">
          <a className="">{APP_NAME}</a>
        </Link>
      </h1>
      <nav className="hidden max-w-2xl list-none items-center justify-around px-2 md:flex">
        <li className="group flex cursor-pointer flex-col items-center gap-1 p-2 transition-colors duration-200 hover:text-white/80">
          <HomeIcon className="h-8 w-8" />
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
