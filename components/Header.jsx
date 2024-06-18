import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-20 items-center sticky top-0 bg-white px-5">
      {/* for logo */}
      <Link href="/">
        <div className="text-2xl cursor-pointer">Mobigency</div>
      </Link>

      {/* for options */}
      <div className="hidden lg:flex space-x-5">
        <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
          Who we are?
        </h1>
        <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
          What we do?
        </h1>
        <Link href="/Contact">
          <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contact Us
          </h1>
        </Link>
      </div>
      <Link href="/Login">
        <button className=" bg-blue-700 text-white px-5 py-2 font-bold rounded-md ">
          Login / SignUp
        </button>
      </Link>
    </header>
  );
};

export default Header;
