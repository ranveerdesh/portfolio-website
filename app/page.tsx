"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Turning Coffee into Code ☕",
    "Turning Ideas into Solutions"
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, titleIndex, isDeleting]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "projects", "education", "achievements"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById('spotlight');
      if (spotlight) {
        spotlight.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(96, 165, 250, 0.12), transparent 60%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-900 relative">
      {/* Spotlight Effect */}
      <div 
        id="spotlight"
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
        style={{ background: 'transparent' }}
      ></div>
      
      {/* Left Section - Fixed */}
      <aside className="w-full lg:w-[45%] lg:fixed lg:h-screen flex flex-col justify-between p-12 lg:pl-32 lg:pr-20 lg:py-24">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-2">
              Ranveer Deshmukh
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-slate-300 mb-4 min-h-[2.5rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-base text-slate-400 max-w-md">
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating user-friendly and performant applications.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:block space-y-1 mt-12">
            <a
              href="#about"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "about" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "about" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                About
              </span>
            </a>
            <a
              href="#experience"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "experience" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "experience" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                Experience
              </span>
            </a>
            <a
              href="#skills"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "skills" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "skills" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                Skills
              </span>
            </a>
            <a
              href="#projects"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "projects" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "projects" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                Projects
              </span>
            </a>
            <a
              href="#education"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "education" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "education" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                Education
              </span>
            </a>
            <a
              href="#achievements"
              className="group flex items-center py-3 transition-all duration-200"
            >
              <span 
                className={`h-px bg-slate-400 transition-all duration-200 mr-4 ${
                  activeSection === "achievements" ? "w-16 bg-slate-100" : "w-8 group-hover:w-16 group-hover:bg-slate-100"
                }`}
              ></span>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                activeSection === "achievements" ? "text-slate-100" : "text-slate-500 group-hover:text-slate-100"
              }`}>
                Achievements
              </span>
            </a>
          </nav>
        </div>

        {/* Social Links - Update these URLs with your actual profiles */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Right Section - Scrollable */}
      <main className="w-full lg:w-[55%] lg:ml-[45%] p-12 lg:pl-20 lg:pr-40 lg:py-24 space-y-24">
        {/* About Section */}
        <section id="about" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            About
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I'm a passionate full-stack developer with a love for creating exceptional digital experiences. 
              My journey in software development started with a curiosity about how things work, 
              and has evolved into a career focused on building scalable, user-centric applications.
            </p>
            <p>
              I specialize in modern web technologies and enjoy working on projects that challenge me 
              to learn and grow. Whether it's crafting intuitive user interfaces or architecting robust 
              backend systems, I bring dedication and attention to detail to every project.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Senior Software Engineer
                </h3>
                <span className="text-sm text-slate-400">
                  2022 - Present
                </span>
              </div>
              <p className="text-slate-400 mb-2">
                Tech Company Inc.
              </p>
              <p className="text-slate-400">
                Led development of scalable web applications using React, Next.js, and Node.js.
                Improved application performance by 40% and mentored junior developers.
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Software Engineer
                </h3>
                <span className="text-sm text-slate-400">
                  2020 - 2022
                </span>
              </div>
              <p className="text-slate-400 mb-2">
                Startup Solutions
              </p>
              <p className="text-slate-400">
                Developed and maintained multiple client projects using modern JavaScript frameworks.
                Collaborated with cross-functional teams to deliver high-quality products.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "AWS", "Vercel", "CI/CD", "Agile"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="group border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                E-Commerce Platform
              </h3>
              <p className="text-slate-400 mb-3">
                A full-stack e-commerce solution with real-time inventory management, payment
                integration, and admin dashboard. Built with Next.js, TypeScript, and Stripe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  Stripe
                </span>
              </div>
            </div>

            <div className="group border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                Task Management App
              </h3>
              <p className="text-slate-400 mb-3">
                Collaborative task management application with real-time updates, team workspaces,
                and advanced filtering. Features drag-and-drop interface and mobile responsiveness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  WebSocket
                </span>
              </div>
            </div>

            <div className="group border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                Portfolio Generator
              </h3>
              <p className="text-slate-400 mb-3">
                SaaS platform for creating professional portfolio websites without coding.
                Includes customizable themes, analytics dashboard, and SEO optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  Tailwind
                </span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Education
          </h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Bachelor of Science in Computer Science
                </h3>
                <span className="text-sm text-slate-400">
                  2016 - 2020
                </span>
              </div>
              <p className="text-slate-400 mb-2">
                University Name
              </p>
              <p className="text-slate-400">
                Focused on software engineering, algorithms, and data structures. 
                Completed capstone project on machine learning applications.
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Relevant Certifications
                </h3>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• AWS Certified Developer - Associate</li>
                <li>• Professional Scrum Master (PSM I)</li>
                <li>• MongoDB Certified Developer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="scroll-mt-16 pb-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Achievements
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Best Innovation Award 2023
                </h3>
                <p className="text-slate-400">
                  Recognized for developing an AI-powered chatbot that improved customer satisfaction by 35%
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Open Source Contributor
                </h3>
                <p className="text-slate-400">
                  Active contributor to popular open-source projects with 500+ stars combined
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  AWS Certified Developer
                </h3>
                <p className="text-slate-400">
                  Professional certification in AWS cloud development and architecture
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Hackathon Winner
                </h3>
                <p className="text-slate-400">
                  First place at Regional Tech Hackathon 2022 for building an innovative healthcare solution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-16 text-center">
          <p className="text-sm text-slate-500">
            © Ranveer Deshmukh 2025
          </p>
        </footer>
      </main>
    </div>
  );
}
