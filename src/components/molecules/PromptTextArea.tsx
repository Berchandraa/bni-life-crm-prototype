"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { Sparkles } from "lucide-react";
import { CharacterCounter } from "../atoms/CharacterCounter";

export interface PromptTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
  onEnhance?: () => void;
}

export const PromptTextArea = forwardRef<HTMLTextAreaElement, PromptTextAreaProps>(
  (
    {
      value,
      onChange,
      maxLength = 500,
      placeholder = "A serene landscape with a glowing neon river winding through ancient redwood trees at twilight...",
      onEnhance,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={["rounded-2xl border border-border-soft bg-surface-panel p-4", className].join(" ")}>
        <textarea
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          className="h-28 w-full resize-none bg-transparent text-[15px] text-text-primary outline-none placeholder:text-text-secondary"
          {...props}
        />
        <div className="mt-3 flex items-center justify-between border-t border-border-soft pt-3">
          <CharacterCounter current={value.length} max={maxLength} />
          <button
            type="button"
            onClick={onEnhance}
            className="inline-flex min-h-[44px] min-w-[44px] items-center gap-1.5 rounded-lg bg-accent-soft px-3 py-1.5 active:bg-surface-soft transition-all duration-200"
          >
            <Sparkles size={14} className="text-text-accent" />
            <span className="text-[13px] font-medium text-text-accent">Enhance</span>
          </button>
        </div>
      </div>
    );
  },
);

PromptTextArea.displayName = "PromptTextArea";
