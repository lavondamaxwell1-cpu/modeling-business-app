import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminLogin from "./admin/AdminLogin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Flyers from "./pages/Flyers";
import Apply from "./pages/Apply";
import BookModel from "./pages/BookModel";
import Contact from "./pages/Contact";import ModelDetails from "./pages/ModelDetails";
import AdminDashboard from "./admin/AdminDashboard";
import AdminApplications from "./admin/AdminApplications";
import AdminBookings from "./admin/AdminBookings";
import AdminMessages from "./admin/AdminMessages";
import AdminModels from "./admin/AdminModels";
import AdminFlyers from "./admin/AdminFlyers";
import AdminSettings from "./admin/AdminSettings";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/flyers" element={<Flyers />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/book" element={<BookModel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/models/:id" element={<ModelDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
<Route
  path="/admin"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/applications"
  element={
    <ProtectedAdminRoute>
      <AdminApplications />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <ProtectedAdminRoute>
      <AdminBookings />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/messages"
  element={
    <ProtectedAdminRoute>
      <AdminMessages />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/models"
  element={
    <ProtectedAdminRoute>
      <AdminModels />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/flyers"
  element={
    <ProtectedAdminRoute>
      <AdminFlyers />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/settings"
  element={
    <ProtectedAdminRoute>
      <AdminSettings />
    </ProtectedAdminRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}
