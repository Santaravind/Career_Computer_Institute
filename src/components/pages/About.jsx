import React from "react";
import m1 from "../../assets/im7.jpeg";
import { useNavigate } from "react-router-dom";
function About() {
  const navigation = useNavigate();
  const onHanldClink = (e) => {
    e.preventDefault();
    navigation("/about");
  };
  return (
    <div className="w-full bg-white font-sans text-gray-700 selection:bg-blue-100 selection:text-blue-800">
      <h1 className="items-center justify-center text-4xl font-extrabold mb-8 mt-4  text-center text-[#0B56A4]">
        About Us
      </h1>
      <div className="w-30 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>

      {/* SECTION 1: Who We Are & Hero Presentation */}
      <section className="py-2 px-6 md:px-12 lg:px-24">
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
              Welcome to Commercial Computer Institute (Robertsganj, Chandauli,
              Mugalsarai, Mirzapur, and Varanasi). We are transforming the
              educational landscape of Eastern Uttar Pradesh by democratizing
              access to Information Technology and advanced digital financial
              accounting.
            </p>

            <div className="pt-2">
              <button
                onClick={onHanldClink}
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform active:scale-95"
              >
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
    </div>
  );
}

export default About;
