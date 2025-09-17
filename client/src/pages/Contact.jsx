import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact"
        sub="Healthy Legs"
        des="Contact us today to schedule your consultation."
      />

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f4a50] mb-8">
                Get In Touch With Us
              </h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Visit Our Clinic
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Renuka Avenue Karnika Polyclinic
                      <br />
                      Near City One Mall, Behind Keys Hotel
                      <br />
                      Morewadi, Pimpri Colony
                      <br />
                      Pimpri-Chinchwad, Maharashtra 411018
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+919970787600"
                        className="hover:text-[#1f4a50] transition-colors"
                      >
                        +91 997-078-7600
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      24/7 Emergency Available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:abhi9kesarwani@gmail.com"
                        className="hover:text-[#1f4a50] transition-colors"
                      >
                        abhi9kesarwani@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Working Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM</p>
                      <p className="text-red-600 font-semibold">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f4a50] mb-8">
                Find Our Location
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-96">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1234567890!2d73.8567890123456!3d18.6234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRenuka%20Avenue%20Karnika%20Polyclinic!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Healthy Legs Clinic Location"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Healthy Legs Clinic
                      </h4>
                      <p className="text-sm text-gray-600">
                        Near City One Mall, Pimpri Colony
                      </p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Renuka+Avenue+Karnika+Polyclinic+Pimpri+Chinchwad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f4a50] text-white px-4 py-2 rounded-lg hover:bg-[#2a5a65] transition-colors flex items-center space-x-2"
                    >
                      <i className="ri-direction-line"></i>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <GetInTouch />

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Transportation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1f4a50] mb-6 flex items-center">
                <i className="ri-car-line text-3xl mr-3"></i>
                How to Reach Us
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <i className="ri-roadster-line text-[#1f4a50] text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">By Car</div>
                    <div>Ample parking available at the clinic premises</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-bus-line text-[#1f4a50] text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">By Public Transport</div>
                    <div>Regular bus services to Pimpri Colony area</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Guidelines */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1f4a50] mb-6 flex items-center">
                <i className="ri-calendar-check-line text-3xl mr-3"></i>
                Appointment Guidelines
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-[#1f4a50] text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Advance Booking</div>
                    <div>Book appointments 24-48 hours in advance</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-alarm-line text-[#1f4a50] text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Arrival Time</div>
                    <div>Please arrive 15 minutes before appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Safety */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1f4a50] mb-6 flex items-center">
                <i className="ri-shield-cross-line text-3xl mr-3"></i>
                Patient Safety & Hygiene
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <i className="ri-hand-sanitizer-line text-[#1f4a50] text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold">Sanitization</div>
                    <div>Complete sanitization after each patient</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="ri-hospital-line text-[#1f4a50] text-xl mt-1"></i>
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

export default Contact;
