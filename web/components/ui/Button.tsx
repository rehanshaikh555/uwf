import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
        secondary:
          "bg-emerald-500 text-white hover:bg-emerald-600",
        outline:
          "border border-slate-300 bg-white hover:bg-slate-100",
        ghost:
          "hover:bg-slate-100",
        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-lg",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";