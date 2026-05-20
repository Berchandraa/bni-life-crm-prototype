"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface PillBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  label: string;
  variant?: "surface" | "outline";
}

export const PillBadge = forwardRef<HTMLDivElement, PillBadgeProps>(
  ({ icon: Icon, label, variant = "surface", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5",
          variant === "surface" ? "bg-accent-soft" : "border border-border-primary bg-surface-panel",
          className,
        ].join(" ")}
        {...props}
      >
        {Icon ? <Icon size={14} className="text-text-accent" /> : null}
        <span className="text-[13px] font-medium text-text-accent">{label}</span>
      </div>
    );
  },
);

PillBadge.displayName = "PillBadge";
