import React from "react";
import logo from "../assets/logo.png";

function Logo({ width = "100px", alt = "Logo" }) {
  return (
    <img
      src={logo}
      alt={alt}
      style={{ width }}
      className="
        object-contain
        select-none
        drop-shadow-sm
        transition-transform
        duration-200
        hover:scale-105
      "
    />
  );
}

export default Logo;
