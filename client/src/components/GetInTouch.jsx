import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
  };

  return (
    <>
      {/* Hero Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1f4a50] to-[#2a5a65]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto px-2">
              Start your journey to healthy legs—contact us today
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                  Our Contacts
                </h3>

                {/* Address */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                    Renuka Avenue Karnika Polyclinic <br />
                    near City One Mall, behind Keys Hotel <br />
                    Morewadi, Pimpri Colony <br />
                    Pimpri-Chinchwad, Maharashtra 411018 <br />
                    India
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Email Us
                    </h4>
                    <Link
                      to="mailto:abhi9kesarwani@gmail.com"
                      className="text-blue-200 text-sm sm:text-base hover:text-white transition-colors"
                    >
                      abhi9kesarwani@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Call Us
                    </h4>
                    <Link
                      to="tel:+919970787600"
                      className="text-blue-200 text-sm sm:text-base hover:text-white transition-colors"
                    >
                      +91 997-078-7600
                    </Link>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-share-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                      Follow Us
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        {
                          href: "https://facebook.com/healthylegs",
                          icon: "ri-facebook-fill",
                        },
                        {
                          href: "https://instagram.com/healthylegs",
                          icon: "ri-instagram-fill",
                        },
                        {
                          href: "https://twitter.com/healthylegs",
                          icon: "ri-twitter-x-fill",
                        },
                        {
                          href: "https://linkedin.com/company/healthylegs",
                          icon: "ri-linkedin-fill",
                        },
                        {
                          href: "https://youtube.com/@healthylegs",
                          icon: "ri-youtube-fill",
                        },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                        >
                          <i className={`${item.icon} text-white text-base sm:text-lg`}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f4a50] mb-6">
                Book Appointment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold text-sm sm:text-base mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold text-sm sm:text-base mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold text-sm sm:text-base mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold text-sm sm:text-base mb-2"
                  >
                    Appointment Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent text-sm sm:text-base resize-y"
                    placeholder="Please describe your condition, preferred date/time, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#1f4a50] hover:bg-[#2a5a65] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <i className="ri-calendar-check-line text-lg sm:text-xl"></i>
                  <span>Book Appointment</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Transport */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f4a50] mb-4 sm:mb-6 flex items-center">
                <i className="ri-car-line text-2xl sm:text-3xl mr-2 sm:mr-3"></i>
                How to Reach Us
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-roadster-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">By Car</div>
                    <div>Ample parking available at the clinic premises</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-bus-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">By Public Transport</div>
                    <div>Regular bus services to Pimpri Colony area</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f4a50] mb-4 sm:mb-6 flex items-center">
                <i className="ri-calendar-check-line text-2xl sm:text-3xl mr-2 sm:mr-3"></i>
                Appointment Guidelines
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-time-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Advance Booking</div>
                    <div>Book appointments 24-48 hours in advance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-alarm-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Arrival Time</div>
                    <div>Please arrive 15 minutes before appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f4a50] mb-4 sm:mb-6 flex items-center">
                <i className="ri-shield-cross-line text-2xl sm:text-3xl mr-2 sm:mr-3"></i>
                Patient Safety & Hygiene
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-hand-sanitizer-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Sanitization</div>
                    <div>Complete sanitization after each patient</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-hospital-line text-[#1f4a50] text-lg sm:text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Clean Environment</div>
                    <div>Sterile equipment and hygienic facilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
