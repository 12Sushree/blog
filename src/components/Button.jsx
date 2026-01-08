import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
    inline-flex items-center justify-center
    px-4 py-2
    rounded-lg
    ${bgColor} ${textColor}
    font-medium
    transition-all duration-200
    hover:opacity-90
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed
    shadow-sm hover:shadow-md
    text-sm sm:text-base
    ${className}
  `}
      {...props}
    >
      {children}
    </button>
  );
}
