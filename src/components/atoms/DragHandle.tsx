"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type DragHandleProps = HTMLAttributes<HTMLDivElement>;

export const DragHandle = forwardRef<HTMLDivElement, DragHandleProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["mx-auto h-1 w-10 rounded-full bg-accent-soft", className].join(" ")}
        {...props}
      />
    );
  },
);

DragHandle.displayName = "DragHandle";
