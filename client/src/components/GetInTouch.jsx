import React, { useState } from "react";

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
    // Handle form submission here
    console.log("Appointment booked:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1f4a50] to-[#2a5a65]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to take the first step towards healthier legs? Contact us
            today for expert consultation and personalized treatment plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                Our Contacts
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Visit Our Clinic
                  </h4>
                  <p className="text-blue-200 leading-relaxed">
                    Renuka Avenue Karnika Polyclinic
                    <br />
                    near City One Mall, behind Keys Hotel
                    <br />
                    Morewadi, Pimpri Colony
                    <br />
                    Pimpri-Chinchwad, Maharashtra 411018
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Email Us
                  </h4>
                  <a
                    href="mailto:abhi9kesarwani@gmail.com"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    abhi9kesarwani@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Call Us
                  </h4>
                  <a
                    href="tel:+919970787600"
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-lg"
                  >
                    +91 997-078-7600
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-share-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/healthylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className="ri-facebook-fill text-white text-lg"></i>
                    </a>
                    <a
                      href="https://instagram.com/healthylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className="ri-instagram-fill text-white text-lg"></i>
                    </a>
                    <a
                      href="https://twitter.com/healthylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className="ri-twitter-x-fill text-white text-lg"></i>
                    </a>
                    <a
                      href="https://linkedin.com/company/healthylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className="ri-linkedin-fill text-white text-lg"></i>
                    </a>
                    <a
                      href="https://youtube.com/@healthylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1f4a50] hover:bg-[#2a5a65] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className="ri-youtube-fill text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1f4a50] mb-6">
              Book Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone on Same Line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Appointment Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4a50] focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Please describe your condition, preferred date/time, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1f4a50] hover:bg-[#2a5a65] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <i className="ri-calendar-check-line text-xl"></i>
                <span>Book Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
