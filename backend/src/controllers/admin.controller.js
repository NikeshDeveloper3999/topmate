const User = require("../models/user.model");
const Service = require("../models/userService.model");
const Booking = require("../models/Booking.model");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalExperts = await User.countDocuments({ role: "expert" });
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalServices = await Service.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalRevenue = await Booking.aggregate([
      { $match: { payment: true, status: { $ne: "cancelled" } } },
      { $group: { _id: null, total: { $sum: "$platformRevenue" } } },
    ]);
    const totalPaid = await Booking.aggregate([
      { $match: { payment: true, status: { $ne: "cancelled" } } },
      { $group: { _id: null, total: { $sum: "$totalPaid" } } },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalExperts,
        totalAdmins,
        totalServices,
        totalBookings,
        platformRevenue: totalRevenue[0]?.total || 0,
        totalPaid: totalPaid[0]?.total || 0,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUserAdmin = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    await User.findByIdAndDelete(userId);
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllServicesAdmin = async (req, res) => {
  try {
    const services = await Service.find()
      .populate("user", "firstName lastName email userName")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteServiceAdmin = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    await Service.findByIdAndDelete(serviceId);
    res.status(200).json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllBookingsAdmin = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("seeker", "firstName lastName email")
      .populate("creator", "firstName lastName email")
      .populate("service", "title category price")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAdminStats,
  getAllUsersAdmin,
  deleteUserAdmin,
  getAllServicesAdmin,
  deleteServiceAdmin,
  getAllBookingsAdmin,
};
