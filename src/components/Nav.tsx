import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";

function Nav() {
  return (
    <div className="container mt-1 border-2 shadow-lg bg-gradient-to-r from-[#54F0D8] to-[#FBEF89] w-full max-w-[1200px] h-18 flex border-black">
      <div className=" flex-row border-black border-2 justify-between flex w-full">
        <div className="nav--logo flex p-2   justify-between">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={1}
            className="mr-14"
          />
          <div className="nav--links  items-center flex">
            <div className="nav--about  mr-3 border border-black bg-[#E3DFDC] cursor-pointer">
              <div className="border-t border-l border-white  p-1 px-2 h-full flex items-center justify-center ">
                ABOUT
              </div>
            </div>
            <div className="nav--buy  mr-3 border border-black bg-[#E3DFDC] cursor-pointer">
              <div className="border-t border-l border-white  p-1 px-2 h-full flex items-center justify-center">
                HOW TO BUY
              </div>
            </div>
            <div className="nav--tech  border border-black bg-[#E3DFDC] cursor-pointer">
              <div className="border-t border-l border-white  p-1 px-2 h-full flex items-center justify-center">
                TECH
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="nav--buynow flex
           justify-center items-center  border-black border mr-8 h-10 bg-gradient-to-r from-[#7D4EFB] to-[#FFA1D5] text-white
         cursor-pointer "
          >
            <div className="border-r border-b border-[#E3DFDC] px-3 h-full flex items-center justify-center ">
              BUY NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
