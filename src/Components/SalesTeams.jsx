import React from "react";
import Marquee from "react-fast-marquee";
import amazonImg from "../assets/brands/amazon.png";
import casioImg from "../assets/brands/casio.png";
import moonstarImg from "../assets/brands/moonstar.png";
import randstadImg from "../assets/brands/randstad.png";
import starImg from "../assets/brands/star.png";
import start_peopleImg from "../assets/brands/start_people.png";

const SalesTeams = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-center text-[#03373D]">
        We've helped thousands of sales teams
      </h3>

      <Marquee gradient={true} gradientColor={"rgb(240, 240, 240)"}>
        <div className="flex items-center justify-around gap-16 px-8 my-6">
          <img src={amazonImg} alt="" />
          <img src={casioImg} alt="" />
          <img src={moonstarImg} alt="" />
          <img src={randstadImg} alt="" />
          <img src={starImg} alt="" />
          <img src={start_peopleImg} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default SalesTeams;
