import { useState } from 'react'
import './App.css'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Wrench } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achchuthan
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 ml-auto">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 transition">Education</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-gray-800 px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-blue-400">About</button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left hover:text-blue-400">Education</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left hover:text-blue-400">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-blue-400">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 mx-auto mb-6 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center text-4xl font-bold text-gray-300">
                <img src="/src/assets/profile4.png" alt="Profile Picture" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achchuthan Suntharalingam
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Web Developer | Designing Web Experiences That Inspire and Deliver
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://github.com/achchuthan-suntharalingam"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 hover:bg-blue-900/30 border border-gray-800 hover:border-blue-400 transition"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/achchuthan-suntharalingam/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 hover:bg-blue-900/30 border border-gray-800 hover:border-blue-400 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
          <a
            href="/src/assets/cv.pdf"
            download="cv.pdf"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-400 hover:to-cyan-400 transition"
          >
            Get Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                I'm a passionate web developer with expertise in building scalable web applications.
                With a strong foundation in modern web technologies, I create seamless user experiences and robust applications.
              </p>
              <p className="text-gray-300">
                My journey in software development has equipped me with skills in multiple programming languages and frameworks.
                I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-300">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community.
              </p>
            </div>
            {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-400 transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend Development</h3>
                <p className="text-gray-400">React, Next.js, React Native, Flutter, JavaScript, Tailwind CSS, Bootstrap, Material UI</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-400 transition">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Backend Development</h3>
                <p className="text-gray-400">Node.js, Python, Dart, PHP, Java, Express, SQL, NoSQL databases</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-400 transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools & Platforms</h3>
                <p className="text-gray-400">Git, Supabase, Swagger, Figma, AWS, CI/CD pipelines, VS Code, Android Studio, Trello, Jira</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Web Development Certificate",
                institute: "Uki",
                period: "Nov 2022 - Jun 2023"
              },
              {
                title: "Diploma in Information Technology",
                institute: "University Colombo School of Computing",
                period: "2025"
              },
              {
                title: "Bachelor of Information Technology",
                institute: "University Colombo School of Computing",
                period: "Following"
              }
            ].map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{edu.title}</h3>
                <p className="text-cyan-400 font-medium mb-2">{edu.institute}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Support Consultant",
                company: "Zelora",
                period: "September 2025 - January 2026"
              },
              {
                title: "Associate Software Engineer",
                company: "Rispit",
                period: "January 2025 - September 2025"
              },
              {
                title: "Associate Software Engineer",
                company: "Lizris",
                period: "Jun 2024 - Jan 2025"
              },
              {
                title: "Intern Software Engineer",
                company: "Lizris",
                period: "Dec 2023 - Jun 2024"
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{exp.title}</h3>
                <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-400 transition">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="space-y-3">
                {['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-cyan-400 transition">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold">Frontend</h3>
              </div>
              <div className="space-y-3">
                {['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'React Native'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & Database */}
            <div className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-400 transition">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Backend</h3>
              </div>
              <div className="space-y-3">
                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-cyan-400 transition">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold">Tools</h3>
              </div>
              <div className="space-y-1">
                {['Supabase', 'Swagger', 'Figma', 'Android Studio', 'VS Code'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {[
              {
                title: "Event Management Application - SeatSnaps",
                description: "A comprehensive admin dashboard for managing events, attendees, and ticketing. Features include real-time analytics, user management, and seamless integration with payment gateways. Also developed a mobile app for attendees to view event details, manage their tickets, and receive notifications.",
                tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Flutter"],
                link: "https://admin.seatsnaps.com/authentication/sign-in"
              },
              {
                title: "Warehouse Management Application - My Tasker",
                description: "Designed and developed a Courier Management Admin Panel using React and Material UI, implementing robust CRUD operations for key modules including suburbs, zones, orders, and users. Integrated backend APIs and built an interactive chat feature to handle system responses and operational communication, improving administrative efficiency and data management",
                tech: ["JavaScript", "Material UI",],
                link: "#"
              },
              {
                title: "E-commerce Platform - Modifix",
                description: "Conceptualized and co-developed Modifix, an e-commerce platform for custom motorbike parts. Built user-facing features including product browsing, authentication, and ordering, along with a comprehensive admin panel to manage products, users, orders, and sales statistics, delivering a streamlined experience for both customers and administrators",
                tech: ["React.js", "Bootstrap", "Mongo DB"],
                link: "https://modifix.netlify.app/"
              },
              {
                title: "Appointment Booking App - The Barber",
                description: "Contributed to the frontend development of “The Barber” mobile application using Flutter, focusing on salon discovery and appointment scheduling. Implemented features such as location-based salon search with Google Maps integration, service browsing by category, and detailed salon service views, delivering an intuitive and user-friendly booking experience.",
                tech: ["Flutter", "Dart", "Google Maps API"],
                link: "#"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-400 transition hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-gray-800 text-cyan-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to new opportunities and exciting projects. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://www.fiverr.com/achchuthans/buying?source=avatar_menu_profile"
              target="_blank"
              className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition"
            >
              <Linkedin size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Fiverr</h3>
              <p className="text-gray-400">Check out my services</p>
            </a>
            <a
              href="https://www.linkedin.com/in/achchuthan-suntharalingam/"
              target="_blank"
              className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <Code2 size={40} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me professionally</p>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-8 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition"
            >
              <Mail size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">Send me a message</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500">
        <p>© 2026 Achchuthan Suntharalingam. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
