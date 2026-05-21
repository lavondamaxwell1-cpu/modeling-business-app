import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-black text-white">
      {/* HEADER */}
      <section className="border-b border-red-900/40 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-bold uppercase tracking-[0.25em] text-red-600">
            About The Brand
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            The Standard of{" "}
            <span className="text-red-700">Class, Style, and Boldness</span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The QueensMen is a professional male modeling brand built around
            confidence, vintage gentleman energy, and a polished presence that
            stands out in every room.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-red-900/40 bg-white/5 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?auto=format&fit=crop&w=1000&q=80"
            alt="The QueensMen professional male models"
            className="h-[540px] w-full object-cover"
          />
        </div>

        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-red-600">
            Our Story
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            More Than Models
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            The QueensMen are a set of exclusive professional male models. They
            represent classy and vintage “Gentle Men” with a touch of boldness.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            The brand was created to showcase men who bring elegance,
            professionalism, strength, and style to fashion shows, campaigns,
            photoshoots, events, and luxury experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/models"
              className="rounded-full bg-red-700 px-7 py-3 font-bold text-white shadow-lg hover:bg-red-800"
            >
              View Models
            </Link>

            <Link
              to="/book"
              className="rounded-full border border-white/40 px-7 py-3 font-bold text-white hover:bg-white hover:text-black"
            >
              Book The QueensMen
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h3 className="text-2xl font-black text-slate-950">Our Mission</h3>

            <p className="mt-4 leading-7 text-slate-600">
              To provide professional male models who bring class, confidence,
              and high-quality presentation to every event, shoot, and brand
              experience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h3 className="text-2xl font-black text-slate-950">Our Vision</h3>

            <p className="mt-4 leading-7 text-slate-600">
              To become a recognized modeling brand known for vintage gentleman
              style, bold energy, and unforgettable presentation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h3 className="text-2xl font-black text-slate-950">Our Standard</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Every QueensMen model represents professionalism, discipline,
              respect, confidence, and polished style.
            </p>
          </div>
        </div>
      </section>

      {/* OWNER SECTION */}
      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-red-600">
              Founder&apos;s Vision
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built With Purpose
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The owner’s vision is to create a space where male models can be
              seen, respected, and represented with excellence. The QueensMen
              brand is about more than appearance — it is about presence,
              character, and professionalism.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              From events to editorials, every model is expected to carry the
              brand with class, vintage style, and bold confidence.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-red-700 bg-white/5 p-6">
              <p className="text-lg font-semibold italic text-slate-200">
                “Classy. Vintage. Bold. That is the standard of The QueensMen.”
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-red-900/40 bg-white/5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Owner of The QueensMen"
              className="h-[540px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-red-900/40 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-red-600">
            Work With Us
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Ready to bring The QueensMen to your next event?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Book professional male models for fashion shows, photoshoots, brand
            campaigns, luxury events, and special appearances.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="rounded-full bg-red-700 px-8 py-4 font-black text-white shadow-lg hover:bg-red-800"
            >
              Book Models
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-8 py-4 font-black text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
