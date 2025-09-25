"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
const Header = () => {
  return (
    <section className="bg-[#F0F2F4]">
      {/* Topnav */}
      <div className="container mx-auto flex justify-between items-center py-2 px-10 lg:px-20 border-b border-gray-200">
        <p className="text-gray-700 text-sm">
          We believe every interaction with our patients is an opportunity!
        </p>
        <div className="flex items-center gap-6">
          {/* Social icons */}
          <div className="flex gap-6">
            <GrFacebookOption color="#999999" size={20} />
            <FaTwitter color="#999999" size={20} />
            <TfiGoogle color="#999999" size={20} />
            <FaLinkedinIn color="#999999" size={20} />
          </div>
          {/* CTA Button */}
          <button className="text-main font-medium px-4 py-1 rounded-md hover:underline transition">
            {" "}
            + Book Appointment
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Header */}
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/nav-bg.png")' }}>
        <div
          className="container mx-auto flex justify-between items-center py-[35px] px-10 lg:px-20 "
          
        >
          {/* Logo */}
          <Image
            src="/assets/Logo.png"
            alt="SafeCareHolding Logo"
            width={150}
            height={50}
            priority
          />
          {/* Location & Contact */}
          <div className="flex gap-10 text-sm">
            {" "}
            {/* Location */}
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/Location.png"
                  alt="Location Icon"
                  width={29}
                  height={34}
                />
                <h3 className="font-bold text-[28px] text-[#222222]">
                  Our Location
                </h3>
              </div>
              <p className="text-[#5A5C5D] text-sm">
                E44 - Web Corner, Melbourne - 18
              </p>
            </div>
            {/* Phone */}
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/phone.png"
                  alt="Phone Icon"
                  width={29}
                  height={34}
                />
                <h3 className="font-bold text-[28px] text-[#222222]">
                  (+1) 800 433 633
                </h3>
              </div>
              <p className="text-[#5A5C5D] text-sm">
                Call Us Now – 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation rows */}
      <div className="w-full flex">
        {/* First row */}
        <div className="bg-main w-full py-[35px] px-10 lg:px-20">
          <ul className="flex justify-end items-center space-x-10 text-[12px] md:text-sm text-white pr-4">
            <li>
              <Link href="/" className="hover:text-[#1E3D69]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#1E3D69]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#1E3D69]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-[#1E3D69]">
                Our Teams
              </Link>
            </li>
          </ul>
        </div>
        {/* Second row */}
        <div className="bg-main w-full py-[35px]">
          <ul className="flex justify-start items-center space-x-10 text-[12px] md:text-sm text-white pl-4">
            <li>
              <Link href="/departments" className="hover:text-[#1E3D69]">
                Departments
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#1E3D69]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#1E3D69]">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Header;
