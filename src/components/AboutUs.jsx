import React from 'react';
import m1 from '../assets/im7.jpeg'

function AboutUs() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 selection:bg-blue-100 selection:text-blue-800">
       <h1 className="items-center justify-center text-4xl font-extrabold mb-8 mt-4  text-center text-[#0B56A4]">
        About Us
      </h1>
      <div className="w-30 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>

      {/* SECTION 1: Who We Are & Hero Presentation */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm block">
                Who We Are
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Shape Your Future with Eastern UP's Leading Tech Institute
              </h1>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Welcome to Commercial Computer Institute (Robertsganj, Chandauli, Mugalsarai, Mirzapur, and Varanasi). 
              We are transforming the educational landscape of Eastern Uttar Pradesh by democratizing access to 
              Information Technology and advanced digital financial accounting.
            </p>

            <div className="pt-2">
              <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Modern Styled Image Frame */}
          <div className="relative w-full h-87.5 sm:h-105 lg:h-120 rounded-2xl overflow-hidden shadow-xl group">
            {/* Soft Blend Overlay */}
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-all duration-300"></div>
            <img 
              src={m1}
              alt="Commercial Computer Institute student training facility" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
            />
          </div>

        </div>
      </section>

      {/* SECTION 2: Why Choose Us Feature Cards */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Subheading */}
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Why Choose Us?
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
          </div>

          {/* Features Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="space-y-3 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                Industry-Ready Curriculum
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We replace outdated theory with practical, market-relevant tech skills that employers actively look for.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                Affordable Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                High-quality tech literacy shouldn't break the bank. Our nominal fee structure ensures urban and rural students alike get equal access to global opportunities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                Proven Impact
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Over 2,000+ graduates have already used our training to secure corporate placements or build independent, tech-driven small businesses.
              </p>
            </div>

          </div>

          {/* Core Value Statement / Footnote */}
          <div className="pt-6 border-t border-gray-200/60 max-w-4xl">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg italic">
              True to our motto, <span className="text-blue-600 not-italic font-semibold">'Education for Life,'</span> we deliver practical training that respects your time and maximizes your investment. Let’s build your digital career together.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default AboutUs;