import React from "react";
import logo from "../asset/logo.png";

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-70" src={logo} />
    </div>
  );
};

export default Header;
