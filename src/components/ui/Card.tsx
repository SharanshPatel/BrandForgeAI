import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  interactive?: boolean;
  active?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hoverable = false, interactive = false, active = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-200 shadow-sm relative overflow-hidden",
          hoverable &&
            "hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-indigo-500/5",
          interactive &&
            "cursor-pointer hover:-translate-y-0.5 active:translate-y-0 hover:border-indigo-500/40 hover:bg-slate-900/95",
          active &&
            "border-indigo-500/60 bg-slate-900/95 ring-1 ring-indigo-500/30 shadow-md shadow-indigo-500/10",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-slate-100 flex items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-400 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
