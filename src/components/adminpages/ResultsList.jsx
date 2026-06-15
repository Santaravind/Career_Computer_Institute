import React, { useState, useEffect } from "react";
import { googleserv } from "./googleserver/Googleserv.js";
import { CheckCircle, XCircle, Edit2, RefreshCw, Search, X, Save } from "lucide-react";

function ResultsList() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDeclare, setFilterDeclare] = useState("all"); // all, Verified, Not Verified

  // Edit modal state
  const [editingRow, setEditingRow] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saving, setSaving] = useState(false);

  const fetchResults = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await googleserv.getResultsList();

      if (response.success) {
        setResults(response.data || []);
      } else {
        throw new Error(response.message || "Failed to fetch results");
      }
    } catch (err) {
      setError(err.message || "Error loading results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  // Quick verify toggle (Not Verified -> Verified, or vice versa)
  const toggleVerify = async (row) => {
    const newStatus = row.declare === "Verified" ? "Not Verified" : "Verified";

    try {
      // Optimistic UI update
      setResults((prev) =>
        prev.map((r) =>
          r.serialNo === row.serialNo ? { ...r, declare: newStatus } : r
        )
      );

      await googleserv.updateResult({
        serialNo: row.serialNo,
        declare: newStatus,
      });
    } catch (err) {
      setError("Failed to update status: " + err.message);
      // revert on failure
      fetchResults();
    }
  };

  // Open edit modal
  const openEdit = (row) => {
    setEditingRow(row);
    setEditForm({
      serialNo: row.serialNo,
      studentName: row.studentName,
      enrollmentNo: row.enrollmentNo,
      courseName: row.courseName,
      totalMarks: row.totalMarks,
      obtainedMarks: row.obtainedMarks,
      declare: row.declare || "Not Verified",
    });
  };

  const closeEdit = () => {
    setEditingRow(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    try {
      setSaving(true);
      setError(null);

      const response = await googleserv.updateResult({
        serialNo: editForm.serialNo,
        studentName: editForm.studentName,
        enrollmentNo: editForm.enrollmentNo,
        courseName: editForm.courseName,
        totalMarks: parseFloat(editForm.totalMarks) || 0,
        obtainedMarks: parseFloat(editForm.obtainedMarks) || 0,
        declare: editForm.declare,
      });

      if (response.success) {
        // Update local list
        setResults((prev) =>
          prev.map((r) =>
            r.serialNo === editForm.serialNo ? { ...r, ...editForm } : r
          )
        );
        closeEdit();
      } else {
        throw new Error(response.message || "Update failed");
      }
    } catch (err) {
      setError("Failed to save changes: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Filter + search
  const filteredResults = results.filter((r) => {
    const matchesSearch =
      (r.studentName || "")
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (r.enrollmentNo || "")
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterDeclare === "all" ||
      (r.declare || "Not Verified") === filterDeclare;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-0">
            Results Overview
          </h1>
          <button
            onClick={fetchResults}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Search + Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or enrollment no..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
            />
          </div>

          <select
            value={filterDeclare}
            onChange={(e) => setFilterDeclare(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
          >
            <option value="all">All Statuses</option>
            <option value="Verified">Verified</option>
            <option value="Not Verified">Not Verified</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="text-center py-16 text-gray-500 text-sm">
              No results found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Serial No</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Student Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Enrollment No</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Course</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Total</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Obtained</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Status</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredResults.map((row) => {
                    const isVerified = row.declare === "Verified";
                    return (
                      <tr key={row.serialNo} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3 text-gray-600 font-mono text-xs">{row.serialNo}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.studentName}</td>
                        <td className="px-4 py-3 text-gray-600">{row.enrollmentNo}</td>
                        <td className="px-4 py-3 text-gray-600">{row.courseName}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{row.totalMarks}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{row.obtainedMarks}</td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              isVerified
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {isVerified ? (
                              <CheckCircle className="h-3.5 w-3.5 mr-1" />
                            ) : (
                              <XCircle className="h-3.5 w-3.5 mr-1" />
                            )}
                            {row.declare || "not Verified"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => toggleVerify(row)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                                isVerified
                                  ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                                  : "bg-green-50 text-green-700 hover:bg-green-100"
                              }`}
                            >
                              {isVerified ? "not Verified" : "Verify"}
                            </button>
                            <button
                              onClick={() => openEdit(row)}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingRow && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Edit Result</h3>
              <button onClick={closeEdit} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={editForm.studentName || ""}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment No</label>
                <input
                  type="text"
                  name="enrollmentNo"
                  value={editForm.enrollmentNo || ""}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                <input
                  type="text"
                  name="courseName"
                  value={editForm.courseName || ""}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Marks</label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={editForm.totalMarks || ""}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Obtained Marks</label>
                  <input
                    type="number"
                    name="obtainedMarks"
                    value={editForm.obtainedMarks || ""}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Declaration Status</label>
                <select
                  name="declare"
                  value={editForm.declare || "Not Verified"}
                  onChange={handleEditChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm font-medium ${
                    editForm.declare === "Verified"
                      ? "border-green-300 text-green-700 bg-green-50"
                      : "border-yellow-300 text-yellow-700 bg-yellow-50"
                  }`}
                >
                  <option value="Not Verified">Not Verified</option>
                  <option value="Verified">Verified</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeEdit}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                disabled={saving}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition"
              >
                {saving ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultsList;

// export default ResultsList
