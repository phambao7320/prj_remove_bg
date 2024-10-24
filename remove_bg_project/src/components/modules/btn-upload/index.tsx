import { assets } from "@assets/index";
import React from "react";

type ButtonUploadProps = {
  label?: string;
  icon?: boolean;
};

const ButtonUpload = ({
  icon = true,
  label = "Upload your image",
}: ButtonUploadProps) => {
  return (
    <span className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#7648FF] to-[#D34AF8] h-16 w-64 rounded-[40px]">
      {icon && <img src={assets.upload_btn_icon} className="size-6" />}
      <span className="text-white">{label}</span>
    </span>
  );
};

export default ButtonUpload;
