import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";

export const FILE_INPUT_VARIANTS = {
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
  ghost: "file-input-ghost",
};

export const FILE_INPUT_SIZES = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: "file-input-md",
  lg: "file-input-lg",
};

export interface FileInputProps
  extends Omit<HTMLProps<HTMLInputElement>, "size"> {
  size?: keyof typeof FILE_INPUT_SIZES;
  variant?: keyof typeof FILE_INPUT_VARIANTS;
  bordered?: boolean;
  className?: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ variant, className, size = "md", bordered = true, ...props }, ref) => (
    <input
      className={clsx(
        "file-input",
        bordered && "file-input-bordered",
        variant && FILE_INPUT_VARIANTS[variant],
        FILE_INPUT_SIZES[size]
      )}
      type="file"
      ref={ref}
      {...props}
    />
  )
);

FileInput.displayName = "FileInput";
export default FileInput;
