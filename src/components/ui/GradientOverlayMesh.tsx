import React from "react";

interface GradientOverlayProps {
  from?: string;
  via?: string;
  to?: string;
  opacity?: number;
}

export const GradientOverlay: React.FC<GradientOverlayProps> = ({
  from = "#0e1d23",
  via = "#202b14",
  to = "#000102",
  opacity = 10,
}) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: opacity / 100,
        background: `linear-gradient(to bottom right, ${from}, ${via}, ${to})`,
      }}
    ></div>
  );
};
