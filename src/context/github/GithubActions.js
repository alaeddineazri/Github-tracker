import axios from 'axios'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await axios(`https://api.github.com/search/users?${params} `,{
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})
  return response.data.items
}


export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    axios(`https://api.github.com/users/${login}`,{
      headers: {
          Authorization: `token ${GITHUB_TOKEN}`
      }
  }),
    axios(`https://api.github.com/users/${login}/repos`,{
      headers: {
          Authorization: `token ${GITHUB_TOKEN}`
      }
  }),
  ])

  return { user: user.data, repos: repos.data }
}
