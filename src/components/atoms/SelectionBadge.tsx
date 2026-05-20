"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Check } from "lucide-react";

export interface SelectionBadgeProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  isSelected?: boolean;
  position?: "top-left" | "top-right";
}

export const SelectionBadge = forwardRef<HTMLDivElement, SelectionBadgeProps>(
  ({ index, isSelected = false, position = "top-right", className = "", ...props }, ref) => {
    if (isSelected) {
      return (
        <div
          ref={ref}
          className={[
            "absolute top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-accent-success",
            "right-2.5",
            className,
          ].join(" ")}
          {...props}
        >
          <Check size={16} className="text-text-inverse" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={[
          "absolute top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm",
          position === "top-left" ? "left-2.5" : "right-2.5",
          className,
        ].join(" ")}
        {...props}
      >
        <span className="text-[12px] font-bold text-text-inverse">{index}</span>
      </div>
    );
  },
);

SelectionBadge.displayName = "SelectionBadge";
