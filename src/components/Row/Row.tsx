import React, { ReactNode, CSSProperties } from "react";
import classNames from "classnames";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: [number, number];
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Row: React.FC<RowProps> = ({
  gutter = [0, 0],
  children,
  className,
  style,
  ...restProps
}) => {
  const rowClass = classNames("flex flex-wrap", className);
  const gutterStyle: CSSProperties = {
    marginLeft: `-${gutter[0] / 2}px`,
    marginRight: `-${gutter[0] / 2}px`,
    rowGap: `${gutter[1]}px`,
    ...style,
  };

  return (
    <div className={rowClass} style={gutterStyle} {...restProps}>
      {React.Children.map(children, (child) => (
        <div
          style={{
            paddingLeft: `${gutter[0] / 2}px`,
            paddingRight: `${gutter[0] / 2}px`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Row;
