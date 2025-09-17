import React from "react";
import GetInTouch from "../components/GetInTouch";
import PageHero from "../components/PageHero";

const About = () => {
  return (
    <>
     <PageHero title="About" sub="Healhy Legs" des="Your Trusted Partner in Leg Health & Vascular Care" />

      {/* Main About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Our Story & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Healthy Legs, we are dedicated to transforming lives through
              specialized leg health care, advanced vascular treatments, and
              compassionate medical expertise that puts patients first.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-semibold text-[#1f4a50] mb-6">
                Excellence in Specialized Leg & Vascular Care
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Founded with a vision to provide comprehensive leg health
                solutions, Healthy Legs has established itself as a leading
                center for vascular care in Pimpri-Chinchwad. Our
                state-of-the-art facility combines cutting-edge medical
                technology with the expertise of renowned specialists.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that leg health issues can significantly impact
                your quality of life, mobility, and confidence. That's why our
                approach goes beyond just treatment – we focus on comprehensive
                care that includes prevention, education, and long-term wellness
                strategies.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to minimally invasive procedures, advanced
                diagnostics, and personalized treatment plans ensures that each
                patient receives the most effective care with minimal discomfort
                and maximum results.
              </p>

         
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/healthcare.jpg"
                  alt="Healthy Legs medical facility and advanced treatment center"
                  className="w-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f4a50]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Expert */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Meet Our Expert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in vascular surgery and minimally invasive
              procedures with years of specialized experience
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#1f4a50] to-[#2a5a65] rounded-3xl p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/images/Dr.Sir.webp"
                    alt="Dr. Abhinav Kesarwani - Vascular Surgeon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left flex-grow">
                <h3 className="text-4xl font-bold mb-4">
                  Dr. Abhinav Kesarwani
                </h3>
                <p className="text-2xl text-gray-300 mb-6">
                  Specialist Surgeon | Varicose Veins Expert | Endovascular
                  Surgeon
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Dr. Abhinav Kesarwani is a renowned specialist in vascular
                  surgery with over 15 years of experience in treating complex
                  leg and vascular conditions. His expertise in minimally
                  invasive procedures, combined with a patient-centered
                  approach, has helped thousands of patients regain their
                  mobility and confidence.
                </p>

                {/* Qualifications */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <i className="ri-graduation-cap-line text-2xl mr-3"></i>
                      Education & Training
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• MBBS, MS (Surgery)</li>
                      <li>• Fellowship in Vascular Surgery</li>
                      <li>• Advanced Laparoscopic Training</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <i className="ri-medal-line text-2xl mr-3"></i>
                      Specializations
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Varicose Vein Treatment</li>
                      <li>• Endovascular Surgery</li>
                      <li>• Minimally Invasive Procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mr-6">
                  <i className="ri-heart-pulse-line text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1f4a50]">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide accessible, high-quality healthcare services that
                improve the health and well-being of our community through
                compassionate care, medical excellence, and continuous
                innovation in treatment methodologies. We strive to restore
                mobility, enhance quality of life, and help our patients return
                to active, confident living.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mr-6">
                  <i className="ri-eye-line text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1f4a50]">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading healthcare institution recognized for
                transforming lives through innovative medical solutions,
                exceptional patient experiences, and advancing the future of
                healthcare delivery in our region. We envision a community where
                leg health issues no longer limit people's potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment
              to exceptional healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-user-heart-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-semibold text-[#1f4a50] mb-4">
                Compassionate Care
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Treating every patient with empathy, respect, and dignity while
                providing personalized healthcare solutions that address
                individual needs and concerns with genuine care.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-microscope-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-semibold text-[#1f4a50] mb-4">
                Medical Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Maintaining the highest standards of medical practice through
                continuous learning, advanced technology, and evidence-based
                treatments that deliver superior outcomes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-team-line text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-semibold text-[#1f4a50] mb-4">
                Collaborative Approach
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Working together as a unified team to ensure comprehensive,
                coordinated patient care and optimal outcomes through effective
                communication and shared expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Our Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and advanced medical equipment designed for
              optimal patient care and comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hospital-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-3">
                Modern Infrastructure
              </h4>
              <p className="text-gray-600">
                State-of-the-art medical facility with latest equipment and
                comfortable patient areas
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-stethoscope-fill text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-3">
                Advanced Diagnostics
              </h4>
              <p className="text-gray-600">
                Cutting-edge diagnostic equipment for accurate assessment and
                treatment planning
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-3">
                Safety Standards
              </h4>
              <p className="text-gray-600">
                Strict adherence to international safety protocols and infection
                control measures
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-3">
                Patient Support
              </h4>
              <p className="text-gray-600">
                Dedicated patient care coordinators and comprehensive support
                services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <GetInTouch />
    </>
  );
};

export default About;
