"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Pencil, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PromptRecapCardProps extends HTMLAttributes<HTMLDivElement> {
  prompt: string;
  icon?: LucideIcon;
  onEdit?: () => void;
}

export const PromptRecapCard = forwardRef<HTMLDivElement, PromptRecapCardProps>(
  ({ prompt, icon: Icon = Sparkles, onEdit, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["flex items-start gap-3 rounded-2xl border border-border-soft bg-surface-panel p-4", className].join(" ")}
        {...props}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
          <Icon size={18} className="text-text-accent" />
        </div>
        <p className="flex-1 text-[14px] leading-relaxed text-text-primary">"{prompt}"</p>
        {onEdit ? (
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center active:scale-95 transition-all duration-200"
          >
            <Pencil size={16} className="text-text-secondary" />
          </button>
        ) : null}
      </div>
    );
  },
);

PromptRecapCard.displayName = "PromptRecapCard";
