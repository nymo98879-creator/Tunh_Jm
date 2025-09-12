import { MdAccountCircle } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const [menu, setMenu] = useState(false)
    return (
      <>
        {/* for computer */}
        <nav className="w-full h-[70px] xl:flex hidden ">
          <div className="w-[15%] h-full  px-10">
            <img src="/logo/logo.png" alt="" className="w-12" />
          </div>
          <div className="w-[70%] h-full ">
            <ul className="flex justify-evenly items-center h-full text-xl font-medium ">
              <li className="cursor-pointer hover:text-red-500">
                {/* <Link to={"/"}>Home</Link> */}
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                {/* <Link to={"/shop"}>Shop</Link> */}
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  shop
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Blog
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                {/* <Link to={"/about"}>About</Link> */}
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <NavLink
                  to="/careers"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Carreers
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <NavLink
                  to="/faq"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  FAQ's
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[15%] h-full flex items-center text-3xl justify-evenly">
            <MdAccountCircle />
            <GrShop />
          </div>
        </nav>

        {/* ---------- for mobile --------------- */}
        <nav className="lg:hidden w-full h-[70px] shadow-md flex">
          <div className="w-[50%] px-4 py-2">
            <img src="/logo/logo.png" alt="" className="h-full" />
          </div>
          <div className="w-[50%] flex justify-end px-5 items-center text-3xl">
            <div onClick={() => setMenu(!menu)}>
              {menu ? <IoMdClose /> : <FiMenu />}
            </div>
          </div>
          <div
            className={`h-[100vh] z-50 bg-white shadow-md fixed top-0 left-0 transition-all duration-300 overflow-hidden ${
              menu ? "w-[50%]" : "w-0"
            }`}
          >
            <ul className="p-6 space-y-4 text-lg font-medium">
              <li className="hover:text-red-500">
                {/* <Link to={"/"} onClick={() => setMenu(!menu)}>
                  Home
                </Link> */}
                <NavLink
                  to="/"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                <NavLink
                  to="/shop"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                <NavLink
                  to="/blog"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Blog
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                {/* <Link to={"/about"} onClick={() => setMenu(!menu)}>
                  About
                </Link> */}
                <NavLink
                  to="/about"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  About
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                <NavLink
                  to="/carreers"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Careers
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                <NavLink
                  to="/faq"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  FAQ's
                </NavLink>
              </li>
              <li className="hover:text-red-500">
                <NavLink
                  to="/contact"
                  onClick={() => setMenu(!menu)}
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className={`h-[100vh] z-50  fixed top-0 right-0 transition-all duration-300 ${
              menu ? "w-[50%]" : "w-0"
            }`}
            onClick={() => setMenu(!menu)}
          ></div>
        </nav>
        <div className="w-full h-[50px] bg-black text-white  flex justify-center items-center font-medium">
          <p className="animate-pulse">Get 15% off on your first order</p>
        </div>
      </>
    );
}