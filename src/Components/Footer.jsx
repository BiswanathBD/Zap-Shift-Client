import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const navOptions = [
    <NavLink to={"/services"}>Services</NavLink>,
    <NavLink to={"/coverage"}>Coverage</NavLink>,
    <NavLink to={"/aboutUs"}>About Us</NavLink>,
    <NavLink to={"/pricing"}>Pricing</NavLink>,
    <NavLink to={"/blog"}>Blog</NavLink>,
    <NavLink to={"/contact"}>Contact</NavLink>,
  ];

  return (
    <div className="bg-[#1f1f1f] p-16 my-4 rounded-2xl text-center text-white">
      <div className="text-white! flex justify-center">
        <Logo />
      </div>
      <p className="text-sm text-gray-400 font-light my-4 md:w-1/2 mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <ul className="flex gap-8 justify-center flex-wrap py-4 border-t-2 border-b-2 border-dashed border-[#03464D]">
        {navOptions.map((nav) => nav)}
      </ul>

      <div className="flex justify-center items-center gap-4 py-8">
        <FaLinkedin size={40} color="#0A66C2" />
        <FaSquareXTwitter size={40} color="white" />
        <FaSquareFacebook size={40} color="#1877F2" />
        <FaSquareYoutube size={40} color="red" />
      </div>
    </div>
  );
};

export default Footer;
