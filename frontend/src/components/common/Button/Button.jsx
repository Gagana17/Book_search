import React from "react";

export const Button = ({
  children,
  disabled,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300 shadow-sm",
    secondary:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-400 shadow-sm",
    outline:
      "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:opacity-50",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const disabledStyles = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        ${className}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
