import React from "react";
import { ReactChildren } from "../types";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactChildren;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  children,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out";

  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
      if (disabled)
        variantStyles = "text-gray-300 bg-indigo-300 cursor-not-allowed";
      break;
    case "secondary":
      variantStyles =
        "text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 focus:ring-indigo-500";
      if (disabled)
        variantStyles =
          "text-gray-400 dark:text-gray-500 bg-indigo-50 dark:bg-indigo-900/50 cursor-not-allowed";
      break;
    case "danger":
      variantStyles =
        "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500";
      if (disabled)
        variantStyles = "text-gray-300 bg-red-300 cursor-not-allowed";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
