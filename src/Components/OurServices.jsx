import React from "react";
import serviceImg from "../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-[#03373D] p-12 rounded-4xl my-16">
      <h3 className="text-2xl font-bold mb-4 text-white text-center">
        Our Services
      </h3>
      <p className="md:max-w-1/2 mx-auto text-gray-300 font-light text-center text-sm">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* cards */}
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">
            Express & Standard Delivery
          </p>
          <p className="text-gray-400 font-light text-sm text-center">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">Nationwide Delivery</p>
          <p className="text-gray-400 font-light text-sm text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">Fulfillment Solution</p>
          <p className="text-gray-400 font-light text-sm text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">Cash on Home Delivery</p>
          <p className="text-gray-400 font-light text-sm text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">
            Corporate Service / Contract In Logistics
          </p>
          <p className="text-gray-400 font-light text-sm text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:bg-[#CAEB66] transition-all">
          <img
            className="mx-auto bg-linear-to-b from-[#EEEDFC] p-4 rounded-full"
            src={serviceImg}
            alt=""
          />
          <p className="font-bold text-center my-4">Parcel Return</p>
          <p className="text-gray-400 font-light text-sm text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
