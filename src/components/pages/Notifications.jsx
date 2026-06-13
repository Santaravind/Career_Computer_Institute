import React, { useEffect, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby-WS8a0s9_ciVCfN0ZPMl2pPTWupwyM84mrOJf8e-nHFynQBDfWy7-dIlSTTI72874/exec";

const TYPE_STYLES = {
  Notice: {
    badge: "bg-blue-100 text-blue-700",
    icon: (
      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-blue-400",
  },
  Result: {
    badge: "bg-green-100 text-green-700",
    icon: (
      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-green-400",
  },
  Exam: {
    badge: "bg-yellow-100 text-yellow-700",
    icon: (
      <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    border: "border-l-yellow-400",
  },
  Event: {
    badge: "bg-purple-100 text-purple-700",
    icon: (
      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    border: "border-l-purple-400",
  },
  Holiday: {
    badge: "bg-orange-100 text-orange-700",
    icon: (
      <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    border: "border-l-orange-400",
  },
};

const DEFAULT_STYLE = {
  badge: "bg-gray-100 text-gray-600",
  icon: (
    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  border: "border-l-gray-300",
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  console.log(dateStr);
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 bg-gray-200 rounded-full mt-0.5 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-100 rounded w-1/3" />
        </div>
        <div className="h-5 w-16 bg-gray-100 rounded-full" />
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

  useEffect(() => {
  fetch(`${SCRIPT_URL}?action=getAll`)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        // Normalize all keys to lowercase
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

  // Derive unique types from data
  const types = ["All", ...Array.from(new Set(notifications.map((n) => n.type).filter(Boolean)))];

  // Filter whenever activeType or search changes
  useEffect(() => {
    let result = notifications;
    if (activeType !== "All") {
      result = result.filter((n) => n.type === activeType);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((n) => n.title?.toLowerCase().includes(q));
    }
    setFiltered(result);
  }, [activeType, search, notifications]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          </div>
          <p className="text-gray-500 text-sm ml-12">Latest updates from the institute</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <svg className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notifications..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Type filter tabs */}
        {!loading && !error && (
          <div className="flex gap-2 flex-wrap mb-6">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  activeType === type
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Count */}
        {!loading && !error && (
          <p className="text-xs text-gray-400 mb-3">
            Showing {filtered.length} {filtered.length === 1 ? "notification" : "notifications"}
            {activeType !== "All" ? ` · ${activeType}` : ""}
            {search ? ` · "${search}"` : ""}
          </p>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
            <svg className="w-8 h-8 text-red-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <p className="text-red-600 font-medium text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 text-xs text-red-500 underline hover:text-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="bg-white border border-gray-100 rounded-xl p-10 text-center">
            <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 font-medium">No notifications found</p>
            <p className="text-gray-400 text-xs mt-1">Try a different filter or search term</p>
          </div>
        )}

        {/* Notification list */}
        {!loading && !error && filtered.length > 0 && (
          <div className="space-y-3">
            {filtered.map((item, idx) => {
              const style = TYPE_STYLES[item.type] || DEFAULT_STYLE;
              return (
                <div
                  key={item.id || idx}
                  className={`bg-white rounded-xl border border-gray-100 border-l-4 ${style.border} p-4 hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="flex items-start gap-3">
                    {style.icon}

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-snug mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400">{formatDate(item.date)}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${style.badge}`}>
                        {item.type}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                        >
                          View
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

        {/* Footer */}
        {!loading && !error && notifications.length > 0 && (
          <p className="text-center text-xs text-gray-300 mt-8">
            {notifications.length} total notifications · Updated live from Google Sheets
          </p>
        )}
      </div>
    </div>
  );
}