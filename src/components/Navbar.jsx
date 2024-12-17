import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-white flex justify-around items-center py-6 shadow-custom font-poppins">
        <div>
          <span className="font-bold text-3xl text-blue-400 uppercase">
            Shoppy
          </span>
        </div>

        <div>
          <ul className="flex gap-4 font-semibold">
            <li className="">
              <NavLink
                to="/"
                className={" hover:border-b-2 hover:border-blue-400 pb-1"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={" hover:border-b-2 hover:border-blue-400 pb-1"}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={" hover:border-b-2 hover:border-blue-400 pb-1"}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={" hover:border-b-2 hover:border-blue-400 pb-1"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <button className="font-medium border-2 border-blue-400 py-2 px-4 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
