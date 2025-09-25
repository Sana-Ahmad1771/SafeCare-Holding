"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-80px)] bg-cover bg-center flex items-end px-5 lg:px-20 overflow-hidden"
      style={{ backgroundImage: 'url("/Background.png")' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full pt-10">
        
        {/* Text Content - Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mb-10 md:mb-0 md:pr-10">
          <p className="text-main uppercase tracking-wide mb-2 text-sm sm:text-base lg:text-lg">
            The Best Hospitality WP Theme Forever!
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
            We Care For Your <br /> Health
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-sm sm:max-w-md lg:max-w-lg">
            Qualified Staff With Expertise in Services We Offer for more
            reasonable cost with love. Just explore about more!
          </p>
          <button className="bg-main text-white px-5 sm:px-6 py-2 sm:py-3 hover:text-main hover:bg-[#ffffff] transition uppercase font-medium text-sm sm:text-base cursor-pointer">
            View Our Services <br /> +
          </button>
        </div>

        {/* Doctor Image - Right Side */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/hero-men.png"
            alt="doctor"
            width={500}
            height={900}
            priority
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
