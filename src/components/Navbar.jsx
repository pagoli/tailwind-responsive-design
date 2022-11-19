import { useState } from "react";
import logo_sparrow_sm from "../assets/logo_sparrow_sm.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="relative container mx-auto p-2 border-b-2 border-b-lightPink lg:text-lg md:text-sm text-base">
      <div className="flex items-center justify-between">
        <div className="pt-0 flex w-44 h-full">
          <img src={logo_sparrow_sm} className="w-20" alt="sparrow logo" />
          <div className="pl-2 leading-5 font-bold h-full self-center">
            <h2>Sparrow</h2>
            <h2>& Friends</h2>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="rounded-full p-2 hover:text-darkPink">
            Pricing
          </a>
          <a href="#" className="rounded-full p-2 hover:text-darkPink">
            Products
          </a>
          <a href="#" className="rounded-full p-2 hover:text-darkPink">
            About Us
          </a>
          <a href="#" className="rounded-full p-2 hover:text-darkPink">
            Careers
          </a>
          <a href="#" className="rounded-full p-2 hover:text-darkPink">
            Community
          </a>
          {/* BUTTON */}
          <a
            href="#"
            className="hidden p-2 md:w-fit w-24 text-center text-white bg-lightPink rounded-full md:block hover:bg-lightGreen hover:text-black"
          >
            Get started
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className={`block hamburger text-4xl md:hidden focus:outline-none ${
            open ? "open" : ""
          }`}
          onClick={(e) => {
            console.log("OPEN? ", open);
            setOpen(!open);
          }}
        >
          {open ? <MdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? "open" : "hidden"} md:hidden`}>
        <div
          className="absolute flex flex-col items-center self-end mt-3 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          id="menu"
        >
          <a
            href="#"
            className="hover:bg-lightPink hover:text-white w-full p-3"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:bg-lightPink hover:text-white w-full p-3"
          >
            Products
          </a>
          <a
            href="#"
            className="hover:bg-lightPink hover:text-white w-full p-3"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:bg-lightPink hover:text-white w-full p-3"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:bg-lightPink hover:text-white w-full p-3"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
