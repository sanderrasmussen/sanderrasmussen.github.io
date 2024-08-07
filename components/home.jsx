
import Link from "next/link"
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PcAnimation from "@/components/pcAnimation";

export default function Home() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-900">
      <header
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold font-verdana">
          Sander Rasmussen
        </h3>
        <nav className="flex gap-4">
          <Link className="hover:underline font-verdana" href="/">
            Home
          </Link>
          <Link className="hover:underline font-verdana" href="/projects">
            Projects
          </Link>
          <Link className="hover:underline font-verdana" href="/about">
            About
          </Link>
          <Link className="hover:underline font-verdana" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <br /><br /><br />
        <section className="relative h-[80dvh] bg-gray-900 text-white">
          
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 space-y-6" >
            <h1 className="text-4xl font-bold font-verdana">Welcome to my Portfolio</h1>
            <p className="text-lg max-w-2xl text-center font-verdana">
  I&#39;m a developer with experience in app development, machine learning, web-dev, databases, and more.
</p>

            <div className="flex gap-4">
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-verdana"
                href="/projects">
                View Projects
              </Link>
              <Link
                className="border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-verdana"
                href="/contact">
                Get in Touch
              </Link>
            </div>
            <PcAnimation />
          </div>
          
        </section>
        
      </main>
    </div>)
  );
}
