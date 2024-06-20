import React from "react";
import { avatar } from "../assets";

const SocialLinks = () => {
  return (
    <div className="items-center justify-center m-auto text-center cardBackground w-fit h-fit px-[10px] py-[10px]">
      <img className="m-auto rounded-full w-[50px]" src={avatar} alt="" />{" "}
    </div>
  );
};

export default SocialLinks;
