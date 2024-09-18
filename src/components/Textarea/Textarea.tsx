import React, { ChangeEvent, FocusEvent, TextareaHTMLAttributes } from "react";

export interface CustomTextareaProps {
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  value?: string;
  rows?: number;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> &
  CustomTextareaProps;

interface TextareaComponent extends React.FC<TextareaProps> {
  Wrapper: React.FC<{
    label?: string;
    error?: string;
    className?: string;
    children: React.ReactNode;
  }>;
}

const Textarea: TextareaComponent = ({
  autoComplete,
  autoFocus,
  className = "",
  disabled = false,
  placeholder,
  size = "md",
  value,
  rows = 3,
  maxLength,
  onChange,
  onFocus,
  onBlur,
  ariaLabel,
  ariaDescribedBy,
  ...rest
}) => {
  const sizeClasses = {
    sm: "text-sm px-2 py-1.5",
    md: "text-base px-2 py-2",
    lg: "text-lg px-2.5 py-2",
  }[size];

  const baseClass = `flex-1 bg-transparent 
  ring-offset-background 
  placeholder:text-muted-foreground
  text-black dark:text-white
  rounded-md shadow-sm bg-white
  w-full focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2
  dark:bg-gray-800
  dark:placeholder-gray-400
  disabled:cursor-not-allowed outline-none 
  disabled:opacity-50 resize-y ${sizeClasses}`;

  return (
    <textarea
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={`${baseClass} ${className}`}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      rows={rows}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...rest}
    />
  );
};

const TextareaWrapper: React.FC<{
  label?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ label, error, className = "", children }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

Textarea.Wrapper = TextareaWrapper;

export default Textarea;
