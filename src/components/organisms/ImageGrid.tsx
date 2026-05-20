"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { GeneratedImage } from "../../types/image-generator";
import { ImageCard } from "../molecules/ImageCard";

export interface ImageGridProps extends HTMLAttributes<HTMLDivElement> {
  images: GeneratedImage[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export const ImageGrid = forwardRef<HTMLDivElement, ImageGridProps>(
  ({ images, selectedId, onSelect, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={["grid grid-cols-2 gap-3", className].join(" ")} {...props}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            isSelected={image.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  },
);

ImageGrid.displayName = "ImageGrid";

