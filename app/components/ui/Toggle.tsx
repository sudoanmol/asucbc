"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked, onChange, disabled = false, className = "" }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`
          relative inline-flex items-center shrink-0
          w-12 h-6 rounded-sm cursor-pointer
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            checked
              ? "bg-[var(--theme-text-accent)]"
              : "bg-[var(--theme-card-border)]"
          }
          ${className}
        `}
      >
        <motion.div
          className="w-5 h-5 rounded-sm bg-white shadow-sm"
          animate={{
            x: checked ? 26 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
        />
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
