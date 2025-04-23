import { Calendar, MapPin, Building2 } from 'lucide-react'

export default function Experience() {
    const experiences = [
      {
        title: "Application Developer",
        company: "Techno IT Hub",
        location: "Ahmedabad, India",
        duration: "Jan 2023 - Aug 2023",
        achievements: [
          "Developed and maintained RESTful APIs using Spring Boot to support features like user login, course listings, and event registration",
          "Integrated Firebase Authentication as an OAuth 2.0 provider, improving login security and resolving reliability issues, which led to a 45% increase in successful logins",
          "Reduced backend response time by 30% by optimizing SQL queries, modularizing API functionality, and implementing Redis caching for frequently accessed data",
          "Automated builds and deployments using Docker and GitHub Actions, cutting release times by 50% and supporting weekly pushes"
        ]
      }
    ]
  
    return (
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{exp.title}</h3>
              <div className="flex items-center gap-2 text-green-400">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Company & Location */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-blue-400" />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-400" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Achievements */}
            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-green-400 mt-1.5">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }