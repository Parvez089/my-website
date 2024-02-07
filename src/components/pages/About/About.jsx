/** @format */

import React from "react";
import Experience from "../Home/Experience";
import Summary from "../Home/Summary";
import ProfilesAndWork from "./ProfilesAndWork/ProfilesAndWork";

const About = () => {
  return (
    <div className='mt-12'>
      <Summary></Summary>
      <Experience></Experience>
      <ProfilesAndWork></ProfilesAndWork>
    </div>
  );
};

export default About;
