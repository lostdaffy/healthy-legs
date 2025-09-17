import React from "react";
const PageHero = ({ title, sub, des }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/images/banner.jpg"
                alt="About Healthy Legs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 backdrop-blur-sm bg-white/50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              {title} <span className="text-[#1f4a50]">{sub}</span>
            </h1>
            <p className="text-2xl lg:text-3xl font-light text-[#1f4a50] mb-8">
              {des}
            </p>
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHero;
