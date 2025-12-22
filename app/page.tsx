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
          <div className="space-y-12">
            {/* Software Engineer Intern */}
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Software Engineer Intern
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  Dec 2024 – Feb 2025
                </span>
              </div>
              <p className="text-slate-400 mb-3">
                Bridge Marketplace · New York, USA (Remote)
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">Dash</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">Pandas</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">OCR</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">AI/ML Pipelines</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">Excel/CSV</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Built a purchase order scorecard dashboard to analyse large Excel/CSV datasets and surface key financial metrics</li>
                <li>• Developed Python data pipelines to clean, validate, and aggregate transactional data for AI-driven analysis</li>
                <li>• Integrated OCR-based extraction to standardise data from variably formatted financial documents</li>
                <li>• Supported an AI recommendation engine matching businesses with relevant lenders</li>
                <li>• Worked remotely in an Agile workflow, owning feature delivery and demos</li>
              </ul>
            </div>

            {/* Freelance Full-Stack Developer */}
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Freelance Full-Stack Developer
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  Mar 2025 – Present
                </span>
              </div>
              <p className="text-slate-400 mb-3">
                Self-Employed · Remote
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">REST APIs</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">Databases</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">Cloud Hosting</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">CI/CD</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Building end-to-end web applications from requirements to deployment</li>
                <li>• Developing responsive UIs, backend APIs, and database-driven features</li>
                <li>• Managing deployment workflows and basic CI/CD for production-ready delivery</li>
                <li>• Working directly with clients to iterate on features and solutions</li>
              </ul>
            </div>

            {/* Software Developer */}
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Software Developer
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  Apr 2024 – Dec 2024
                </span>
              </div>
              <p className="text-slate-400 mb-3">
                RISC Club at RMIT University · Melbourne, Australia
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">JavaScript</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">Web Technologies</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">Git</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">Internal Platforms</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Contributed to full-stack features for internal research and innovation platforms</li>
                <li>• Collaborated with stakeholders to translate requirements into working software components</li>
                <li>• Assisted with system integration and feature enhancements across research tools</li>
                <li>• Followed structured development practices including Git-based version control</li>
              </ul>
            </div>

            {/* Computer Science Teacher */}
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Computer Science Teacher
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  Jun 2022 – Nov 2022
                </span>
              </div>
              <p className="text-slate-400 mb-3">
                Vijaya School for Excellence · Amravati, India
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">HTML</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">CSS</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">JavaScript</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Delivered the Computer Science curriculum covering programming and web development fundamentals</li>
                <li>• Planned lessons and created teaching materials aligned with curriculum goals</li>
                <li>• Guided students through hands-on coding exercises and problem-solving</li>
                <li>• Evaluated assignments and provided constructive technical feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Skills
          </h2>
          <div className="space-y-6">
            {/* Frontend Development */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Component-Based Architecture"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "RESTful APIs", "Authentication & Authorization", "API Design", "Middleware", "Server-side Rendering"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Data Management */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Database & Data Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "SQL", "Schema Design", "CRUD Operations", "Data Validation"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS (EC2, S3)", "Docker", "CI/CD", "GitHub Actions", "Cloud Deployment", "Environment Configuration", "Linux"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & Quality Assurance */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Testing & Quality Assurance
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Unit Testing", "Integration Testing", "Jest", "Playwright", "Cypress", "Debugging", "Code Reviews"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "npm", "yarn", "ESLint", "Prettier"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Analytics & AI */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Data Analytics & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "Data Cleaning & Transformation", "CSV / Excel Processing", "Dash", "OCR Integration", "AI-Assisted Data Pipelines"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-amber-900/30 text-amber-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Project Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Agile / Scrum", "Jira", "Trello"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-pink-900/30 text-pink-300 rounded-full text-sm"
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
                  Bachelor of Computer Science
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  Feb 2023 - Nov 2025
                </span>
              </div>
              <p className="text-slate-400 mb-2">
                Royal Melbourne Institute Of Technology, Melbourne
              </p>
              <p className="text-slate-400">
                Major: Cyber Security
              </p>
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
                  Participated in Indian International Team Trials for Pistol Shooting
                </h3>
                <p className="text-slate-400">
                  Delhi, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  National Level Pistol Shooting
                </h3>
                <p className="text-slate-400">
                  Thiruvananthapuram, India
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
