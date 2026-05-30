import React from 'react';
import { useNavigate } from 'react-router-dom';
// Reusable component for the navigation column links
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-2 text-sm text-gray-600">
    <h3 className="font-semibold text-gray-900 text-base mb-1">{title}</h3>
    {links.map((link, index) => (
      <a key={index} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 transition-colors">
        {link}
      </a>
    ))}
  </div>
);

function Footer() {
const onHanalHappay=(e)=>{
 
      e.preventDefault();
       window.open('https://www.happydigitalbharat.com/', '_blank');
    }



  // Navigation links data mapping the image layout
  const sections = [
    { title: 'Solutions', links: ['Virtual Office', 'Flex Office', 'Fixed Office'] },
    { title: 'Locations', links: ['Robertsganj', 'Chandauli ', 'Mugalsarai', 'Maa Baliraji Vindyanchal Road, Mirzapur' ,'Chilibila , Varanasi'] },
    { title: 'Partnerships', links: ['Franchise', 'Investor', 'Affiliate'] },
    { title: 'About', links: ['Contact', 'Careers', 'Our People', 'Press'] },
  ];

  return (
    <footer className="w-full bg-white font-sans text-gray-700 border-t border-gray-100 px-6 py-12 md:px-12 lg:px-24">
      {/* Top Section: Info, Links, and Language Dropdown */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-100">
        {/* Company Info (Takes 2 columns wide on large screens) */}
        <div className="lg:col-span-2 space-y-4 text-sm">
          <div className="space-y-1">
            <h2 className="font-semibold text-gray-900 text-base">
              Career Computer Institute/S
            </h2>
            <p>Robertsganj</p>
            <p>Sonbhadra, Uttar Pradesh</p>
          </div>

          <div className="space-y-1">
            <p className="hover:text-blue-600 transition-colors cursor-pointer">
              computertraininginstitute@gmail.com
            </p>
            <p>+91 70072 72808</p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 max-w-xs pt-2">
            <div>
              <p>Monday- Friday</p>
              <p>Saturday - Sunday</p>
            </div>
            <div>
              <p>10.00 - 14.00</p>
              <p className="text-gray-400">Closed</p>
            </div>
          </div>
        </div>

        {/* Dynamic Navigation Columns */}
        {sections.map((section, idx) => (
          <FooterColumn key={idx} title={section.title} links={section.links} />
        ))}

        {/* Language Selector */}
        
      </div>

      {/* Bottom Section: Copyright, Socials, and Legal Links */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        {/* Copyright */}
        <div className="order-3 md:order-1">
          &copy; 2026 -Career Computer Institute/S designed by <button onClick={onHanalHappay} className='hover:text-blue-400 hover:text-[18px]'> Happy Digital Bharat   </button> 
        </div>

        {/* Social Media Icons (Centered on all breakpoints) */}
        

        {/* Legal Links */}
        <div className="order-2 md:order-3 flex items-center space-x-6 text-gray-600">
          <a href="#terms" className="hover:text-blue-600 transition-colors">
            Terms
          </a>
          <a href="#privacy" className="hover:text-blue-600 transition-colors">
            Privacy
          </a>
          <a href="#cookies" className="hover:text-blue-600 transition-colors">
            Cookies
          </a>
          <a href="#sitemap" className="hover:text-blue-600 transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;