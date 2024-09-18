import React, {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface CustomInputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: "sm" | "md" | "lg";
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix"
> &
  CustomInputProps;

const Input: React.FC<InputProps> = ({
  autoComplete,
  autoFocus,
  className = "",
  disabled = false,
  error = false,
  placeholder,
  prefix,
  suffix,
  size = "md",
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  ariaLabel,
  ariaDescribedBy,
  ...rest
}) => {
  const sizeClasses = {
    sm: "text-sm px-2 py-1.5",
    md: "text-base px-2.5 py-2",
    lg: "text-lg px-3 py-2",
  }[size];

  const errorClass = error ? "border-red-500" : "border-gray-300";
  const baseClass = `flex items-center border rounded-md shadow-sm ${errorClass} ${className}`;

  const inputClass = `flex-1 bg-transparent px-3 py-2 ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed text-black outline-none disabled:opacity-50 ${sizeClasses}`;

  return (
    <div
      className={`${baseClass} ${
        !disabled ? 'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2' : ''
      }`}
    >
      {prefix && <span className="flex items-center px-2">{prefix}</span>}
      <input
        type={type}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={inputClass}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        {...rest}
      />
      {suffix && <span className="flex items-center px-2">{suffix}</span>}
    </div>
  );
};

export default Input;
