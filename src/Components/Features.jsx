import React from "react";
import trackingImg from "../assets/live-tracking.png";

const Features = () => {
  return (
    <div className="my-12 text-black! py-12 border-t-2 border-b-2 border-dashed border-[#03464D]/60 flex flex-col gap-8">
      <div className="flex items-center bg-white rounded-2xl p-8">
        <img src={trackingImg} alt="" />
        <div className="ml-8 pl-8 border-l-2 border-dashed border-[#03464D]/60 py-8">
          <h5 className="text-xl font-semibold text-[#03373D] mb-4">
            Live Parcel Tracking
          </h5>
          <p className="text-gray-500">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="flex items-center bg-white rounded-2xl p-8">
        <img src={trackingImg} alt="" />
        <div className="ml-8 pl-8 border-l-2 border-dashed border-[#03464D]/60 py-8">
          <h5 className="text-xl font-semibold text-[#03373D] mb-4">
            100% Safe Delivery
          </h5>
          <p className="text-gray-500">
            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      <div className="flex items-center bg-white rounded-2xl p-8">
        <img src={trackingImg} alt="" />
        <div className="ml-8 pl-8 border-l-2 border-dashed border-[#03464D]/60 py-8">
          <h5 className="text-xl font-semibold text-[#03373D] mb-4">
            24/7 Call Center Support
          </h5>
          <p className="text-gray-500">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
