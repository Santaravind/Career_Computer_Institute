import React from "react";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

function Header() {
  return (
    <div className="bg-[oklch(30.9%_0.146_260.522)] text-white font-roboto text-md py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
      
      {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
        {/* Location */}
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-base" />
          <span>Robertsganj, Sonbhadra, Uttar Pradesh</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <MdCall className="text-base" />
          <span>+91 70072 72808</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <MdEmail className="text-base" />
          <span className="break-all">computertraininginstitute@gmail.com</span>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium mr-1">Follow Us:</span>
        
        <a href="#" className="p-1.5 bg-white text-[oklch(35.9%_0.146_265.522)] rounded-full hover:bg-opacity-90 transition-colors">
          <FaFacebookF className="text-xs" />
        </a>
        
        <a href="#" className="p-1.5 bg-white text-[oklch(35.9%_0.146_265.522)] rounded-full hover:bg-opacity-90 transition-colors">
          <FaInstagram className="text-xs" />
        </a>
        
        <a href="#" className="p-1.5 bg-white text-[oklch(35.9%_0.146_265.522)] rounded-full hover:bg-opacity-90 transition-colors">
          <FaLinkedinIn className="text-xs" />
        </a>
        
        <a href="#" className="p-1.5 bg-white text-[oklch(35.9%_0.146_265.522)] rounded-full hover:bg-opacity-90 transition-colors">
          <FaYoutube className="text-xs" />
        </a>
      </div>

    </div>
  );
}

export default Header;