import React, { useState, useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import {
  PiMonitorLight,
  PiStudentLight,
  PiBriefcaseLight,
} from "react-icons/pi";
import { FaGraduationCap, FaDesktop, FaUserTie } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import im1 from "../../assets/im1.jpeg";
import im2 from "../../assets/im2.jpeg";
import im3 from "../../assets/im3.jpeg";
import im4 from "../../assets/im4.jpeg";
import im5 from "../../assets/im5.jpeg";
import im7 from "../../assets/im7.jpeg";
import PopulerCources from "./PopulerCources";
import About from "./About";
import Gallery from "./Gallery";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of placeholder stock images for the computer institute setting
  const slideImages = [
    im1,
    im2,
    im7,
    im3,
    im4,
    im5,
    // im6
  ];

  // Auto-scrolling logic every 15 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  //   }, 3000);

  //   return () => clearInterval(timer);
  // }, [slideImages.length]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const next = (prevSlide + 1) % slideImages.length;
        // console.log('Changing to slide:', next); // Debug log
        return next;
      });
    }, 15000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const navigate = useNavigate();
  const handladmission = (e) => {
    e.preventDefault();
    navigate("/admissions");
  };
  return (
    <>
      <section className="print:hidden relative bg-slate-100 font-roboto overflow-hidden pb-20 lg:pb-16">
        {/* Main Banner Wrapper */}
        <div className="relative flex flex-col lg:flex-row min-h-130 lg:min-h-145 bg-[#003B73]">
          {/* Left Text content pane */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 text-white z-10">
            <span className="text-[#F18F1C] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              SHAPE YOUR FUTURE
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
              Learn<span className="text-[#F18F1C]">.</span> Grow
              <span className="text-[#F18F1C]">.</span>
              <br />
              Succeed<span className="text-[#F18F1C]">.</span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base max-w-md font-medium leading-relaxed mb-8">
              Join Career Computer Institute and build in-demand skills for a
              better tomorrow.
            </p>

            {/* Top Minimal Inline Features */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mb-10 text-[13px] font-medium text-gray-100">
              <div className="flex items-center gap-3">
                <SlBadge className="text-2xl text-gray-200 shrink-0" />
                <span>Quality Education</span>
              </div>
              <div className="flex items-center gap-3">
                <PiMonitorLight className="text-2xl text-gray-200 shrink-0" />
                <span>Practical Training</span>
              </div>
              <div className="flex items-center gap-3">
                <PiStudentLight className="text-2xl text-gray-200 shrink-0" />
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <PiBriefcaseLight className="text-2xl text-gray-200 shrink-0" />
                <span>100% Placement Assistance</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-[#F18F1C] hover:bg-orange-600 text-white text-xs sm:text-sm font-bold tracking-wider uppercase py-3.5 px-6 rounded shadow-md transition-colors">
                Explore Courses <FiArrowRight className="text-base" />
              </button>
              <button className="flex items-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white/60 hover:border-white text-white text-xs sm:text-sm font-bold tracking-wider uppercase py-3 px-6 rounded transition-all">
                Download Brochure <FiDownload className="text-base" />
              </button>
            </div>
          </div>

          {/* Right Image Slideshow Pane with Masking Curve Effect */}
          <div className="relative w-full lg:w-[50%] h-80 sm:h-100 lg:h-auto overflow-hidden">
            {/* SVG Left Wave Overlay Mask for Desktop viewports */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 h-full z-10 pointer-events-none">
              <svg
                className="h-full w-full fill-[#003B73]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M100,0 C30,40 20,60 100,100 L0,100 L0,0 Z" />
              </svg>
            </div>
            {/* Soft inner curve light-blue line framing layer */}
            <div className="hidden lg:block absolute left-1 top-0 bottom-0 w-24 h-full z-0 pointer-events-none opacity-40">
              <svg
                className="h-full w-full fill-[#4ba3e3]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M100,0 C25,40 15,60 100,100 L0,100 L0,0 Z" />
              </svg>
            </div>

            {/* Slidshow Image Nodes */}
            {slideImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity  duration-500  ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Bottom Info Deck Card Component */}
        {/* <div className="absolute left-0 right-0 sm:hidden bottom-[-20px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20"> */}
        <div className="hidden sm:block absolute left-0 right-0 -bottom-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* Item 1 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0">
              <div className="p-3.5 bg-blue-50 text-[#003B73] rounded-full shrink-0">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                  Industry Relevant Courses
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  Updated curriculum as per industry standards
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 lg:pl-4">
              <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-full shrink-0">
                <FaChalkboardTeacher className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                  Experienced Faculty
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  Learn from qualified & industry experts
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 lg:pl-4">
              <div className="p-3.5 bg-amber-50 text-amber-600 rounded-full shrink-0">
                <FaDesktop className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                  Modern Computer Lab
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  Well-equipped labs with latest technologies
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 lg:pl-4">
              <div className="p-3.5 bg-purple-50 text-purple-600 rounded-full shrink-0">
                <FaUserTie className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                  Placement Assistance
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  Resume building, mock interviews & job support
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 lg:pl-4">
              <div className="p-3.5 bg-pink-50 text-pink-600 rounded-full shrink-0">
                <GrCertificate className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                  Certification
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  Government approved certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-[#003B73] font-semibold text-white flex items-center overflow-hidden header-notice text-2xl mt-1">
        <span className="bg-[oklch(45.5%_0.188_13.697)] text-white px-3 py-2 mr-2 text-2xl header-notice-label">
          NOTICE
        </span>
        <div className="overflow-hidden relative w-full">
          <div className="animate-marquee whitespace-nowrap py-2">
            Welcome to Career computer Institute
            <span
              className="text-yellow-400 ml-2 cursor-pointer "
              onClick={handladmission}
            >
              • Admissions Open{" "}
            </span>
            • Explore Our Courses
          </div>
        </div>
      </div>
      {/* <div className="h-4 lg:h-10"></div> */}
      <br />
      <PopulerCources />
      <Gallery />
      <About />
    </>
  );
}

export default Hero;
