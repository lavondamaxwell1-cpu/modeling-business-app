import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const adminUser = JSON.parse(localStorage.getItem("adminUser")) || null;

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="border-b border-red-900/40 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-red-600">
                Owner Dashboard
              </p>

              <h1 className="mt-4 text-5xl font-black md:text-6xl">
                The QueensMen <span className="text-red-700">Admin</span>
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Manage model applications, booking requests, contact messages,
                flyers, and model profiles.
              </p>

              {adminUser && (
                <p className="mt-4 text-sm font-semibold text-slate-400">
                  Logged in as{" "}
                  <span className="text-white">{adminUser.email}</span>
                </p>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="w-fit rounded-full border border-red-700 px-6 py-3 font-black text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* DASHBOARD CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            to="/admin/applications"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Applications
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Model Applications
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              View people who submitted the Apply to Model form.
            </p>
          </Link>

          <Link
            to="/admin/bookings"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Bookings
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Booking Requests
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Review event, photoshoot, and model booking requests.
            </p>
          </Link>

          <Link
            to="/admin/messages"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Messages
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Contact Messages
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Read messages sent from the Contact page.
            </p>
          </Link>

          <Link
            to="/admin/models"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Talent
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Manage Models
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Add, edit, and delete model profiles.
            </p>
          </Link>

          <Link
            to="/admin/flyers"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Events
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Manage Flyers
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Upload flyers, casting calls, and event announcements.
            </p>
          </Link>

          <Link
            to="/admin/settings"
            className="rounded-3xl border border-red-900/40 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Business
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Business Info
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Update logo, phone number, email, socials, and owner info.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}