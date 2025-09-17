import React from "react";
import GetInTouch from "../components/GetInTouch";
import PageHero from "../components/PageHero";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "ri-pulse-line",
      title: "Varicose Veins Treatment",
      description:
        "Advanced minimally invasive procedures including sclerotherapy, laser treatment, and endovenous ablation for varicose and spider vein removal with quick recovery times.",
      features: [
        "Laser Vein Treatment",
        "Sclerotherapy Injection",
        "Endovenous Ablation",
        "Spider Vein Removal",
        "Compression Therapy",
      ],
    },
    {
      id: 2,
      icon: "ri-surgical-mask-line",
      title: "Laparoscopic Surgery",
      description:
        "Minimally invasive keyhole surgery techniques for faster recovery, reduced scarring, and improved patient outcomes with state-of-the-art surgical equipment.",
      features: [
        "Keyhole Surgery Technique",
        "Minimal Scarring",
        "Faster Recovery Time",
        "Advanced Equipment",
        "Expert Surgical Team",
      ],
    },
    {
      id: 3,
      icon: "ri-flashlight-line",
      title: "Laser Surgery",
      description:
        "Precision laser treatments for various conditions including vascular issues, with minimal invasiveness and quick recovery times using cutting-edge technology.",
      features: [
        "Precision Treatment",
        "Minimal Invasive Approach",
        "Quick Recovery",
        "Advanced Laser Technology",
        "Reduced Pain & Bleeding",
      ],
    },
    {
      id: 4,
      icon: "ri-heart-pulse-line",
      title: "Endovascular Surgery",
      description:
        "Specialized blood vessel procedures performed from inside the vessel using catheters and advanced imaging guidance for optimal results.",
      features: [
        "Catheter-based Procedures",
        "Advanced Imaging Guidance",
        "Vascular Intervention",
        "Minimally Invasive",
        "Real-time Monitoring",
      ],
    },
    {
      id: 5,
      icon: "ri-body-scan-line",
      title: "Urinary & Abdominal Care",
      description:
        "Comprehensive diagnosis and treatment for urinary tract issues and abdominal complaints with personalized care approach and modern techniques.",
      features: [
        "Urological Surgery",
        "Abdominal Procedures",
        "Diagnostic Services",
        "Personalized Treatment",
        "Follow-up Care",
      ],
    },
    {
      id: 6,
      icon: "ri-medicine-bottle-line",
      title: "Proctology Services",
      description:
        "Expert treatment for piles (hemorrhoids), anal fissures, and fistula conditions using modern surgical techniques and conservative management.",
      features: [
        "Piles Treatment",
        "Fissure Surgery",
        "Fistula Repair",
        "Conservative Management",
        "Post-operative Care",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Comprehensive medical assessment and detailed discussion of your condition and available treatment options.",
      icon: "ri-stethoscope-line",
    },
    {
      step: "02",
      title: "Diagnostic Tests",
      description:
        "Advanced diagnostic procedures to accurately assess your condition and plan the most effective treatment approach.",
      icon: "ri-test-tube-line",
    },
    {
      step: "03",
      title: "Treatment Planning",
      description:
        "Personalized treatment plan tailored to your specific needs, medical history, and desired outcomes.",
      icon: "ri-brain-line",
    },
    {
      step: "04",
      title: "Treatment Execution",
      description:
        "Professional treatment delivery using advanced techniques and state-of-the-art medical equipment.",
      icon: "ri-surgical-mask-line",
    },
    {
      step: "05",
      title: "Follow-up Care",
      description:
        "Comprehensive post-treatment monitoring, support, and guidance to ensure complete recovery and long-term success.",
      icon: "ri-heart-pulse-line",
    },
  ];

  return (
    <>
      {/* Hero Section */}

      <PageHero
        title="Our"
        sub="Medical Services"
        des="Comprehensive Healthcare Solutions for Your Well-being"
      />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Specialized Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Healthy Legs, we offer a comprehensive range of specialized
              medical services designed to address various health conditions
              with cutting-edge technology and expert care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
               

                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-[#1f4a50] rounded-full flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1f4a50]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

            

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Treatment Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 text-sm"
                        >
                          <i className="ri-check-line text-green-500 text-lg mr-2"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#appointment"
                    className="w-full bg-[#1f4a50] hover:bg-[#2a5a65] text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 inline-block group-hover:transform group-hover:scale-105"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure the best possible outcomes for
              every patient
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 z-0"></div>
                  )}

                  {/* Step Circle */}
                  <div className="relative z-10 w-24 h-24 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group hover:scale-110 transition-transform duration-300">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-[#1f4a50] font-bold text-sm">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-[#1f4a50] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1f4a50] to-[#2a5a65] rounded-3xl p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/images/Dr.Sir.webp"
                    alt="Dr. Abhinav Kesarwani - Expert Medical Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left flex-grow">
                <h3 className="text-4xl font-bold mb-4">
                  Dr. Abhinav Kesarwani
                </h3>
                <p className="text-2xl text-blue-200 mb-6">
                  Specialist Surgeon | Varicose Veins Expert | Endovascular
                  Surgeon
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  With over 15 years of specialized experience, Dr. Kesarwani
                  leads our medical team in delivering exceptional patient care
                  across all our service areas. His expertise in minimally
                  invasive procedures and patient-centered approach ensures
                  optimal outcomes for every treatment.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      15+
                    </div>
                    <div className="text-blue-200 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      8000+
                    </div>
                    <div className="text-blue-200 text-sm">Procedures</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      98%
                    </div>
                    <div className="text-blue-200 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4a50] mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our specialized approach to
              healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-4">
                Advanced Technology
              </h4>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art medical equipment and cutting-edge treatment
                techniques for superior outcomes and patient safety.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-time-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-4">
                Minimal Recovery Time
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Minimally invasive procedures designed for faster healing and
                quicker return to normal activities with less pain.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1f4a50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-heart-pulse-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-[#1f4a50] mb-4">
                Personalized Care
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Customized treatment plans tailored to each patient's unique
                needs, medical conditions, and personal preferences.
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

export default Services;
