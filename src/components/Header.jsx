import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const HeaderLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

function Header() {
  return (
    <>
      {/* <div className="fixed z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur-sm transition-colors duration-300">
        <div className="flex items-center gap-x-1">
          <FontAwesomeIcon icon={faBolt} className="text-primary" />
          <h1 className="animate-pulse text-lg font-bold text-primary">
            larenzz
          </h1>
        </div>
        <ul className="flex items-center gap-x-4 font-bold text-white">
          {HeaderLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div> */}

      <div className="navbar fixed bg-gray-500 bg-opacity-10 bg-clip-padding backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter z-10">
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
                <ul className="p-2">
                  <li>
                    <a>Project 1</a>
                  </li>
                  <li>
                    <a>Project 2</a>
                  </li>
                </ul>
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
              <details>
                <summary>Projects</summary>
                <ul className="z-50 bg-gray-500 bg-opacity-10 bg-clip-padding p-2 backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
                  <li>
                    <a>Project 1</a>
                  </li>
                  <li>
                    <a>Project 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Resume</a>
        </div>
      </div>
    </>
  );
}

export default Header;

// function Header() {
//     return (
//         <div className='flex items-center justify-between bg-neutral py-4 px-6 sticky top-0 z-50'>

//             <div className='flex items-center gap-x-1'>
//                 <FontAwesomeIcon icon={faBolt} className='text-primary' />
//                 <h1 className='text-primary font-bold text-lg'>larenzz</h1>
//             </div>
//             <ul className='flex items-center gap-x-4 text-white font-bold'>

//                 <li>
//                     <a href="#">Home</a>
//                 </li>
//                 <li>
//                     <a href="#">About</a>
//                 </li>
//                 <li>
//                     <a href="#">Projects</a>
//                 </li>
//                 <li>
//                     <a href="#">Contact</a>
//                 </li>
//             </ul>

//         </div>
//     );
// }

// export default Header
