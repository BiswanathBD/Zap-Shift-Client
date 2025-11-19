import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import L from "leaflet";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.Search.value;
    console.log(search);
  };

  const customIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/?size=128&id=h1ACssMxjHCf&format=png",
    iconSize: [28],
    iconAnchor: [14, 32],
    popupAnchor: [0, -30],
  });

  return (
    <div className="bg-white my-8 p-8 rounded-2xl">
      <h2 className="text-4xl font-bold">We are available in 64 districts</h2>

      <form onSubmit={handleSearch} className="relative my-8 w-fit">
        <input
          className="py-1 pl-8 bg-[rgb(240,240,240)] rounded-full focus:outline-gray-200  text-sm pr-20 md:w-sm"
          type="text"
          name="Search"
          id=""
          placeholder="Search here"
        />
        <CiSearch
          size={20}
          className="absolute top-1/2 -translate-y-1/2 left-2"
        />
        <button className="absolute bg-lime-300 text-sm font-semibold py-1 px-3 rounded-full top-0 right-0">
          Search
        </button>
      </form>

      <div className="pt-6 border-t border-[rgb(240,240,240)]">
        <h4 className="text-xl font-bold">
          We deliver almost all over Bangladesh
        </h4>

        {/* map here */}
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-[500px] mt-4 rounded-xl"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center) => (
            <Marker
              key={center.district}
              position={[center.latitude, center.longitude]}
              icon={customIcon}
            >
              <Popup>
                <strong>
                  {center.district}, {center.city}
                </strong>
                <br />
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
