import React from "react";

type StatisticItemProps = {
  image: React.ReactNode;
  value: number;
  title: string;
};

const StatisticItem = ({ image, value, title }: StatisticItemProps) => {
  return (
    <li className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary grid place-items-center text-white">
        {image}
      </div>
      <div>
        <div className="text-lg font-semibold text-white">{value}</div>
        <div className="text-xs text-gray-400">{title}</div>
      </div>
    </li>
  );
};

export default StatisticItem;

