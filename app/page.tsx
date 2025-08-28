 'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink, FiGithub, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'
import { SiReact, SiPython, SiJavascript, SiCplusplus, SiTensorflow, SiDocker, SiGit, SiFigma, SiMysql, SiHtml5, SiCss3, SiFlask, SiNumpy, SiPandas, SiScikitlearn, SiC } from 'react-icons/si'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'C', icon: SiC, color: 'text-blue-700' },
  // { name: 'Java', icon: SiJava, color: 'text-red-500' }, // SiJava does not exist in react-icons/si
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
    { name: 'Flask', icon: SiFlask, color: 'text-gray-600' },
    { name: 'NumPy', icon: SiNumpy, color: 'text-blue-500' },
    { name: 'Pandas', icon: SiPandas, color: 'text-purple-600' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
  ]

  const projects = [
    {
      title: 'Customer Feedback Review System',
      description: 'Manages and analyses feedbacks from customers by categorizing them using sentiment analysis.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'Flask'],
      github: '#',
      video: 'dQw4w9WgXcQ' // placeholder YouTube ID
    },
    {
      title: 'GameHub: A Simple Gaming Platform',
      description: 'Web-based interactive gaming platform featuring Snake, Tetris, Pong, and Tic Tac Toe with single/multiplayer modes.',
      tech: ['JavaScript', 'React', 'HTML5 Canvas', 'CSS'],
      github: '#',
      video: 'dQw4w9WgXcQ' // placeholder YouTube ID
    },
    {
      title: 'Fake Review Detection System',
      description: 'ML system to detect fake reviews using text content analysis and user behavior patterns.',
      tech: ['Python', 'Machine Learning', 'TensorFlow', 'NLP'],
      github: '#',
      video: 'dQw4w9WgXcQ' // placeholder YouTube ID
    }
  ]

  const certifications = [
    'Applied Statistics for Data Analytics (Coursera)',
    'Excel Basics for Data Analysis (Coursera)',
    'Databases and SQL for Data Science with Python (Coursera)',
    'Exploratory Data Analysis (Coursera)'
  ]

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Shreyansh Bhagwat
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'resume', 'skills', 'projects', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
  className="mx-auto mb-8 shadow-xl border-4 border-white rounded-lg overflow-hidden max-w-[250px]"
>
  <img
    src="/profile-photo.jpg"
    alt="Shreyansh Bhagwat"
    className="object-contain h-auto w-full mx-auto hover:scale-105 transition-transform duration-300"
  />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Shreyansh Bhagwat
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-8 font-medium">
              Aspiring AI/ML Engineer | Exploring Fullstack Development | Data Science Enthusiast
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              I am a Computer Science and Engineering student with a focus on AI/ML, Data Science, and web development. 
              Passionate about using technology to solve real-world problems, I apply my skills in programming, data analysis, 
              machine learning, and web development to contribute to innovative solutions.
            </p>
            <div className="flex gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Resume</h2>
            <div className="text-center mb-12">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-700">BTech CSE (AIML) - 8.96 CGPA</p>
                <p className="text-gray-600 text-sm">Shri Ramdeobaba College</p>
                <p className="text-gray-700">HSC - 81%</p>
                <p className="text-gray-600 text-sm">St. Paul Jr. College</p>
                <p className="text-gray-700">SSC - 91%</p>
                <p className="text-gray-600 text-sm">Montfort Sr. Sec. School</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Focus Areas</h3>
                <p className="text-gray-700">Artificial Intelligence, Machine Learning, Data Analytics</p>
                <p className="text-gray-700">Deep Learning, NLP, LLMs, Web Development</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <p className="text-gray-700">4 Coursera Certifications</p>
                <p className="text-gray-600 text-sm">Data Analytics & SQL</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Technical Skills</h2>
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center group hover:shadow-lg transition-all"
                >
                  <skill.icon className={`w-10 h-10 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {['AI/ML', 'Deep Learning', 'NLP', 'Neural Networks', 'LLMs', 'Data Science'].map((area) => (
                    <span key={area} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & Tools</h3>
                <p className="text-gray-700">Oracle Cloud Infrastructure for data analytics, Git & GitHub for version control, Docker for containerization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.video}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <FiGithub className="w-4 h-4" />
                      View Code
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education</h2>
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">BTech Computer Science & Engineering (AI/ML)</h3>
                <p className="text-primary-600 font-semibold mb-2">Shri Ramdeobaba College of Engineering and Management</p>
                <p className="text-gray-600 mb-2">2023 – 2027</p>
                <p className="text-lg font-semibold text-green-600">CGPA: 8.96 (till Sem III)</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Secondary Certificate (HSC)</h3>
                <p className="text-primary-600 font-semibold mb-2">St. Paul Jr. College</p>
                <p className="text-gray-600 mb-2">2021 – 2023</p>
                <p className="text-lg font-semibold text-green-600">81%</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secondary School Certificate (SSC)</h3>
                <p className="text-primary-600 font-semibold mb-2">Montfort Sr. Sec. School</p>
                <p className="text-gray-600 mb-2">2015 – 2021</p>
                <p className="text-lg font-semibold text-green-600">91%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-gray-800 font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <a href="mailto:shreyanshbhagwat007@gmail.com" className="text-gray-300 hover:text-white">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                
                  shreyanshbhagwat007@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiPhone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+919370249074" className="text-gray-300 hover:text-white">
                  +91 9370249074
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <a 
                  href="https://www.linkedin.com/in/shreyansh-bhagwat-750569289" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiLinkedin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                  LinkedIn Profile
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <a 
                  href="https://github.com/ShreyanshBB007" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiGithub className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                
                  GitHub Profile
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Shreyansh Bhagwat. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
