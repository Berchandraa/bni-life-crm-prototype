"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Lightbulb } from "lucide-react";

export interface InspirationCardProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  onSelect: (text: string) => void;
}

export const InspirationCard = forwardRef<HTMLButtonElement, InspirationCardProps>(
  ({ text, onSelect, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onSelect(text)}
        className={[
          "flex min-h-[44px] w-full items-start gap-3 rounded-2xl border border-border-soft bg-surface-panel p-4 text-left",
          "active:bg-accent-soft transition-all duration-200",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
          <Lightbulb size={18} className="text-text-accent" />
        </div>
        <p className="flex-1 text-[14px] italic leading-relaxed text-text-primary">"{text}"</p>
      </button>
    );
  },
);

InspirationCard.displayName = "InspirationCard";
