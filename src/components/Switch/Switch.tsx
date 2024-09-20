import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Spinner from "../../components/Spinner/Spinner";

export interface SwitchProps {
  autoFocus?: boolean;
  checked?: boolean; // Optional for controlled usage
  checkedChildren?: React.ReactNode;
  className?: string;
  defaultChecked?: boolean; // Initial checked state
  disabled?: boolean;
  loading?: boolean; // Loading state of switch
  size?: "default" | "small";
  unCheckedChildren?: React.ReactNode;
  onChange: (checked: boolean) => void;
  onClick?: (checked: boolean, event: React.MouseEvent) => void;
}

const Switch: React.FC<SwitchProps> = ({
  autoFocus,
  checked,
  checkedChildren,
  className,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = "default",
  unCheckedChildren,
  onChange,
  onClick,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // Update state if `checked` prop changes
  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleClick = (event: React.MouseEvent) => {
    if (disabled || loading) return; // Prevent click if disabled or loading
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
    if (onClick) onClick(newChecked, event);
  };

  return (
    <div className={classNames("flex items-center", className)}>
      <button
        className={classNames(
          "relative inline-flex items-center h-6 rounded-full w-[2.90rem] transition-colors duration-200 ease-in-out",
          {
            "bg-blue-500": isChecked,
            "bg-gray-300": !isChecked,
            "opacity-50 cursor-not-allowed": disabled || loading,
            "h-8 w-12": size === "small",
          }
        )}
        onClick={handleClick}
        disabled={disabled || loading}
        autoFocus={autoFocus}
      >
        <span
          className={classNames(
            "transform transition-transform flex justify-center items-center duration-200 ease-in-out w-5 h-5 bg-white rounded-full shadow-md",
            {
              "translate-x-6": isChecked,
              "translate-x-0.5": !isChecked,
            }
          )}
        >
          {loading ? <Spinner size="small" /> : undefined}
        </span>
      </button>
      {loading ? (
        <span className="ml-2 text-gray-500">Loading...</span>
      ) : (
        <span className="ml-2 text-gray-700">
          {isChecked ? checkedChildren : unCheckedChildren}
        </span>
      )}
    </div>
  );
};

export default Switch;
