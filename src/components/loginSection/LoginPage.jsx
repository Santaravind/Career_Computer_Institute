import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)
  const [clicked, setClicked] = useState(null)

  const handleClick = (roleKey) => {
    setClicked(roleKey)
    setTimeout(() => setClicked(null), 200)

    if (roleKey === 'admin') {
      navigate('/admin')
    } else if (roleKey === 'institute') {
      navigate('/institute')
    }
  }

  const roles = [
    {
      key: 'admin',
      label: 'Admin',
      desc: 'Manage system settings and users',
      icon: '🛡️',
      hover: 'hover:border-purple-500 hover:bg-purple-50',
      iconBg: 'bg-purple-100 group-hover:bg-purple-200',
      iconColor: 'text-purple-600',
      textHover: 'group-hover:text-purple-700',
    },
    {
      key: 'institute',
      label: 'Institute',
      desc: 'Access your institution dashboard',
      icon: '🏫',
      hover: 'hover:border-teal-500 hover:bg-teal-50',
      iconBg: 'bg-teal-100 group-hover:bg-teal-200',
      iconColor: 'text-teal-600',
      textHover: 'group-hover:text-teal-700',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <span className="text-2xl">🔐</span>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-1">Login</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Choose your role to continue</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {roles.map((role) => (
            <button
              key={role.key}
              onClick={() => handleClick(role.key)}
              onMouseEnter={() => setHovered(role.key)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-all duration-200 ${role.hover} ${clicked === role.key ? 'scale-95' : 'hover:-translate-y-1'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${role.iconBg}`}>
                <span className="text-2xl">{role.icon}</span>
              </div>
              <span className={`text-sm font-medium text-gray-800 transition-colors duration-200 ${role.textHover}`}>
                {role.label}
              </span>
              <span className="text-xs text-gray-400 text-center leading-snug">{role.desc}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">secure login</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <p className="text-xs text-gray-400 text-center">
          Need help?{' '}
          <a href="#" className="text-gray-500 underline hover:text-gray-700 transition-colors">
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage