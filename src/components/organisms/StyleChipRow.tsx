"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { ImageStyle } from "../../types/image-generator";
import { StyleChip } from "../atoms/StyleChip";

export interface StyleChipRowProps extends HTMLAttributes<HTMLDivElement> {
  styles: ImageStyle[];
  selectedStyle: ImageStyle;
  onSelect: (style: ImageStyle) => void;
}

export const StyleChipRow = forwardRef<HTMLDivElement, StyleChipRowProps>(
  ({ styles, selectedStyle, onSelect, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide", className].join(" ")}
        {...props}
      >
        {styles.map((style) => (
          <StyleChip
            key={style}
            label={style}
            isSelected={style === selectedStyle}
            onSelect={() => onSelect(style)}
          />
        ))}
      </div>
    );
  },
);

StyleChipRow.displayName = "StyleChipRow";

