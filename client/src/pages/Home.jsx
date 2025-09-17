import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: "42",
      condition: "Varicose Veins",
      image: "/images/patient-1.jpg",
      rating: 5,
      text: "Dr. Abhinav Kesarwani completely transformed my life. I had been suffering from painful varicose veins for years. His laser treatment was painless, and I was back to my normal routine within 3 days.",
      location: "Pimpri-Chinchwad",
    },
    {
      name: "Rajesh Patil",
      age: "58",
      condition: "Endovascular Surgery",
      image: "/images/patient-2.jpg",
      rating: 5,
      text: "The endovascular procedure I underwent was expertly handled by Dr. Kesarwani. His knowledge and gentle approach made me feel confident throughout the treatment. The recovery was much faster than I expected.",
      location: "Pune",
    },
    {
      name: "Sunita Desai",
      age: "35",
      condition: "Piles Treatment",
      image: "/images/patient-3.jpg",
      rating: 5,
      text: "I was hesitant about getting treatment for my condition, but Dr. Kesarwani explained everything clearly and made me feel comfortable. The minimally invasive procedure was successful.",
      location: "Chinchwad",
    },
  ];

  return (
    <>
      <section className="relative min-h-screen flex justify-center overflow-hidden pt-20 ">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 transition-opacity duration-1000 ">
            {/* Placeholder for background image */}
            <div className="w-full h-full flex items-center justify-center">
              <img src="/images/hero-bg.jpg" alt="" />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f4a50]/85 via-[#1f4a50]/70 to-transparent"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-semibold leading-tight min-w-4xl">
                  <span className="block">
                    NextGen Advanced Healthcare Solutions
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1f4a50]">
                  Leading Medical Excellence
                </h2>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Delivering comprehensive healthcare services with cutting-edge
                technology and expert medical professionals. Committed to
                exceptional patient outcomes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="#appointment"
                  className="inline-flex items-center justify-center space-x-3 bg-white text-[#1f4a50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="ri-service-fill text-xl mr-2"></i>
                  Explore Services
                </Link>
                <Link
                  to=""
                  className="inline-flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#1f4a50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="ri-nurse-fill text-xl mr-2"></i>
                  Know Healhy Legs
                </Link>
              </div>
            </div>

            {/* Right Content - Features Cards */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              About Healthy Legs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in leg health, vascular care, and mobility
              enhancement with specialized treatments and expert medical
              professionals
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-semibold text-[#1f4a50] mb-4">
                Specialized Leg & Vascular Care Excellence
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                At Healthy Legs, we specialize in comprehensive leg health
                solutions, from varicose vein treatments to advanced vascular
                procedures. Our dedicated team of specialists combines
                cutting-edge technology with personalized care to restore your
                leg health and mobility.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that leg health issues can significantly impact
                your quality of life. That's why we offer minimally invasive
                treatments, advanced diagnostics, and comprehensive
                rehabilitation programs tailored to your specific needs.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#1f4a50] mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Specialized Care</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#1f4a50] mb-2">
                    8K+
                  </div>
                  <div className="text-gray-600">Successful Treatments</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#1f4a50] mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Patient Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#1f4a50] mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/about.jpg"
                  alt="Healthy Legs specialized medical facility and vascular treatment center"
                  className="w-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f4a50]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Section */}
          <div>
            <h3 className="text-5xl font-bold text-center text-[#1f4a50] mb-12">
              Our Medical Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Varicose Veins Specialist */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-pulse-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Varicose Veins Specialist
                </h5>
                <p className="text-gray-600 mb-4">
                  Advanced minimally invasive procedures including
                  sclerotherapy, laser treatment, and endovenous ablation for
                  varicose and spider vein removal.
                </p>
                <div className="text-sm text-gray-500">
                  Dr. Abhinav Kesarwani - Expert Vascular Surgeon
                </div>
              </div>

              {/* Laparoscopic Surgery */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-surgical-mask-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Laparoscopic Surgery
                </h5>
                <p className="text-gray-600 mb-4">
                  Minimally invasive keyhole surgery techniques for faster
                  recovery, reduced scarring, and improved patient outcomes.
                </p>
                <div className="text-sm text-gray-500">
                  Advanced Surgical Procedures
                </div>
              </div>

              {/* Laser Surgery */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flashlight-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Laser Surgery
                </h5>
                <p className="text-gray-600 mb-4">
                  Precision laser treatments for various conditions including
                  vascular issues, with minimal invasiveness and quick recovery
                  times.
                </p>
                <div className="text-sm text-gray-500">
                  State-of-the-art Laser Technology
                </div>
              </div>

              {/* Endovascular Surgery */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-pulse-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Endovascular Surgery
                </h5>
                <p className="text-gray-600 mb-4">
                  Specialized blood vessel procedures performed from inside the
                  vessel using catheters and advanced imaging guidance.
                </p>
                <div className="text-sm text-gray-500">
                  Vascular Intervention Specialist
                </div>
              </div>

              {/* Urinary & Abdominal Complaints */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-body-scan-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Urinary & Abdominal Care
                </h5>
                <p className="text-gray-600 mb-4">
                  Comprehensive diagnosis and treatment for urinary tract issues
                  and abdominal complaints with personalized care approach.
                </p>
                <div className="text-sm text-gray-500">
                  General & Urological Surgery
                </div>
              </div>

              {/* Proctology - Piles/Fissure/Fistula */}
              <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-medicine-bottle-line text-white text-2xl"></i>
                </div>
                <h5 className="text-xl font-semibold text-[#1f4a50] mb-3">
                  Proctology Services
                </h5>
                <p className="text-gray-600 mb-4">
                  Expert treatment for piles (hemorrhoids), anal fissures, and
                  fistula conditions using modern surgical techniques and
                  conservative management.
                </p>
                <div className="text-sm text-gray-500">
                  Specialized Colorectal Care
                </div>
              </div>
            </div>

            {/* Doctor Information Card */}
            <div className="mt-16 bg-gradient-to-r from-[#1f4a50] to-[#2a5a65] rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24   flex items-center justify-center">
                    <img
                      src="/images/Dr.Sir.webp"
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2">
                    Dr. Abhinav Kesarwani
                  </h4>
                  <p className="text-lg text-blue-200 mb-3">
                    Specialist Surgeon | Varicose Veins Expert | Endovascular
                    Surgeon
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Experienced medical professional specializing in vascular
                    surgery, minimally invasive procedures, and comprehensive
                    surgical care with a focus on patient-centered treatment
                    approaches and advanced medical techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Why Choose Healthy Legs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our specialized leg health care,
              advanced treatments, and commitment to your complete wellness
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Image Section */}
            <div className="">
              <img
                src="/images/choose.jpg"
                alt="Dr. Abhinav Kesarwani performing advanced vascular treatment at Healthy Legs clinic"
                className="w-full  object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Key Benefits Content */}
            <div className="space-y-8 self-center">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1f4a50] mb-2">
                    Expert Specialization
                  </h4>
                  <p className="text-gray-700">
                    Dr. Abhinav Kesarwani brings years of specialized experience
                    in vascular surgery, varicose vein treatments, and minimally
                    invasive procedures with proven success rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center">
                  <i className="ri-microscope-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1f4a50] mb-2">
                    Advanced Technology
                  </h4>
                  <p className="text-gray-700">
                    State-of-the-art diagnostic equipment and cutting-edge laser
                    technology for precise treatments with minimal discomfort
                    and maximum effectiveness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center">
                  <i className="ri-heart-pulse-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1f4a50] mb-2">
                    Comprehensive Care
                  </h4>
                  <p className="text-gray-700">
                    From diagnosis to post-treatment care, we provide complete
                    support including compression therapy guidance, lifestyle
                    recommendations, and follow-up monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who trusted Healthy Legs for their
              treatment and experienced exceptional care
            </p>
          </div>

          {/* Testimonials Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <i className="ri-double-quotes-l text-2xl text-[#1f4a50] opacity-30"></i>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-400 text-sm mr-1"
                    ></i>
                  ))}
                  <span className="ml-2 text-gray-600 font-semibold text-sm">
                    5.0
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-[#1f4a50] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-line text-white text-lg"></i>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-[#1f4a50] text-base">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center">
                        <i className="ri-verified-badge-fill text-green-500 text-sm mr-1"></i>
                        <span className="text-xs text-green-600 font-semibold">
                          Verified
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs mb-2">
                      Age: {testimonial.age} | {testimonial.location}
                    </p>
                    <div className="inline-block bg-[#1f4a50]/10 px-2 py-1 rounded-full">
                      <span className="text-[#1f4a50] text-xs font-semibold">
                        {testimonial.condition}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
