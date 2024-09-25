import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { IconStar } from "../../assets/svgs/svgIcons";

export interface RateProps {
  allowHalf?: boolean;
  count?: number;
  defaultValue?: number;
  disabled?: boolean;
  value?: number;
  onChange?: (value: number) => void;
}

export const Rate: React.FC<RateProps> = ({
  allowHalf = false,
  count = 5,
  defaultValue = 0,
  disabled = false,
  value,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<number>(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleClick = (rate: number) => {
    if (disabled) return;
    setInternalValue(rate);
    onChange?.(rate);
  };

  const handleMouseEnter = (rate: number) => {
    if (!disabled) setHoverValue(rate);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const renderStar = (index: number) => {
    const rate = index + 1;
    const isHalf = allowHalf && hoverValue !== null && hoverValue >= rate - 0.5 && hoverValue < rate;
    const isFull = hoverValue !== null ? hoverValue >= rate : internalValue >= rate;

    return (
      <div
        key={index}
        className="cursor-pointer transition-all duration-200"
        onClick={() => handleClick(isHalf ? rate - 0.5 : rate)}
        onMouseEnter={() => handleMouseEnter(isHalf ? rate - 0.5 : rate)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: hoverValue === rate || (allowHalf && hoverValue === rate - 0.5) ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.2s',
        }}
      >
        <IconStar
          filled={isFull}
          halfFilled={isHalf}
          size={24}
          color={isFull || isHalf ? "#fadb14" : "#e8e8e8"}
        />
      </div>
    );
  };

  return (
    <div className={classNames("flex space-x-1", { "opacity-50 cursor-not-allowed": disabled })}>
      {Array.from({ length: count }, (_, index) => renderStar(index))}
    </div>
  );
};
