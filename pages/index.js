// pages/index.js
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import SkillsSection from "@/components/Skills";

import ProjectShowcase from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout"; // Import the Layout component
import StatsSection from "@/components/Stats";
import Resume from "@/components/Experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Layout>
        <Hero />
        <About />
        <StatsSection />
        {/* <SkillsSection /> */}
        <Resume />
        <ProjectShowcase />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}