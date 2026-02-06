import React from 'react';

// Shared Components for Part 1
const Navbar = () => (
  <nav className="flex justify-between items-center py-8 px-10 bg-[#F2F0EF]">
    <div className="text-xl tracking-widest uppercase font-light">Lilac Therapy</div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
      <a href="#" className="hover:opacity-60">About</a>
      <a href="#" className="hover:opacity-60">Services</a>
      <a href="#" className="hover:opacity-60">Contact</a>
      <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">Book a Session</button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-[#F2F0EF] min-h-[80vh] flex flex-col md:flex-row items-center px-10 py-20">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-7xl font-serif text-gray-800 leading-tight">
        A space for <br /> personal growth.
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-md">
        Providing modern therapy for individuals seeking clarity and emotional well-being in a supportive environment.
      </p>
      <button className="mt-10 bg-[#8B9B8E] text-white px-8 py-4 uppercase text-sm tracking-widest">
        Schedule a Consultation
      </button>
    </div>
    <div className="md:w-1/2 h-[500px] w-full bg-gray-300 relative">
       {/* Placeholder for Lilac Image */}
       <div className="absolute inset-0 flex items-center justify-center text-gray-500 uppercase tracking-widest">Hero Image Placeholder</div>
    </div>
  </section>
);

const ServicesGrid = () => (
  <section className="py-24 px-10 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {[1, 2, 3].map((item) => (
        <div key={item} className="space-y-6">
          <div className="h-80 bg-gray-100"></div>
          <h3 className="text-2xl font-serif">Service Title {item}</h3>
          <p className="text-gray-600 leading-relaxed">
            Description of the therapeutic approach and how it helps the client navigate their specific challenges.
          </p>
          <a href="#" className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest">Learn More</a>
        </div>
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <Hero />
      <ServicesGrid />
      
      {/* Quote Section */}
      <section className="py-32 px-10 bg-[#F2F0EF] text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-snug">
          "The curious paradox is that when I accept myself just as I am, then I can change."
        </h2>
        <p className="mt-8 uppercase tracking-[0.2em] text-sm">— Carl Rogers</p>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h4 className="text-xl font-serif mb-4">Lilac Template</h4>
            <p className="text-gray-500 max-w-xs">A modern template designed for therapists and wellness professionals.</p>
          </div>
          <div>
            <h5 className="uppercase text-xs tracking-widest mb-4">Navigation</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>Practice</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase text-xs tracking-widest mb-4">Social</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}