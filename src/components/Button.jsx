import React from "react";

const Button = ({
  label,
  icon,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border rounded-full ${
        fullWidth ? "w-full" : ""
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      }`}
    >
      {label}
      {icon && (
        <img
          src={icon}
          alt="arrow right icon"
          className="ms-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
