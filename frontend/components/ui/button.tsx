import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick = () => {}, disabled = false }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg text-white font-semibold focus:outline-none transition",
        {
          "bg-gray-300 cursor-not-allowed": disabled,
          "bg-blue-600 hover:bg-blue-700": !disabled,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
