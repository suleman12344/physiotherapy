"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { MouseEvent, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="font-sans border-b border-gray-400 shadow-md">
      <nav className="flex justify-between items-center w-[92%] mx-auto pt-4 pb-4">
        <div>
          <h1 className="font-bold text-2xl text-[#865B75]">CupidAi</h1>
        </div>
        <div
          className={`bg-white duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link
                href="/"
                className="md:text-lg text-2xl hover:text-[#865B75] hover:border-b border-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutUs"
                className="md:text-lg text-2xl hover:text-[#865B75] hover:border-b border-gray-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="md:text-lg text-2xl hover:text-[#865B75] hover:border-b border-gray-400"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="md:text-lg text-2xl hover:text-[#865B75] hover:border-b border-gray-400"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#D8DAD3] px-5 py-2 rounded-full text-black hover:bg-[#865B75]">
            Sign in
          </button>
          <p
            onClick={onToggleMenu}
            className="text-black text-3xl cursor-pointer md:hidden"
          >
            ☰
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
