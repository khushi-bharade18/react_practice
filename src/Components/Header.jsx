import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between px-15 py-2 bg-zinc-200">
        <div className="">
          <a href="https://react.dev/">
          <img src="src/assets/react.svg" alt="react logo" width={60} />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-20">
            <Link to={"/"}>
              <li className="hover:underline">Home</li>
            </Link>
            <Link to={"about"}>
              <li className="hover:underline">About</li>
            </Link>
            <Link to={"services"}>
              <li className="hover:underline">Services</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to={"register"}>
            <button className="px-5 py-2 rounded bg-zinc-600 text-white outline-none cursor-pointer active:scale-95">
              Login/Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
