import React from "react";

export const Card = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  padding = true,
  border = false,
}) => {
  const baseStyles = "rounded-lg transition-all duration-200";

  const variants = {
    default: "bg-white shadow-sm",
    flat: "bg-white border border-gray-200",
    raised: "bg-white shadow-md",
    elevated: "bg-white shadow-lg",
    subtle: "bg-gray-50 border border-gray-100",
  };

  const hoverStyles = hover
    ? "hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200"
    : "";

  const paddingStyles = padding ? "p-6" : "";
  const borderStyles = border ? "border border-gray-200" : "";

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${hoverStyles}
        ${paddingStyles}
        ${borderStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
