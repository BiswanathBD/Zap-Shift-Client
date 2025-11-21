import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const warehouses = useLoaderData();

  // Get unique regions
  const regions = useMemo(() => {
    const regionList = warehouses.map((w) => w.region);
    return [...new Set(regionList)];
  }, [warehouses]);

  const { handleSubmit, register, watch } = useForm();

  // Watch divisions directly from the form
  const senderDivision = watch("senderDivision");
  const receiverDivision = watch("receiverDivision");

  // Compute district lists based on division
  const senderDistrictList = senderDivision
    ? warehouses.filter((w) => w.region === senderDivision).map((w) => w.district)
    : [];

  const receiverDistrictList = receiverDivision
    ? warehouses.filter((w) => w.region === receiverDivision).map((w) => w.district)
    : [];

  const handleFormData = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-white my-8 p-8 rounded-2xl">
      <h2 className="text-4xl font-bold">Send A Parcel</h2>

      <h4 className="text-xl font-bold py-4 border-b border-gray-200">
        We deliver almost all over Bangladesh
      </h4>

      <form onSubmit={handleSubmit(handleFormData)}>
        {/* Parcel Type */}
        <div className="py-4 flex items-center gap-6 font-semibold">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("parcelType")}
              type="radio"
              value="document"
              className="radio text-lime-300 bg-gray-100"
              defaultChecked
            />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("parcelType")}
              type="radio"
              value="non-document"
              className="radio text-lime-300 bg-gray-100"
            />
            <span>Non-Document</span>
          </label>
        </div>

        {/* Parcel Name & Weight */}
        <div className="grid md:grid-cols-2 gap-8 font-semibold pb-8 border-b border-gray-200">
          <label className="grid">
            <span>Parcel Name</span>
            <input
              type="text"
              {...register("parcelName")}
              placeholder="Parcel Name"
              className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
            />
          </label>

          <label className="grid">
            <span>Parcel Weight (KG)</span>
            <input
              type="number"
              {...register("weight")}
              placeholder="Parcel Weight (KG)"
              className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
            />
          </label>
        </div>

        {/* Sender Details */}
        <div className="grid md:grid-cols-2 gap-8 font-semibold mt-6">
          <div>
            <h5 className="text-lg font-bold mb-4">Sender Details</h5>

            <label className="grid mt-4">
              <span>Sender Name</span>
              <input
                type="text"
                {...register("senderName")}
                placeholder="Sender Name"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            <label className="grid mt-4">
              <span>Address</span>
              <input
                type="text"
                {...register("senderAddress")}
                placeholder="Pick Up Address"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            <label className="grid mt-4">
              <span>Sender Phone No.</span>
              <input
                type="number"
                {...register("senderPhone")}
                placeholder="Phone Number"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            {/* Sender Division */}
            <label className="grid mt-4">
              <span>Division</span>
              <select
                {...register("senderDivision")}
                className="border py-1 px-3 border-gray-200 rounded-sm font-normal outline-lime-400/20 mt-1"
              >
                <option value="">Select Division</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            {/* Sender District */}
            <label className="grid mt-4">
              <span>District</span>
              <select
                {...register("senderDistrict")}
                disabled={!senderDivision}
                className="border py-1 px-3 border-gray-200 rounded-sm font-normal outline-lime-400/20 mt-1"
              >
                <option value="">Select District</option>
                {senderDistrictList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Receiver Details */}
          <div>
            <h5 className="text-lg font-bold mb-4">Receiver Details</h5>

            <label className="grid mt-4">
              <span>Receiver Name</span>
              <input
                type="text"
                {...register("receiverName")}
                placeholder="Receiver Name"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            <label className="grid mt-4">
              <span>Address</span>
              <input
                type="text"
                {...register("receiverAddress")}
                placeholder="Delivery Address"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            <label className="grid mt-4">
              <span>Receiver Phone No.</span>
              <input
                type="number"
                {...register("receiverPhone")}
                placeholder="Phone Number"
                className="border py-1 px-3 border-gray-200 rounded-sm placeholder:font-normal outline-lime-400/20 mt-1"
              />
            </label>

            {/* Receiver Division */}
            <label className="grid mt-4">
              <span>Division</span>
              <select
                {...register("receiverDivision")}
                className="border py-1 px-3 border-gray-200 rounded-sm font-normal outline-lime-400/20 mt-1"
              >
                <option value="">Select Division</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            {/* Receiver District */}
            <label className="grid mt-4">
              <span>District</span>
              <select
                {...register("receiverDistrict")}
                disabled={!receiverDivision}
                className="border py-1 px-3 border-gray-200 rounded-sm font-normal outline-lime-400/20 mt-1"
              >
                <option value="">Select District</option>
                {receiverDistrictList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <button className="primary-btn mt-8 mb-16">Send Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;