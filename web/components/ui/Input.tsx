import * as React from "react";
import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error = false,
      helperText,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <input
          className={clsx(
            "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white",
            "placeholder:text-slate-400",
            "transition-all duration-200",
            "focus:outline-none",
            "focus:ring-2 focus:ring-blue-500",
            "focus:border-blue-500",
            error
              ? "border-red-500 focus:ring-red-500"
              : "",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            className
          )}
          {...props}
        />

        {helperText && (
          <p
            className={clsx(
              "mt-2 text-sm",
              error
                ? "text-red-500"
                : "text-slate-500"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";