"use client";

import { useEffect } from "react";

export default function BorderSetter({ color }: { color: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.getPropertyValue("--border");
    root.style.setProperty("--border", color);

    return () => {
      root.style.setProperty("--border", prev || "");
    };
  }, [color]);

  return null;
}
