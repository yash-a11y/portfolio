import { Octokit } from '@octokit/rest'

export async function GET() {
  const token = process.env.GITHUB_TOKEN
  
  if (!token) {
    return Response.json({ error: 'GitHub token not configured' }, { status: 500 })
  }

  const octokit = new Octokit({
    auth: token
  })

  try {
    const username = 'yash-a11y' // Replace with your GitHub username

    const [user, repos, contributions] = await Promise.all([
      octokit.rest.users.getByUsername({ username }),
      octokit.rest.repos.listForUser({ username, sort: 'updated', per_page: 10 }),
      // Note: For actual contributions, you'll need to use GitHub's GraphQL API
      // This is a simplified version
      Promise.resolve({ data: generateMockContributions() })
    ])

    if (!user.data || !repos.data) {
      throw new Error('Failed to fetch GitHub data')
    }

    return Response.json({
      user: user.data,
      repos: repos.data,
      contributions: contributions.data
    })
  } catch (error) {
    console.error('GitHub API Error:', error.message)
    return Response.json({ 
      error: 'Failed to fetch GitHub data. Please check your token and try again.' 
    }, { status: 500 })
  }
}

function generateMockContributions() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  return months.map(month => ({
    month,
    contributions: Math.floor(Math.random() * 200) + 50
  }))
}