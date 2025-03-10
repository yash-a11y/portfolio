import { Code, Smartphone, Server, Database, Wrench, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const skillGroups = [
      {
        category: 'Programming Languages',
        icon: Code,
        description: 'Proficient in multiple programming languages',
        items: ['Python', 'Java', 'C', 'Kotlin', 'Dart', 'Bash', 'SQL']
      },
      {
        category: 'Mobile & Backend Development',
        icon: Smartphone,
        description: 'Expertise in mobile and server-side development',
        items: ['Jetpack compose', 'Retrofit', 'Ktor', 'Dagger Hilt', 'MVVM', 'Flutter', 'spring-boot']
      },
      {
        category: 'Web Technologies',
        icon: Server,
        description: 'Experience with web development technologies',
        items: ['HTML', 'REST API']
      },
      {
        category: 'Database & Cloud',
        icon: Database,
        description: 'Working with various database systems and cloud services',
        items: ['MySQL', 'Microsoft SQL Server', 'MongoDB', 'Firebase', 'room-db', 'AWS Services']
      },
      {
        category: 'DevOps & Version Control',
        icon: Wrench,
        description: 'Proficient in development operations and version control',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'Git']
      }
    ]
  
    return (
      <div className="grid grid-cols-1 gap-8">
        {skillGroups.map((group) => (
          <div 
            key={group.category} 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gray-700/50 rounded-xl">
                  <group.icon size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{group.category}</h3>
                  <p className="text-gray-400">{group.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="px-4 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-200">{skill}</span>
                        {hoveredSkill === skill && (
                          <Sparkles size={16} className="text-yellow-400 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }