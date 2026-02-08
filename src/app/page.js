"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation Configuration
const revealConfig = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Reusable Accordion Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#2C5F5D] py-5 md:py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left outline-none cursor-pointer group"
      >
        {/* Plus symbol first on the left */}
        <span className={`text-2xl md:text-3xl font-light transition-transform duration-500 mr-6 text-[#2C5F5D] shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>

        {/* Title/Question using Serif font */}
        <div className="flex-1">
          <span className="text-xl md:text-[28px] font-serif tracking-tight text-[#2C5F5D] leading-tight">
            {title}
          </span>
        </div>
      </button>

      {/* Smoothly expanding content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-base md:text-lg opacity-80 leading-relaxed pl-12 pb-4 text-[#2C5F5D] font-light">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function MayaReynoldsHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#F4F1E8] text-[#2C5F5D] font-sans selection:bg-[#2C5F5D] selection:text-white overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <h1 className="z-50 text-lg font-normal tracking-tight md:text-xl">Dr. Maya Reynolds</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 md:gap-10 text-[11px] uppercase tracking-[0.15em] font-medium">
          <a href="#about" className="transition-opacity hover:opacity-60">About</a>
          <a href="#contact" className="transition-opacity hover:opacity-60">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="z-50 p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#2C5F5D] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2C5F5D] ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2C5F5D] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-[#E8E3D6] pt-24 pb-12 px-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-6 text-sm font-bold tracking-widest text-center uppercase">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SECTION 1: HERO */}
      <motion.section
        {...revealConfig}
        className="px-6 md:px-12 pt-8 pb-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-[1600px] mx-auto"
      >
        <div className="flex justify-center order-2 md:justify-start md:order-1">
          <div className="w-full max-w-[450px] lg:max-w-[550px] aspect-[3/4] rounded-t-full overflow-hidden shadow-sm">
            <img
              src="/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              className="object-cover w-full h-full"
            />

          </div>
        </div>

        <div className="flex flex-col items-start order-1 text-left md:order-2">
          <h2 className="text-[40px] sm:text-[52px] md:text-[68px] lg:text-[88px] leading-[1.1] md:leading-[0.95] font-serif mb-6 tracking-tight">
            Anxiety Therapist in Santa Monica, CA
          </h2>
          <p className="max-w-md mb-8 text-base font-light md:text-lg opacity-80">
            Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and burnout.
          </p>
          <button className="w-full sm:w-auto border border-[#2C5F5D] px-8 md:px-10 py-4 text-[10px] cursor-pointer uppercase tracking-[0.25em] font-medium hover:bg-[#2C5F5D] hover:text-[#F4F1E8] transition-all duration-500 ease-in-out">
            SCHEDULE A CONSULTATION →
          </button>
        </div>
      </motion.section>

      {/* SECTION 2: INTRO SPLIT */}
      <motion.section
        {...revealConfig}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="flex flex-col h-full">
          <div className="bg-[#E8E3D6] p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center flex-grow">
            <h3 className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] mb-8 tracking-tight font-serif text-[#2C5F5D]">
              Live a fulfilling life.
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-5 opacity-80 max-w-lg text-[#2C5F5D]">
              Life can be challenging—especially when you're trying to balance your personal and professional life.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6 opacity-80 max-w-lg text-[#2C5F5D]">
              It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-[#E8E3D6] border-t border-[#2C5F5D]/20 py-10 md:py-12 flex justify-center items-center transition-all duration-500 hover:bg-[#2C5F5D] group"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#2C5F5D] transition-colors duration-500 group-hover:text-white">
              GET IN TOUCH →
            </span>
          </a>
        </div>

        <div className="h-[400px] sm:h-[500px] md:h-auto min-h-[450px] relative">
          <img
            src="/life-living.jpeg"
            alt="Calm therapy space"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.section>

      {/* SECTION 3: MY SPECIALTIES */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-[#F4F1E8]">
        <motion.h3
          {...revealConfig}
          className="text-[38px] sm:text-[48px] md:text-[68px] lg:text-[82px] text-center mb-12 md:mb-24 tracking-tight font-serif text-[#2C5F5D]"
        >
          My Specialties
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto">
          {[
            {
              title: 'Self-Esteem',
              desc: `Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.`,
              img: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80'
            },
            {
              title: 'Relationships',
              desc: `Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.`,
              img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
            },
            {
              title: 'Burnout',
              desc: `Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.`,
              img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              {...revealConfig}
              transition={{ ...revealConfig.transition, delay: index * 0.1 }}
              className="border border-[#2C5F5D]/30 p-8 md:p-12 flex flex-col items-center text-left bg-transparent hover:border-[#2C5F5D] transition-colors"
            >
              <h4 className="w-full text-[22px] md:text-[26px] mb-6 tracking-tight font-serif text-[#2C5F5D]">
                {item.title}
              </h4>
              <p className="w-full text-[14px] md:text-[15px] leading-relaxed mb-10 opacity-90 text-[#2C5F5D] flex-grow">
                {item.desc}
              </p>
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#2C5F5D]/10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THERE’S HOPE */}
      <motion.section
        {...revealConfig}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="h-[400px] sm:h-[500px] md:h-auto min-h-[500px] relative">
          <img
            src="/hope.jpeg"
            alt="Supportive environment"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col bg-[#D9D3C5]">
          <div className="flex flex-col justify-center flex-grow p-8 sm:p-12 md:p-16 lg:p-24">
            <h3 className="text-[28px] sm:text-[32px] md:text-[42px] leading-[1.2] mb-10 tracking-tight font-serif text-[#2C5F5D]">
              If you are facing any of these, there’s hope:
            </h3>

            <ul className="mb-12 space-y-4 md:space-y-6">
              {[
                'Persistent feelings of sadness or hopelessness',
                'Trouble focusing or making decisions',
                'Difficulty maintaining relationships',
                'Feeling constantly exhausted or unmotivated',
                'A pervasive sense of being overwhelmed'
              ].map((li) => (
                <li key={li} className="flex items-start gap-4 text-[15px] md:text-[18px] text-[#2C5F5D]">
                  <span className="w-1.5 h-1.5 bg-[#2C5F5D] rounded-full shrink-0 mt-2"></span>
                  <span className="font-medium opacity-90">{li}</span>
                </li>
              ))}
            </ul>

            <p className="text-base md:text-[18px] leading-relaxed text-[#2C5F5D] opacity-90 max-w-lg">
              With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
            </p>
          </div>

          <a
            href="#contact"
            className="border-t border-[#2C5F5D]/20 py-10 md:py-12 flex justify-center items-center transition-all duration-500 bg-transparent hover:bg-[#2C5F5D] group"
          >
            <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#2C5F5D] transition-colors duration-500 group-hover:text-white">
              WORK WITH ME →
            </span>
          </a>
        </div>
      </motion.section>

      {/* SECTION 5: ABOUT / BIO */}
      <motion.section
        id="about"
        {...revealConfig}
        className="px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-24 max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col items-start order-2 max-w-xl md:order-1">
          <h3 className="text-[48px] sm:text-[56px] md:text-[82px] lg:text-[96px] leading-[1] md:leading-[0.92] mb-8 tracking-tight font-serif">
            Hi, I'm Maya.
          </h3>
          <div className="space-y-6 text-base font-light leading-relaxed md:text-lg opacity-80">
            <p>I'm a licensed clinical psychologist specializing in anxiety, trauma, and burnout. My approach is warm, collaborative, and grounded in evidence-based practices like CBT, EMDR, and mindfulness.</p>
            <p>I believe healing happens in relationship—in a space where you feel truly seen, safe, and supported. Whether you're struggling with panic attacks, processing past trauma, or simply feeling overwhelmed, I'm here to walk alongside you.</p>
          </div>
          <button className="w-full sm:w-auto mt-10 border border-[#2C5F5D] cursor-pointer px-10 py-4 text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-[#2C5F5D] hover:text-[#F4F1E8] transition-all duration-500 ease-in-out">
            LET'S CONNECT →
          </button>
        </div>

        <div className="relative h-[450px] sm:h-[550px] md:h-[650px] w-full flex justify-center order-1 md:order-2">
          {/* Back arch image */}
          <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[75%] h-[80%] rounded-t-full overflow-hidden z-10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80"
              className="object-cover w-full h-full"
              alt="Nature background"
            />
          </div>
          {/* Front circular image */}
          <div className="absolute bottom-4 right-[5%] w-[55%] aspect-square rounded-full border-[8px] md:border-[15px] border-[#F4F1E8] overflow-hidden z-20 shadow-xl">
            <img
              src="/Dr. Maya Reynolds.png"
              className="object-cover w-full h-full"
              alt="Dr. Maya Reynolds portrait"
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 6: OUR OFFICE */}
      <motion.section
        {...revealConfig}
        className="bg-[#E8E3D6] py-16 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[38px] sm:text-[48px] md:text-[68px] lg:text-[82px] mb-8 md:mb-12 tracking-tight text-center font-serif">
            Our Office
          </h3>
          <p className="max-w-3xl mx-auto mb-12 text-base font-light leading-relaxed text-center md:text-lg md:mb-16 opacity-80">
            My office in Santa Monica is designed to be a calm, private, and welcoming space where you can feel at ease.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img src="/office1.jpeg" alt="Office interior" className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img src="/office2.jpeg" alt="Seating area" className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="hidden md:block aspect-[3/4] overflow-hidden rounded-sm">
              <img src="/office3.jpeg" alt="Peaceful room" className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

          <p className="mt-12 text-xs font-medium tracking-wide text-center md:text-base opacity-70">
            LOCATED AT 123TH STREET 45 W, SANTA MONICA, CA 90401<br />
            IN-PERSON SESSIONS + SECURE TELEHEALTH ACROSS CALIFORNIA
          </p>
        </div>
      </motion.section>

      {/* SECTION 7: FAQs */}
      <motion.section
        {...revealConfig}
        className="px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row gap-12 lg:gap-24 items-start bg-[#F4F1E8] max-w-[1400px] mx-auto"
      >
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-full max-w-[450px] aspect-[4/5] rounded-t-full overflow-hidden shadow-sm">
            <img
              src="/faqs.jpeg"
              alt="Aesthetic dried flowers"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full pt-4 md:w-1/2">
          <h3 className="text-[48px] md:text-[64px] lg:text-[72px] mb-12 tracking-tight font-serif text-[#2C5F5D]">
            FAQs
          </h3>

          <div className="border-t border-[#2C5F5D]">
            <AccordionItem
              title="Do you take insurance?"
              content="I am an out-of-network provider and can provide superbills for reimbursement with most PPO plans. I'm happy to help you understand your benefits."
            />
            <AccordionItem
              title="What are your rates?"
              content="Individual therapy sessions are $200 for 50 minutes. I also offer a limited number of sliding scale spots for those experiencing financial hardship."
            />
            <AccordionItem
              title="Do you have any openings?"
              content="Yes! I offer both in-person sessions in Santa Monica and secure telehealth sessions for clients throughout California."
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 8: BACKGROUND */}
      <motion.section
        {...revealConfig}
        className="bg-[#E8E3D6] py-16 md:py-32 px-6"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-[32px] md:text-[48px] mb-8 md:mb-12 tracking-tight text-center font-serif text-[#2C5F5D]">
            My Professional Background
          </h3>

          <div className="border-t border-[#2C5F5D]/30">
            <AccordionItem
              title="Education"
              content="Doctor of Psychology (PsyD) from Pepperdine University, with specialized training in trauma-focused therapies and anxiety disorders."
            />
            <AccordionItem
              title="Licensure"
              content="Licensed Clinical Psychologist in California (PSY 12345). I maintain ongoing continuing education in evidence-based practices."
            />
            <AccordionItem
              title="Certifications"
              content="I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to create a personalized treatment plan."
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 9: CTA */}
      <motion.section
        id="contact"
        {...revealConfig}
        className="bg-[#2C5F5D] py-20 md:py-32 px-6 text-center text-[#F4F1E8]"
      >
        <h3 className="text-[38px] sm:text-[52px] md:text-[72px] lg:text-[88px] mb-8 tracking-tight leading-[1.1] font-serif">
          Ready to take the first step?
        </h3>
        <p className="max-w-2xl mx-auto mb-10 text-base font-light leading-relaxed md:text-lg opacity-90">
          You don't have to wait until things feel unbearable to reach out.<br className="hidden md:block" />
          Let's talk about how therapy can support you right now.
        </p>
        <button className="w-full sm:w-auto bg-[#F4F1E8] text-[#2C5F5D] px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-bold shadow-lg cursor-pointer hover:bg-[#3c9141] transition-all duration-500 ease-in-out">
          SCHEDULE A CONSULTATION →
        </button>
      </motion.section>

      {/* FOOTER */}
      <footer className="pt-20 md:pt-32 pb-0 px-0 bg-[#F4F1E8] text-[#2C5F5D]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 mb-20 sm:grid-cols-2 md:grid-cols-12">
            <div className="flex flex-col items-start md:col-span-6">
              <h4 className="text-[36px] md:text-[56px] leading-[1.1] tracking-tight font-serif mb-8">
                Dr. Maya Reynolds
              </h4>
              <div className="space-y-2 text-base font-light md:text-lg">
                <p>123 Example Road</p>
                <p>Minneapolis, MN</p>
                <div className="flex flex-col pt-6 space-y-3">
                  <a href="mailto:email@example.com" className="underline transition-opacity hover:opacity-60 decoration-1 underline-offset-4">email@example.com</a>
                  <a href="tel:5555555555" className="underline transition-opacity hover:opacity-60 decoration-1 underline-offset-4">(555) 555-5555</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-[22px] md:text-[28px] font-serif mb-6 tracking-tight">Hours</h5>
              <div className="space-y-1 text-base font-light md:text-lg">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            <div className="md:col-span-3 md:text-right">
              <h5 className="text-[22px] md:text-[28px] font-serif mb-6 tracking-tight">Find</h5>
              <div className="flex flex-col gap-3 text-base font-light md:items-end md:text-lg">
                <a href="#" className="underline transition-opacity hover:opacity-60 decoration-1 underline-offset-4">Home</a>
                <a href="#contact" className="underline transition-opacity hover:opacity-60 decoration-1 underline-offset-4">Contact</a>
                <a href="#" className="underline transition-opacity hover:opacity-60 decoration-1 underline-offset-4">Blog</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E8E3D6] py-12 md:py-16 px-6 md:px-12 text-center">
          <div className="max-w-[1400px] mx-auto space-y-6 md:space-y-8">
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3 text-[12px] md:text-[14px] underline underline-offset-4 font-bold">
              <a href="#">Privacy Policy</a>
              <a href="#">Good Faith Estimate</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Disclaimer</a>
            </div>
            <p className="text-[12px] md:text-[14px] font-bold">
              Website Template Credits: <span className="underline">Go Bloom Creative</span>
            </p>
            <p className="text-[11px] md:text-[13px] font-extrabold tracking-widest uppercase opacity-60">
              © 2026 Dr. Maya Reynolds LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}