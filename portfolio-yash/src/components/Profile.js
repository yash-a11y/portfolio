import Image from 'next/image'
import { useState } from 'react'
import { Github, Mail, Linkedin, MapPin, Download } from 'lucide-react'

export default function Profile() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-gray-700 shadow-2xl bg-gray-800">
            {!imageError ? (
              <Image
                src="/images/profile.jpg"
                alt="Yash's Profile"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-400/10 to-blue-500/10">
                <span className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">YP</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Name and Title */}
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-2">
              Yash Patel
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
              <h2 className="text-xl">Software Developer (Learner)</h2>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1 text-sm">
                <MapPin size={14} />
                <span>Windsor, ON</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-400 text-lg leading-relaxed">
            Masters in Applied Computing graduate with expertise in mobile app and backend development.
            Proven track record in implementing user-friendly features and optimizing performance.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="https://github.com/yash-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <Github className="group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:patel9ab@uwindsor.ca"
              className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <Mail className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Contact Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/patel-yash-152402240/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Linkedin className="group-hover:rotate-12 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <Download className="group-hover:translate-y-1 transition-transform duration-300" />
              <span>Resume</span>
            </a>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {[
              'Java',
              'Kotlin',
              'Spring Boot',
              'MySQL',
              'Android',
              'AWS'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm hover:bg-gray-700/50 hover:text-gray-300 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 