import express from "express";
import Application from "../models/Application.js";
import adminProtect from "../middleware/adminProtect.js";
const router = express.Router();

// @route   POST /api/applications
// @desc    Submit model application
// @access  Public
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      location,
      age,
      height,
      experience,
      instagram,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !location || !age || !experience) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const application = await Application.create({
      fullName,
      email,
      phone,
      location,
      age,
      height,
      experience,
      instagram,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application,
    });
  } catch (error) {
    console.error("Submit application error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while submitting application.",
    });
  }
});

// @route   GET /api/applications
// @desc    Get all applications
// @access  Admin later
router.get("/", adminProtect, async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Get applications error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while getting applications.",
    });
  }
});
// @route   PATCH /api/applications/:id/status
// @desc    Update application status
// @access  Admin
router.patch("/:id/status", adminProtect, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["Pending", "Reviewed", "Accepted", "Rejected"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status.",
      });
    }

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    application.status = status;

    const updatedApplication = await application.save();

    res.json({
      success: true,
      message: "Application status updated successfully.",
      application: updatedApplication,
    });
  } catch (error) {
    console.error("Update application status error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while updating application status.",
    });
  }
});

// @route   DELETE /api/applications/:id
// @desc    Delete application
// @access  Admin
router.delete("/:id", adminProtect, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    await application.deleteOne();

    res.json({
      success: true,
      message: "Application deleted successfully.",
      id: req.params.id,
    });
  } catch (error) {
    console.error("Delete application error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while deleting application.",
    });
  }
});
export default router;
