import React from "react";
import classNames from "classnames";

export interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
  color?: "red" | "green" | "blue" | "gray" | "black" | "white";
  weight?: 400 | 500 | 600 | 700 | "bold" | "semibold";
  transform?: "uppercase" | "lowercase" | "capitalize";
  align?: "left" | "center" | "right";
  variant?: "text" | "link";
  component?: React.ElementType;
  href?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  size,
  color,
  weight,
  transform,
  align,
  variant = "text",
  component: Component = "p",
  href,
  children,
}) => {
  const sizeClasses: Record<string, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const colorClasses: Record<string, string> = {
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    gray: "text-gray-500",
    black: "text-black",
    white: "text-white",
  };

  const weightClasses: Record<number | string, string> = {
    400: "font-normal",
    500: "font-medium",
    600: "font-semibold",
    700: "font-bold",
    bold: "font-bold",
    semibold: "font-semibold",
  };

  const transformClasses: Record<string, string> = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  const alignClasses: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const fontSize =
    typeof size === "number" ||
    (typeof size === "string" && size.includes("px"))
      ? size
      : size
      ? sizeClasses[size as keyof typeof sizeClasses]
      : undefined;

  const style =
    fontSize && typeof fontSize === "string" ? { fontSize } : undefined;

  if (variant === "link" && href) {
    return (
      <a
        href={href}
        style={style}
        className={classNames(
          fontSize ? (typeof fontSize === "string" ? fontSize : "") : "",
          color ? colorClasses[color] : "",
          weight ? weightClasses[weight] : "",
          transform ? transformClasses[transform] : "",
          align ? alignClasses[align] : "",
          { "cursor-pointer": true }
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <Component
      style={style}
      className={classNames(
        fontSize ? (typeof fontSize === "string" ? fontSize : "") : "",
        color ? colorClasses[color] : "",
        weight ? weightClasses[weight] : "",
        transform ? transformClasses[transform] : "",
        align ? alignClasses[align] : "",
        { "cursor-pointer": variant === "link" }
      )}
    >
      {children}
    </Component>
  );
};

export default Text;
