/** @format */

import React from "react";
import Profiles from "../Profiles/Profiles";
import WorkTogether from "../WorkTogether/WorkTogether";

const ProfilesAndWork = () => {
  return (
    <div className=' md:flex md:flex-row md:gap-4 md:mt-12 '>
      <Profiles></Profiles>
      <WorkTogether></WorkTogether>
      <Profiles></Profiles>
    </div>
  );
};

export default ProfilesAndWork;
