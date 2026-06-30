import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler (Sends data to your DB/API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual backend API URL
    //   const response = await fetch(
    //     "https://your-api-endpoint.com/api/contact",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     },
    //   );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }); // Reset form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Action Data Link Constants
  const CONTACT_INFO = {
    phone: "917007272808",
    email: "computertraininginstitute@gmail.com",
    whatsapp: "917007272808", // Include country code, omit '+' or '00' for wa.me link
    address: "Robertsganj, Sonbhadra ,uttar Pradesh, India",
    mapsUrl:
      "https://www.google.com/maps/place/Robertsganj,+Uttar+Pradesh+231216",
  };

  return (
    <div className="min-h-screen bg-[oklch(37.9%_0.146_265.522)]  text-white font-sans px-4 py-12 md:px-8 lg:px-16 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-12 relative z-10">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Get In Touch</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          {/* Address Card */}
          <div className="bg-white border border-gray-800 rounded-xl p-5 flex items-start space-x-4">
            <div className="bg-[#5046e5] p-3 rounded-xl text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Address</h3>
              <p className="text-gray-800 text-sm mt-1">
                {CONTACT_INFO.address}
              </p>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#818cf8] text-sm font-medium mt-2 inline-flex items-center hover:underline"
              >
                Get Directions <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white border border-gray-800 rounded-xl p-5 flex items-start space-x-4">
            <div className="bg-[#5046e5] p-3 rounded-xl text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.473-5.118-3.767-6.59-6.59l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.75Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Phone</h3>
              <p className="text-gray-800 text-sm mt-1">{CONTACT_INFO.phone}</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-[#818cf8] text-sm font-medium mt-2 inline-flex items-center hover:underline"
              >
                Call Now <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-gray-800 rounded-xl p-5 flex items-start space-x-4">
            <div className="bg-[#5046e5] p-3 rounded-xl text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {/* <HiOutlineMail/> */}
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Email</h3>
              <p className="text-gray-800 text-sm mt-1">{CONTACT_INFO.email}</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-[#818cf8] text-sm font-medium mt-2 inline-flex items-center hover:underline"
              >
                Send Email <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white border border-gray-800 rounded-xl p-5 flex items-start space-x-4">
            <div className="bg-[#5046e5] p-3 rounded-xl text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                Operating Hours
              </h3>
              <div className="text-gray-800 text-sm mt-1 space-y-0.5">
                <p>Mon - Fri: 10:00 AM - 05:00 PM</p>
                <p>Saturday: 10:00 AM - 02:00 PM</p>
                <p>Sunday: close</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white border border-gray-800 rounded-xl p-5 flex items-start space-x-4">
            <div className="bg-[#22c55e] p-3 rounded-xl text-white">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.473 1.452 5.38 1.453 5.441 0 9.865-4.422 9.869-9.866.002-2.637-1.023-5.116-2.883-6.978C17.151 1.84 14.68 .815 12.04.815c-5.447 0-9.872 4.423-9.876 9.867-.001 1.992.519 3.94 1.508 5.662l-.99 3.613 3.695-.97z" />
              </svg> */}
              <BsWhatsapp />
            </div>
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p className="text-gray-400 text-sm mt-1">{CONTACT_INFO.phone}</p>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ade80] text-sm font-medium mt-2 inline-flex items-center hover:underline"
              >
                Chat on WhatsApp <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Message Form */}
        <div className="lg:col-span-7 bg-white text-black border border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl text-black font-semibold mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-[#1b1e42] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-[#1b1e42] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-[#1b1e42] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
                className="w-full bg-[#1b1e42] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter your message"
                className="w-full bg-[#1b1e42] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#5046e5] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5046e5] hover:bg-[#4338ca] text-white font-medium py-3.5 rounded-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Notification Messages */}
            {submitStatus === "success" && (
              <p className="text-emerald-400 text-sm font-medium text-center">
                Message submitted successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-rose-400 text-sm font-medium text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Layout Shortcut Quick-Action Buttons */}
      <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="bg-[#5046e5] hover:bg-[#4338ca] flex items-center justify-center space-x-2 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          <span>📞 Call</span>
        </a>
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center space-x-2 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          <span>💬 WhatsApp</span>
        </a>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="bg-[#4f46e5] hover:bg-[#4338ca] flex items-center justify-center space-x-2 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          <span>✉️ Email</span>
        </a>
        <a
          href={CONTACT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4338ca] hover:bg-[#3730a3] flex items-center justify-center space-x-2 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          <span>📍 Directions</span>
        </a>
      </div>
      <div className="w-full h-[350px] md:h-[450px] bg-[#b2b5e6] border border-gray-800 rounded-2xl overflow-hidden shadow-lg relative group mt-10">
        {/* Google Maps Embed iframe */}
        <iframe
          title="Career Computer Institute Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.321852084795!2d83.0645607!3d24.6814674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ee6cd4ddd9c89%3A0x2a412105a9ca98ca!2sCareer%20classes%20robertsganj%20sonbhadra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          className="w-full h-full border-0  opacity-80 contrast-125 invert-[0.9] hue-rotate-[200deg] transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:invert-0 group-hover:hue-rotate-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Optional Dark-Theme Map Overlay indicator */}
        <div className="absolute bottom-3 left-3 bg-[#0d0e22]/90 border border-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-100 pointer-events-none transition-opacity group-hover:opacity-0">
          Hover to reveal full colors
        </div>
      </div>
    </div>
  );
}
