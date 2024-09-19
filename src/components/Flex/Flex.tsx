import React, { ReactNode, ComponentType } from "react";
import classNames from "classnames";

export interface FlexProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
  wrap?: boolean | "wrap" | "nowrap" | "wrap-reverse";
  justify?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "normal";
  align?: "start" | "end" | "center" | "baseline" | "stretch" | "normal";
  flex?: string;
  gap?: "small" | "middle" | "large" | string | number;
  component?: ComponentType<any>;
}

const Flex: React.FC<FlexProps> = ({
  children,
  className = "",
  vertical = false,
  wrap = "nowrap",
  justify = "normal",
  align = "normal",
  flex = "initial",
  gap = "0",
  component: Component = "div",
}) => {
  const directionClass = vertical ? "flex-col" : "flex-row";
  const wrapClass = typeof wrap === "boolean" ? (wrap ? "flex-wrap" : "flex-nowrap") : `flex-${wrap}`;
  const justifyClass = justify !== "normal" ? `justify-${justify}` : "";
  const alignClass = align !== "normal" ? `items-${align}` : "";

  const gapClass = classNames({
    "gap-2": gap === "small",
    "gap-4": gap === "middle",
    "gap-6": gap === "large",
    [`gap-${gap}`]: typeof gap === "string" || typeof gap === "number",
  });

  const flexClass = classNames(
    "flex",
    directionClass,
    wrapClass,
    justifyClass,
    alignClass,
    gapClass,
    className
  );

  return (
    <Component className={flexClass} style={{ flex }}>
      {children}
    </Component>
  );
};

export default Flex;