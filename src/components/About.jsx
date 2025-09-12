import React from "react";
import {
  FaShirt,
  FaPersonDress,
  FaUserTie,
  FaUsers,
  FaTape,
  FaEye,
  FaInstagram,
} from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
export default function About() {
  return (
    <div>
      <div className="w-full">
        {/*  */}
        <div className="w-full h-[300px] md:h-[450px] bg-gray-600 relative">
          <img
            src="/banner/about1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="bg-black/55 w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <div>
              <h1 className="text-4xl font-bold text-center text-white">
                Style That Moves <br /> With You
              </h1>
              <p className="text-white text-center">
                Born from a passion for timeless design and <br /> everyday
                comfort
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-[150px] bg-white px-10 flex justify-center flex-wrap items-center ">
          {/*  */}
          <div>
            <h1 className="text-2xl font-bold w-full text-center ">
              What Makes Velora Stand Out
            </h1>
            <p className="text-center">
              Style, Comfort & More - Here's Why You'll Love Us
            </p>
          </div>
        </div>

        {/* card */}
        <div className="w-full grid grid-cols-1 md:grid md:grid-cols-4 md:gap-4   px-5 space-y-8">
          {/*  */}
          <div className="w-full h-[200px] md:h-[400px] rounded-xl border-2 md:mt-8 border-gray-400/50">
            <div className="w-full h-[40%]  flex justify-center items-center">
              <FaShirt className="text-red-500 text-6xl" />
            </div>
            <div className="text-center px-5 py-2">
              <h1 className="text-xl font-bold">Premium Quality</h1>
              <p className="text-[15px] py-2">
                Crafted with care using soft, durable fabrics designed to last
                and feel amazing.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-[200px] md:h-[400px]  rounded-xl border-2 border-gray-400/50">
            <div className="w-full h-[40%]  flex justify-center items-center">
              <FaPersonDress className="text-red-500 text-6xl" />
            </div>
            <div className="text-center px-5 py-2">
              <h1 className="text-xl font-bold">Timeless Style</h1>
              <p className="text-[15px] py-2">
                Clean silhouettes and versatile pieces you can wear season after
                season.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-[200px] md:h-[400px]  rounded-xl border-2 border-gray-400/50">
            <div className="w-full h-[40%]  flex justify-center items-center">
              <FaUserTie className="text-red-500 text-6xl" />
            </div>
            <div className="text-center px-5 py-2">
              <h1 className="text-xl font-bold">In-House Design</h1>
              <p className="text-[15px] py-2">
                Every detail is imagined by our in-house design team to bring
                you standout staples.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-[200px] md:h-[400px] rounded-xl border-2 border-gray-400/50">
            <div className="w-full h-[40%]  flex justify-center items-center">
              <FaUsers className="text-red-500 text-6xl" />
            </div>
            <div className="text-center px-5 py-2">
              <h1 className="text-xl font-bold">For Every Body</h1>
              <p className="text-[15px] py-2">
                Inclusive fits and sizes designed to flatter all shapes, ages,
                and styles.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-[100vh] bg-red-100 mt-20">
          <div className="w-full h-[35%]  px-6 py-16">
            <img src="/public/about/image1.png" alt="" />
          </div>
          <div className="w-full h-[65%]  px-6 py-4">
            <div className="w-full h-[90%] rounded-2xl bg-white">
              <div className="w-full h-[20%] flex justify-center items-center">
                <FaTape className="text-red-500 text-5xl " />
              </div>
              <div className="text-center px-6">
                <h1 className="text-2xl font-bold">More Than Just Clothing</h1>
                <p className="mt-5 text-black/70 text-[16px]">
                  At Velora, we believe fashion should feel as good as it looks.
                  Born from a passion for timeless design and everyday comfort,
                  our mission is simple: to create versatile, high-quality
                  clothing that empowers confidence — for everyone, every day.
                </p>
                <p className="mt-5  text-black/70 text-[16px]">
                  Whether you're dressing up for a moment or down for the
                  everyday, our collections are made to move with you, evolve
                  with your lifestyle, and elevate your wardrobe — effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-[400px] bg-black text-white">
          <div className="px-5 py-20">
            <h1 className="text-3xl font-medium">
              Thoughtfully Designed for All
            </h1>
            <p className="py-10  text-white text-[16px]">
              Our range covers Men, Women, and Kids, with each piece carefully
              crafted to combine form, function, and feeling. From the perfect
              polo to the softest loungewear and statement outerwear, everything
              at Velora is designed with real life in mind — easy to wear, easy
              to love. We also believe in the power of details. That's why we
              obsess over fit, fabric, and finish — so you don't have to.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="w-full ">
          <div className="w-full h-[200px] text-center px-8 py-16">
            <h1 className=" font-bold  text-3xl">Our Purpose, Your Style</h1>
            <p className=" mt-4 text-black/70 text-[16px]">
              At Velora, everything we create starts with you — your lifestyle,
              your confidence, and your need for fashion that truly fits.
            </p>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 px-5 mt-10 ">
            {/*  */}
            <div className="w-full h-[350px]  rounded-xl border-2 border-gray-400/50">
              <div className="w-full h-[35%]  flex justify-center  items-center">
                <div className="w-[70px] h-[70px] bg-red-500 rounded-full flex justify-center items-center">
                  <FaEye className="text-white text-3xl" />
                </div>
              </div>
              <div className="text-center px-5 w-full h-[65%]">
                <h1 className="text-xl font-bold">Our Mission</h1>
                <p className=" py-2  text-black/70 text-[16px]">
                  To create timeless, high-quality fashion that blends comfort
                  with confidence. We're here to empower individuals of all ages
                  and body types with clothing that fits seamlessly into real
                  life — versatile, inclusive, and made to be lived in. We
                  design with purpose, craft with care, and always put people
                  first.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[350px]  rounded-xl border-2 border-gray-400/50 mt-8">
              <div className="w-full h-[35%]  flex justify-center  items-center">
                <div className="w-[70px] h-[70px] bg-red-500 rounded-full flex justify-center items-center">
                  <TbTargetArrow className="text-white text-3xl" />
                </div>
              </div>
              <div className="text-center px-5 w-full h-[65%]">
                <h1 className="text-xl font-bold">Our Vision</h1>
                <p className=" py-2  text-black/70 text-[16px]">
                  To become a trusted, global fashion destination that redefines
                  modern essentials. We envision a world where style is
                  accessible, self-expression is celebrated, and fashion feels
                  effortless for everyone — from city streets to family
                  weekends. At Velora, we aim to lead with creativity,
                  integrity, and a deep understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full  mt-16">
          <div className="w-full px-10 py-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
              Get 10% Off Your First Order
            </h1>
            <p className="text-center mt-4">
              Plus exclusive access to product drops, style tips, and insider
              deals.
            </p>
          </div>
          <form
            action=""
            className="md:flex md:justify-center md:items-center lg:mr-4"
          >
            <div className="w-full md:w-[60%] lg:w-[37%] h-full  flex justify-center items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="ENTER YOUR ORDER *"
                className="w-[90%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:shadow-lg"
              />
            </div>
            <div className=" md:w-[20%] lg:w-[8%] h-full  flex justify-center items-center ">
              <div className="w-[90%] md:w-[100%] mt-10 md:mt-0 px-3 py-2  text-center rounded-md text-white bg-red-500">
                SUBSRIPBE
              </div>
            </div>
          </form>
          {/* card */}
          <div className="w-full grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 gap-5 px-5 lg:px-36 py-10">
            <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
              <img
                src="public/card/subscribe1.png"
                alt=""
                className="w-full h-full "
              />
            </div>
            <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
              <img
                src="public/card/subscribe2.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden ">
              <img
                src="public/card/subscribe3.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
              <img
                src="public/card/subscribe4.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <FaInstagram className="text-red-500 text-4xl" />
              <b className="px-2 text-lg">Follow us </b>
              <h1 className="">@VeloraStyle</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
