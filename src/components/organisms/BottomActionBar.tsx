"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { ActionBarItem } from "../molecules/ActionBarItem";

export interface BottomActionBarAction {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  primary?: boolean;
}

export interface BottomActionBarProps extends HTMLAttributes<HTMLDivElement> {
  variant: "light" | "dark";
  actions: BottomActionBarAction[];
}

export const BottomActionBar = forwardRef<HTMLDivElement, BottomActionBarProps>(
  ({ variant, actions, className = "", ...props }, ref) => {
    if (variant === "dark") {
      return (
        <div
          ref={ref}
          className={[
            "max-w-md bg-surface-inverse/72 px-5 pb-8 pt-3 backdrop-blur-xl",
            "flex items-center justify-around",
            className,
          ].join(" ")}
          {...props}
        >
          {actions.map((action) => (
            <ActionBarItem
              key={action.label}
              icon={action.icon}
              label={action.label}
              onClick={action.onClick}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={[
          "max-w-md border-t border-border-soft bg-surface-base/90 px-5 py-4 backdrop-blur-xl",
          "flex gap-3",
          className,
        ].join(" ")}
        {...props}
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const base =
            "inline-flex min-h-[44px] h-12 items-center justify-center gap-2 rounded-xl transition-all duration-200";
          if (action.primary) {
            return (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={`${base} flex-[2] bg-accent-primary font-semibold text-text-inverse active:scale-95`}
              >
                <Icon size={18} className="text-text-inverse" />
                <span>{action.label}</span>
              </button>
            );
          }

          return (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className={`${base} flex-1 border border-border-primary bg-surface-panel active:scale-95`}
            >
              <Icon size={18} className="text-text-primary" />
              <span className="text-[15px] font-medium text-text-primary">{action.label}</span>
            </button>
          );
        })}
      </div>
    );
  },
);

BottomActionBar.displayName = "BottomActionBar";
