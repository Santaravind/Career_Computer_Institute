// import React from "react";
// import { useNavigate } from "react-router-dom";
// // Reusable component for the navigation column links
// const FooterColumn = ({ title, links }) => (
//   <div className="print:hidden flex flex-col space-y-2 text-sm text-gray-900">
//     <h3 className="font-semibold text-gray-900 text-base mb-1">{title}</h3>
//     {links.map((link, index) => (
//       <a
//         key={index}
//         href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
//         className="hover:text-blue-600 transition-colors"
//       >
//         {link}
//       </a>
//     ))}
//   </div>
// );

// function Footer() {
//   const onHanalHappay = (e) => {
//     e.preventDefault();
//     window.open("https://www.happydigitalbharat.com/", "_blank");
//   };

//   // Navigation links data mapping the image layout
//   const sections = [
//     {
//       title: "Solutions",
//       links: ["Virtual Office", "Flex Office", "Fixed Office"],
//     },
//     {
//       title: "Locations",
//       links: [
//         "Robertsganj",
//         "Chandauli ",
//         "Mugalsarai",
//         "Maa Baliraji Vindyanchal Road, Mirzapur",
//         "Chilibila , Varanasi",
//       ],
//     },
//     { title: "Partnerships", links: ["Franchise", "Investor", "Affiliate"] },
//     { title: "About", links: ["Contact", "Careers", "Our People", "Press"] },
//   ];

//   return (
//     <footer className="print:hidden  w-full bg-white font-sans text-black border-t border-gray-800 px-6 py-12 md:px-12 lg:px-24">
//       {/* Top Section: Info, Links, and Language Dropdown */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-800">
//         {/* Company Info (Takes 2 columns wide on large screens) */}
//         <div className="lg:col-span-2 space-y-4 text-sm">
//           <div className="space-y-1">
//             <h2 className=" font-bold text-black text-base">
//               Career Computer Institute/S
//             </h2>
//             <p>Robertsganj</p>
//             <p>Sonbhadra, Uttar Pradesh</p>
//           </div>

//           <div className="space-y-1">
//             <p className="hover:text-blue-600 transition-colors cursor-pointer">
//               computertraininginstitute@gmail.com
//             </p>
//             <p>+91 70072 72808</p>
//           </div>

//           <div className="grid grid-cols-2 gap-x-4 max-w-xs pt-2">
//             <div>
//               <p>Monday- Friday</p>
//               <p>Saturday - Sunday</p>
//             </div>
//             <div>
//               <p>10.00 - 14.00</p>
//               <p className="text-gray-600">Closed</p>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Navigation Columns */}
//         {sections.map((section, idx) => (
//           <FooterColumn key={idx} title={section.title} links={section.links} />
//         ))}

//         {/* Language Selector */}
//       </div>

//       {/* Bottom Section: Copyright, Socials, and Legal Links */}
//       <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
//         {/* Copyright */}
//         <div className="order-3 md:order-1">
//           &copy; 2026 -Career Computer Institute/S designed by{" "}
//           <button
//             onClick={onHanalHappay}
//             className="hover:text-blue-400 hover:text-[18px]"
//           >
//             {" "}
//             Happy Digital Bharat{" "}
//           </button>
//         </div>

//         {/* Social Media Icons (Centered on all breakpoints) */}

//         {/* Legal Links */}
//         <div className="order-2 md:order-3 flex items-center space-x-6 text-gray-800">
//           <a href="#terms" className="hover:text-blue-600 transition-colors">
//             Terms
//           </a>
//           <a href="#privacy" className="hover:text-blue-600 transition-colors">
//             Privacy
//           </a>
//           <a href="#cookies" className="hover:text-blue-600 transition-colors">
//             Cookies
//           </a>
//           <a href="#sitemap" className="hover:text-blue-600 transition-colors">
//             Sitemap
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { MdMail, MdPhone, MdSchool } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-4">{title}</h3>
    <div className="flex flex-col gap-2.5">
      {links.map((link, i) => (
        <a key={i} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block w-fit">
          {link}
        </a>
      ))}
    </div>
  </div>
);

export default function Footer() {
  const sections = [
    { title: "Solutions", links: ["Virtual Office", "Flex Office", "Fixed Office"] },
    { title: "Locations", links: ["Robertsganj", "Chandauli", "Mugalsarai", "Mirzapur", "Chilibila, Varanasi"] },
    { title: "Partnerships", links: ["Franchise", "Investor", "Affiliate"] },
    { title: "About", links: ["Contact", "Careers", "Our People", "Press"] },
  ];

  const socials = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaWhatsapp, label: "WhatsApp" },
    { Icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-blue-700 via-blue-400 to-transparent" />
      <footer className="bg-[#0C2340] px-6 py-12 md:px-12 lg:px-24 font-sans print:hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
              <MdSchool size={22} className="text-white" />
            </div>

            <div>
              <h2 className="text-white font-medium text-base">Career Computer Institute/S</h2>
              <p className="text-white/50 text-sm mt-1 leading-relaxed">
                Robertsganj, Sonbhadra<br />Uttar Pradesh, India
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href="mailto:computertraininginstitute@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MdMail size={15} className="text-blue-400 shrink-0" />
                computertraininginstitute@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MdPhone size={15} className="text-blue-400 shrink-0" />
                +91 70072 72808
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 text-sm max-w-xs">
              <span className="text-white/40">Mon – Fri</span>
              <span className="text-white/80 font-medium">10:00 – 14:00</span>
              <span className="text-white/40">Sat – Sun</span>
              <span className="text-red-400 font-medium">Closed</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently open
            </div>

            <div className="flex gap-2.5 pt-1">
              {socials.map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/55 hover:bg-blue-700 hover:border-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {sections.map((s, i) => (
            <FooterColumn key={i} title={s.title} links={s.links} />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/35">
          <p>
            &copy; 2026 Career Computer Institute/S &middot; Designed by{" "}
            <button
              onClick={() => window.open("https://www.happydigitalbharat.com/", "_blank")}
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors bg-none border-none cursor-pointer text-xs font-sans"
            >
              Happy Digital Bharat
            </button>
          </p>
          <div className="flex gap-5">
            {["Terms", "Privacy", "Cookies", "Sitemap"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}