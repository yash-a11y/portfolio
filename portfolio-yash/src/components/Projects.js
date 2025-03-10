import { Calendar, Github, ExternalLink, Code } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "PickAPlan",
      organization: "University Of Windsor, Windsor, ON",
      duration: "Sep 2024 - Dec 2024",
      technologies: ["Java", "Spring Boot", "Selenium", "Firebase", "Retrofit", "Stripe", "native-android"],
      github: "https://github.com/yash-a11y/PickAPlan",
      description: [
        "Designed and developed a mobile app for comparing Canadian data plans, incorporating Selenium-based web scraping, a Spring Boot backend, and Firebase authentication",
        "Enhanced user experience by implementing advanced search functionalities, preference filtering, and secure transactions using optimized algorithms and Stripe integration"
      ]
    },
    {
      title: "Techno IT Hub Application",
      organization: "Techno IT Hub, Ahmedabad, India",
      duration: "Jan 2023 - Jun 2023",
      technologies: ["Flutter", "Spring Boot", "Razorpay", "CI/CD", "Cross-platform android"],
      link: "https://apkpure.com/techno-it-hub/com.techit.technoithub",
      description: [
        "Utilized Riverpod for state management, Dio for API integration, and Firebase (Realtime Database, Auth, Analytics) for backend services",
        "Created REST APIs using Spring Boot, implemented Razor-Pay for payment processing, and deployed via CI/CD to the Play Store"
      ]
    },
    {
      title: "E-Commerce Application",
      organization: "L.D. College Of Engineering, Ahmedabad, India",
      duration: "Aug 2022 - Oct 2022",
      technologies: ["PHP", "MySQL", "REST API", "OkHttp", "XML", "Android"],
      github: "https://github.com/yash-a11y/E-Commerce-",
      description: [
        "Built a PHP & MySQL backend with REST APIs, enabling seamless product management and user transactions",
        "Integrated OkHttp network client in the Android application for efficient API data fetching",
        "Designed an intuitive XML-based UI with features such as category-wise filtering, cart, and wishlist for smooth shopping experience"
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
            <div className="flex items-center gap-2 text-green-400">
              <Calendar size={16} />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Organization */}
          <div className="text-gray-300 mb-4">
            <div className="flex items-center gap-2">
              <Code size={16} className="text-blue-400" />
              <span>{project.organization}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <ul className="space-y-3 mb-4">
            {project.description.map((point, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="text-green-400 mt-1.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}