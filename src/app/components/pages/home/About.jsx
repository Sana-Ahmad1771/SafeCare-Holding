"use client";
import React from "react";
import { FaAmbulance, FaUserPlus, FaClock, FaCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="bg-[#33A9EE] w-full py-10 lg:py-20 px-6 lg:px-12 text-white flex justify-center lg:justify-end items-start">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-10 w-full max-w-[555px]">
            {/* Emergency Case */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-bold mb-2">
                  <FaAmbulance className="text-white text-lg sm:text-xl" />
                  Emergency Case
                </h3>
                <div className="border border-white bg-white w-6 h-[3px]"></div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-center md:text-left">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias.
              </p>
              <button className="border border-white px-5 py-2 text-sm sm:text-base font-medium cursor-pointer hover:text-[#33A9EE] hover:bg-white transition">
                More Details
              </button>
            </div>

            {/* New Registration */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-bold mb-2">
                  <FaUserPlus className="text-white text-lg sm:text-xl" />
                  New Registration
                </h3>
                <div className="border border-white bg-white w-6 h-[3px]"></div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-center md:text-left">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias.
              </p>
              <button className="border border-white px-5 py-2 text-sm sm:text-base font-medium cursor-pointer hover:text-[#33A9EE] hover:bg-white transition">
                More Details
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#F7F7F7] w-full py-10 lg:py-20 px-6 lg:px-12 text-[#0F89D1] flex justify-center lg:justify-start items-start">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-10 w-full max-w-[555px]">
            {/* Opening Hours */}
            <div className="flex-1 space-y-4 w-full">
              <div>
                <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-bold mb-2">
                  <FaClock className="text-[#0F89D1] text-lg sm:text-xl" />
                  Opening Hours
                </h3>
                <div className="border border-[#0F89D1] bg-[#0F89D1] w-6 h-[3px] mb-4"></div>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between border-b pb-2">
                  <p>Monday - Friday</p>
                  <p>8.00 – 18.00</p>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <p>Saturday</p>
                  <p>9.00 – 14.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Sunday</p>
                  <p>8.00 – 13.00</p>
                </div>
              </div>
            </div>

            {/* Doctors Timetable */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-bold mb-2">
                  <FaCalendarAlt className="text-[#0F89D1] text-lg sm:text-xl" />
                  Doctors Timetable
                </h3>
                <div className="border border-[#0F89D1] bg-[#0F89D1] w-6 h-[3px] mb-4"></div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-center md:text-left">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias.
              </p>
              <button className="border border-[#33A9EE] px-5 py-2 text-sm sm:text-base font-medium cursor-pointer hover:text-white hover:bg-[#33A9EE] transition">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
