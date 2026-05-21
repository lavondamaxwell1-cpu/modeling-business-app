import express from "express";
import Booking from "../models/Booking.js";import adminProtect from "../middleware/adminProtect.js";


const router = express.Router();

// @route   POST /api/bookings
// @desc    Submit booking request
// @access  Public
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      company,
      email,
      phone,
      eventType,
      eventDate,
      location,
      numberOfModels,
      budget,
      message,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !eventType ||
      !eventDate ||
      !location ||
      !numberOfModels
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required booking fields.",
      });
    }

    const booking = await Booking.create({
      fullName,
      company,
      email,
      phone,
      eventType,
      eventDate,
      location,
      numberOfModels,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Booking request submitted successfully.",
      booking,
    });
  } catch (error) {
    console.error("Submit booking error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while submitting booking request.",
    });
  }
});

// @route   GET /api/bookings
// @desc    Get all booking requests
// @access  Admin later
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Get bookings error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while getting bookings.",
    });
  }
});

// @route   PATCH /api/bookings/:id/status
// @desc    Update booking status
// @access  Admin
router.patch("/:id/status", adminProtect, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["Pending", "Reviewed", "Approved", "Declined"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking status.",
      });
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking request not found.",
      });
    }

    booking.status = status;

    const updatedBooking = await booking.save();

    res.json({
      success: true,
      message: "Booking status updated successfully.",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Update booking status error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while updating booking status.",
    });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete booking request
// @access  Admin
router.delete("/:id", adminProtect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking request not found.",
      });
    }

    await booking.deleteOne();

    res.json({
      success: true,
      message: "Booking request deleted successfully.",
      id: req.params.id,
    });
  } catch (error) {
    console.error("Delete booking error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while deleting booking request.",
    });
  }
});

export default router;
