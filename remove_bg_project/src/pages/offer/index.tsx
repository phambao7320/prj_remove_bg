import Offer from "@components/modules/offer";
import React from "react";

const OfferPage = () => {
  return (
    <section className="flex flex-col gap-20 items-center">
      <span className="text-transparent bg-clip-text bg-[linear-gradient(90.21deg,#353535_-18.76%,#9B9B9B_118.86%)]  text-[36px] font-semibold leading-tight text-center max-w-[650px]">
        Choose the plan that’s right for you{" "}
      </span>
      <div className="flex items-center justify-between gap-10">
        <Offer
          title="Basic"
          description="Best for personal use."
          price={10}
          credits={100}
        />
        <Offer
          title="Advanced"
          description="Best for business use."
          price={50}
          credits={500}
        />
        <Offer
          title="Business"
          description="Best for enterprise use."
          price={250}
          credits={5000}
        />
      </div>
    </section>
  );
};

export default OfferPage;
