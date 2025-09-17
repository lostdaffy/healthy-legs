import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

  // Navigation data objects
  const navItems = [
    { name: "Home", to: "/home", icon: "ri-home-4-line" },
    { name: "Services", to: "/services", icon: "ri-phone-line" },
    { name: "Departments", to: "/departments", icon: "ri-phone-line" },
    { name: "About Us", to: "/about", icon: "ri-information-line" },
    { name: "Contact", to: "/contact", icon: "ri-phone-line" },
  ];



  const contactInfo = {
    phone: "+91 997-078-7600",
    email: "abhi9kesarwani@gmail.com",
    emergency: "+91 997-078-7600",
  };

  const ctaButtons = [
    {
      name: "Book Appointment",
      to: "/contact",
      icon: "ri-calendar-check-line",
      type: "primary",
    },
    {
      name: "WhatsApp",
      to: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`,
      icon: "ri-whatsapp-line",
      type: "secondary",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-[#1f4a50] text-white py-3 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
              <i className="ri-phone-line text-sm"></i>
              <Link to={`tel:${contactInfo.phone}`} className="font-medium">
                {contactInfo.phone}
              </Link>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
              <i className="ri-mail-line text-sm"></i>
              <Link to={`mailto:${contactInfo.email}`} className="font-medium">
                {contactInfo.email}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-red-600/80 px-3 py-1 rounded-full animate-pulse">
              <i className="ri-alarm-warning-line text-white text-sm"></i>
              <span className="font-bold text-white text-xs">
                24/7 Emergency: {contactInfo.emergency}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className="bg-[#f7f7f5] shadow-xl sticky top-0 z-50 border-b border-[#1f4a50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/images/logo.jpeg"
                  className="w-25"
                  alt="Healthy Legs Logo"
                />
              </div>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="relative text-gray-700 hover:text-[#1f4a50] font-semibold transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1f4a50] to-[#1f4a50] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {ctaButtons.map((button) => (
                <Link
                  key={button.name}
                  to={button.to}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    button.type === "primary"
                      ? "bg-[#1f4a50] text-white"
                      : "border-2 border-[#1f4a50] text-[#1f4a50] hover:bg-[#1f4a50] hover:text-white"
                  }`}
                >
                  <i className={`${button.icon} text-lg`}></i>
                  <span>{button.name}</span>
                </Link>
              ))}
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative text-gray-700 hover:text-[#1f4a50] focus:outline-none focus:text-[#1f4a50] p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <i className="ri-close-line text-2xl"></i>
                ) : (
                  <i className="ri-menu-line text-2xl"></i>
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[#1f4a50] py-6 bg-gradient-to-b from-white to-blue-50">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#1f4a50] font-semibold px-6 py-3 rounded-xl hover:bg-white transition-all duration-300"
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    <span>{item.name}</span>
                  </Link>
                ))}

                {/* Enhanced Mobile Services Dropdown */}
                <div className="px-6">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#1f4a50] font-semibold py-3 rounded-xl hover:bg-white transition-all duration-300 px-4"
                  >
                    <div className="flex items-center space-x-3">
                      <i className="ri-hospital-fill text-xl"></i>
                      <span>Services</span>
                    </div>
                    <i
                      className={`ri-arrow-down-s-line text-xl transform transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {isServicesOpen && (
                    <div className="ml-6 mt-3 space-y-3 bg-white rounded-2xl p-4 shadow-lg">
                      {servicesData.map((service) => (
                        <Link
                          key={service.name}
                          to={service.to}
                          className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#1f4a50] py-2"
                        >
                          <div
                            className={`w-6 h-6 ${service.iconBg} rounded-lg flex items-center justify-center`}
                          >
                            <i
                              className={`${service.icon} ${service.iconColor} text-sm`}
                            ></i>
                          </div>
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Mobile Departments Dropdown */}
                <div className="px-6">
                  <button
                    onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#1f4a50] font-semibold py-3 rounded-xl hover:bg-white transition-all duration-300 px-4"
                  >
                    <div className="flex items-center space-x-3">
                      <i className="ri-building-2-line text-xl"></i>
                      <span>Departments</span>
                    </div>
                    <i
                      className={`ri-arrow-down-s-line text-xl transform transition-transform duration-300 ${
                        isDepartmentsOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {isDepartmentsOpen && (
                    <div className="ml-6 mt-3 space-y-3 bg-white rounded-2xl p-4 shadow-lg">
                      {departmentsData.map((department) => (
                        <Link
                          key={department.name}
                          to={department.to}
                          className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#1f4a50] py-2"
                        >
                          <div
                            className={`w-6 h-6 ${department.iconBg} rounded-lg flex items-center justify-center`}
                          >
                            <i
                              className={`${department.icon} ${department.iconColor} text-sm`}
                            ></i>
                          </div>
                          <span>{department.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Mobile CTA Buttons */}
                <div className="px-6 pt-6 space-y-4">
                  {ctaButtons.map((button) => (
                    <Link
                      key={button.name}
                      to={button.to}
                      className={`flex items-center justify-center space-x-3 w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                        button.type === "primary"
                          ? "bg-gradient-to-r from-[#1f4a50] to-[#1f4a50] text-white hover:from-[#1f4a50] hover:to-[#1f4a50]"
                          : "border-2 border-[#1f4a50] text-[#1f4a50] hover:bg-[#1f4a50] hover:text-white"
                      }`}
                    >
                      <i className={`${button.icon} text-xl`}></i>
                      <span>{button.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Enhanced Mobile Contact Info */}
                <div className="px-6 pt-6 border-t border-[#1f4a50] space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <h4 className="text-[#1f4a50] font-bold mb-3 flex items-center space-x-2">
                      <i className="ri-customer-service-2-line"></i>
                      <span>Quick Contact</span>
                    </h4>
                    <div className="flex items-center space-x-3 text-[#1f4a50] mb-3">
                      <div className="w-8 h-8 bg-[#1f4a50] rounded-lg flex items-center justify-center">
                        <i className="ri-phone-line text-white"></i>
                      </div>
                      <Link
                        to={`tel:${contactInfo.phone}`}
                        className="font-semibold"
                      >
                        {contactInfo.phone}
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3 text-[#1f4a50]">
                      <div className="w-8 h-8 bg-[#1f4a50] rounded-lg flex items-center justify-center">
                        <i className="ri-mail-line text-white"></i>
                      </div>
                      <Link
                        to={`mailto:${contactInfo.email}`}
                        className="font-semibold"
                      >
                        {contactInfo.email}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
