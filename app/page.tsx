import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Left Section - Fixed */}
      <aside className="w-full lg:w-1/2 lg:fixed lg:h-screen flex flex-col justify-between p-8 lg:p-16 bg-white dark:bg-zinc-950">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Ranveer Desh
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-md">
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating user-friendly and performant applications.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:block space-y-2 mt-12">
            <a
              href="#experience"
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-2"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-2"
            >
              Achievements
            </a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Right Section - Scrollable */}
      <main className="w-full lg:w-1/2 lg:ml-[50%] p-8 lg:p-16 space-y-24">
        {/* Experience Section */}
        <section id="experience" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Senior Software Engineer
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  2022 - Present
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Tech Company Inc.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Led development of scalable web applications using React, Next.js, and Node.js.
                Improved application performance by 40% and mentored junior developers.
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Software Engineer
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  2020 - 2022
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Startup Solutions
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Developed and maintained multiple client projects using modern JavaScript frameworks.
                Collaborated with cross-functional teams to deliver high-quality products.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "AWS", "Vercel", "CI/CD", "Agile"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-300 rounded-full text-sm"
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
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                E-Commerce Platform
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                A full-stack e-commerce solution with real-time inventory management, payment
                integration, and admin dashboard. Built with Next.js, TypeScript, and Stripe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  Stripe
                </span>
              </div>
            </div>

            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Task Management App
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                Collaborative task management application with real-time updates, team workspaces,
                and advanced filtering. Features drag-and-drop interface and mobile responsiveness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  WebSocket
                </span>
              </div>
            </div>

            <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Portfolio Generator
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                SaaS platform for creating professional portfolio websites without coding.
                Includes customizable themes, analytics dashboard, and SEO optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  Tailwind
                </span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="scroll-mt-16 pb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Achievements
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Best Innovation Award 2023
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Recognized for developing an AI-powered chatbot that improved customer satisfaction by 35%
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Open Source Contributor
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Active contributor to popular open-source projects with 500+ stars combined
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  AWS Certified Developer
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Professional certification in AWS cloud development and architecture
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Hackathon Winner
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  First place at Regional Tech Hackathon 2022 for building an innovative healthcare solution
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
