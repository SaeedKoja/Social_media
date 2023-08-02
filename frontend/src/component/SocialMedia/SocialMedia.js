import React from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const SocialMedia = () => {
  return <div className="SocialMedia flex mt-[60px] justify-center">
    <Left />
    <Center />
    <Right />
  </div>;
};

export default SocialMedia;
