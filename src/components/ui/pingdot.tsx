"use client";
import React from "react";

interface PingDotProps {
  size?: number;
  color?: string;
  pingColor?: string;
}

export const PingDot: React.FC<PingDotProps> = ({
  size = 12,
  color = "#0ea5e9",
  pingColor = "#38bdf8",
}) => {
  return (
    <span
      className="relative inline-flex"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inline-flex rounded-full animate-ping opacity-75"
        style={{
          width: size,
          height: size,
          backgroundColor: pingColor,
        }}
      ></span>
      <span
        className="relative inline-flex rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      ></span>
    </span>
  );
};
