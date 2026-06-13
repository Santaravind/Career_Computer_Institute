import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { LuMonitorDot } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';
import { IoMegaphoneOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function PopulerCources() {
  // Course data array based on your image layout
  const courses = [
    {
      id: 1,
      title: 'Basic Computer',
      duration: '3 Months',
      description: 'Learn fundamentals of computer, MS Office, Internet & more.',
      borderColor: 'border-l-[#0B56A4]', // Blue
      icon: <LuMonitorDot className="text-4xl text-[#0B56A4]" />,
      isCustomIcon: false
    },
    {
      id: 2,
      title: 'Web Designing',
      duration: '6 Months',
      description: 'Learn HTML, CSS, JavaScript, and modern tools.',
      borderColor: 'border-l-[#2E7D32]', // Green
      icon: <FaCode className="text-4xl text-[#2E7D32]" />,
      isCustomIcon: false
    },
    {
      id: 3,
      title: 'Tally Prime',
      duration: '3 Months',
      description: 'Learn Accounting, GST, Inventory & Financial Management.',
      borderColor: 'border-l-[#F1A80A]', // Yellow-Gold
      // Custom graphic box to match the unique Tally blue/yellow logo style in screenshot
      icon: (
        <div className="w-12 h-12 flex flex-wrap rounded overflow-hidden">
          <div className="w-6 h-6 bg-[#006699]"></div>
          <div className="w-6 h-6 bg-[#004B75]"></div>
          <div className="w-6 h-6 bg-[#D4A316]"></div>
          <div className="w-6 h-6 bg-[#0084B4]"></div>
        </div>
      ),
      isCustomIcon: true,
      subText: 'Tally Prime'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      duration: '4 Months',
      description: 'Learn SEO, Social Media, Google Ads & more.',
      borderColor: 'border-l-[#8E24AA]', // Purple
      icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
      isCustomIcon: false
    },
     {
      id: 5,
      title: 'O. LEVEL ',
      duration: '',
      description: '',
      borderColor: 'border-l-[#8E24AA]', // Purple
      icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
      isCustomIcon: false
    },
     {
      id: 6,
      title: 'A.D.C.A',
      duration: '12 Months',
      description: '',
      borderColor: 'border-l-[#8E24AA]', // Purple
      icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
      isCustomIcon: false
    }
  ];
   const navigate = useNavigate(); 
  const handalCourse =(e) =>{
          e.preventDefault();
          navigate("/course");

  }
  return (
    // <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-roboto">
    //   <div className="max-w-350 mx-auto">
        
    //     {/* Header Area */}
    //     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
    //       <div>
    //         <span className="text-[#F18F1C] font-bold text-xs uppercase tracking-wider block mb-1">
    //           OUR COURSES
    //         </span>
    //         <div className="relative inline-block">
    //           <h2 className="text-[#002B49] text-2xl sm:text-3xl font-extrabold tracking-tight pb-3">
    //             Popular Courses
    //           </h2>
    //           {/* Bottom blue accent bar matching the visual reference */}
    //           <span className="absolute bottom-0 left-0 w-10 h-0.75 bg-[#0B56A4]"></span>
    //         </div>
    //       </div>
          
    //       <button  onClick={handalCourse} className="border border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white text-xs sm:text-sm font-bold tracking-wide uppercase py-2.5 px-5 rounded transition-colors self-stretch sm:self-auto text-center">
    //         View All Courses
    //       </button>
    //     </div>

    //     {/* Responsive Grid Layout */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    //       {courses.map((course) => (
    //         <div
    //           key={course.id}
    //           className={`bg-white rounded-r-xl border-y border-r border-gray-100 border-l-[5px] ${course.borderColor} shadow-xs hover:shadow-md transition-shadow duration-300 p-6 flex items-start gap-4`}
    //         >
              
    //           {/* Icon / Brand Graphic Box */}
    //           <div className="shrink-0 flex flex-col items-center justify-center min-w-16">
    //             {course.icon}
    //             {course.isCustomIcon && (
    //               <span className="text-[10px] font-bold text-[#004B75] mt-1 tracking-tight">
    //                 {course.subText}
    //               </span>
    //             )}
    //           </div>

    //           {/* Text Information Elements */}
    //           <div className="flex flex-col h-full">
    //             <h3 className="text-[#002B49] text-lg font-extrabold leading-snug">
    //               {course.title}
    //             </h3>
                
    //             <p className="text-gray-500 font-bold text-xs mt-0.5 mb-2">
    //               Duration: <span className="font-semibold">{course.duration}</span>
    //             </p>
                
    //             <p className="text-gray-600 text-[13px] leading-relaxed font-medium mb-4 grow">
    //               {course.description}
    //             </p>

    //             {/* Link Trigger */}
    //             <a
    //               href={`#course-${course.id}`}
    //               className="inline-flex items-center gap-1.5 text-[#0B56A4] hover:text-blue-800 text-sm font-extrabold group transition-colors mt-auto"
    //             >
    //               Learn More
    //               <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
    //             </a>
    //           </div>

    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </section>
    <section className=" py-8 px-4 mt-4 sm:px-6 lg:px-8 font-roboto">
  {/* Changed max-w-350 to max-w-6xl to properly accommodate 3 columns */}
  <div className="max-w-6xl mx-auto">
    
    {/* Header Area */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
      <div>
        <span className="text-[#F18F1C] font-bold text-xs uppercase tracking-wider block mb-1">
          OUR COURSES
        </span>
        <div className="relative inline-block">
          <h2 className="text-[#002B49] text-2xl sm:text-3xl font-extrabold tracking-tight pb-3">
            Popular Courses
          </h2>
          
          <span className="absolute bottom-0 left-0 w-10 h-0.75 bg-[#0B56A4]"></span>
        </div>
      </div>
      
      <button onClick={handalCourse} className="border border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white text-xs sm:text-sm font-bold tracking-wide uppercase py-2.5 px-5 rounded transition-colors self-stretch sm:self-auto text-center">
        View All Courses
      </button>
    </div>

    {/* Responsive Grid Layout: Configured for 3 columns on large screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`bg-white rounded-r-xl border-y border-r border-gray-100 border-l-[5px] ${course.borderColor} shadow-xs hover:shadow-md transition-shadow duration-300 p-6 flex items-start gap-4`}
        >
          
          {/* Icon / Brand Graphic Box */}
          <div className="shrink-0 flex flex-col items-center justify-center min-w-16">
            {course.icon}
            {course.isCustomIcon && (
              <span className="text-[10px] font-bold text-[#004B75] mt-1 tracking-tight">
                {course.subText}
              </span>
            )}
          </div>

          {/* Text Information Elements */}
          <div className="flex flex-col h-full w-full">
            <h3 className="text-[#002B49] text-lg font-extrabold leading-snug">
              {course.title}
            </h3>
            
            <p className="text-gray-500 font-bold text-xs mt-0.5 mb-2">
              Duration: <span className="font-semibold">{course.duration}</span>
            </p>
            
            <p className="text-gray-600 text-[13px] leading-relaxed font-medium mb-4 grow">
              {course.description}
            </p>

            {/* Link Trigger */}
            <button  onClick={ handalCourse}
              
              className="inline-flex items-center gap-1.5 text-[#0B56A4] hover:text-blue-800 text-sm font-extrabold group transition-colors mt-auto"
            >
              Learn More
              <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
  );
}

export default PopulerCources;