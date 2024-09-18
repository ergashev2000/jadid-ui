import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export interface DividerProps {
  children?: ReactNode;
  className?: string;
  dashed?: boolean;
  variant?: "dashed" | "dotted" | "solid";
  orientation?: "left" | "right" | "center";
  orientationMargin?: string | number;
  plain?: boolean;
  style?: CSSProperties;
  type?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({
  children,
  className,
  dashed = false,
  variant = "solid",
  orientation = "center",
  orientationMargin,
  plain = true,
  style,
  type = "horizontal",
}) => {
  const isHorizontal = type === "horizontal";

  const lineClass = classNames({
    "border-dashed": dashed,
    "border-dotted": !dashed && variant === "dotted",
    "border-solid": !dashed && variant === "solid",
  });

  const dividerClass = classNames(
    "relative",
    "flex",
    "items-center",
    "text-black",
    {
      "justify-start": orientation === "left",
      "justify-center": orientation === "center",
      "justify-end": orientation === "right",
    },
    className
  );

  const lineStyle = isHorizontal ? "h-[1px] w-full" : "w-[1px] h-full";

  const orientationStyles: CSSProperties = {
    marginLeft: orientation === "left" ? orientationMargin : undefined,
    marginRight: orientation === "right" ? orientationMargin : undefined,
  };

  return (
    <div className={dividerClass} style={style} role="separator" aria-orientation={type}>
      {isHorizontal ? (
        <div className="flex items-center w-full">
          {orientation === "left" ? null : (
            <span className={`flex-1 ${lineStyle} bg-gray-300 dark:bg-gray-600 ${lineClass}`} />
          )}
          {children && (
            <span
              className={`px-2 text-sm dark:text-gray-300 ${
                plain ? "" : "font-semibold"
              }`}
              style={orientationStyles}
            >
              {children}
            </span>
          )}
          {orientation === "right" ? null : (
            <span className={`flex-1 ${lineStyle} bg-gray-300 dark:bg-gray-600 ${lineClass}`} />
          )}
        </div>
      ) : (
        <span className={`h-full w-[1px] bg-gray-300 dark:bg-gray-600 ${lineClass}`} />
      )}
    </div>
  );
};

export default Divider;
