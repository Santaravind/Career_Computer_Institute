// import React from 'react';
// import { FiArrowRight } from 'react-icons/fi';
// import { LuMonitorDot } from 'react-icons/lu';
// import { FaCode } from 'react-icons/fa6';
// import { IoMegaphoneOutline } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
// function PopulerCources() {
//   // Course data array based on your image layout
//   const courses = [
//     {
//       id: 1,
//       title: 'Basic Computer',
//       duration: '3 Months',
//       description: 'Learn fundamentals of computer, MS Office, Internet & more.',
//       borderColor: 'border-l-[#0B56A4]', // Blue
//       icon: <LuMonitorDot className="text-4xl text-[#0B56A4]" />,
//       isCustomIcon: false
//     },
//     {
//       id: 2,
//       title: 'Web Designing',
//       duration: '6 Months',
//       description: 'Learn HTML, CSS, JavaScript, and modern tools.',
//       borderColor: 'border-l-[#2E7D32]', // Green
//       icon: <FaCode className="text-4xl text-[#2E7D32]" />,
//       isCustomIcon: false
//     },
//     {
//       id: 3,
//       title: 'Tally Prime',
//       duration: '3 Months',
//       description: 'Learn Accounting, GST, Inventory & Financial Management.',
//       borderColor: 'border-l-[#F1A80A]', // Yellow-Gold
//       // Custom graphic box to match the unique Tally blue/yellow logo style in screenshot
//       icon: (
//         <div className="w-12 h-12 flex flex-wrap rounded overflow-hidden">
//           <div className="w-6 h-6 bg-[#006699]"></div>
//           <div className="w-6 h-6 bg-[#004B75]"></div>
//           <div className="w-6 h-6 bg-[#D4A316]"></div>
//           <div className="w-6 h-6 bg-[#0084B4]"></div>
//         </div>
//       ),
//       isCustomIcon: true,
//       subText: 'Tally Prime'
//     },
//     {
//       id: 4,
//       title: 'Digital Marketing',
//       duration: '4 Months',
//       description: 'Learn SEO, Social Media, Google Ads & more.',
//       borderColor: 'border-l-[#8E24AA]', // Purple
//       icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
//       isCustomIcon: false
//     },
//      {
//       id: 5,
//       title: 'O. LEVEL ',
//       duration: '',
//       description: '',
//       borderColor: 'border-l-[#8E24AA]', // Purple
//       icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
//       isCustomIcon: false
//     },
//      {
//       id: 6,
//       title: 'A.D.C.A',
//       duration: '12 Months',
//       description: '',
//       borderColor: 'border-l-[#8E24AA]', // Purple
//       icon: < IoMegaphoneOutline  className="text-4xl text-[#8E24AA] -rotate-12" />,
//       isCustomIcon: false
//     }
//   ];
//    const navigate = useNavigate(); 
//   const handalCourse =(e) =>{
//           e.preventDefault();
//           navigate("/course");

//   }
//   return (
//     // <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-roboto">
//     //   <div className="max-w-350 mx-auto">
        
//     //     {/* Header Area */}
//     //     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
//     //       <div>
//     //         <span className="text-[#F18F1C] font-bold text-xs uppercase tracking-wider block mb-1">
//     //           OUR COURSES
//     //         </span>
//     //         <div className="relative inline-block">
//     //           <h2 className="text-[#002B49] text-2xl sm:text-3xl font-extrabold tracking-tight pb-3">
//     //             Popular Courses
//     //           </h2>
//     //           {/* Bottom blue accent bar matching the visual reference */}
//     //           <span className="absolute bottom-0 left-0 w-10 h-0.75 bg-[#0B56A4]"></span>
//     //         </div>
//     //       </div>
          
//     //       <button  onClick={handalCourse} className="border border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white text-xs sm:text-sm font-bold tracking-wide uppercase py-2.5 px-5 rounded transition-colors self-stretch sm:self-auto text-center">
//     //         View All Courses
//     //       </button>
//     //     </div>

//     //     {/* Responsive Grid Layout */}
//     //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//     //       {courses.map((course) => (
//     //         <div
//     //           key={course.id}
//     //           className={`bg-white rounded-r-xl border-y border-r border-gray-100 border-l-[5px] ${course.borderColor} shadow-xs hover:shadow-md transition-shadow duration-300 p-6 flex items-start gap-4`}
//     //         >
              
//     //           {/* Icon / Brand Graphic Box */}
//     //           <div className="shrink-0 flex flex-col items-center justify-center min-w-16">
//     //             {course.icon}
//     //             {course.isCustomIcon && (
//     //               <span className="text-[10px] font-bold text-[#004B75] mt-1 tracking-tight">
//     //                 {course.subText}
//     //               </span>
//     //             )}
//     //           </div>

//     //           {/* Text Information Elements */}
//     //           <div className="flex flex-col h-full">
//     //             <h3 className="text-[#002B49] text-lg font-extrabold leading-snug">
//     //               {course.title}
//     //             </h3>
                
//     //             <p className="text-gray-500 font-bold text-xs mt-0.5 mb-2">
//     //               Duration: <span className="font-semibold">{course.duration}</span>
//     //             </p>
                
//     //             <p className="text-gray-600 text-[13px] leading-relaxed font-medium mb-4 grow">
//     //               {course.description}
//     //             </p>

//     //             {/* Link Trigger */}
//     //             <a
//     //               href={`#course-${course.id}`}
//     //               className="inline-flex items-center gap-1.5 text-[#0B56A4] hover:text-blue-800 text-sm font-extrabold group transition-colors mt-auto"
//     //             >
//     //               Learn More
//     //               <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
//     //             </a>
//     //           </div>

//     //         </div>
//     //       ))}
//     //     </div>

//     //   </div>
//     // </section>
//     <section className=" py-8 px-4 mt-4 sm:px-6 lg:px-8 font-roboto">
//   {/* Changed max-w-350 to max-w-6xl to properly accommodate 3 columns */}
//   <div className="max-w-6xl mx-auto">
    
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
          
//           <span className="absolute bottom-0 left-0 w-10 h-0.75 bg-[#0B56A4]"></span>
//         </div>
//       </div>
      
//       <button onClick={handalCourse} className="border border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white text-xs sm:text-sm font-bold tracking-wide uppercase py-2.5 px-5 rounded transition-colors self-stretch sm:self-auto text-center">
//         View All Courses
//       </button>
//     </div>

//     {/* Responsive Grid Layout: Configured for 3 columns on large screens */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
//           <div className="flex flex-col h-full w-full">
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
//             <button  onClick={ handalCourse}
              
//               className="inline-flex items-center gap-1.5 text-[#0B56A4] hover:text-blue-800 text-sm font-extrabold group transition-colors mt-auto"
//             >
//               Learn More
//               <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//         </div>
//       ))}
//     </div>

//   </div>
// </section>
//   );
// }

// export default PopulerCources;

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { LuMonitorDot, LuGraduationCap, LuFileSpreadsheet } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';
import { IoMegaphoneOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function PopularCourses() {
  const navigate = useNavigate(); 

  const handleCourse = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); 
    navigate("/course");
  };

  // Structured course data array with distinct icons and unified typography
  const courses = [
    {
      id: 1,
      title: 'Basic Computer',
      duration: '3 Months',
      description: 'Learn fundamentals of computer, MS Office, Internet & more.',
      borderColor: 'border-l-[#0B56A4]',
      hoverBg: 'hover:bg-[#0B56A4]/5',
      icon: <LuMonitorDot className="text-4xl text-[#0B56A4] transition-transform duration-300 group-hover:scale-110" />,
      isCustomIcon: false
    },
    {
      id: 2,
      title: 'Web Designing',
      duration: '6 Months',
      description: 'Learn HTML, CSS, JavaScript, and modern tools.',
      borderColor: 'border-l-[#2E7D32]',
      hoverBg: 'hover:bg-[#2E7D32]/5',
      icon: <FaCode className="text-4xl text-[#2E7D32] transition-transform duration-300 group-hover:scale-110" />,
      isCustomIcon: false
    },
    {
      id: 3,
      title: 'Tally Prime',
      duration: '3 Months',
      description: 'Learn Accounting, GST, Inventory & Financial Management.',
      borderColor: 'border-l-[#F1A80A]',
      hoverBg: 'hover:bg-[#F1A80A]/5',
      icon: (
        <div className="w-11 h-11 flex flex-wrap rounded overflow-hidden shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <div className="w-5.5 h-5.5 bg-[#006699]"></div>
          <div className="w-5.5 h-5.5 bg-[#004B75]"></div>
          <div className="w-5.5 h-5.5 bg-[#D4A316]"></div>
          <div className="w-5.5 h-5.5 bg-[#0084B4]"></div>
        </div>
      ),
      isCustomIcon: true,
      subText: 'Tally Prime'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      duration: '4 Months',
      description: 'Learn SEO, Social Media, Google Ads & industry strategies.',
      borderColor: 'border-l-[#8E24AA]',
      hoverBg: 'hover:bg-[#8E24AA]/5',
      icon: <IoMegaphoneOutline className="text-4xl text-[#8E24AA] -rotate-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-0" />,
      isCustomIcon: false
    },
    {
      id: 5,
      title: 'O. LEVEL',
      duration: '12 Months',
      description: 'Master IT tools, network basics, web design, and Python programming.',
      borderColor: 'border-l-[#E65100]',
      hoverBg: 'hover:bg-[#E65100]/5',
      icon: <LuGraduationCap className="text-4xl text-[#E65100] transition-transform duration-300 group-hover:scale-110" />,
      isCustomIcon: false
    },
    {
      id: 6,
      title: 'A.D.C.A',
      duration: '12 Months',
      description: 'Advance Diploma in Computer Applications covering core tech utilities.',
      borderColor: 'border-l-[#00838F]',
      hoverBg: 'hover:bg-[#00838F]/5',
      icon: <LuFileSpreadsheet className="text-4xl text-[#00838F] transition-transform duration-300 group-hover:scale-110" />,
      isCustomIcon: false
    }
  ];

  return (
    <section className="bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8 font-roboto antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <span className="text-[#F18F1C] font-extrabold text-xs uppercase tracking-widest block mb-2">
              OUR COURSES
            </span>
            <div className="relative inline-block pb-3">
              <h2 className="text-[#002B49] text-3xl sm:text-4xl font-black tracking-tight">
                Popular Courses
              </h2>
              <span className="absolute bottom-0 left-0 w-12 h-1 rounded-full bg-[#0B56A4]"></span>
            </div>
          </div>
          
          <button 
            onClick={handleCourse} 
            className="group relative border-2 border-pink-600 text-black hover:text-black text-xs sm:text-sm hover:cursor-pointer font-bold tracking-wider uppercase py-3 px-6 rounded-lg overflow-hidden transition-colors duration-300 self-stretch sm:self-auto text-center shadow-xs"
          >
            <span className="absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 "></span>
            View All Courses
          </button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={handleCourse}
              className={`group cursor-pointer bg-white rounded-r-2xl border-y border-r border-gray-100 border-l-[6px] ${course.borderColor} ${course.hoverBg} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex items-start gap-5`}
            >
              
              {/* Icon / Brand Graphic Box */}
              <div className="shrink-0 flex flex-col items-center justify-center min-w-[4.5rem]">
                {course.icon}
                {course.isCustomIcon && (
                  <span className="text-[10px] font-bold text-[#004B75] mt-1.5 tracking-tight uppercase">
                    {course.subText}
                  </span>
                )}
              </div>

              {/* Text Information Elements */}
              <div className="flex flex-col h-full w-full">
                <h3 className="text-[#002B49] text-xl font-bold leading-snug transition-colors duration-200 group-hover:text-black">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 font-bold text-[11px] uppercase tracking-wider mt-1 mb-2">
                  Duration: <span className="text-gray-700 font-semibold">{course.duration}</span>
                </p>
                
                <p className="text-gray-500 text-[13px] leading-relaxed font-normal mb-5 grow line-clamp-2">
                  {course.description}
                </p>

                {/* Micro-interactive Link Trigger */}
                <span className="inline-flex items-center gap-2 text-[#0B56A4] group-hover:text-blue-800 text-sm font-bold transition-colors mt-auto">
                  Learn More
                  <FiArrowRight className="text-base transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCourses;