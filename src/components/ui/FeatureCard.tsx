"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color = "#059669",
}) => {
  const colorMap: { [key: string]: string } = {
    green: "#10b981",
  };
  const hexColor = colorMap[color] || color;

  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="group rounded-2xl p-8 border border-gray-200
      flex flex-col items-start text-left bg-white relative overflow-hidden
      hover:border-gray-200 hover:shadow-lg  transition-all duration-500"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl mb-5
        transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${hexColor}15` }}
      >
        <Icon size={26} strokeWidth={2} style={{ color: hexColor }} />
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full 
        transition-all duration-300 rounded-b-2xl"
        style={{ backgroundColor: hexColor }}
      />
    </motion.div>
  );
};
