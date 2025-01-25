import React from "react";

// Card Component
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};