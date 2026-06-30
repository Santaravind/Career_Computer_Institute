
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAdminEmail, setAdminPassword,clearAdmin } from "../reduxstore/adminSlice";

// import toast from "react-hot-toast";
// import SendNotification from "../adminpages/SendNotification";

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [activeComponent, setActiveComponent] = useState(null);
//   const dispatch = useDispatch();
//   const admin = useSelector((state) => state.admin);

//   const ADMIN_EMAIL = "computertraininginstutite@gmail.com";
//   const ADMIN_PASSWORD = "Sanjay@830";
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("Submit clicked - Email:", email, "Password:", password);
    
//     if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//       // console.log("Credentials matched - dispatching actions");
//       dispatch(setAdminEmail(email));
//       dispatch(setAdminPassword(password));
//       toast.success("Admin authentication successful!");
//     } else {
//       toast.error("Access Denied: Invalid email or password.");
//       setEmail("");
//       setPassword("");
//     }
//   };

//      const handleLogout = (e) => {
//     e.preventDefault(); 
//     dispatch(clearAdmin()); //  clear the Redux state
//     toast.success("Logged out successfully!");
//      setEmail("");
//       setPassword("");
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleComponentClick = (componentName) => {
//     setActiveComponent(componentName);
//   };

//   const renderActiveComponent = () => {
//     switch (activeComponent) {
//       case "sendNotification":
//         return <SendNotification />;
//       case "resultDeclared":
//         // return <ResultDeclared />;
//       case "certificate ":
//         // return <CertificateDeclared />;
//         case "AdminResult":
//           // return <AdminResult/>
//            case "Cetificate":
//           // return <Certificate/>
//           case "Admid Card" :
//             //return <AdmidCard/>
//           case "Fee Collection" :
//             //return <FeeCollection/>
//           case "Teacher Verification" :
//              //return <Teacher/>
//           case "Id Card" :
//             // return <IdCard/>
//           case "Affiliation Verification " :
//             // return <IdCard/>
           
//           default:
//         return (
//           <div className="text-center py-8 text-gray-500">
//             Select an admin tool from the buttons above
//           </div>
//         );
//     }
//   };

//   // Debug authentication condition
//   const isAuthenticated = admin.isAuthenticated && admin.email === ADMIN_EMAIL;
//   // console.log("Is authenticated:", isAuthenticated);
//   // console.log("Admin isAuthenticated:", admin.isAuthenticated);
//   // console.log("Admin email:", admin.email);

//   // If authenticated with the specific email and password, show admin tools
//   if (isAuthenticated) {
//     console.log("Rendering authenticated view");
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-5xl font-bold text-gray-800 mb-4">
//               Admin Portal
//             </h1>
//             <p className="text-xl text-gray-600">
//               Manage Notifications and Student results
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Admin Login Card */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
//                 <div className="text-center mb-8">
//                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       className="w-10 h-10 text-green-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                     Admin Access
//                   </h2>
//                   <p className="text-green-500 font-medium bg-green-50 px-3 py-1 rounded-full text-sm inline-block">
//                     Access Granted - Welcome Admin
//                   </p>
//                 </div>

//                 <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <svg
//                         className="w-5 h-5 text-green-500 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       <span className="text-green-700 font-medium">
//                         {/* admin.email */}
//                         Authenticated as: Admin                        
//                       </span>

//                     </div>
                    
//                   </div>
                  
//                 </div>
//                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:-translate-y-0.5 mt-2"onClick={handleLogout} > Logout </button>
//               </div>
//             </div>

//             {/* Admin Tools Section */}
//             <div className="lg:col-span-2">
//               <div className="space-y-8">
//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                     Admin Tools
//                   </h3>
                  
//                   {/* Action Buttons */}
//                   {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                     <button
//                       onClick={() => handleComponentClick("sendNotification")}
//                       className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//                         activeComponent === "sendNotification"
//                           ? "bg-blue-50 border-blue-500 text-blue-700 transform -translate-y-1 shadow-md"
//                           : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25 hover:shadow-sm"
//                       }`}
//                     >
//                       <svg
//                         className="w-6 h-6 mr-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                         />
//                       </svg>
//                       Send Notification
//                     </button>

//                     <button
//                       onClick={() => handleComponentClick("resultDeclared")}
//                       className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//                         activeComponent === "resultDeclared"
//                           ? "bg-green-50 border-green-500 text-green-700 transform -translate-y-1 shadow-md"
//                           : "bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-25 hover:shadow-sm"
//                       }`}
//                     >
//                       <svg
//                         className="w-6 h-6 mr-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       Declare Results
//                     </button>
//                   </div> */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//   {/* Send Notification Button */}
//   <button
//     onClick={() => handleComponentClick("sendNotification")}
//     className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//       activeComponent === "sendNotification"
//         ? "bg-blue-50 border-blue-500 text-blue-700 transform -translate-y-1 shadow-md"
//         : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25 hover:shadow-sm"
//     }`}
//   >
//     <svg
//       className="w-6 h-6 mr-3"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//       />
//     </svg>
//     Send Notification
//   </button>

//   {/* Declare Result Button */}
//   <button
//     onClick={() => handleComponentClick("resultDeclared")}
//     className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//       activeComponent === "resultDeclared"
//         ? "bg-green-50 border-green-500 text-green-700 transform -translate-y-1 shadow-md"
//         : "bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-25 hover:shadow-sm"
//     }`}
//   >
//     <svg
//       className="w-6 h-6 mr-3"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     </svg>
//     Declare Results
//   </button>

//   {/* AdminResult Button (NEW BUTTON) */}
//   <button
//     onClick={() => handleComponentClick("AdminResult")}
//     className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//       activeComponent === "AdminResult"
//         ? "bg-purple-50 border-purple-500 text-purple-700 transform -translate-y-1 shadow-md"
//         : "bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-25 hover:shadow-sm"
//     }`}
//   >
//     <svg
//       className="w-6 h-6 mr-3"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M5 13l4 4L19 7"
//       />
//     </svg>
//     Admin Result
//   </button>

//    <button
//     onClick={() => handleComponentClick("Cetificate")}
//     className={`flex items-center justify-center p-6 border-2 rounded-xl font-semibold transition-all duration-200 ${
//       activeComponent === "Cetificate"
//         ? "bg-purple-50 border-rose-500 text-green-700 transform -translate-y-1 shadow-md"
//         : "bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-25 hover:shadow-sm"
//     }`}
//   >
//     <svg
//       className="w-6 h-6 mr-3"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M5 13l4 4L19 7"
//       />
//     </svg>
//    Certificate
//   </button>
// </div>


//                   {/* Active Component Display */}
//                   <div className="mt-6">
//                     {renderActiveComponent()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // console.log("Rendering login view");
//   // Show email and password input form if not authenticated
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">
//             Admin Portal
//           </h1>
//           <p className="text-xl text-gray-600">
//             Manage Notifications and Student results
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Admin Login Card */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
//               <div className="text-center mb-8">
//                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg
//                     className="w-10 h-10 text-red-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                   Admin Access
//                 </h2>
//                 <p className="text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full text-sm inline-block">
//                   Restricted Access - Students Not Allowed
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Admin Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       placeholder="Enter your admin email"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
//                       required
//                     />
//                     <svg
//                       className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Admin Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="password"
//                       id="password"
//                       value={password}
//                       onChange={handlePasswordChange}
//                       placeholder="Enter your admin password"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
//                       required
//                     />
//                     <svg
//                       className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:-translate-y-0.5"
//                 >
//                   Verify & Continue
//                 </button>
//               </form>

//               {/* Debug info - remove in production */}
//               {/* <div className="mt-4 p-3 bg-gray-100 rounded-lg">
//                 <p className="text-xs text-gray-600">
//                   <strong>Debug:</strong> State - {JSON.stringify(admin)}
//                 </p>
//               </div> */}
//             </div>
//           </div>

//           {/* Admin Tools Section - Hidden until authenticated */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//               <div className="max-w-md mx-auto">
//                 <svg
//                   className="w-24 h-24 text-gray-300 mx-auto mb-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1}
//                     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                   />
//                 </svg>
//                 <h3 className="text-2xl font-bold text-gray-700 mb-4">
//                   Authentication Required
//                 </h3>
//                 <p className="text-gray-500 mb-6">
//                   Please enter your admin email address and password to access the admin tools and dashboard.
//                 </p>
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                   <p className="text-yellow-700 text-sm">
//                     <strong>Note:</strong> This area contains sensitive administrative functions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default AdminLogin


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdminEmail, clearAdmin } from "../reduxstore/adminSlice";
import toast from "react-hot-toast";

// Import your page components here
import SendNotification from "../adminpages/SendNotification";
import ResultDeclared from "../adminpages/ResultDeclared";
import ResultsList from "../adminpages/ResultsList";
import InstituteCreadencial from "../adminpages/InstituteCreadencial";
// import ResultDeclared from "../adminpages/ResultDeclared";
// import Certificate from "../adminpages/Certificate";
// import AdminResult from "../adminpages/AdminResult";
// import AdmitCard from "../adminpages/AdmitCard";
// import FeeCollection from "../adminpages/FeeCollection";
// import TeacherVerification from "../adminpages/TeacherVerification";
// import IdCard from "../adminpages/IdCard";
// import AffiliationVerification from "../adminpages/AffiliationVerification";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Default homepage view
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  const ADMIN_EMAIL = "computertraininginstutite@gmail.com";
  const ADMIN_PASSWORD = "Saint";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // dispatch(setAdminEmail(email));
      dispatch(setAdminEmail(email)); // This now saves to localStorage
      toast.success("Admin authentication successful!");
    } else {
      toast.error("Access Denied: Invalid email or password.");
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(clearAdmin());
    toast.success("Logged out successfully!");
    setEmail("");
    setPassword("");
    setActiveComponent("dashboard");
  };

  // Sidebar Menu Items configuration array
  const menuItems = [
    { id: "sendNotification", label: "Send Notification", icon: "🔔" },
    { id: "resultDeclared", label: "Declare Results", icon: "📢" },

    { id: "ResultList", label: "Result List", icon: "📊" },
        { id: "AdminResult", label: "Admin Result", icon: "📊" },
    { id: "Certificate", label: "Certificate", icon: "📜" },
    { id: "AdmitCard", label: "Admit Card", icon: "🪪" },
    { id: "Institute", label: "Institue creadencial", icon: "💳" },
    { id: "TeacherVerification", label: "Teacher Verification", icon: "👨‍🏫" },
    { id: "IdCard", label: "ID Card", icon: "🆔" },
    { id: "AffiliationVerification", label: "Affiliation Verification", icon: "🤝" },
  ];

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "sendNotification":
        return <SendNotification />;
      case "resultDeclared":
        // return <div className="p-6 bg-white rounded-xl shadow-sm">Declare Results Component Placeholder</div>; 
        return <ResultDeclared />;
     
      case "ResultList":
         return <ResultsList/>;
          case "AdminResult":
        return <div className="p-6 bg-white rounded-xl shadow-sm">Admin Result Component Placeholder</div>; // return <AdminResult />;
      case "Certificate":
        return <div className="p-6 bg-white rounded-xl shadow-sm">Certificate Component Placeholder</div>; // return <Certificate />;
      case "AdmitCard":
        return <div className="p-6 bg-white rounded-xl shadow-sm">Admit Card Component Placeholder</div>; // return <AdmitCard />;
      case "Institute":
        // return <div className="p-6 bg-white rounded-xl shadow-sm">Fee Collection Component Placeholder</div>; 
        return <InstituteCreadencial />;
      case "TeacherVerification":
        return <div className="p-6 bg-white rounded-xl shadow-sm">Teacher Verification Component Placeholder</div>; // return <TeacherVerification />;
      case "IdCard":
        return <div className="p-6 bg-white rounded-xl shadow-sm">ID Card Component Placeholder</div>; // return <IdCard />;
      case "AffiliationVerification":
        return <div className="p-6 bg-white rounded-xl shadow-sm">Affiliation Verification Component Placeholder</div>; // return <AffiliationVerification />;
      case "dashboard":
      default:
        return (
          <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-sm">
            <span className="text-5xl block mb-4">💼</span>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Welcome to your Management Hub</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Select an option from the sidebar directory panel to monitor status metrics or manipulate operational items.
            </p>
          </div>
        );
    }
  };

  const isAuthenticated = admin.isAuthenticated && admin.email === ADMIN_EMAIL;

  // --- VIEW 1: AUTHENTICATED PANEL LAYOUT (Sidebar + Content View) ---
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-800">
        
        {/* Top Navbar Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h1 className="text-md font-bold text-slate-900 leading-none">Admin Portal</h1>
              <p className="text-xs text-slate-400 mt-0.5">Management Control Desk</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-medium">
              Active Session: Admin
            </span>
            <button 
              onClick={handleLogout}
              className="bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Workspace Body Wrapper */}
        <div className="flex flex-1">
          
          {/* Side Menu Navigation Panel */}
          <aside className="w-72 bg-white border-r border-slate-200 p-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto hidden md:block">
            <div className="mb-4 px-2">
              <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Navigation Modules</p>
            </div>
            <nav className="space-y-1">
              {/* Home Dashboard Button */}
              <button
                onClick={() => setActiveComponent("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                  activeComponent === "dashboard"
                    ? "bg-indigo-50 text-indigo-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="text-lg">🏠</span> Dashboard Overview
              </button>

              <div className="h-px bg-slate-100 my-2" />

              {/* Loop Menu Items Mapping */}
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveComponent(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                    activeComponent === item.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className={`text-lg ${activeComponent === item.id ? "" : "grayscale-[20%]"}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content Workspace Container */}
          <main className="flex-1 p-4 bg-blue-100/50 overflow-y-auto h-[calc(100vh-4rem)]">
            <div className="max-w-5xl mx-auto">
              {renderActiveComponent()}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // --- VIEW 2: SPLIT SCREEN SECURE LOGIN WINDOW ---
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased text-slate-800">
      <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden p-8">
        
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Admin Control Gateway</h2>
          <p className="text-sm text-slate-500 mt-1">Authorized Administrative personnel only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Admin Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@institution.com"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none text-sm placeholder-slate-400 bg-slate-50/50"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Secret Security Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none text-sm placeholder-slate-400 bg-slate-50/50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.99] transition-all mt-2"
          >
            Authenticate Portal Access
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Protected Environment</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>
        
        <p className="text-xs text-center text-slate-400">
          IP logs active. Misuse triggers administrative locks.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;

