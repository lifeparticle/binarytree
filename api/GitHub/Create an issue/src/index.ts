import { Octokit } from "@octokit/core";
import "dotenv/config";
import * as fs from "fs";
import csv from "csv-parser";
import ProgressBar from "progress";

const REPO = "Houdini";
const OWNER = "lifeparticle";
const TOKEN = process.env.TOKEN;
const FILE_PATH = __dirname + "/issues.csv";
const FIVE_SECONDS_DELAY = 5000;
const MILLISECONDS_IN_SECOND = 1000;

const octokit = new Octokit({ auth: TOKEN });

const parseCsvFile = (filePath: string): Promise<any[]> => {
	return new Promise((resolve, reject) => {
		const rows: any[] = [];
		fs.createReadStream(filePath)
			.pipe(csv())
			.on("data", (row) => rows.push(row))
			.on("end", () => resolve(rows))
			.on("error", (error) => reject(error));
	});
};

const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const checkRateLimit = async (): Promise<void> => {
	const response = await octokit.request("GET /rate_limit");
	if (response.data.rate.remaining === 0) {
		const resetTime = new Date(
			((response.headers["x-ratelimit-reset"] || 0) as number) *
				MILLISECONDS_IN_SECOND
		);
		const currentTime = new Date();
		const timeToWait =
			resetTime.getTime() - currentTime.getTime() + MILLISECONDS_IN_SECOND;
		console.log(
			"Rate limit exceeded. Waiting for",
			Math.ceil(timeToWait / MILLISECONDS_IN_SECOND),
			"seconds before retrying..."
		);
		await delay(timeToWait);
		await checkRateLimit();
	} else {
		console.log("Remaining rate limit:", response.data.rate.remaining);
	}
};

const createIssue = async (
	title: string,
	body: string,
	labels: string[]
): Promise<any> => {
	await checkRateLimit();
	const response = await octokit.request("POST /repos/{owner}/{repo}/issues", {
		owner: OWNER,
		repo: REPO,
		title,
		body,
		labels,
		headers: { "X-GitHub-Api-Version": "2022-11-28" },
	});
	console.log("Issue created successfully");
	console.log("Issue URL:", response.data.html_url);
	return response.data.html_url;
};

const run = async (): Promise<void> => {
	try {
		const dataRows = await parseCsvFile(FILE_PATH);
		const progressBar = new ProgressBar(":bar :current/:total", {
			total: dataRows.length,
		});

		let issues = [];

		for (const row of dataRows) {
			await delay(FIVE_SECONDS_DELAY);
			const issue = await createIssue(
				row.Title,
				row.Body,
				row.Labels.split(",")
			);
			issues.push(issue);
			progressBar.tick();
		}

		fs.writeFileSync("issues.json", JSON.stringify(issues, null, 2));
	} catch (error) {
		console.error("Error:", error);
	}
};

run();
