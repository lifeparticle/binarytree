import { Dispatch, SetStateAction } from "react";
import { IssueType, SavedIssueType } from "pages/Automation/GithubIssue/index";
const createGitHubIssue = async (
	owner: string,
	repo: string,
	token: string,
	fileData: IssueType[],
	setProgress: Dispatch<SetStateAction<number>>,
	setSavedIssues: Dispatch<SetStateAction<SavedIssueType[]>>,
	setIsError: Dispatch<SetStateAction<boolean>>
) => {
	const savedIssues: SavedIssueType[] = [];

	try {
		setProgress(0);
		const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

		for (let i = 0; i < fileData.length; i++) {
			const issueData = fileData[i];
			const response: Response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					Authorization: `token ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: issueData.title,
					body: issueData.body,
				}),
			});

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			// Check if the response contains JSON
			const contentType = response.headers.get("content-type");
			if (contentType?.includes("application/json")) {
				const data = await response.json();
				savedIssues.push({ title: data.title, url: data?.html_url });
			} else {
				// Handle non-JSON response here (e.g., templates)
				const textData = await response.text();
				console.error(`Non-JSON response: ${textData}`);
			}

			const newProgress = ((i + 1) / fileData.length) * 100;
			setProgress(newProgress);
		}
		setSavedIssues(savedIssues);
		setIsError(false);
	} catch (err) {
		setIsError(true);
	}
};

const calculateSteps = (
	haveConfig: boolean,
	haveFileData: boolean,
	isValidInput: boolean
) => {
	if (haveConfig && haveFileData && isValidInput) {
		return 3;
	} else if (haveConfig && haveFileData) {
		return 2;
	} else if (haveConfig) {
		return 1;
	} else {
		return 0;
	}
};

function generateCsvData(data: SavedIssueType[]) {
	// Create a CSV header
	const csvHeader = ["title", "url"];

	// Convert the data to a CSV string
	const csvContent = [
		csvHeader,
		...data.map((item) => [item.title, item.url]),
	]
		.map((row) => row.join(","))
		.join("\n");

	return csvContent;
}

export { createGitHubIssue, calculateSteps, generateCsvData };
