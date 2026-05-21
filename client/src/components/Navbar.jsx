import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-900/40 bg-black/95 text-white backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO / BRAND */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-black tracking-tight"
          >
            The <span className="text-red-700">Queens</span>Men
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-500">
              About
            </Link>
            <Link to="/models" className="hover:text-red-500">
              Models
            </Link>
            <Link to="/flyers" className="hover:text-red-500">
              Flyers
            </Link>
            <Link to="/apply" className="hover:text-red-500">
              Apply
            </Link>
            <Link to="/book" className="hover:text-red-500">
              Book
            </Link>
            <Link to="/contact" className="hover:text-red-500">
              Contact
            </Link>
          </div>

          {/* DESKTOP BUTTON */}
          <Link
            to="/book"
            className="hidden rounded-full bg-red-700 px-5 py-2 text-sm font-bold text-white shadow hover:bg-red-800 md:inline-flex"
          >
            Book Models
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-red-900/50 px-3 py-2 text-sm font-black text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-4 grid gap-3 rounded-2xl border border-red-900/40 bg-black p-4 text-sm font-bold shadow-2xl md:hidden">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              About
            </Link>

            <Link
              to="/models"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Models
            </Link>

            <Link
              to="/flyers"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Flyers
            </Link>

            <Link
              to="/apply"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Apply
            </Link>

            <Link
              to="/book"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Book
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 hover:bg-red-700"
            >
              Contact
            </Link>

            <Link
              to="/book"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-red-700 px-5 py-3 text-center font-black text-white hover:bg-red-800"
            >
              Book Models
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
