import type { ReactNode } from "react";

interface ValuePropCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValuePropCard({
  icon,
  title,
  description,
}: ValuePropCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 flex flex-col h-full">
      <div className="text-purple-600 mb-4">{icon}</div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}
