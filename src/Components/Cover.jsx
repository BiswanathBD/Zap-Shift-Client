import React from "react";
import coverImg from "../assets/location-merchant.png";
import overly from "../assets/be-a-merchant-bg.png";

const Cover = () => {
  return (
    <div className="p-10 bg-[#03373D] rounded-2xl relative mb-12 md:flex gap-4 items-center text-white">
      {/* overly */}
      <img
      className="absolute top-0 z-0"
      src={overly} alt="" />
      <div>
        <h4 className="text-3xl font-bold w-11/12">
          Merchant and Customer Satisfaction is Our First Priority
        </h4>
        <p className="mt-2 text-gray-400 w-10/12">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        <div className=" flex gap-4 mt-8">
          <button className="primary-btn text-black!">Become a Merchant</button>
          <button className="secondary-btn border-lime-300! text-lime-300">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      <img src={coverImg} alt="" />
    </div>
  );
};

export default Cover;
