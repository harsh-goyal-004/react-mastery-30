import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex h-12  items-center justify-center">
        <ul className=" shadow-2xl px-14 text-lg font-semibold py-2 rounded-2xl border-2 flex gap-24 mt-10">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to={"/blog"}>
            <li>Blog</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
