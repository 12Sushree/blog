import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="
            inline-block
            text-sm
            font-medium
            text-gray-700
            pl-1
          "
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`
          px-3
          py-2
          rounded-lg
          bg-white
          text-gray-900
          border
          border-gray-200
          w-full
          outline-none
          transition
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500
          focus:bg-gray-50
          disabled:bg-gray-100
          disabled:cursor-not-allowed
          ${className}
        `}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="text-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
