"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { AspectRatio } from "../../types/image-generator";

export interface AspectRatioOptionProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  ratio: AspectRatio;
  isSelected?: boolean;
  onSelect: () => void;
}

const ratioShapeClasses: Record<AspectRatio, string> = {
  "1:1": "w-8 h-8",
  "9:16": "w-6 h-9",
  "16:9": "w-10 h-6",
};

export const AspectRatioOption = forwardRef<HTMLButtonElement, AspectRatioOptionProps>(
  ({ ratio, isSelected = false, onSelect, className = "", ...props }, ref) => {
    const colorClass = isSelected ? "text-accent-success" : "text-text-secondary";
    const labelColorClass = isSelected ? "text-text-primary" : "text-text-secondary";

    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        className={[
          "flex min-h-[44px] flex-1 flex-col items-center gap-2.5 rounded-xl border-2 py-4",
          "active:scale-95 transition-all duration-200",
          isSelected ? "border-border-success bg-accent-success-soft" : "border-border-primary bg-surface-panel",
          className,
        ].join(" ")}
        {...props}
      >
        <div
          className={[
            ratioShapeClasses[ratio],
            "rounded-[3px] border-2 border-current",
            colorClass,
          ].join(" ")}
        />
        <span className={["text-[14px] font-medium", labelColorClass].join(" ")}>{ratio}</span>
      </button>
    );
  },
);

AspectRatioOption.displayName = "AspectRatioOption";
