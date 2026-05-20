"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "surface" | "filled";
  onClick: () => void;
}

const sizeClasses: Record<NonNullable<IconButtonProps["size"]>, string> = {
  sm: "w-11 h-11",
  md: "w-11 h-11",
  lg: "w-11 h-11",
};

const iconSizes: Record<NonNullable<IconButtonProps["size"]>, number> = {
  sm: 18,
  md: 20,
  lg: 22,
};

const variantClasses: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  ghost: "bg-transparent text-text-primary",
  surface: "rounded-full bg-accent-soft text-text-accent",
  filled: "rounded-full bg-accent-primary text-text-inverse",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, size = "md", variant = "ghost", className = "", onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={[
          "inline-flex min-h-[44px] min-w-[44px] items-center justify-center",
          "active:scale-90 transition-all duration-200",
          sizeClasses[size],
          variantClasses[variant],
          className,
        ].join(" ")}
        {...props}
      >
        <Icon size={iconSizes[size]} />
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
