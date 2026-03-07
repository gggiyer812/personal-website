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
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black px-6">
      
      {/* Navigation */}
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Background particles */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* Name */}
      <h1 className="z-10 text-center text-4xl sm:text-6xl md:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text">
        ganesh iyer
      </h1>

      {/* Tagline */}
      <h2 className="mt-4 z-10 text-center text-sm sm:text-xl md:text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display tracking-wide bg-clip-text leading-relaxed">

        <span>Mindful Innovation</span>
        <span className="mx-4 text-zinc-400">•</span>
        <span>Innovate Mindfully</span>

      </h2>

      {/* Divider */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Description */}
      <div className="my-12 text-center animate-fade-in max-w-xl">
        <h3 className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Turning complex problems into innovative products.  
          I specialize in Product 0→1 — from Strategy to Execution to GTM.
        </h3>
      </div>

    </div>
  );
}
