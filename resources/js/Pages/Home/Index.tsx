"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Sun,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Home,
  Building2,
  Factory,
  Leaf,
  Zap,
  ShieldCheck,
  Wallet,
  Settings,
  Calculator,
  Star,
  Quote,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Residential Solar",
    description:
      "Power your home with clean solar energy and reduce your dependence on grid electricity.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Commercial Solar",
    description:
      "Smart rooftop solar solutions designed to help businesses manage long-term energy costs.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Industrial Solar",
    description:
      "High-capacity solar systems engineered for factories, warehouses and large facilities.",
  },
];

const benefits = [
  "Premium quality solar panels",
  "Professional installation team",
  "Customized solar system design",
  "Complete installation support",
  "System monitoring & maintenance",
  "Transparent pricing",
];

const projects = [
  {
    title: "Modern Home Solar",
    location: "Lucknow, Uttar Pradesh",
    capacity: "5 KW",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Commercial Rooftop",
    location: "Kanpur, Uttar Pradesh",
    capacity: "50 KW",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Industrial Solar Plant",
    location: "Noida, Uttar Pradesh",
    capacity: "250 KW",
    type: "Industrial",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
];

const faqs = [
  {
    question: "How much can I save with solar energy?",
    answer:
      "Your savings depend on your electricity consumption, system size, location and applicable electricity tariff. Our team can assess your requirements and recommend a suitable system.",
  },
  {
    question: "How long does a solar panel system last?",
    answer:
      "Quality solar panels are generally designed for long-term operation, commonly around 25 years or more, depending on the product and operating conditions.",
  },
  {
    question: "Can solar panels work on cloudy days?",
    answer:
      "Yes. Solar panels can still generate electricity during cloudy conditions, although their output is generally lower than during strong direct sunlight.",
  },
  {
    question: "Do you provide installation and maintenance?",
    answer:
      "Yes. Solar Wave Energy provides complete support from site assessment and system design through installation, commissioning and maintenance.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071923]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <a href="#home" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7c844] text-[#071923]">
              <Sun size={25} strokeWidth={2.5} />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-white" />
            </div>

            <div>
              <div className="text-lg font-black leading-none tracking-tight sm:text-xl">
                SOLAR WAVE
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-[#f7c844]">
                ENERGY
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Solutions", "#services"],
              ["Projects", "#projects"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-300 transition hover:text-[#f7c844]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+91 63922 83073"
              className="flex items-center gap-2 text-sm font-semibold text-slate-300"
            >
              <Phone size={16} className="text-[#f7c844]" />
              +91 63922 83073
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#f7c844] px-6 py-3 text-sm font-black text-[#071923] transition hover:bg-white"
            >
              Get Free Quote
            </a>
          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-2 lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#071923] px-5 py-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Solutions", "#services"],
                ["Projects", "#projects"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-white/10 pb-3 text-sm font-semibold text-slate-300"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-[#f7c844] px-5 py-3 text-center font-bold text-[#071923]"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden bg-[#071923] pt-[76px]"
      >
        {/* background */}

        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#f7c844]/10 blur-3xl" />

          <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:min-h-[684px] lg:grid-cols-[0.95fr_1.05fr] lg:px-8">

          {/* LEFT */}

          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c844]/30 bg-[#f7c844]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f7c844]">
              <Sun size={15} />
              Clean Energy • Smart Future
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[68px]">
              Power Your
              <span className="block text-[#f7c844]">
                World With Solar.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Solar Wave Energy provides reliable solar installation solutions
              for homes, businesses and industries. Generate clean energy and
              take control of your electricity costs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7c844] px-7 py-4 font-black text-[#071923] shadow-lg shadow-yellow-500/10 transition hover:-translate-y-1 hover:bg-white"
              >
                Get Free Site Survey
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#f7c844] hover:text-[#f7c844]"
              >
                Explore Solutions
              </a>

            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-400 sm:text-sm">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f7c844]" />
                Expert Installation
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f7c844]" />
                Premium Equipment
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f7c844]" />
                Complete Support
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-[#f7c844]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl">

              <div
                className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90')",
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/80 via-transparent to-transparent" />

                {/* floating card */}

                <div className="absolute left-5 top-5 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#f7c844] p-2">
                      <Sun size={20} />
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-slate-500">
                        Clean Energy
                      </div>
                      <div className="text-lg font-black">
                        100% Renewable
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom card */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#071923]/90 p-5 text-white backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <div className="text-xs text-slate-400">
                        Solar System
                      </div>

                      <div className="mt-1 text-2xl font-black">
                        5.2 KW
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#f7c844] p-3 text-[#071923]">
                      <Zap size={22} />
                    </div>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[87%] rounded-full bg-[#f7c844]" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>Energy performance</span>
                    <span className="font-bold text-white">87%</span>
                  </div>

                </div>
              </div>
            </div>

            {/* floating badge */}

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white p-4 shadow-2xl sm:block">
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                  <Leaf size={22} />
                </div>

                <div>
                  <div className="text-xl font-black">25+</div>
                  <div className="text-xs text-slate-500">
                    Years Panel Life*
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative z-10 -mt-1 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 border-x border-slate-100 lg:grid-cols-4">

          {[
            ["2,500+", "Solar Systems"],
            ["25 MW+", "Installed Capacity"],
            ["10+", "Years Experience"],
            ["98%", "Customer Satisfaction"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-b border-r border-slate-100 px-4 py-8 text-center lg:py-10"
            >
              <div className="text-3xl font-black text-[#071923] sm:text-4xl">
                {number}
              </div>

              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                {label}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="about" className="scroll-mt-20 bg-[#f7f9f8] py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

          {/* IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=90"
                alt="Solar panels"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-[#071923] p-5 text-white shadow-2xl sm:-right-7">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-[#f7c844] p-3 text-[#071923]">
                  <Leaf size={24} />
                </div>

                <div>
                  <div className="text-2xl font-black">18,000+</div>
                  <div className="text-xs text-slate-400">
                    Tons CO₂ Reduced
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* CONTENT */}

          <div>

            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#c49612]">
              About Solar Wave
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              We Turn Sunlight Into
              <span className="text-[#d3a91e]"> Smart Energy.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Solar Wave Energy helps homes, businesses and industries make
              the transition to clean solar power through professionally
              designed and installed solar systems.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From the first site assessment to installation and ongoing
              support, our team handles the complete solar journey.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">

                  <div className="mt-0.5 rounded-full bg-[#f7c844]/20 p-1 text-[#a67b00]">
                    <Check size={14} />
                  </div>

                  <span className="text-sm font-bold text-slate-700">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#071923] px-7 py-4 font-bold text-white transition hover:bg-[#f7c844] hover:text-[#071923]"
            >
              Talk To Our Solar Experts
              <ArrowRight size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section id="services" className="scroll-mt-20 bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="max-w-2xl">

            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#c49612]">
              Our Solar Solutions
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Solar Solutions Built
              <span className="text-[#d3a91e]"> Around You.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you need solar for your home, business or industrial
              facility, we design solutions around your energy requirements.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#f7c844] hover:shadow-2xl"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7c844]/15 text-[#b48a0d] transition group-hover:bg-[#f7c844] group-hover:text-[#071923]">
                      <Icon size={27} />
                    </div>

                    <span className="text-5xl font-black text-slate-100">
                      {service.number}
                    </span>

                  </div>

                  <h3 className="mt-9 text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-black"
                  >
                    Explore Solution
                    <ArrowRight size={17} />
                  </a>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          SOLAR CALCULATOR STYLE SECTION
      ========================================================= */}

      <section className="bg-[#071923] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#0c2735] lg:grid-cols-2">

            <div className="p-8 sm:p-12 lg:p-16">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7c844] text-[#071923]">
                <Calculator size={27} />
              </div>

              <div className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#f7c844]">
                Solar Estimate
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                How Much Could
                <span className="text-[#f7c844]"> Solar Help You?</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Your actual savings depend on your electricity usage, system
                size, location and applicable tariff. Contact us for a
                personalized solar assessment.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f7c844] px-7 py-4 font-black text-[#071923]"
              >
                Get My Free Estimate
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="bg-white p-8 sm:p-12 lg:p-14">

              <div className="text-sm font-bold text-slate-500">
                Example Solar Plan
              </div>

              <div className="mt-6 space-y-4">

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">
                      Monthly Electricity Bill
                    </span>

                    <span className="font-black">
                      ₹8,000
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#f7c844]/20 p-5">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-slate-600">
                      Example System Size
                    </span>

                    <span className="text-xl font-black">
                      5 KW
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      Potential Annual Savings*
                    </span>

                    <span className="text-xl font-black text-emerald-700">
                      ₹66,000+
                    </span>
                  </div>
                </div>

              </div>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                *Illustrative example only. Actual savings depend on your
                location, consumption, system design and electricity tariff.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY US
      ========================================================= */}

      <section className="bg-[#f7f9f8] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            <div>

              <div className="text-sm font-black uppercase tracking-[0.2em] text-[#c49612]">
                Why Solar Wave
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Solar Installation
                <span className="text-[#d3a91e]"> Done Right.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We focus on quality installation, practical system design and
                long-term customer support.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: ShieldCheck,
                  title: "Quality First",
                  text: "Reliable equipment and careful installation practices.",
                },
                {
                  icon: Settings,
                  title: "Complete Service",
                  text: "From site survey through installation and support.",
                },
                {
                  icon: Wallet,
                  title: "Smart Investment",
                  text: "Solutions designed around your energy requirements.",
                },
                {
                  icon: Leaf,
                  title: "Clean Energy",
                  text: "Generate renewable electricity from sunlight.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7c844]/20 text-[#a67b00]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="text-center">

            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#c49612]">
              Our Process
            </div>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              From Roof To Renewable Energy
            </h2>

          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-slate-200 md:block" />

            {[
              ["01", "Site Survey", "Understand your property and energy needs."],
              ["02", "System Design", "Create a customized solar solution."],
              ["03", "Installation", "Professionally install your solar system."],
              ["04", "Power On", "Test, commission and start generating energy."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative text-center">

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-[#f7c844] text-lg font-black shadow-lg">
                  {number}
                </div>

                <h3 className="mt-7 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section id="projects" className="scroll-mt-20 bg-[#071923] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="text-sm font-black uppercase tracking-[0.2em] text-[#f7c844]">
                Our Projects
              </div>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Solar Systems
                <span className="text-[#f7c844]"> In Action.</span>
              </h2>

            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold text-white hover:text-[#f7c844]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c2735]"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#f7c844] px-3 py-1 text-xs font-black text-[#071923]">
                    {project.type}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">

                    <div>
                      <div className="text-xs text-slate-300">
                        Installed Capacity
                      </div>

                      <div className="text-2xl font-black">
                        {project.capacity}
                      </div>
                    </div>

                    <ArrowRight className="transition group-hover:translate-x-1" />

                  </div>
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-black text-white">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin size={15} />
                    {project.location}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================= */}

      <section className="bg-[#f7c844] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <div className="flex justify-center gap-1 text-[#071923]">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} size={18} fill="currentColor" />
            ))}
          </div>

          <Quote className="mx-auto mt-8 text-[#071923]/20" size={55} />

          <blockquote className="mt-2 text-3xl font-black leading-tight text-[#071923] sm:text-4xl">
            “Solar Wave Energy made the entire installation process simple.
            Their team explained everything clearly and handled the project
            professionally.”
          </blockquote>

          <div className="mt-7 font-black text-[#071923]">
            Anurag Mishra
          </div>

          <div className="mt-1 text-sm text-[#071923]/60">
            Residential Solar Customer
          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section id="faq" className="scroll-mt-20 bg-white py-24">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <div className="text-center">

            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#c49612]">
              FAQ
            </div>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Questions About Solar?
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >

                    <span className="font-black">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-5 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section id="contact" className="scroll-mt-20 bg-[#071923] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#f7c844] lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}

            <div className="p-8 sm:p-12 lg:p-14">

              <div className="text-sm font-black uppercase tracking-[0.2em] text-[#071923]/60">
                Let's Go Solar
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Ready To Make The Switch?
              </h2>

              <p className="mt-5 leading-7 text-[#071923]/75">
                Get in touch with Solar Wave Energy for a free consultation
                and site assessment.
              </p>

              <div className="mt-9 space-y-5">

                <a
                  href="tel:+916392283073"
                  className="flex items-center gap-4 font-black"
                >
                  <span className="rounded-xl bg-[#071923] p-3 text-[#f7c844]">
                    <Phone size={19} />
                  </span>

                  +91 63922 83073
                </a>

                <a
                  href="mailto:info@solarwaveenergy.com"
                  className="flex items-center gap-4 font-black"
                >
                  <span className="rounded-xl bg-[#071923] p-3 text-[#f7c844]">
                    <Mail size={19} />
                  </span>

                  info@solarwaveenergy.com
                </a>

                <div className="flex items-center gap-4 font-black">
                  <span className="rounded-xl bg-[#071923] p-3 text-[#f7c844]">
                    <MapPin size={19} />
                  </span>

                  Lucknow, Uttar Pradesh
                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="bg-white p-8 sm:p-12 lg:p-14">

              <div className="mb-7">
                <h3 className="text-2xl font-black">
                  Get Your Free Solar Quote
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Tell us about your solar requirement.
                </p>
              </div>

              <form className="space-y-4">

                <div className="grid gap-4 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#f7c844]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#f7c844]"
                  />

                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#f7c844]"
                />

                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-[#f7c844]">
                  <option>Select Solar Requirement</option>
                  <option>Residential Solar</option>
                  <option>Commercial Solar</option>
                  <option>Industrial Solar</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us about your electricity usage or requirement..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#f7c844]"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071923] px-6 py-4 font-black text-white transition hover:bg-[#0c3446]"
                >
                  Request Free Consultation
                  <ArrowRight size={18} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>


      {/* office Location */}
      <section id="location" className="relative overflow-hidden bg-[#07131f] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,193,45,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
              <MapPin className="h-4 w-4" />
              Visit Our Location
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Find <span className="text-yellow-400">Solar Wave Energy</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              Visit our office and talk to our solar experts about residential,
              commercial and industrial solar installation.
            </p>
          </div>

          {/* Location Card */}
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">

            {/* Address */}
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-[#07131f]">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Solar Wave Energy
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-yellow-400">
                  Solar Installation & Energy Solutions
                </p>

                <div className="mt-8 space-y-5">

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                         Office Address
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        554 KA/178, near Patel Nagar, Arjun Nagar, Adarsh Nagar, Alambagh,
                        <br />
                         Lucknow, Uttar Pradesh 226005
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <Phone className="h-5 w-5 text-yellow-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Call Us
                      </p>
                      <a
                        href="tel:+91 63922 83073"
                        className="mt-1 block text-sm text-slate-400 transition hover:text-yellow-400"
                      >
                        +91 63922 83073
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <Mail className="h-5 w-5 text-yellow-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Email
                      </p>

                      <a
                        href="mailto:info@solarwaveenergy.com"
                        className="mt-1 block text-sm text-slate-400 transition hover:text-yellow-400"
                      >
                        info@solarwaveenergy.com
                      </a>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <Sun className="h-5 w-5 text-yellow-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Business Hours
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Monday - Sunday
                        <br />
                        10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=554+KA%2F178,+near+Patel+Nagar,+Arjun+Nagar,+Adarsh+Nagar,+Alambagh,+Lucknow,+Uttar+Pradesh+226005"                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-[#07131f] transition hover:bg-yellow-300"
              >
                Get Directions
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Google Map */}
            <div className="min-h-[400px] lg:min-h-[560px]">
              <iframe
                    title="Solar Wave Energy office Location"
                    src="https://www.google.com/maps?q=Gurudwara,554+KA%2F178,+near+Patel+Nagar,+Arjun+Nagar,+Adarsh+Nagar,+Alambagh,+Lucknow,+Uttar+Pradesh+226005&output=embed"
                    className="h-full min-h-[400px] w-full border-0 lg:min-h-[560px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#041118] text-white">

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div>

              <a href="#home" className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7c844] text-[#071923]">
                  <Sun size={24} />
                </div>

                <div>
                  <div className="font-black">
                    SOLAR WAVE
                  </div>

                  <div className="text-[9px] font-bold tracking-[0.3em] text-[#f7c844]">
                    ENERGY
                  </div>
                </div>

              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                Professional solar installation solutions for residential,
                commercial and industrial customers.
              </p>

            </div>

            <div>

              <h3 className="font-black">
                Company
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-400">

                <a href="#about" className="block hover:text-[#f7c844]">
                  About Us
                </a>

                <a href="#services" className="block hover:text-[#f7c844]">
                  Solar Solutions
                </a>

                <a href="#projects" className="block hover:text-[#f7c844]">
                  Projects
                </a>

                <a href="#faq" className="block hover:text-[#f7c844]">
                  FAQ
                </a>

              </div>

            </div>

            <div>

              <h3 className="font-black">
                Solutions
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-400">

                <div>Residential Solar</div>
                <div>Commercial Solar</div>
                <div>Industrial Solar</div>
                <div>Solar Maintenance</div>
                <div>Solar Consultation</div>

              </div>

            </div>

            <div>

              <h3 className="font-black">
                Contact
              </h3>

              <div className="mt-5 space-y-4 text-sm text-slate-400">

                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="shrink-0 text-[#f7c844]"
                  />
                  Lucknow, Uttar Pradesh, India
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={18}
                    className="shrink-0 text-[#f7c844]"
                  />
                  +91 63922 83073
                </div>

                <div className="flex gap-3">
                  <Mail
                    size={18}
                    className="shrink-0 text-[#f7c844]"
                  />
                  info@solarwaveenergy.com
                </div>

              </div>

            </div>

          </div>

          <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Solar Wave Energy. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}
