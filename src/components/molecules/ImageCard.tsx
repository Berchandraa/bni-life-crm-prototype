"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { GeneratedImage } from "../../types/image-generator";
import { SelectionBadge } from "../atoms/SelectionBadge";

export interface ImageCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect" | "onClick"> {
  image: GeneratedImage;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

export const ImageCard = forwardRef<HTMLButtonElement, ImageCardProps>(
  ({ image, isSelected = false, onSelect, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onSelect(image.id)}
        className={[
          "relative aspect-square min-h-[44px] min-w-[44px] overflow-hidden rounded-2xl",
          "active:scale-[0.97] transition-all duration-200",
          className,
        ].join(" ")}
        {...props}
      >
        {image.url ? (
          <img src={image.url} alt={`Generated image ${image.index}`} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-accent-success to-accent-soft" />
        )}
        {isSelected ? (
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-[3px] border-accent-success" />
        ) : null}
        <SelectionBadge index={image.index} isSelected={isSelected} />
      </button>
    );
  },
);

ImageCard.displayName = "ImageCard";
