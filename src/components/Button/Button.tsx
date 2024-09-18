import React, { forwardRef, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export interface CommonButtonProps {
  autoInsertSpace?: boolean;
  block?: boolean;
  classNames?: string;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: "button" | "submit" | "reset";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean | { delay: number };
  shape?: "default" | "circle" | "round";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  styles?: React.CSSProperties;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  title?: string;
  ariaLabel?: string;
}

type ButtonProps = CommonButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonButtonProps>;

type AnchorProps = CommonButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonButtonProps>;

type CombinedButtonProps = ButtonProps | AnchorProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, CombinedButtonProps>(
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
      startIcon,
      endIcon,
      loading = false,
      shape = "default",
      size = "middle",
      styles,
      type = "default",
      onClick,
      children,
      title,
      ariaLabel,
      ...rest
    },
    ref
  ) => {
    const baseClass = "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 gap-3 transition-all duration-300";
    const blockClass = block ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    const loadingClass = typeof loading === "boolean" && loading ? "opacity-70 cursor-not-allowed" : "";

    const sizeClass = {
      xl: "px-8 py-4 text-xl",
      lg: "px-6 py-3 text-lg",
      md: "px-4 py-2 text-base",
      sm: "px-3 py-1.5 text-sm",
      xs: "px-2 py-1 text-xs",
    }[size];

    const typeClass = {
      primary: "bg-primary text-white hover:bg-primary-dark",
      dashed: "border border-dashed border-gray-500 text-gray-700",
      link: "text-blue-500 hover:underline",
      text: "text-gray-500",
      default: "bg-gray-100 text-gray-700",
    }[type];

    const shapeClass = {
      circle: "rounded-full",
      round: "rounded-xl",
      default: "rounded-md",
    }[shape];

    const dangerClass = danger ? "bg-red-500 text-white hover:bg-red-600" : "";
    const ghostClass = ghost ? "bg-transparent text-gray-700 border border-gray-300" : "";

    const buttonClass = `${baseClass} ${blockClass} ${disabledClass} ${loadingClass} ${sizeClass} ${typeClass} ${shapeClass} ${dangerClass} ${ghostClass} ${classNames}`.trim();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && onClick) {
        onClick(e);
      }
    };

    const loadingIconColorClass = {
      primary: "text-white",
      dashed: "text-gray-700",
      link: "text-blue-500",
      text: "text-gray-500",
      default: "text-gray-700",
    }[type];

    const renderLoadingIcon = loading ? (
      <svg
        className={`animate-spin h-5 w-5 ${loadingIconColorClass} transition-opacity duration-300`}
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

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          style={styles}
          title={title}
          aria-label={ariaLabel}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {startIcon && !loading && startIcon}
          {renderLoadingIcon}
          {autoInsertSpace && typeof children === "string"
            ? ` ${children} `
            : children}
          {endIcon && !loading && endIcon}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={htmlType}
        className={buttonClass}
        style={styles}
        disabled={disabled || !!loading}
        onClick={handleClick}
        title={title}
        aria-label={ariaLabel}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {startIcon && !loading && startIcon}
        {renderLoadingIcon}
        {autoInsertSpace && typeof children === "string"
          ? ` ${children} `
          : children}
        {endIcon && !loading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
