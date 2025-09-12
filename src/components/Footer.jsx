import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="w-full  bg-black mt-10 md:mt-16 lg:mt-16 lg:grid lg:grid-cols-5 lg:px-32 md:grid md:grid-cols-5 md:px-1 md:py-10">
        {/* 1 */}
        <div className="w-full  p-10  md:px-6">
          <div className="flex gap-2 ">
            <img src="public/logo/logo.png" alt="" className="w-12" />
            <h1 className="py-4 text-2xl font-bold text-white">VELORA</h1>
          </div>
          <p className="py-4 font-bold text-white ">
            Classic looks for Men, Women & Kids.
          </p>
          <div className="w-full mt-4 flex space-x-4 text-2xl lg:text-2xl text-white">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
        {/* 2 */}
        <div className="w-full  px-10  md:ml-4 md:mt-10 md:px-2">
          <h1 className="text-white text-lg font-bold">Quick Links</h1>
          <ul className="mt-5 space-y-1">
            <li className="text-white hover:text-red-500 transition-color duration-500">Home</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Shop</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">About</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Contact</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="w-full md:ml-4 px-10 mt-10 md:px-2">
          <h1 className="text-white text-lg font-bold">Shop</h1>
          <ul className="mt-5 space-y-1">
            <li className="text-white hover:text-red-500 transition-color duration-500">Mens Wear</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Womens Wear</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Kids Wear</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Accesseries</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="w-full px-10 mt-10 md:px-2 md:ml-4">
          <h1 className="text-white text-lg font-bold">Help</h1>
          <ul className="mt-5 space-y-1">
            <li className="text-white hover:text-red-500 transition-color duration-500">FAQ's</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Return Policy</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Order Status</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Shipping & Delivery</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="w-full  px-10 mt-10 md:px-2 md:ml-4">
          <h1 className="text-white text-lg font-bold">My Profile</h1>
          <ul className="mt-5 space-y-1">
            <li className="text-white hover:text-red-500 transition-color duration-500">My Account</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Track Order</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">My Cart</li>
            <li className="text-white hover:text-red-500 transition-color duration-500">Order History</li>
          </ul>
        </div>

        <div className="col-span-1 px-10 md:col-span-5 md:px-5 lg:col-span-5 mt-6">
          <div className="border-b border-gray-400 w-full"></div>
        </div>
        <div className="h-[100px] w-full"></div>
      </div>
    </>
  );
}
