import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-8 flex items-center justify-between">

        <Link href="/" className="text-zinc-400 hover:text-white transition">
          <ArrowLeft size={24} />
        </Link>

        <div className="flex gap-8 text-zinc-400 text-sm">
          <Link href="/projects" className="hover:text-white">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE — TIMELINE */}
        <div>

          <h1 className="text-5xl font-bold tracking-[0.25em] mb-20">
            EXPERIENCE
          </h1>

          {/* Timeline container */}
          <div className="relative pl-16 space-y-20">

            {/* SINGLE continuous timeline line */}
            <div className="absolute left-6 top-0 h-full w-[2px] bg-emerald-400"></div>


            {/* EXPERIENCE 1 */}
            <div className="relative">

              {/* Dot */}
              <p className="text-emerald-400 font-semibold">
                2021 – Current
              </p>

              <div className="flex items-center gap-3 mt-1">
                <h2 className="text-3xl font-semibold">
                  American Express, New York
                </h2>
                <img src="/amexlogo.avif" className="h-10 w-auto" />
              </div>

              <p className="text-lg text-zinc-300 mt-2">
                Product Lead
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                Led Enterprise Data & ML Platform strategy, migrating 10K+
                users to GCP and accelerating AI transformation. Built GenAI
                migration accelerators reducing migration time by 60% and
                scaled ML workflows via Vertex AI.
              </p>

            </div>


            {/* EXPERIENCE 2 */}
            <div className="relative">

              <p className="text-emerald-400 font-semibold">
                2016 – 2021
              </p>

              <div className="flex items-center gap-3 mt-1">
                <h2 className="text-3xl font-semibold">
                  American Express, New York
                </h2>
                <img src="/amexlogo.avif" className="h-10 w-auto" />
              </div>

              <p className="text-lg text-zinc-300 mt-2">
                Senior Product Manager
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                Led 0-1 enterprise big data lake platform, enabling scalable
                analytics and ML innovation while democratizing access to
                governed datasets across multiple business units.
              </p>

            </div>


            {/* EXPERIENCE 3 */}
            <div className="relative">

              <p className="text-emerald-400 font-semibold">
                2010 – 2015
              </p>

              <div className="flex items-center gap-3 mt-1">
                <h2 className="text-3xl font-semibold">
                  Credit Suisse, New York
                </h2>
                <img src="/cslogo.avif" className="h-10 w-auto" />
              </div>

              <p className="text-lg text-zinc-300 mt-2">
                Vice President – Product Manager
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                Owned enterprise reference data platform  and Legal Document Library -  
                Contract Lifecycle Management systems for Legal Teams supporting trading, 
                Settlement, risk operations and PC IT. Delivered large-scale platform 
                initiatives across engineering and analytics teams.
              </p>

            </div>


            {/* EXPERIENCE 4 */}
            <div className="relative">

              <p className="text-emerald-400 font-semibold">
                2005 – 2010
              </p>

              <div className="flex items-center gap-3 mt-1">
                <h2 className="text-3xl font-semibold">
                  Freddie Mac, Virginia
                </h2>
                <img src="/freddielogo.avif" className="h-10 w-auto" />
              </div>

              <p className="text-lg text-zinc-300 mt-2">
                Data Engineer
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                Built mortgage data warehouses and financial analytics
                platforms powering loan performance monitoring, risk
                assessment, underwriting and regulatory reporting.
              </p>

            </div>

          </div>
        </div>


        {/* RIGHT SIDE — PROFILE PHOTO */}
        <div className="flex flex-col items-center md:items-end">

          <img
            src="/ganeshiyersketchnoname.png"
            className="w-72 h-72 object-cover rounded-full shadow-2xl border border-zinc-800"
          />

<div className="mt-6 text-center">
  <h2 className="text-3xl font-semibold">
    Ganesh Iyer
  </h2>

  <p className="text-zinc-400 text-lg mt-1">
    Principal Technical Product Manager
  </p>
</div>

        </div>

      </div>

    </div>
  );
}
