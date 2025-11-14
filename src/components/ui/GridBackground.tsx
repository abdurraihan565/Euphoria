"use clicnt";

interface GridOverlayProps {
  variant?: "default" | "green" | "rose" | "blue" | "dark";
  opacity?: number;
  size?: number; // px for grid spacing
}

export const GridOverlay = ({
  variant = "default",
  opacity = 0.3,
  size = 80,
}: GridOverlayProps) => {
  const bgColor =
    variant === "green"
      ? "rgba(187,247,208,0.1)"
      : variant === "rose"
      ? "rgba(254,205,211,0.1)"
      : variant === "blue"
      ? "rgba(191,219,254,0.1)"
      : variant === "dark"
      ? "rgba(64,64,64,0.1)"
      : "rgba(255,255,255,0.1)";

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundSize: `${size}px ${size}px`,
        backgroundImage: `linear-gradient(to right, ${bgColor} 1px, transparent 1px),
                          linear-gradient(to bottom, ${bgColor} 1px, transparent 1px)`,
      }}
    />
  );
};
