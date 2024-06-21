import React from "react";
import { avatar } from "../assets";
import { cardDetails, socials } from "../constants";

const SocialLinks = () => {
  return (
    <div className="items-center justify-center m-auto text-center cardBackground lg:w-[250px] h-[420px] px-[10px] py-[10px] rounded-md sm:w-[100%] sm:px-[20px] md:px-[20px]">
      <img
        className="m-auto rounded-full w-[70px] h-[70px]"
        src={avatar}
        alt=""
      />
      <div className="pt-[20px]">
        <h1 className="bg-none font-semibold text-[17px]">
          {cardDetails.name}
        </h1>
        <p className="text-[#48bB78] font-semibold text-[10px] pt-[5px]">
          {cardDetails.address}
        </p>
        <p className="pt-[12px] text-[10px] text-[#777]">"{cardDetails.bio}"</p>
      </div>

      <div className="pt-[15px]">
        <ul className="flex flex-col px-[5px]">
          <li className="bg-[#333] px-[5px] py-[6px] rounded-md hover:bg-[#48bB78] hover:text-black  cursor-pointer transition duration-300ms ease-in">
            <a className="text-[11px] font-medium" href="">
              {socials.social1}
            </a>
          </li>
          <li className="bg-[#333] mt-[7px] px-[5px] py-[6px] rounded-md hover:bg-[#48bB78] hover:text-black  cursor-pointer transition duration-300ms ease-in">
            <a className="text-[11px] font-medium" href="">
              {socials.social2}
            </a>
          </li>
          <li className="bg-[#333] mt-[7px] px-[5px] py-[6px] rounded-md hover:bg-[#48bB78] hover:text-black  cursor-pointer transition duration-300ms ease-in">
            <a className="text-[11px] font-medium" href="">
              {socials.social3}
            </a>
          </li>
          <li className="bg-[#333] mt-[7px] px-[5px] py-[6px] rounded-md hover:bg-[#48bB78] hover:text-black  cursor-pointer transition duration-300ms ease-in">
            <a className="text-[11px] font-medium" href="">
              {socials.social4}
            </a>
          </li>
          <li className="bg-[#333] mt-[7px] px-[5px] py-[6px] rounded-md hover:bg-[#48bB78] hover:text-black  cursor-pointer transition duration-300ms ease-in">
            <a className="text-[11px] font-medium" href="">
              {socials.social5}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
