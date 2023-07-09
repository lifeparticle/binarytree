// Source: https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('POST /repos/{owner}/{repo}/issues', {
  owner: 'OWNER',
  repo: 'REPO',
  title: 'Found a bug',
  body: 'I\'m having a problem with this.',
  assignees: [
    'octocat'
  ],
  milestone: 1,
  labels: [
    'bug'
  ],
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
