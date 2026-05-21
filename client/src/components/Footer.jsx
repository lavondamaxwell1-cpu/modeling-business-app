import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-red-900/40 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* BRAND */}
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-black tracking-tight">
            The <span className="text-red-700">Queens</span>Men
          </Link>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Exclusive professional male models representing classy and vintage
            gentlemen with a touch of boldness.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
            Quick Links
          </h3>

          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-300">
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
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
            Services
          </h3>

          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-300">
            <Link to="/book" className="hover:text-red-500">
              Book Models
            </Link>
            <Link to="/apply" className="hover:text-red-500">
              Apply to Model
            </Link>
            <Link to="/contact" className="hover:text-red-500">
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
            Contact
          </h3>

          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-300">
            <a href="tel:7045551234" className="hover:text-red-500">
              (704) 555-1234
            </a>

            <a
              href="mailto:info@thequeensmen.com"
              className="hover:text-red-500"
            >
              info@thequeensmen.com
            </a>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 hover:border-red-700 hover:bg-red-700"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 hover:border-red-700 hover:bg-red-700"
              >
                Facebook
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 hover:border-red-700 hover:bg-red-700"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-red-900/40 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} The QueensMen. All rights reserved.
          </p>

          <p>
            Classy. <span className="text-red-600">Vintage.</span> Bold.
          </p>
        </div>
      </div>
    </footer>
  );
}
