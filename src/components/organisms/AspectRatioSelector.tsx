"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { AspectRatio } from "../../types/image-generator";
import { AspectRatioOption } from "../atoms/AspectRatioOption";

export interface AspectRatioSelectorProps extends HTMLAttributes<HTMLDivElement> {
  selectedRatio: AspectRatio;
  onSelect: (ratio: AspectRatio) => void;
}

export const AspectRatioSelector = forwardRef<HTMLDivElement, AspectRatioSelectorProps>(
  ({ selectedRatio, onSelect, className = "", ...props }, ref) => {
    return (
      <section ref={ref} className={className} {...props}>
        <h3 className="mb-3 text-[15px] font-semibold text-text-primary">Aspect Ratio</h3>
        <div className="flex gap-3">
          <AspectRatioOption
            ratio="1:1"
            isSelected={selectedRatio === "1:1"}
            onSelect={() => onSelect("1:1")}
          />
          <AspectRatioOption
            ratio="9:16"
            isSelected={selectedRatio === "9:16"}
            onSelect={() => onSelect("9:16")}
          />
          <AspectRatioOption
            ratio="16:9"
            isSelected={selectedRatio === "16:9"}
            onSelect={() => onSelect("16:9")}
          />
        </div>
      </section>
    );
  },
);

AspectRatioSelector.displayName = "AspectRatioSelector";
