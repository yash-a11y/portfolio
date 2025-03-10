'use client'
import { useEffect, useState } from 'react'
import { Activity, Star, GitFork, Code } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts'

export default function GitHubInsights() {
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('/api/github')
        const data = await response.json()
        setGithubData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <p className="text-red-400">Error loading GitHub data. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <Activity size={24} />
          Contribution Activity
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={githubData?.contributions}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              itemStyle={{ color: '#10B981' }}
            />
            <Line 
              type="monotone" 
              dataKey="contributions" 
              stroke="#10B981" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Code size={24} />
            Top Repositories
          </h3>
          <div className="space-y-4">
            {githubData?.repos.slice(0, 3).map((repo) => (
              <div key={repo.id} className="border border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <a 
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-200 hover:text-green-400"
                  >
                    {repo.name}
                  </a>
                  <span className="text-sm text-gray-400">{repo.language}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{repo.description}</p>
                <div className="flex gap-4 mt-2">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Star size={16} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <GitFork size={16} />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-400 mb-4">Profile Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Public Repositories</span>
              <span className="text-green-400">{githubData?.user.public_repos}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Followers</span>
              <span className="text-green-400">{githubData?.user.followers}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Following</span>
              <span className="text-green-400">{githubData?.user.following}</span>
            </div>
            <a 
              href={githubData?.user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg mt-4"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}