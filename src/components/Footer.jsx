import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:bg-violet-700" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:bg-violet-700" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:bg-violet-700" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:bg-violet-700" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-violet-700">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-violet-700">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-violet-700">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-violet-700">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-black text-center items-center py-3">© {currentYear} Vogue Venture, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;