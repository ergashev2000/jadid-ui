import React from "react";
import classNames from "classnames";

export interface TitleProps {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ order = 1, className, children }) => {
  const headingStyles = {
    1: "text-4xl font-bold",
    2: "text-3xl font-bold",
    3: "text-2xl font-bold",
    4: "text-xl font-bold",
    5: "text-lg font-bold",
    6: "text-base font-bold",
  };

  const styles = headingStyles[order];

  const Tag = `h${order}` as keyof JSX.IntrinsicElements;

  return <Tag className={classNames(styles, className)}>{children}</Tag>;
};

export default Title;
