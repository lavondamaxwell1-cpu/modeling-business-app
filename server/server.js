import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
dotenv.config();import contactRoutes from "./routes/contactRoutes.js";

import flyerRoutes from "./routes/flyerRoutes.js";

connectDB();

const app = express();

// CORS must be BEFORE routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/flyers", flyerRoutes);


app.get("/", (req, res) => {
  res.send("The QueensMen API is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend connected successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
