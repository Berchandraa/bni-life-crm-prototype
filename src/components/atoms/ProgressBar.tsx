"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  showEstimate?: boolean;
  estimateText?: string;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    { progress, showEstimate = true, estimateText = "Estimated: ~10 seconds", className = "", ...props },
    ref,
  ) => {
    const safeProgress = Math.max(0, Math.min(100, progress));

    return (
      <div ref={ref} className={className} {...props}>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-accent-soft">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-success to-accent-primary transition-all duration-500"
            style={{ width: `${safeProgress}%` }}
          />
        </div>
        {showEstimate ? (
          <p className="mt-2 text-center text-[13px] text-text-secondary">{estimateText}</p>
        ) : null}
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";
