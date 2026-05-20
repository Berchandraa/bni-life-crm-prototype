"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface ActionBarItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const ActionBarItem = forwardRef<HTMLButtonElement, ActionBarItemProps>(
  ({ icon: Icon, label, onClick, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={[
          "flex min-h-[44px] min-w-[48px] flex-col items-center gap-1.5",
          "active:opacity-60 transition-all duration-200",
          className,
        ].join(" ")}
        {...props}
      >
        <Icon size={22} className="text-text-inverse" />
        <span className="text-[11px] text-text-inverse/70">{label}</span>
      </button>
    );
  },
);

ActionBarItem.displayName = "ActionBarItem";
