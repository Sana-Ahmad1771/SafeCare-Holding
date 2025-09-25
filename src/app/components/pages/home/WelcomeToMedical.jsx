"use client";
import React, { useState } from "react";
import { FaAmbulance, FaUserMd, FaHeadset, FaLaptopMedical } from "react-icons/fa";

const WelcomeToMedical = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    day: "",
    time: "",
    doctorname: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment request submitted successfully!");
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-16">
          {/* Left Content Section */}
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F89D1] uppercase mb-4">
                Welcome to Medical
              </h2>

              {/* Three dots indicator */}
              <div className="flex justify-center lg:justify-start space-x-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
              </div>

              <p className="text-gray-600 mb-10 leading-relaxed">
                So far geregistrlich unbei demals hier muss er nur ein
                vollgesteem accountürem dokumentarer lausfornieren. Klasen nun
                sprechen, ebenso das was ab Tilo investiere.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Emergency Services */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#33A9EE]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F89D1] mb-3">
                    <FaAmbulance className="text-[#33A9EE] text-2xl" />
                    EMERGENCY SERVICES
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dolar ist amet connected piloting eilam sed do elasmod
                    temporus.
                  </p>
                </div>

                {/* Qualified Doctors */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#33A9EE]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F89D1] mb-3">
                    <FaUserMd className="text-[#33A9EE] text-2xl" />
                    QUALIFIED DOCTORS
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dolar ist amet connected piloting eilam sed do elasmod
                    temporus.
                  </p>
                </div>

                {/* 24/7 Support */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#33A9EE]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F89D1] mb-3">
                    <FaHeadset className="text-[#33A9EE] text-2xl" />
                    24/7 SUPPORT
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dolar ist amet connected piloting eilam sed do elasmod
                    temporus.
                  </p>
                </div>

                {/* Online Appointment */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#33A9EE]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F89D1] mb-3">
                    <FaLaptopMedical className="text-[#33A9EE] text-2xl" />
                    ONLINE APPOINTMENT
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dolar ist amet connected piloting eilam sed do elasmod
                    temporus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-[35%]">
            <div className="bg-[#F7F7F7] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0F89D1] mb-6 text-center">
                APPOINTMENT FORM
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                    required
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                  <div>
                    <select
                      name="day"
                      value={formData.day}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                      required
                    >
                      <option value="">Day</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                      required
                    >
                      <option value="">Time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name="doctorname"
                      value={formData.doctorname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                      required
                    >
                      <option value="">Doctor Name</option>
                      <option value="Sana">Sana</option>
                      <option value="Malik">Malik</option>
                      <option value="Hani">Hani</option>
                      <option value="Burhan">Burhan</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A9EE]"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-x-2 text-sm">
                    <input type="checkbox" id="notify" />
                    <label htmlFor="notify">Send Email Notification</label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#33A9EE] w-fit text-white px-5 py-3 rounded-md font-medium hover:bg-[#0F89D1] transition duration-300"
                  >
                    Submit Appointment
                  </button>
                </div>
              </form>

              {/* Three dots indicator at bottom of form */}
              <div className="flex justify-center space-x-2 mt-8">
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
                <span className="w-3 h-3 rounded-full bg-[#33A9EE]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToMedical;
