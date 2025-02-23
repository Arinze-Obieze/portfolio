// pages/index.js
import Head from "next/head"; // Added for SEO
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectShowcase from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
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
      <Head>
        <title>Arinze Obieze - Full-Stack Developer</title>
        <meta name="description" content="I am a full-stack developer specializing in Saas projects using Next.js and React. Explore my projects, testimonials, and contact me for collaborations." />
        <meta name="keywords" content="Next.js, React, Full-Stack Developer, JavaScript, Portfolio , Web Developer, Typescript ,Tech blog, Tailwind css" />
        <meta name="author" content="Arinze Obieze" />
        <meta property="og:title" content="Arinze Obieze - Full-Stack Web Developer" />
        <meta property="og:description" content="I build high-performance web applications using Next.js and React." />
        <meta property="og:image" content="/arinzep.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <main>
          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="stats">
            <StatsSection />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="projects">
            <ProjectShowcase />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </Layout>
    </div>
  );
}
