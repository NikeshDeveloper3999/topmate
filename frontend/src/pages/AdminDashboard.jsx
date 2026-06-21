import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllWithdrawalsApi,
  updateWithdrawalStatusApi,
} from "../services/adminService/adminWithdrawalsApi";
import {
  getAdminStatsApi,
  getAllUsersAdminApi,
  deleteUserAdminApi,
  getAllServicesAdminApi,
  deleteServiceAdminApi,
  getAllBookingsAdminApi,
} from "../services/adminService/adminApi";
import toast from "react-hot-toast";
import {
  FaHome, FaCoins, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaCog, FaSignOutAlt,
  FaBuilding, FaUser, FaHashtag, FaMoneyCheck, FaQrcode, FaUsers, FaServicestack,
  FaBookOpen, FaChartBar, FaTrash, FaSearch, FaFilter, FaCalendarAlt
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";
import logout from "../services/userAuthServices/logOut";
import Logoicon from "../assets/logo-icon.svg";

const statusList = ["", "pending", "processing", "completed", "failed"];

const getStatusColor = (status) => {
  switch (status) {
    case "completed": return "bg-green-100 text-green-700";
    case "failed":    return "bg-red-100 text-red-700";
    case "processing": return "bg-blue-100 text-blue-700";
    case "pending":   return "bg-yellow-100 text-yellow-700";
    case "confirmed": return "bg-blue-100 text-blue-700";
    case "cancelled": return "bg-red-100 text-red-700";
    default:          return "bg-gray-100 text-gray-600";
  }
};

const tabs = [
  { id: "overview", label: "Overview", icon: FaChartBar },
  { id: "withdrawals", label: "Withdrawals", icon: FaCoins },
  { id: "users", label: "Users", icon: FaUsers },
  { id: "services", label: "Services", icon: FaServicestack },
  { id: "bookings", label: "Bookings", icon: FaBookOpen },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userData = useSelector((state) => state.userData);
  const [activeTab, setActiveTab] = useState("overview");

  // Withdrawals state
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [failureReason, setFailureReason] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  // Overview state
  const [stats, setStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);

  // Users state
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  // Services state
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");

  // Bookings state
  const [bookings, setBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);
  const [bookingSearch, setBookingSearch] = useState("");

  const fetchWithdrawals = async () => {
    try {
      setLoading(true);
      const res = await getAllWithdrawalsApi();
      setWithdrawals(res.withdrawals || []);
    } catch (error) {
      toast.error("Failed to fetch withdrawals");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      const res = await getAdminStatsApi();
      setStats(res.stats);
    } catch (error) {
      toast.error("Failed to fetch stats");
    } finally {
      setStatsLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      setUsersLoading(true);
      const res = await getAllUsersAdminApi();
      setUsers(res.users || []);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setUsersLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      setServicesLoading(true);
      const res = await getAllServicesAdminApi();
      setServices(res.services || []);
    } catch (error) {
      toast.error("Failed to fetch services");
    } finally {
      setServicesLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      setBookingsLoading(true);
      const res = await getAllBookingsAdminApi();
      setBookings(res.bookings || []);
    } catch (error) {
      toast.error("Failed to fetch bookings");
    } finally {
      setBookingsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchWithdrawals();
  }, []);

  useEffect(() => {
    if (activeTab === "users") fetchUsers();
    if (activeTab === "services") fetchServices();
    if (activeTab === "bookings") fetchBookings();
  }, [activeTab]);

  const handleMarkDone = async () => {
    if (!selectedWithdrawal) return;
    setActionLoading(true);
    try {
      await updateWithdrawalStatusApi(selectedWithdrawal._id, { status: "completed" });
      toast.success("Withdrawal marked as completed");
      setShowConfirmModal(false);
      setSelectedWithdrawal(null);
      fetchWithdrawals();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update");
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!selectedWithdrawal) return;
    if (!failureReason.trim()) {
      toast.error("Please provide a reason");
      return;
    }
    setActionLoading(true);
    try {
      await updateWithdrawalStatusApi(selectedWithdrawal._id, {
        status: "failed",
        failureReason,
      });
      toast.success("Withdrawal rejected");
      setShowRejectModal(false);
      setSelectedWithdrawal(null);
      setFailureReason("");
      fetchWithdrawals();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteUser = async (userId, name) => {
    if (!window.confirm(`Delete user "${name}"? This action cannot be undone.`)) return;
    try {
      await deleteUserAdminApi(userId);
      toast.success("User deleted");
      fetchUsers();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete user");
    }
  };

  const handleDeleteService = async (serviceId, title) => {
    if (!window.confirm(`Delete service "${title}"? This action cannot be undone.`)) return;
    try {
      await deleteServiceAdminApi(serviceId);
      toast.success("Service deleted");
      fetchServices();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete service");
    }
  };

  const statCardsData = (withdrawals) => [
    { label: "Total Withdrawals", value: withdrawals.length, color: "bg-gray-900", icon: FaCoins },
    { label: "Pending", value: withdrawals.filter((w) => w.status === "pending").length, color: "bg-yellow-500", icon: FaHourglassHalf },
    { label: "Processing", value: withdrawals.filter((w) => w.status === "processing").length, color: "bg-blue-500", icon: FaCog },
    { label: "Completed", value: withdrawals.filter((w) => w.status === "completed").length, color: "bg-green-500", icon: FaCheckCircle },
    { label: "Failed", value: withdrawals.filter((w) => w.status === "failed").length, color: "bg-red-500", icon: FaTimesCircle },
  ];

  const filteredWithdrawals = statusFilter
    ? withdrawals.filter((w) => w.status === statusFilter)
    : withdrawals;

  const filteredUsers = userSearch
    ? users.filter((u) =>
        `${u.firstName} ${u.lastName} ${u.email} ${u.userName}`
          .toLowerCase()
          .includes(userSearch.toLowerCase())
      )
    : users;

  const filteredServices = serviceSearch
    ? services.filter((s) =>
        `${s.title} ${s.category} ${s.user?.firstName} ${s.user?.lastName}`
          .toLowerCase()
          .includes(serviceSearch.toLowerCase())
      )
    : services;

  const filteredBookings = bookingSearch
    ? bookings.filter((b) =>
        `${b.seeker?.firstName} ${b.seeker?.lastName} ${b.creator?.firstName} ${b.creator?.lastName} ${b.service?.title}`
          .toLowerCase()
          .includes(bookingSearch.toLowerCase())
      )
    : bookings;

  const renderOverview = () => (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Overview</h2>
      {statsLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
              <div className="h-8 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      ) : stats ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Users", value: stats.totalUsers, color: "bg-blue-500", icon: FaUsers },
              { label: "Total Experts", value: stats.totalExperts, color: "bg-purple-500", icon: FaUser },
              { label: "Total Services", value: stats.totalServices, color: "bg-indigo-500", icon: FaServicestack },
              { label: "Total Bookings", value: stats.totalBookings, color: "bg-teal-500", icon: FaBookOpen },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</span>
                  <div className={`w-8 h-8 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                    <stat.icon className={`text-sm text-white`} />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Platform Revenue</p>
              <p className="text-3xl font-bold text-gray-900">₹{stats.platformRevenue?.toLocaleString()}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Total Transaction Volume</p>
              <p className="text-3xl font-bold text-gray-900">₹{stats.totalPaid?.toLocaleString()}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Failed to load stats.</p>
      )}
    </div>
  );

  const renderWithdrawals = () => {
    const stats = statCardsData(withdrawals);
    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</span>
                <div className={`w-8 h-8 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <stat.icon className={`text-sm ${stat.color.replace("bg-", "text-").replace("-500", "-600")}`} />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {statusList.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${
                statusFilter === status
                  ? "bg-black text-white border-black"
                  : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {status || "All"}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
            <div className="space-y-4 animate-pulse">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/6" />
                  <div className="h-4 bg-gray-200 rounded w-1/6" />
                  <div className="h-4 bg-gray-200 rounded w-1/6" />
                </div>
              ))}
            </div>
          </div>
        ) : filteredWithdrawals.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
            <FaCoins className="text-5xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No withdrawals found</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              {statusFilter ? `No withdrawals with status "${statusFilter}"` : "Withdrawal requests from creators will appear here."}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["Creator", "Amount", "Status", "Bookings", "Reason", "Date", ""].map((h) => (
                      <th key={h} className="text-left px-4 md:px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredWithdrawals.map((withdrawal) => (
                    <tr key={withdrawal._id} className="border-t border-gray-50 hover:bg-gray-50/80 transition-colors">
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 shrink-0">
                            {withdrawal.seller?.firstName?.[0] || "?"}{withdrawal.seller?.lastName?.[0] || ""}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 text-sm truncate">
                              {withdrawal.seller?.firstName} {withdrawal.seller?.lastName}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{withdrawal.seller?.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <span className="font-semibold text-gray-900">₹{withdrawal.amount?.toLocaleString()}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(withdrawal.status)}`}>
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-600">{withdrawal.bookings?.length || 0}</td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-500 max-w-[160px] truncate">
                        {withdrawal.failureReason || <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {new Date(withdrawal.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-right whitespace-nowrap">
                        {withdrawal.status !== "completed" && withdrawal.status !== "failed" ? (
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => { setSelectedWithdrawal(withdrawal); setShowConfirmModal(true); }}
                              className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700 transition cursor-pointer"
                            >
                              Payout
                            </button>
                            <button
                              onClick={() => { setSelectedWithdrawal(withdrawal); setFailureReason(""); setShowRejectModal(true); }}
                              className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-medium hover:bg-red-700 transition cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className={`text-xs font-medium ${withdrawal.status === "completed" ? "text-green-600" : "text-red-500"}`}>
                            {withdrawal.status === "completed" ? "Done" : "Rejected"}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderUsers = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">User Management</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search users..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-black focus:ring-1 focus:ring-black w-64"
          />
        </div>
      </div>
      {usersLoading ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
          <div className="space-y-4 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
              </div>
            ))}
          </div>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
          <FaUsers className="text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No users found</h3>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["User", "Email", "Role", "Joined", ""].map((h) => (
                    <th key={h} className="text-left px-4 md:px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id} className="border-t border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 shrink-0 overflow-hidden">
                          {user.userImageUrl ? (
                            <img src={user.userImageUrl} alt="" className="w-full h-full object-cover" />
                          ) : (
                            `${user.firstName?.[0] || "?"}${user.lastName?.[0] || ""}`
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-gray-500">@{user.userName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        user.role === "admin" ? "bg-purple-100 text-purple-700" :
                        user.role === "expert" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(user.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right">
                      {user.role !== "admin" && (
                        <button
                          onClick={() => handleDeleteUser(user._id, `${user.firstName} ${user.lastName}`)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer"
                        >
                          <FaTrash size={14} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );

  const renderServices = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Service Management</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search services..."
            value={serviceSearch}
            onChange={(e) => setServiceSearch(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-black focus:ring-1 focus:ring-black w-64"
          />
        </div>
      </div>
      {servicesLoading ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
          <div className="space-y-4 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
              </div>
            ))}
          </div>
        </div>
      ) : filteredServices.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
          <FaServicestack className="text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Title", "Creator", "Category", "Price", "Status", "Date", ""].map((h) => (
                    <th key={h} className="text-left px-4 md:px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service._id} className="border-t border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 md:px-6 py-4">
                      <p className="font-medium text-gray-900 text-sm truncate max-w-[200px]">{service.title}</p>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600">
                      {service.user?.firstName} {service.user?.lastName}
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 capitalize">
                        {service.category?.replace("-", " ")}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm font-medium text-gray-900">
                      ₹{service.price?.toLocaleString()}
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        service.status === "published" ? "bg-green-100 text-green-700" :
                        service.status === "draft" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(service.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right">
                      <button
                        onClick={() => handleDeleteService(service._id, service.title)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer"
                      >
                        <FaTrash size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );

  const renderBookings = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Booking Management</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={bookingSearch}
            onChange={(e) => setBookingSearch(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-black focus:ring-1 focus:ring-black w-64"
          />
        </div>
      </div>
      {bookingsLoading ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
          <div className="space-y-4 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded w-1/5" />
                <div className="h-4 bg-gray-200 rounded w-1/5" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
                <div className="h-4 bg-gray-200 rounded w-1/6" />
              </div>
            ))}
          </div>
        </div>
      ) : filteredBookings.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
          <FaBookOpen className="text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No bookings found</h3>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Seeker", "Creator", "Service", "Amount", "Status", "Payment", "Date"].map((h) => (
                    <th key={h} className="text-left px-4 md:px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking._id} className="border-t border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-700">
                      {booking.seeker?.firstName} {booking.seeker?.lastName}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-700">
                      {booking.creator?.firstName} {booking.creator?.lastName}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 truncate max-w-[150px]">
                      {booking.service?.title}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm font-medium text-gray-900">
                      ₹{booking.totalPaid?.toLocaleString() || booking.price?.toLocaleString()}
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.payment ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {booking.payment ? "Paid" : "Unpaid"}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(booking.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#F7F6F2] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#F7F6F2] border-r border-gray-200 flex-col justify-between fixed h-full z-30">
        <div>
          <div className="flex items-center gap-3 p-4">
            <Link to="/" className="w-10 h-10">
              <img src={Logoicon} alt="" />
            </Link>
            <div>
              <h2 className="font-semibold text-gray-800">Admin Panel</h2>
              <p className="text-sm text-gray-500">Platform Management</p>
            </div>
          </div>

          <nav className="px-4 py-2 space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider px-4">Menu</p>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors mb-1 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#ECE6DB] text-black font-medium"
                      : "text-gray-700 hover:bg-[#ECE6DB]"
                  }`}
                >
                  <tab.icon className="text-sm" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider px-4">Links</p>
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-[#ECE6DB] transition-colors mt-1 cursor-pointer"
              >
                <FaHome className="text-sm" />
                <span>Back to Home</span>
              </button>
            </div>
          </nav>
        </div>

        <div
          onClick={() => logout(navigate, dispatch, queryClient)}
          className="p-4 border-t border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-[#ECE6DB] transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {userData.userImage ? (
              <img src={userData.userImage} alt="" className="w-full h-full object-cover" />
            ) : (
              <FaSignOutAlt className="text-gray-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">
              {userData.firstName} {userData.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{userData.email || "admin"}</p>
          </div>
          <FaSignOutAlt className="text-gray-400 text-xs" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 min-h-screen">
        {/* Top Nav */}
        <nav className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
              <FiArrowLeft className="text-gray-600" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {tabs.find((t) => t.id === activeTab)?.label || "Admin"}
            </h1>
            <span className="hidden md:inline-flex px-3 py-1 bg-black text-white text-xs rounded-full font-medium">Admin</span>
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                  activeTab === tab.id ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={16} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-gray-500">{userData.firstName} {userData.lastName}</span>
            <button onClick={() => navigate("/")} className="text-sm text-gray-500 hover:text-black transition items-center gap-1 flex">
              <FaHome size={14} />
              Home
            </button>
          </div>
        </nav>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "withdrawals" && renderWithdrawals()}
          {activeTab === "users" && renderUsers()}
          {activeTab === "services" && renderServices()}
          {activeTab === "bookings" && renderBookings()}
        </div>
      </div>

      {/* Confirm Payout Modal */}
      {showConfirmModal && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-scaleIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-lg" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Confirm Payout</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-500 mb-1">Creator</p>
              <p className="font-semibold text-gray-900">
                {selectedWithdrawal.seller?.firstName} {selectedWithdrawal.seller?.lastName}
              </p>
              <p className="text-sm text-gray-500">{selectedWithdrawal.seller?.email}</p>
              <p className="text-lg font-bold text-gray-900 mt-2">₹{selectedWithdrawal.amount?.toLocaleString()}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FaBuilding className="text-gray-400 text-sm" />
                <h4 className="font-semibold text-gray-800 text-sm">Bank Account Details</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaUser className="text-gray-300 w-4 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Account Holder</p>
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {selectedWithdrawal.seller?.accountHolderName || <span className="text-red-400">Not provided</span>}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMoneyCheck className="text-gray-300 w-4 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Account Number</p>
                    <p className="text-sm font-medium text-gray-800">
                      {selectedWithdrawal.seller?.accountNumber || <span className="text-red-400">Not provided</span>}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaHashtag className="text-gray-300 w-4 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">IFSC Code</p>
                    <p className="text-sm font-medium text-gray-800">
                      {selectedWithdrawal.seller?.ifscCode || <span className="text-red-400">Not provided</span>}
                    </p>
                  </div>
                </div>
                {selectedWithdrawal.seller?.bankName && (
                  <div className="flex items-center gap-3">
                    <FaBuilding className="text-gray-300 w-4 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">Bank Name</p>
                      <p className="text-sm font-medium text-gray-800">{selectedWithdrawal.seller.bankName}</p>
                    </div>
                  </div>
                )}
                {selectedWithdrawal.seller?.upiId && (
                  <div className="flex items-center gap-3">
                    <FaQrcode className="text-gray-300 w-4 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">UPI ID</p>
                      <p className="text-sm font-medium text-gray-800">{selectedWithdrawal.seller.upiId}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Proceed to process the payout via Razorpay to the bank account above?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => { setShowConfirmModal(false); setSelectedWithdrawal(null); }}
                className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleMarkDone}
                disabled={actionLoading}
                className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition disabled:opacity-50 cursor-pointer"
              >
                {actionLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </span>
                ) : "Proceed with Payout"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-scaleIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <FaTimesCircle className="text-red-600 text-lg" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Reject Withdrawal</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Reject the withdrawal of <strong className="text-gray-900">₹{selectedWithdrawal.amount?.toLocaleString()}</strong>{" "}
              by <strong className="text-gray-900">{selectedWithdrawal.seller?.firstName} {selectedWithdrawal.seller?.lastName}</strong>.
              Provide a reason below.
            </p>
            <textarea
              value={failureReason}
              onChange={(e) => setFailureReason(e.target.value)}
              placeholder="Enter reason for rejection..."
              className="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black resize-none mb-4 transition"
              rows={4}
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => { setShowRejectModal(false); setSelectedWithdrawal(null); setFailureReason(""); }}
                className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={actionLoading}
                className="px-5 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition disabled:opacity-50 cursor-pointer"
              >
                {actionLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </span>
                ) : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
