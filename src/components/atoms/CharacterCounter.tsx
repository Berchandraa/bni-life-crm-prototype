"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export interface CharacterCounterProps extends HTMLAttributes<HTMLSpanElement> {
  current: number;
  max?: number;
}

export const CharacterCounter = forwardRef<HTMLSpanElement, CharacterCounterProps>(
  ({ current, max = 500, className = "", ...props }, ref) => {
    const tone =
      current >= max ? "text-text-accent" : current >= max * 0.8 ? "text-text-primary" : "text-text-secondary";

    return (
      <span
        ref={ref}
        className={["text-[13px] font-medium", tone, className].join(" ")}
        {...props}
      >
        {current} / {max}
      </span>
    );
  },
);

CharacterCounter.displayName = "CharacterCounter";
