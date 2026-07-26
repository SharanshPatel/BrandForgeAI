import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:brightness-110 border border-indigo-400/30 rounded-lg",
      secondary:
        "bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 border border-slate-700/60 shadow-sm rounded-lg backdrop-blur-sm",
      outline:
        "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border border-slate-700/80 rounded-lg",
      ghost:
        "bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-100 rounded-lg",
      danger:
        "bg-rose-600/90 hover:bg-rose-500 text-white shadow-sm rounded-lg border border-rose-500/30",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5 rounded-md",
      md: "text-sm px-4 py-2.5 gap-2 rounded-lg",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-xl font-semibold",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
