import { Calendar, GraduationCap, Building2, Award } from 'lucide-react'

export default function Education() {
    const education = [
      {
        degree: 'Master of Applied Computing',
        institution: 'University of Windsor, Windsor, Ontario',
        period: 'Sep 2024 - Present',
        gpa: '83.33/100',
        details: [
          'GPA: 83.33/100',
          'Seeking a regular 4- or 8-month internship starting in September 2025'
        ]
      },
      {
        degree: 'Bachelor of Engineering: Information Technology',
        institution: 'L.D. College of Engineering, Ahmedabad, India',
        period: 'Jul 2019 - Jun 2023',
        gpa: '3.7/4',
        details: [
          'GPA: 3.7/4'
        ]
      }
    ]

    const certifications = [
      {
        title: "AWS Cloud Practitioner",
        organization: "AWS",
        date: "Feb 2025",
        description: "Achieved foundational knowledge of AWS cloud services, architecture, and best practices through AWS Certified Cloud Practitioner certification"
      },
      {
        title: "Android 12 & Kotlin Development Masterclass",
        organization: "Tutorials.eu (Denis Panjuta)",
        description: "The complete Android 12 & Kotlin development masterclass certification"
      },
      {
        title: "Coding: Development & Advanced Engineering",
        organization: "Accenture (Forage)",
        date: "2024",
        description: "Accenture's coding: Development & Advanced Engineering certification"
      }
    ]
  
    return (
      <div className="space-y-6">
        {/* Education Section */}
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50"
          >
            {/* Header with Degree */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3">
                <GraduationCap size={24} className="text-green-400" />
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Institution */}
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <Building2 size={16} className="text-blue-400" />
              <span>{edu.institution}</span>
            </div>

            {/* Details */}
            <ul className="space-y-2 text-gray-300">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
  
        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Award size={24} className="text-green-400" />
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-white font-medium">{cert.title}</h4>
                  {cert.date && <span className="text-gray-400 text-sm">{cert.date}</span>}
                </div>
                <p className="text-gray-400 text-sm mt-1">{cert.organization}</p>
                <p className="text-gray-300 mt-2">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }