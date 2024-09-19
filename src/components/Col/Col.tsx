import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: string | number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Col: React.FC<ColProps> = ({
  span = 6,
  offset = 0,
  order,
  pull,
  push,
  flex,
  children,
  className,
  style,
  ...restProps
}) => {
  const colClass = classNames(
    span ? `w-full sm:w-${span * 2}/12` : "hidden",
    offset ? `ml-${offset * 2}/12` : "",
    push ? `order-${push}` : "",
    pull ? `-order-${pull}` : "",
    className
  );

  const colStyle: CSSProperties = {
    ...style,
    order,
    flex,
  };

  return (
    <div className={colClass} style={colStyle} {...restProps}>
      {children}
    </div>
  );
};

export default Col;
