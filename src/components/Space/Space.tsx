import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export type Size = "small" | "middle" | "large" | number;
 
export interface SpaceProps {
  align?: "start" | "end" | "center" | "baseline";
  classNames?: Record<string, string>;
  direction?: "vertical" | "horizontal";
  size?: Size | Size[];
  split?: ReactNode;
  styles?: Record<string, CSSProperties>;
  wrap?: boolean;
  children: ReactNode;
}

const Space: React.FC<SpaceProps> = ({
  align,
  classNames: customClassNames,
  direction = "horizontal",
  size = "small",
  split,
  styles,
  wrap = false,
  children,
}) => {
  const getSizeValue = (size: Size) => {
    switch (size) {
      case "small":
        return 8;
      case "middle":
        return 16;
      case "large":
        return 24;
      default:
        return size;
    }
  };

  const sizeValue: number[] = Array.isArray(size)
    ? size.map(getSizeValue)
    : [getSizeValue(size)];

  const spaceStyle: CSSProperties = {
    display: direction === "horizontal" ? "flex" : "block",
    flexWrap: wrap ? "wrap" : "nowrap",
    alignItems: align,
    ...styles,
  };

  return (
    <div className={classNames("space", customClassNames)} style={spaceStyle}>
      {React.Children.map(children, (child, index) => {
        if (child) {
          return (
            <React.Fragment key={index}>
              {child}
              {index < React.Children.count(children) - 1 && (
                <>
                  {split || (
                    <div
                      style={{
                        margin: `0 ${sizeValue[0] ? sizeValue[0] / 2 : 0}px`,
                      }}
                    />
                  )}
                </>
              )}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Space;
