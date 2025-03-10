'use client'
import React, { useState } from 'react'
import { Code, Smartphone, Book, Award, Briefcase, Mail, Github, Linkedin } from 'lucide-react'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import GitHubInsights from './GitHubInsights'
import Profile from './Profile'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase, component: Experience },
    { id: 'projects', label: 'Projects', icon: Code, component: Projects },
    { id: 'skills', label: 'Skills', icon: Award, component: Skills },
    { id: 'education', label: 'Education', icon: Book, component: Education },
    { id: 'github', label: 'GitHub', icon: Github, component: GitHubInsights }
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || Experience

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Section */}
        <Profile />

        {/* Navigation */}
        <nav className="bg-gray-800 p-2 rounded-lg">
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                  ${activeTab === id ? 'bg-green-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-[400px]">
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}

export default Portfolio