import React from "react";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="navbar fixed z-10 bg-gray-500 bg-opacity-10 bg-clip-padding backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-box bg-gray-500 bg-opacity-10 bg-clip-padding p-2 shadow backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost animate-pulse text-xl font-bold">
            larenzz
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button btn="Resume" />
        </div>
      </div>
    </>
  );
}

export default Header;
