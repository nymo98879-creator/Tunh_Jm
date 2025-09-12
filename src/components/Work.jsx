import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
export default function Work1() {
  return (
    <div>
      <div className="w-full h-[100%] lg:h-[550px] md:h-[550px]  bg-red-200">
        {/* Top */}
        <div className="w-full h-[200px] lg:h-[40%] md:h-[40%]  flex justify-center items-center">
          <div className="">
            <h1 className=" text-center text-3xl lg:text-5xl md:text-4xl font-bold">
              How It Work
            </h1>
            <p className="text-center mt-3">Just Pick, Pack and Ship</p>
          </div>
        </div>
        {/* main */}
        <div className="w-full h-[700px] lg:h-[40%] md:h-[40%] flex justify-center px-5 lg:px-36 md:px-10">
          <div className="bg-white w-full h-[95%] lg:h-[100%] md:h-[100%] rounded-2xl overflow-hidden px-6 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 ">
            {/*  */}
            <div className="w-full h-[33.33%] lg:h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] bg-white border-b border-black/50  lg:border-white md:border-white  flex justify-center flex-wrap ">
              <div className="h-[45%] w-full lg:w-[20%] lg:h-full md:w-[20%] md:h-full flex justify-center items-center">
                <div className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]  md:h-[50px] md:w-[60px]  rounded-full bg-white border-2 border-red-500 flex justify-center items-center lg:mb-10 md:mb-28">
                  <FaShoppingBag className="text-2xl text-red-500" />
                </div>
              </div>
              <div className="w-full h-[55%] lg:h-[100%] lg:w-[80%] md:h-[100%] md:w-[80%] lg:mt-14 md:mt-5 lg:px-4 md:px-4 ">
                <h1 className="text-center lg:text-start md:text-start  text-lg font-bold">
                  Shop Styles
                </h1>
                <p className="text-center lg:text-start lg:text-[18px] md:text-start md:text-[18px] mt-2 ">
                  Browse our curated <br />
                  collections for Men, Women, Kids & Accessories.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[33.33%] lg:h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] bg-white border-b border-black/50  lg:border-white md:border-white  flex justify-center flex-wrap">
              <div className="h-[45%] w-full lg:w-[20%] lg:h-full md:w-[20%] md:h-full flex justify-center items-center">
                <div className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]  md:h-[50px] md:w-[60px]  rounded-full bg-white border-2 border-red-500 flex justify-center items-center lg:mb-10 md:mb-28">
                  <MdWatchLater className="text-2xl text-red-500" />
                </div>
              </div>
              <div className="w-full h-[55%] lg:h-[100%] lg:w-[80%] md:h-[100%] md:w-[80%] lg:mt-14 md:mt-5 lg:px-4 md:px-4">
                <h1 className="text-center lg:text-start md:text-start  text-lg font-bold">
                  Pick Your Fit
                </h1>
                <p className="text-center lg:text-start lg:text-[18px] md:text-start md:text-[18px] mt-2 ">
                  Pick Your Fit Find your perfect size with our detailed fit
                  guides and style notes for every piece.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[33.33%] lg:h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] bg-white  lg:border-white flex justify-center flex-wrap">
              <div className="h-[45%] w-full lg:w-[20%] lg:h-full md:w-[20%] md:h-full flex justify-center items-center">
                <div className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]  md:h-[50px] md:w-[60px]  rounded-full bg-white border-2 border-red-500 flex justify-center items-center lg:mb-10 md:mb-28">
                  <FaClipboardCheck className="text-2xl text-red-500" />
                </div>
              </div>
              <div className="w-full h-[55%] lg:h-[100%] lg:w-[80%] md:h-[100%] md:w-[80%] lg:mt-14 md:mt-5 lg:px-4 md:px-4">
                <h1 className="text-center lg:text-start md:text-start  text-lg font-bold">
                  Checkout Fast
                </h1>
                <p className="text-center lg:text-start lg:text-[18px] md:text-start md:text-[18px] mt-2 ">
                  Enjoy a quick and secure checkout experience with flexible
                  payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
