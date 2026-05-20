"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Palette } from "lucide-react";
import type { ImageStyle } from "../../types/image-generator";
import { SelectionBadge } from "../atoms/SelectionBadge";

export interface StyleOptionCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect" | "onClick"> {
  style: ImageStyle;
  isSelected?: boolean;
  onSelect: (style: ImageStyle) => void;
  gradientClasses: string;
}

export const StyleOptionCard = forwardRef<HTMLButtonElement, StyleOptionCardProps>(
  ({ style, isSelected = false, onSelect, gradientClasses, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onSelect(style)}
        className={[
          "flex min-h-[44px] flex-col items-center gap-2",
          "active:scale-95 transition-all duration-200",
          className,
        ].join(" ")}
        {...props}
      >
        <div
          className={[
            "relative aspect-square w-full overflow-hidden rounded-xl border-2",
            isSelected ? "border-accent-success" : "border-transparent",
          ].join(" ")}
        >
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientClasses}`}>
            <Palette size={22} className="text-white/80" />
          </div>
          {isSelected ? <SelectionBadge index={0} isSelected position="top-right" /> : null}
        </div>
        <span
          className={[
            "text-center text-[13px]",
            isSelected ? "font-semibold text-text-primary" : "font-medium text-text-secondary",
          ].join(" ")}
        >
          {style}
        </span>
      </button>
    );
  },
);

StyleOptionCard.displayName = "StyleOptionCard";
