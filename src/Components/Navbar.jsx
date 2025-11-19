import React from "react";
import { NavLink } from "react-router";
import Logo from "./Logo";
import { IoMdArrowForward } from "react-icons/io";

const Navbar = () => {
  const navOptions = [
    <NavLink to={"/services"}>Services</NavLink>,
    <NavLink to={"/coverage"}>Coverage</NavLink>,
    <NavLink to={"/aboutUs"}>About Us</NavLink>,
    <NavLink to={"/pricing"}>Pricing</NavLink>,
    <NavLink to={"/beRider"}>Be a Rider</NavLink>,
  ];

  return (
    <div className="bg-white mt-2 rounded-lg flex px-4 py-2 navbar">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          {navOptions.map((nav, i) => {
            return <li key={i} className="px-1">{nav}</li>;
          })}
        </ul>
      </div>
      <div className="navbar-end flex gap-1">
        <button className="px-4 py-1 border border-gray-500/20 rounded-lg hover:bg-gray-500/10 font-medium">
          Sign In
        </button>
        <button className="px-4 py-1 bg-lime-300 rounded-lg hover:bg-lime-400 font-medium">
          Sign Up
        </button>
        <button className="text-lime-300 bg-[#1F1F1F] p-2 rounded-full -rotate-45">
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
