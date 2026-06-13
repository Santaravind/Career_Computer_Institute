import React, { useState } from 'react';
import { useSelector } from "react-redux";

const SendNotification = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '', // New Field
    link: '',
    type: '',
    date: ''
  });
  
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const adminEmail = useSelector((state) => state.admin.email);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzs2qJcu5E85esN5gnUsSYKqvUN4FnUMZM3baCKziAThH3E2vufeJdczPMBmGskNEer/exec';

  // Helper logic to compute word counts
  const getWordCount = (text) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  // Handle form input changes with strict 100-word validation filter
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      const words = value.trim().split(/\s+/);
      // If word count exceeds 100, prevent additional typing of words
      if (words.length > 100 && value.endsWith(' ')) {
        return; 
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save data to Google Sheets
  const handleSaveData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Pre-verify word counts on click
    if (getWordCount(formData.description) > 100) {
      setMessage('Error: Description cannot exceed 100 words.');
      setLoading(false);
      return;
    }

    if (adminEmail !== "aravindsant323@gmail.com" && adminEmail !== "computertraininginstutite@gmail.com") {
      setMessage('Error: Unauthorized access');
      setLoading(false);
      return;
    }
      
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        redirect: "follow",
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          action: 'add',
          adminEmail: adminEmail,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Notification dispatched successfully!');
        setFormData({
          id: '',
          title: '',
          description: '',
          link: '',
          type: '',
          date: ''
        });
      } else {
        setMessage('Error saving data: ' + result.message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const currentWordCount = getWordCount(formData.description);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header Info */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[oklch(30.9%_0.146_260.522)] tracking-tight">SendNotificarion </h1>
        <p className="text-sm text-slate-500 mt-1">Broadcast institution news updates, exam changes, or holiday events directly to client streams.</p>
      </div>

      {/* Message System Alerts */}
      {message && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
          message.includes('Error') || message.includes('not found') 
            ? 'bg-rose-50 text-rose-700 border border-rose-200' 
            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        }`}>
          {message}
        </div>
      )}

      {/* Primary Action Panel Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <form onSubmit={handleSaveData} className="space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* ID Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Notification Reference ID *
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40"
                placeholder="e.g., NOT-2026-004"
              />
            </div>

            {/* Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Category Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40 text-slate-700"
              >
                <option value="">Select category</option>
                <option value="article">Article</option>
                <option value="notice">Notice</option>
                <option value="Fee">Fee</option>
                <option value="Result">Result</option>
                <option value="Exam">Exam</option>
                <option value="Holiday">Holiday</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Notification Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40"
              placeholder="Enter headline alert title"
            />
          </div>

          {/* Description Textarea Field with Counter */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Detailed Message Context
              </label>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                currentWordCount > 100 ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'
              }`}>
                {currentWordCount} / 100 words
              </span>
            </div>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40 resize-none ${
                currentWordCount > 100 ? 'border-rose-400' : 'border-slate-200'
              }`}
              placeholder="Write the summary or full message context detail here (Maximum limit of 100 words)..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Target URL Link */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Attachment Link / URL
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40"
                placeholder="https://your-portal-download.com/file"
              />
            </div>

            {/* Event Target Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Publish Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition bg-slate-50/40 text-slate-600"
              />
            </div>
          </div>

          {/* Submit Action Control */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || currentWordCount > 100}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed transition duration-150"
            >
              {loading ? 'Processing Broadcast...' : 'Dispatch Notification'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SendNotification;