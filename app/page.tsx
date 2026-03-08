import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Portfolio", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen px-6 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

      {/* Navigation */}
      <nav className="my-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">

          {navigation.map((item) => (
            <li key={item.href} className="relative group">

              <Link
                href={item.href}
                className="text-sm sm:text-base font-semibold tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>

              {/* Premium hover underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

            </li>
          ))}

        </ul>
      </nav>

      {/* Top divider */}
      <div className="hidden w-screen h-px md:block animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/40 to-zinc-300/0" />

      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Name */}
      <h1 className="z-10 mt-6 text-center text-5xl sm:text-7xl md:text-9xl text-transparent bg-white bg-clip-text font-display animate-title leading-tight">

        Ganesh Iyer

      </h1>

      {/* Divider */}
      <div className="hidden w-screen h-px mt-8 md:block animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/40 to-zinc-300/0" />

      {/* Tagline */}
      <div className="my-12 text-center animate-fade-in max-w-xl">

        <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-400 tracking-widest leading-relaxed">

          Mindful Innovation
          <span className="mx-4 text-zinc-500">•</span>
          Innovate Mindfully

        </h2>

      </div>

      {/* Divider */}
      <div className="hidden w-screen h-px md:block animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/40 to-zinc-300/0" />

      {/* Description */}
      <div className="my-12 text-center animate-fade-in max-w-2xl">

        <h3 className="text-sm sm:text-base text-zinc-400 leading-relaxed">

          Turning complex problems into innovative products.
          I specialize in Product 0→1 — from Strategy to Execution to GTM.

        </h3>

      </div>

    </div>
  );
}
