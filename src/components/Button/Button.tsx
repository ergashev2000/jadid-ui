import React, { forwardRef, ReactNode } from "react";

export interface ButtonProps {
  autoInsertSpace?: boolean;
  block?: boolean;
  classNames?: string;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: "button" | "submit" | "reset";
  icon?: ReactNode; 
  iconPosition?: "start" | "end";
  loading?: boolean | { delay: number };
  shape?: "default" | "circle" | "round";
  size?: "large" | "middle" | "small";
  styles?: React.CSSProperties;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      autoInsertSpace = true,
      block = false,
      classNames = "",
      danger = false,
      disabled = false,
      ghost = false,
      href,
      htmlType = "button",
      icon,
      iconPosition = "start",
      loading = false,
      shape = "default",
      size = "middle",
      styles,
      type = "default",
      onClick,
      children,
    },
    ref
  ) => {
    const baseClass =
      "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 gap-3";
    const blockClass = block ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    const loadingClass =
      typeof loading === "boolean" && loading ? "opacity-70" : "";

    const sizeClass =
      size === "large"
        ? "px-6 py-3 text-lg"
        : size === "small"
        ? "px-3 py-1 text-sm"
        : "px-4 py-2 text-base";

    const typeClass =
      type === "primary"
        ? "bg-primary text-white hover:bg-primary-dark"
        : type === "dashed"
        ? "border border-dashed border-gray-500 text-gray-700"
        : type === "link"
        ? "text-blue-500 hover:underline"
        : type === "text"
        ? "text-gray-500"
        : "bg-gray-100 text-gray-700";

    const shapeClass =
      shape === "circle"
        ? "rounded-full"
        : shape === "round"
        ? "rounded-full px-5"
        : "rounded-md";

    const dangerClass = danger ? "bg-red-500 text-white hover:bg-red-600" : "";
    const ghostClass = ghost
      ? "bg-transparent text-gray-700 border border-gray-300"
      : "";

    const buttonClass = `
      ${baseClass} 
      ${blockClass} 
      ${disabledClass} 
      ${loadingClass} 
      ${sizeClass} 
      ${typeClass} 
      ${shapeClass} 
      ${dangerClass} 
      ${ghostClass} 
      ${classNames}
    `.trim();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && onClick) {
        onClick(e);
      }
    };

    const renderIcon = icon && !loading ? icon : null;
    const renderLoadingIcon = loading ? (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    ) : null;

    return href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        style={styles}
      >
        {iconPosition === "start" && (renderLoadingIcon || renderIcon)}
        {autoInsertSpace && typeof children === "string"
          ? ` ${children} `
          : children}
        {iconPosition === "end" && (renderLoadingIcon || renderIcon)}
      </a>
    ) : (
      <button
        ref={ref}
        type={htmlType}
        className={buttonClass}
        style={styles}
        disabled={disabled}
        onClick={handleClick}
      >
        {iconPosition === "start" && (renderLoadingIcon || renderIcon)}
        {autoInsertSpace && typeof children === "string"
          ? ` ${children} `
          : children}
        {iconPosition === "end" && (renderLoadingIcon || renderIcon)}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
