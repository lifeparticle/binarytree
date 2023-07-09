import { Octokit } from "@octokit/core";
import "dotenv/config";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
	auth: process.env.TOKEN,
});

async function createIssue() {
	try {
		await octokit.request("POST /repos/{owner}/{repo}/issues", {
			owner: "OWNER",
			repo: "REPO",
			title: "Found a bug",
			body: "I'm having a problem with this.",
			assignees: ["octocat"],
			milestone: 1,
			labels: ["bug"],
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		});
		console.log("Issue created successfully");
	} catch (error) {
		console.error("Error creating issue:", error);
	}
}

createIssue();
