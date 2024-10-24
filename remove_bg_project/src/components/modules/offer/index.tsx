import { assets } from "@assets/index";
import React from "react";

type OfferProps = {
  title: string;
  description: string;
  price: number;
  credits: number;
};

const Offer = ({ title, description, price, credits }: OfferProps) => {
  return (
    <div className="flex flex-col border border-[#ededed] bg-white px-12 pt-14 pb-16 gap-4 rounded-2xl">
      <img src={assets.logo_icon} alt="" className="size-10" />
      <span className="text-xl font-semibold">{title}</span>
      <span className="font-light">{description}</span>
      <span>
        <span className="text-[40px]">{`$${price} `}</span>
        {`/ ${credits} credits`}
      </span>
      <span className="flex items-center justify-center gap-2 bg-[#313131] h-10 w-52 rounded-xl cursor-pointer text-white">
        Get started
      </span>
    </div>
  );
};

export default Offer;
