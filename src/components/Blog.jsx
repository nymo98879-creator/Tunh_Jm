import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="">
        <div className="w-full h-[400px] md:h-[500px] lg:h-[88vh] bg-gray-400 relative lg:flex lg:justify-end">
          {/* <div className='w-full h-full'> */}
          <img
            src="/banner/blog1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* </div> */}
          <div className="w-full  h-[100px]  lg:w-[50%]  absolute z-10 mt-[-200px] lg:mt-[250px] px-20 md:grid md:grid-cols-1">
            <h1 className=" w-full text-3xl lg:text-5xl font-bold text-center mr-2">
              Style, Tips & More
            </h1>
            <span className=" text-center md:text-center text-black/50 ">
              Welcome to The Velora Edit, your go-to destination for all things
              fashion.
            </span>
          </div>
        </div>

        {/* card */}
        <div className="w-full grid grid-cols-1 px-5 py-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-36">
          {/* card1 */}
          <div className="w-full h-[500px] md:h-[700px]  lg:h-[500px] bg-white shadow-lg   rounded-xl  md:rounded-3xl overflow-hidden lg:mt-5">
            <div className="w-full h-[50%]  md:h-[70%] lg:h-[50%] overflow-hidden">
              <img
                src="/banner/blog2.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%] p-5 l grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                Top 5 Accessories That Elevate Any Look
              </h1>
              <span className="font-bold">
                May 15, 2025 | 2 minutes of reading
              </span>
              <p className="text-[17px] text-black/55">
                1. Statement Earrings: The Instant Game-Changer Nothing draws
                attention quite like a pair of bold statement earrings. Whether
                you prefer […]
              </p>
            </div>
          </div>

          {/* card2 */}
          <div className="w-full h-[500px] md:h-[700px] lg:h-[500px] bg-white shadow-lg   rounded-xl md:rounded-3xl overflow-hidden mt-5">
            <div className="w-full h-[50%] md:h-[70%] lg:h-[50%]  overflow-hidden">
              <img
                src="/banner/blog3.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%]  p-5 grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                Mix, Match, Repeat: Building Outfits with Fewer Pieces
              </h1>
              <span className="font-bold">
                May 15, 2025 | 1 minute of reading
              </span>
              <p className="text-[17px] text-black/55">
                Make the Most of What You Have Creating stylish outfits doesn't
                require an overflowing closet—it's all about making smart
                choices
              </p>
            </div>
          </div>

          {/* card3 */}
          <div className="w-full h-[500px] md:h-[700px] lg:h-[500px] bg-white shadow-lg   rounded-xl md:rounded-3xl overflow-hidden mt-5">
            <div className="w-full h-[50%] md:h-[70%] lg:h-[50%]  overflow-hidden">
              <img
                src="/banner/blog4.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%]  p-5 grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                Velora Kids: Fashion Meets Functionality
              </h1>
              <span className="font-bold">
                May 15, 2025 | 1 minute of reading
              </span>
              <p className="text-[17px] text-black/55">
                Designed for Play, Styled for Life At Velora Kids, we believe
                children's clothing should never make you choose between looking
              </p>
            </div>
          </div>

          {/* card4 */}
          <div className="w-full h-[500px] md:h-[700px] lg:h-[500px] bg-white shadow-lg   rounded-xl md:rounded-3xl overflow-hidden mt-5">
            <div className="w-full h-[50%] md:h-[70%] lg:h-[50%]  overflow-hidden">
              <img
                src="/banner/blog5.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%]  p-5 grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                Our Favorite Summer Looks: Light, Breezy & Bold
              </h1>
              <span className="font-bold">
                May 15, 2025 | 2 minutes of reading
              </span>
              <p className="text-[17px] text-black/55">
                Effortless Chic: The Power of Linen & Cotton When the
                temperature rises, comfort meets style in the form of
                lightweight
              </p>
            </div>
          </div>

          {/* card5 */}
          <div className="w-full h-[500px] md:h-[700px] lg:h-[500px] bg-white shadow-lg   rounded-xl md:rounded-3xl overflow-hidden mt-5">
            <div className="w-full h-[50%]  md:h-[70%] lg:h-[50%] overflow-hidden">
              <img
                src="/banner/blog6.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%]  p-5 grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                How to Style One Jacket Three Ways
              </h1>
              <span className="font-bold">
                May 15, 2025 | 2 minutes of reading
              </span>
              <p className="text-[17px] text-black/55">
                Look 1: Casual Day Out Whether you're grabbing a coffee or
                heading to a weekend market, your go-to jacket can
              </p>
            </div>
          </div>

          {/* card6 */}
          <div className="w-full h-[500px] md:h-[700px] lg:h-[500px] bg-white shadow-lg   rounded-xl md:rounded-3xl overflow-hidden mt-5">
            <div className="w-full h-[50%] md:h-[70%] lg:h-[50%]  overflow-hidden">
              <img
                src="/banner/blog7.png"
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>
            <div className="w-full h-[50%] md:h-[30%]  p-5 grid grid-cols-1 md:grid md:grid-cols-1 md:space-y-3">
              <h1 className="text-xl font-bold">
                5 Must-Have Staples for a Capsule Wardrobe
              </h1>
              <span className="font-bold">
                May 15, 2025 | 2 minutes of reading
              </span>
              <p className="text-[17px] text-black/55">
                1. The Classic White Shirt A crisp white shirt is a timeless
                essential that effortlessly transitions from professional to
                casual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
