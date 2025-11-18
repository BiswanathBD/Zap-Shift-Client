import React from "react";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import OurServices from "../Components/OurServices";
import SalesTeams from "../Components/SalesTeams";
import Features from "../Components/Features";
import Cover from "../Components/Cover";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <SalesTeams />
      <Features />
      <Cover/>
    </div>
  );
};

export default HomePage;
