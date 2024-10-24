import React from "react";
import { assets, testimonialsData } from "@assets/index";
import {
  ButtonUpload,
  Card,
  Feedback,
  ToggleRemoveImage,
} from "@components/modules";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-52">
      <section className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[70px] text-[#353535] font-semibold leading-tight">
            Remove the{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(92.53deg,#7649FF_4.01%,#FF4CF6_73.1%)] font-extrabold">
              background
            </span>{" "}
            from images for free.
          </span>
          <span className="text-[#515151]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </span>
          <ButtonUpload />
        </div>
        <img src={assets.header_img} className="size-[45%]" />
      </section>

      <section className="flex flex-col gap-20 items-center">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90.21deg,#353535_-18.76%,#9B9B9B_118.86%)]  text-[50px] font-semibold leading-tight text-center max-w-[650px]">
          Steps to remove background image in seconds
        </span>
        <div className="flex items-center justify-between gap-10">
          <Card
            icon={assets.upload_icon}
            title="Upload image"
            description="This is a demo text, will replace it later. This is a demo.."
          />
          <Card
            icon={assets.remove_bg_icon}
            title="Remove background"
            description="This is a demo text, will replace it later. This is a demo.."
          />
          <Card
            icon={assets.download_icon}
            title="Download image"
            description="This is a demo text, will replace it later. This is a demo.."
          />
        </div>
      </section>

      <section className="flex flex-col gap-20 items-center">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90.21deg,#353535_-18.76%,#9B9B9B_118.86%)]  text-[50px] font-semibold leading-tight text-center max-w-[650px]">
          Remove Background With High Quality and Accuracy
        </span>
        <ToggleRemoveImage />
      </section>

      <section className="flex flex-col gap-20 items-center">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90.21deg,#353535_-18.76%,#9B9B9B_118.86%)]  text-[50px] font-semibold leading-tight text-center max-w-[650px]">
          Customer Testimonials
        </span>
        <div className="flex items-center justify-between gap-10">
          <Feedback {...testimonialsData[0]} />
          <Feedback {...testimonialsData[1]} />
        </div>
      </section>

      <section className="flex flex-col gap-20 items-center">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90.21deg,#353535_-18.76%,#9B9B9B_118.86%)]  text-[50px] font-semibold leading-tight text-center max-w-[650px]">
          See the magic. Try now
        </span>
        <ButtonUpload />
      </section>

      <div className="h-32"></div>
    </div>
  );
};

export default HomePage;
