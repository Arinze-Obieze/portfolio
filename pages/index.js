// pages/index.js
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
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [aboutRef, isAboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [resumeRef, isResumeVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [projectsRef, isProjectsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Layout>
        <div>
          {/* Hero Section */}
          <div>
            <Hero />
          </div>

          {/* About Section */}
          <div
            ref={aboutRef}
            className={`${isAboutVisible ? "animate-slideInRight" : "opacity-0"}`}
          >
            <About />
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className={`${isStatsVisible ? "animate-slideInLeft" : "opacity-0"}`}
          >
            <StatsSection />
          </div>

          {/* Resume Section */}
          <div
            ref={resumeRef}
            className={`${isResumeVisible ? "animate-slideInRight" : "opacity-0"}`}
          >
            <Resume />
          </div>

          {/* Projects Section */}
          <div
            ref={projectsRef}
            className={`${isProjectsVisible ? "animate-slideInBottom" : "opacity-0"}`}
          >
            <ProjectShowcase />
          </div>

          {/* Testimonials Section */}
          <div
            ref={testimonialsRef}
            className={`${isTestimonialsVisible ? "animate-slideInLeft" : "opacity-0"}`}
          >
            <Testimonials />
          </div>

          {/* Contact Section */}
          <div
            ref={contactRef}
            className={`${isContactVisible ? "animate-slideInRight" : "opacity-0"}`}
          >
            <Contact />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Layout>
    </div>
  );
}