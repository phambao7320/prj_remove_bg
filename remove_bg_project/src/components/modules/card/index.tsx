import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-1 p-9 bg-white border border-[#e1e1e1] shadow-md rounded-lg">
      <img src={icon} className="size-11" />
      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl leading-7">{title}</span>
        <span className="leading-6 text-[#7c7c7c]">{description}</span>
      </div>
    </div>
  );
};

export default Card;
