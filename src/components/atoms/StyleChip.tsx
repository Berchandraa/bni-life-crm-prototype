"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export interface StyleChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  label: string;
  isSelected?: boolean;
  onSelect: () => void;
}

export const StyleChip = forwardRef<HTMLButtonElement, StyleChipProps>(
  ({ label, isSelected = false, onSelect, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        className={[
          "min-h-[44px] rounded-full px-5 py-2.5 whitespace-nowrap text-[14px] font-medium",
          "active:scale-95 transition-all duration-200",
          isSelected
            ? "border border-border-success bg-accent-success text-text-inverse"
            : "border border-border-primary bg-surface-panel text-text-primary",
          className,
        ].join(" ")}
        {...props}
      >
        {label}
      </button>
    );
  },
);

StyleChip.displayName = "StyleChip";
