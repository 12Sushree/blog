import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        id={id}
        className={`
    px-3 py-2
    rounded-lg
    bg-white
    text-gray-900
    border border-gray-300
    w-full
    transition-all duration-200
    focus:outline-none
    focus:border-blue-500
    focus:ring-2 focus:ring-blue-100
    placeholder:text-gray-400
    ${className}
  `}
        {...props}
      />
    </div>
  );
});

export default Input;
