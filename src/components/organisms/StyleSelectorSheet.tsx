"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { X } from "lucide-react";
import type { ImageStyle } from "../../types/image-generator";
import { DragHandle } from "../atoms/DragHandle";
import { IconButton } from "../atoms/IconButton";
import { StyleOptionCard } from "../molecules/StyleOptionCard";

export interface StyleSelectorSheetProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  selectedStyle: ImageStyle;
  onSelect: (style: ImageStyle) => void;
  onClose: () => void;
  onApply: () => void;
}

const styleOptions: Array<{ style: ImageStyle; gradientClasses: string }> = [
  { style: "Realistic", gradientClasses: "from-amber-200 to-orange-300" },
  { style: "Anime", gradientClasses: "from-pink-200 to-purple-300" },
  { style: "3D Render", gradientClasses: "from-blue-200 to-cyan-300" },
  { style: "Watercolor", gradientClasses: "from-teal-100 to-blue-200" },
  { style: "Pixel Art", gradientClasses: "from-green-200 to-emerald-300" },
  { style: "Oil Painting", gradientClasses: "from-yellow-200 to-red-300" },
  { style: "Sketch", gradientClasses: "from-gray-200 to-gray-300" },
  { style: "Cinematic", gradientClasses: "from-indigo-300 to-purple-400" },
  { style: "Pop Art", gradientClasses: "from-pink-300 to-yellow-300" },
];

export const StyleSelectorSheet = forwardRef<HTMLDivElement, StyleSelectorSheetProps>(
  ({ isOpen, selectedStyle, onSelect, onClose, onApply, className = "", ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={["fixed inset-0 z-[100] flex items-end bg-surface-overlay", className].join(" ")}
        onClick={onClose}
        {...props}
      >
        <div
          className="w-full max-w-md rounded-t-[24px] bg-surface-base pb-8 animate-slide-up"
          onClick={(event) => event.stopPropagation()}
        >
          <DragHandle className="mb-4 mt-3" />
          <div className="mb-5 flex items-center justify-between px-5">
            <h3 className="text-[18px] font-semibold text-text-primary">Choose Style</h3>
            <IconButton icon={X} variant="ghost" onClick={onClose} />
          </div>

          <div className="grid grid-cols-3 gap-3 px-5">
            {styleOptions.map((item) => (
              <StyleOptionCard
                key={item.style}
                style={item.style}
                gradientClasses={item.gradientClasses}
                isSelected={selectedStyle === item.style}
                onSelect={onSelect}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onApply}
            className="mx-5 mt-5 h-12 w-[calc(100%-40px)] rounded-xl bg-accent-primary text-[15px] font-semibold text-text-inverse active:scale-[0.98] transition-all duration-200"
          >
            Apply Style
          </button>
        </div>
      </div>
    );
  },
);

StyleSelectorSheet.displayName = "StyleSelectorSheet";
