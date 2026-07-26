"use client";

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  active?: boolean;
}

export default function MenuButton({
  icon,
  active,
  ...props
}: MenuButtonProps) {
  return (
    <button
      type="button"
      style={{
        padding: "6px 10px",
        border: active ? "2px solid blue" : "1px solid #ccc",
        marginRight: 6,
        cursor: "pointer",
      }}
      {...props}
    >
      {icon}
    </button>
  );
}