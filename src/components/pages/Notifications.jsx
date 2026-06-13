import React, { useEffect, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzs2qJcu5E85esN5gnUsSYKqvUN4FnUMZM3baCKziAThH3E2vufeJdczPMBmGskNEer/exec";

// Unified styling rules supporting safe lowercase keys from normalized fetch formats
const TYPE_STYLES = {
  notice: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: (
      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-blue-500",
  },
  result: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (
      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-emerald-500",
  },
  exam: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    icon: (
      <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-amber-500",
  },
  event: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    icon: (
      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    border: "border-l-purple-500",
  },
  holiday: {
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    icon: (
      <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    border: "border-l-orange-500",
  },
};

const DEFAULT_STYLE = {
  badge: "bg-slate-50 text-slate-600 border-slate-200",
  icon: (
    <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  border: "border-l-slate-400",
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 bg-slate-200 rounded-full mt-0.5 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-100 rounded w-1/4" />
        </div>
        <div className="h-5 w-16 bg-slate-100 rounded-full" />
      </div>
    </div>
  );
}

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  
  // Track open/collapsed description card elements by unique indexing IDs
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    fetch(`${SCRIPT_URL}?action=getAll`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          const normalized = json.data.map((item) =>
            Object.fromEntries(
              Object.entries(item).map(([k, v]) => [k.toLowerCase(), v])
            )
          );
          const sorted = [...normalized].sort(
            (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
          );
          setNotifications(sorted);
          setFiltered(sorted);
        } else {
          setError(json.message || "Failed to load notifications.");
        }
      })
      .catch(() => setError("Network error. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  const types = ["All", ...Array.from(new Set(notifications.map((n) => n.type).filter(Boolean)))];

  useEffect(() => {
    let result = notifications;
    if (activeType !== "All") {
      result = result.filter((n) => n.type?.toLowerCase() === activeType.toLowerCase());
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (n) => n.title?.toLowerCase().includes(q) || n.description?.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [activeType, search, notifications]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/60 py-10 px-4 font-sans antialiased text-slate-800">
      <div className="max-w-3xl mx-auto">

        {/* Header Branding */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-600/10">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[oklch(30.9%_0.146_260.522)]">Notifications</h1>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm ml-13">Stay updated with current notices, exam bulletins, and scheduling alerts.</p>
          </div>
        </div>

        {/* Search Bar Controller */}
        <div className="relative mb-5">
          <svg className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search headlines or summary text data..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition"
          />
        </div>

        {/* Dynamic Nav Filtering Tabs */}
        {!loading && !error && (
          <div className="flex gap-2 flex-wrap mb-6">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border duration-150 ${
                  activeType === type
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Count Metadata Indicators */}
        {!loading && !error && (
          <p className="text-xs font-medium text-slate-400 mb-4 px-1">
            Displaying {filtered.length} matching {filtered.length === 1 ? "bulletin" : "bulletins"}
            {activeType !== "All" ? ` in ${activeType}` : ""}
            {search ? ` for "${search}"` : ""}
          </p>
        )}

        {/* Loading Shells */}
        {loading && (
          <div className="space-y-3.5">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Failure Alerts */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
            <p className="text-rose-600 font-semibold text-sm mb-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-xs font-bold text-rose-500 underline hover:text-rose-700 uppercase tracking-wider"
            >
              Force Retry Sync
            </button>
          </div>
        )}

        {/* Clean Empty View states */}
        {!loading && !error && filtered.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <p className="text-slate-500 font-semibold text-sm">No notifications found matches</p>
            <p className="text-slate-400 text-xs mt-1">Try modifying your query adjustments or select another tab directory.</p>
          </div>
        )}

        {/* Premium Notification Item Render List */}
        {!loading && !error && filtered.length > 0 && (
          <div className="space-y-3.5">
            {filtered.map((item, idx) => {
              const itemKey = item.id || `notif-${idx}`;
              const categoryKey = item.type ? item.type.toLowerCase() : "";
              const style = TYPE_STYLES[categoryKey] || DEFAULT_STYLE;
              const isExpanded = !!expandedCards[itemKey];

              return (
                <div
                  key={itemKey}
                  className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${style.border} p-5 hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex items-start gap-4">
                    {style.icon}

                    <div className="flex-1 min-w-0">
                      {/* Title Segment */}
                      <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug mb-1">
                        {item.title}
                      </h3>
                      
                      {/* Meta Information String Line */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        {/* <span>ID: #{item.id || "N/A"}</span> */}
                        {/* <span>•</span> */}
                        <span>{formatDate(item.date)}</span>
                      </div>

                      {/* Expandable Context Summary Box */}
                      {item.description && (
                        <div className="mt-2">
                          {!isExpanded ? (
                            <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">
                              {item.description}
                            </p>
                          ) : (
                            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-100 p-3 rounded-xl mt-1 leading-relaxed whitespace-pre-line">
                              {item.description}
                            </p>
                          )}
                          <button
                            onClick={() => toggleExpand(itemKey)}
                            className="inline-flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 font-semibold mt-1 transition"
                          >
                            {isExpanded ? "Hide detail view" : "Read full description"}
                            <svg className={`w-3 h-3 transform transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Outer Right Status pill & Attachment actions */}
                    <div className="flex flex-col items-end justify-between gap-3 flex-shrink-0 self-stretch">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                        {item.type || "General"}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 px-2.5 py-1 rounded-lg font-bold transition"
                        >
                          Attachment
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Global Footer Notes */}
        {!loading && !error && notifications.length > 0 && (
          <p className="text-center text-xs font-medium text-slate-300 mt-10 tracking-wide">
            {notifications.length} LIVE RECORDS SYNCHRONIZED FROM INSTITUTION SPREADSHEETS
          </p>
        )}
      </div>
    </div>
  );
}