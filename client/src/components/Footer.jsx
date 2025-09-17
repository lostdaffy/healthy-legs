import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f4a50] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo.jpeg"
                className="w-16 h-16 rounded-lg"
                alt="Hospital Logo"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">HEALHY LEGS</h3>
                <p className="text-gray-300 text-sm">
                  Excellence in Healthcare
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing world-class healthcare services with compassion,
              innovation, and excellence. Your health and well-being are our top
              priorities.
            </p>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <i className="ri-alarm-warning-line text-red-400"></i>
                <span className="text-red-400 font-semibold text-sm">
                  24/7 Emergency
                </span>
              </div>
              <a
                href="tel:+919970787600"
                className="text-white font-bold text-lg hover:text-red-400 transition-colors"
              >
                +91 997-078-7600
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <i className="ri-facebook-fill text-lg group-hover:text-blue-400"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <i className="ri-twitter-fill text-lg group-hover:text-blue-400"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <i className="ri-instagram-line text-lg group-hover:text-pink-400"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <i className="ri-linkedin-fill text-lg group-hover:text-blue-400"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <i className="ri-youtube-fill text-lg group-hover:text-red-400"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <i className="ri-links-line text-gray-300"></i>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  <span>Book Appointment</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-arrow-right-s-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <i className="ri-hospital-line text-gray-300"></i>
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#emergency"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-ambulance-line text-sm text-red-400"></i>
                  <span>Emergency Care</span>
                </a>
              </li>
              <li>
                <a
                  href="#cardiology"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-heart-pulse-line text-sm text-red-400"></i>
                  <span>Cardiology</span>
                </a>
              </li>
              <li>
                <a
                  href="#neurology"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-brain-line text-sm text-purple-400"></i>
                  <span>Neurology</span>
                </a>
              </li>
              <li>
                <a
                  href="#orthopedics"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-bone-line text-sm text-green-400"></i>
                  <span>Orthopedics</span>
                </a>
              </li>
              <li>
                <a
                  href="#pediatrics"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-parent-line text-sm text-yellow-400"></i>
                  <span>Pediatrics</span>
                </a>
              </li>
              <li>
                <a
                  href="#diagnostics"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <i className="ri-test-tube-line text-sm text-green-400"></i>
                  <span>Diagnostics</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <i className="ri-customer-service-2-line text-gray-300"></i>
              <span>Contact Info</span>
            </h4>

            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-gray-300"></i>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Renuka Avenue Karnika Polyclinic near City One Mall, behind
                    Keys Hotel Morewadi, Pimpri Colony Pimpri-Chinchwad,
                    Maharashtra 411018 India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-gray-300"></i>
                </div>
                <div>
                  <a
                    href="tel:+919970787600"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 997-078-7600
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-gray-300"></i>
                </div>
                <div>
                  <a
                    href="mailto:abhi9kesarwani@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    abhi9kesarwani@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#152e33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>
                &copy; 2025 <strong>HEALHY LEGS</strong>. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 w-12 h-12 bg-[#1f4a50] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2a5a61] transition-all duration-300 z-50"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </footer>
  );
};

export default Footer;
