import { assets } from "@assets/index";
import { ButtonUpload } from "@components/modules";
import React from "react";

const ResultPage = () => {
  return (
    <section className="flex flex-col p-12 bg-white gap-14 border border-[#ededed]">
      <div className="flex justify-between gap-12 items-center">
        <div className="flex flex-col gap-4">
          <span>Original</span>
          <img src={assets.image_w_bg} />
        </div>
        <div className="flex flex-col gap-4">
          <span>Background removed</span>
          <img src={assets.image_wo_bg} />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3 items-center">
        <ButtonUpload icon={false} label="Download image" />
        <span className="flex items-center justify-center gap-3 border-[#7D48FE] border h-16 w-64 rounded-[40px]">
          <span className="text-[#7D48FE]">{"Try another image"}</span>
        </span>
      </div>
    </section>
  );
};

export default ResultPage;
