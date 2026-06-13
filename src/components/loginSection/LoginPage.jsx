import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(null)

  const handleClick = (roleKey) => {
    setClicked(roleKey)
    
    // Smooth transition delay before navigation
    setTimeout(() => {
      if (roleKey === 'admin') {
        navigate('/admin')
      } else if (roleKey === 'institute') {
        navigate('/institute')
      }
    }, 200)
  }

  const roles = [
    {
      key: 'admin',
      label: 'System Administrator',
      desc: 'Manage global configuration, security settings, and user access.',
      icon: '🛡️',
      borderColor: 'hover:border-indigo-500/50',
      focusBg: 'peer-checked:border-indigo-600 peer-checked:bg-indigo-50/40',
      iconBg: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100',
    },
    {
      key: 'institute',
      label: 'Institutional Portal',
      desc: 'Access academic dashboards, student metrics, and campus management.',
      icon: '🏫',
      borderColor: 'hover:border-emerald-500/50',
      focusBg: 'peer-checked:border-emerald-600 peer-checked:bg-emerald-50/40',
      iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50/50 flex items-center justify-center px-2 antialiased">
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl p-8 shadow-sm"> 
        
        {/* Header / Brand Logo Space */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center shadow-md shadow-slate-900/10 mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-1">Select your portal destination to securely log in</p>
        </div>

        {/* Stacked Selection List */}
        <div className="space-y-3 mb-6">
          {roles.map((role) => (
            <button
              key={role.key}
              onClick={() => handleClick(role.key)}
              className={`w-full group text-left relative bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4 transition-all duration-200 focus:outline-none ${role.borderColor} ${
                clicked === role.key 
                  ? 'scale-[0.98] border-slate-400 bg-slate-50' 
                  : 'hover:shadow-md hover:shadow-slate-100'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${role.iconBg}`}>
                <span className="text-xl">{role.icon}</span>
              </div>
              
              {/* Text Layout */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-800 transition-colors duration-200 group-hover:text-slate-900">
                  {role.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {role.desc}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Utilities */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">Enterprise Security</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        <div className="flex justify-between items-center text-xs text-slate-400 px-1">
          <span>Protected session</span>
          <a href="#" className="text-slate-500 hover:text-slate-800 font-medium transition-colors underline underline-offset-4">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage