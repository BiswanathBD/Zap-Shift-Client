import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end px-2 lg:px-0 -mt-1">
      <img className="w-8" src={logo} alt="Logo" />
      <h3 className="text-3xl font-extrabold -ml-4 px-1">zapShift</h3>
    </div>
  );
};

export default Logo;