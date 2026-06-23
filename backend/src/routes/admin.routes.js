const express = require("express");
const router = express.Router();
const auth = require("../Middleware/jsonWebTokenCheck");
const adminAuth = require("../Middleware/adminAuth");
const {
  getAdminStats,
  getAllUsersAdmin,
  deleteUserAdmin,
  getAllServicesAdmin,
  deleteServiceAdmin,
  getAllBookingsAdmin,
} = require("../controllers/admin.controller");

router.use(auth, adminAuth);

router.get("/stats", getAdminStats);
router.get("/users", getAllUsersAdmin);
router.delete("/users/:userId", deleteUserAdmin);
router.get("/services", getAllServicesAdmin);
router.delete("/services/:serviceId", deleteServiceAdmin);
router.get("/bookings", getAllBookingsAdmin);

module.exports = router;
