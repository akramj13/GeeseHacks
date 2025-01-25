"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick = () => {}, disabled = false }) => {
  return (
    <button
      className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
      onClick={() => console.log("Button clicked")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;