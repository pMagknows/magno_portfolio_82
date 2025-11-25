"use client"
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's work together! I'm always open to discussing new opportunities and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#0A174E]">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-3 text-[var(--color-foreground)]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-transparent text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-3 text-[var(--color-foreground)]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-transparent text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-3 text-[var(--color-foreground)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-transparent text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A174E] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#1D2D5C] transition-colors duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Availability Notice */}
            <div className="bg-gradient-to-br from-[#0A174E] to-[#1D2D5C] text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">🚀 Available for Freelance Work</h3>
              <p className="text-sm opacity-90">
                I'm currently available for freelance projects and collaborations. 
                Whether you need a website, web application, or technical consultation, 
                I'd love to hear about your project!
              </p>
              <div className="mt-4 p-3 bg-[#D4AF37] bg-opacity-30 rounded-lg">
                <p className="text-sm font-medium">
                  ⚡ Expected Response Time: <span className="text-[#F0D483] font-bold">1-2 hours</span>
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#0A174E]">Get in touch</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-[#0A174E] font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">Email</p>
                    <a 
                      href="mailto:princenesher.magno-10@cpu.edu.ph" 
                      className="text-gray-600 dark:text-gray-400 hover:text-[#0A174E] transition-colors"
                    >
                      nisher321@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">GH</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">GitHub</p>
                    <a 
                      href="https://github.com/pMagknows" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#0A174E] transition-colors"
                    >
                      github.com/pMagknows
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/PNMagno" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#0A174E] transition-colors"
                    >
                      linkedin.com/in/PMagknows
                    </a>
                  </div>
                </div>

                {/* Social Media - Placeholder */}
                <div className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">FB</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">Social Media</p>
                    <span className="text-gray-500 dark:text-gray-500">
                      Available upon request
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold mb-3 text-[#0A174E]">What to expect</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Quick response within 1-2 hours during business hours</li>
                <li>• Free initial consultation for your project</li>
                <li>• Transparent pricing and timeline estimates</li>
                <li>• Regular updates throughout the project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}