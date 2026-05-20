"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, X } from "lucide-react";
import { IconButton } from "../atoms/IconButton";

export interface NavigationHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  leftIcon?: "back" | "close";
  rightIcon?: LucideIcon;
  rightVariant?: "ghost" | "surface";
  onLeftPress: () => void;
  onRightPress?: () => void;
}

export const NavigationHeader = forwardRef<HTMLElement, NavigationHeaderProps>(
  (
    {
      title,
      leftIcon = "back",
      rightIcon,
      rightVariant = "surface",
      onLeftPress,
      onRightPress,
      className = "",
      ...props
    },
    ref,
  ) => {
    const LeftIcon = leftIcon === "back" ? ChevronLeft : X;

    return (
      <header
        ref={ref}
        className={[
          "sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border-soft",
          "bg-surface-base/90 px-5 backdrop-blur-xl",
          "max-w-md",
          className,
        ].join(" ")}
        {...props}
      >
        <IconButton icon={LeftIcon} size="md" variant="ghost" onClick={onLeftPress} />
        <div className="flex-1 text-center text-[17px] font-semibold text-text-primary">{title}</div>
        {rightIcon ? (
          <IconButton icon={rightIcon} size="sm" variant={rightVariant} onClick={() => onRightPress?.()} />
        ) : (
          <div className="w-10" />
        )}
      </header>
    );
  },
);

NavigationHeader.displayName = "NavigationHeader";
