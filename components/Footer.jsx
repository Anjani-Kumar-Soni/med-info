import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="px-5 py-6 text-gray-600">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm">© 2024 Mobigency. All Rights Reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaFacebookF className="hover:text-primary cursor-pointer w-6 h-6" />
          <AiOutlineInstagram className="hover:text-primary cursor-pointer w-6 h-6" />
          <BsWhatsapp className="hover:text-primary cursor-pointer w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
