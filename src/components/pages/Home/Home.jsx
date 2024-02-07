/** @format */

import React from "react";
import Profiles from "../About/Profiles/Profiles";
import WorkTogether from "../About/WorkTogether/WorkTogether";
import Blog from "./Blog/Blog";
import Feature from "./Feature/Feature";
import IntroInfo from "./IntroInfo/IntroInfo";
import ServiceOffering from "./ServiceOffering/ServiceOffering";
import TotalTime from "./TotalTime/TotalTime";

const Home = () => {
  return (
    <section>
      <div className='flex flex-row gap-6'>
        <IntroInfo></IntroInfo>
        <Feature></Feature>
      </div>
      <div className='mt-8 flex flex-row gap-9'>
        <Blog></Blog>
        <ServiceOffering></ServiceOffering>
        <Profiles></Profiles>
      </div>

      <div className='mt-8 flex flex-row gap-8'>
        <TotalTime></TotalTime>
        <WorkTogether></WorkTogether>
      </div>
    </section>
  );
};

export default Home;
