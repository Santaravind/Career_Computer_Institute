// import React, { useState, useEffect } from 'react';

// import logo from '../../assets/logo.jpeg';

// function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeItem, setActiveItem] = useState('Home');

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Course', href: '/course' },
//     { name: 'Student', href: '/student' },
//     { name: 'Verification', href: '/verification' }
//   ];

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileMenuOpen]);

//   const handleNavClick = (itemName) => {
//     setActiveItem(itemName);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className={`
//         fixed top-0 left-0 right-0 z-50 transition-all duration-300
//         ${scrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//           : 'bg-white/90 backdrop-blur-sm shadow-sm'
//         } mt-10
//       `}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 lg:h-20 transition-all duration-300">
            
//             {/* Logo Section with hover animation */}
//             <div className="shrink-0 flex items-center group cursor-pointer">
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Logo" 
//                   className="h-10 w-auto rounded-lg object-contain transition-all duration-300 
//                            group-hover:scale-105 group-hover:shadow-md"
//                 />
//                 <div className="absolute inset-0 rounded-lg bg-linear-to-r from-transparent to-white/20 
//                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <span className="ml-3 text-gray-700 font-medium text-lg hidden sm:block 
//                              transition-all duration-300 group-hover:text-gray-900 
//                              group-hover:translate-x-0.5">
//             Career Computer Institute
//               </span>
//             </div>

//             {/* Desktop Navigation with micro-interactions */}
//             <div className="hidden md:flex md:items-center md:space-x-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => handleNavClick(item.name)}
//                   className={`
//                     relative px-4 py-2 text-base font-medium rounded-lg 
//                     transition-all duration-300 ease-out
//                     focus:outline-none focus:ring-2 focus:ring-gray-300
//                     ${activeItem === item.name
//                       ? 'text-gray-900 bg-gray-100/80'
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
//                     }
//                   `}
//                 >
//                   {item.name}
//                   {/* Animated underline */}
//                   <span className={`
//                     absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
//                     bg-linear-to-r from-gray-400 to-gray-600 rounded-full
//                     transition-all duration-300 ease-out
//                     ${activeItem === item.name ? 'w-6' : 'group-hover:w-4'}
//                   `}></span>
//                 </a>
//               ))}
//             </div>

//             {/* Mobile menu button with animation */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className={`
//                   relative inline-flex items-center justify-center p-2 rounded-lg
//                   text-gray-600 hover:text-gray-900 hover:bg-gray-100
//                   focus:outline-none focus:ring-2 focus:ring-gray-300
//                   transition-all duration-300 ease-out
//                   ${isMobileMenuOpen ? 'bg-gray-100' : ''}
//                 `}
//                 aria-label="Toggle menu"
//               >
//                 <div className="relative w-6 h-6">
//                   {/* Hamburger to X animation */}
//                   <span className={`
//                     absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out
//                     ${isMobileMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1.5'}
//                   `}></span>
//                   <span className={`
//                     absolute h-0.5 bg-current transition-all duration-300 ease-out
//                     ${isMobileMenuOpen 
//                       ? 'w-0 opacity-0 left-1/2 top-3' 
//                       : 'w-6 opacity-100 left-0 top-3'
//                     }
//                   `}></span>
//                   <span className={`
//                     absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out
//                     ${isMobileMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-4.5'}
//                   `}></span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu with smooth animations */}
//         <div className={`
//           md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-md shadow-xl
//           transition-all duration-400 ease-out z-40
//           ${isMobileMenuOpen 
//             ? 'opacity-100 translate-x-0 visible' 
//             : 'opacity-0 translate-x-full invisible'
//           }
//         `}>
//           <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
//             {navItems.map((item, index) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => handleNavClick(item.name)}
//                 className={`
//                   block px-4 py-3 rounded-xl text-base font-medium
//                   transition-all duration-300 ease-out
//                   transform hover:translate-x-2
//                   ${activeItem === item.name
//                     ? 'text-gray-900 bg-linear-to-r from-gray-100 to-gray-50'
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }
//                 `}
//                 style={{
//                   animation: isMobileMenuOpen 
//                     ? `slideIn 0.3s ease-out ${index * 0.05}s both`
//                     : 'none'
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <span>{item.name}</span>
//                   {activeItem === item.name && (
//                     <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   )}
//                 </div>
//               </a>
//             ))}
            
//             {/* Mobile menu footer */}
//             <div className="pt-6 mt-6 border-t border-gray-200">
//               <div className="flex justify-center space-x-6">
//                 <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
//                   </svg>
//                 </button>
//                 <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                   </svg>
//                 </button>
//                 <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay for mobile menu */}
//       <div 
//         className={`
//           fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden
//           transition-all duration-300 ease-out
//           ${isMobileMenuOpen 
//             ? 'opacity-100 visible' 
//             : 'opacity-0 invisible pointer-events-none'
//           }
//         `}
//         onClick={() => setIsMobileMenuOpen(false)}
//       />

//       {/* Add CSS animations */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
        
//         .top-4\.5 {
//           top: 1.125rem;
//         }
//       `}</style>

//       {/* Add padding to body to account for fixed navbar */}
//       <div className="pt-16 lg:pt-20"></div>
//     </>
//   );
// }

// export default Navigation;

import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  // Nav items matching your updated image layout exactly
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'COURSES', href: '/course' },
    { name: 'ADMISSIONS', href: '/admissions' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'PLACEMENTS', href: '/placements' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' }
  ];

   const navigation = useNavigate();
    const loginHanldClink = (e) => {
      e.preventDefault();
      navigation("/login");
    };
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`
        left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 print:hidden
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md top-0' 
          : 'bg-white top-0 lg:top-9'
        }
      `}>
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24 transition-all duration-300">
            
            
           {/* Logo Section */}
<div className="print:hidden flex items-center gap-3 select-none cursor-pointer ml-5 font-roboto"> 
  {/* Graphic Emblem */}
  <div className="shrink-0 flex items-center">
    <img 
      src={logo} 
      alt="Emblem" 
      className="h-14 sm:h-16 w-auto object-contain"
    />
  </div>
  
  {/* Typography Suite */}
  <div className="flex flex-col justify-center uppercase leading-none ">
    {/* CAREER */}
    <h1 className="text-[#0B56A4] text-2xl sm:text-3xl tracking-wider text-center font-bold ">
      Career
    </h1>
    
    {/* COMPUTER INSTITUTE */}
    <h2 className="text-[#F18F1C] text-[10px] sm:text-[13px] font-bold tracking-wider mt-0.5">
      Computer Institute
    </h2>
    
    {/* Slogan Divider Row */}
    <div className="flex items-center gap-1.5 mt-1 text-[7px] sm:text-[9px] font-medium tracking-wide text-slate-500 normal-case">
      <span className="h-px w-3 bg-slate-300"></span>
      <p className="whitespace-nowrap">Shape Your Future With Us</p>
      <span className="h-px w-3 bg-slate-300"></span>
    </div>
  </div>
</div>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-4 ">
  {navItems.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      onClick={() => handleNavClick(item.name)}
      className={`
        relative px-2.5 xl:px-3.5 py-2 text-[12px] xl:text-[12px]
        font-bold tracking-wide font-roboto transition-all duration-200
        ${activeItem === item.name
          ? 'text-[#0B56A4]'
          : 'text-gray-900 hover:text-[#0B56A4]'
        }
      `}
    >
      {item.name}

      <span
        className={`
          absolute -bottom-1 left-0 right-0 h-0.75 bg-[#0B56A4]
          transition-all duration-200
          ${activeItem === item.name ? 'opacity-100' : 'opacity-0'}
        `}
      ></span>
    </Link>
  ))}
</div>

            {/* Action CTA Button */}
            <div className="hidden lg:block">
              <button 
                 onClick={loginHanldClink}
                className="bg-[oklch(35.9%_0.146_265.522)] text-white text-xs xl:text-sm font-bold uppercase tracking-wider py-3 px-6 rounded-lg shadow-sm hover:opacity-90 transition-opacity"
              >
                login
              </button>
            </div>

            {/* Mobile menu toggle button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1.5'}`}></span>
                  <span className={`absolute h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0 left-1/2 top-3' : 'w-6 opacity-100 left-0 top-3'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-4.5'}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div className={`
          lg:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-100 shadow-xl
          transition-all duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
        `}>
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`
                  block px-4 py-3 rounded-md text-sm font-bold tracking-wider
                  ${activeItem === item.name
                    ? 'text-[#0B56A4] bg-blue-50'
                    : 'text-gray-800 hover:bg-gray-50'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <button
              onClick={loginHanldClink}
                className="block text-center bg-[oklch(35.9%_0.146_265.522)] text-white text-sm font-bold uppercase tracking-wider py-3 px-6 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dimmed backdrop for mobile view */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Padding space element to offset the static/fixed layouts layout seamlessly */}
      {/* <div className="h-20 lg:h-24"></div> */}
    </>
  );
}

export default Navigation;