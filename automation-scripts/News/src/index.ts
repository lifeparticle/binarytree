import fs from "fs";

interface Article {
	title: string;
	description: string;
	url: string;
}

async function fetchNews(apiKey: string): Promise<Article[]> {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=javascript&apiKey=${apiKey}`
	);
	return await response.json();
}

async function saveDataToFile(data: any, filename: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, JSON.stringify(data), (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

async function main() {
	const apiKey = process.env.NEWS_API_KEY;
	if (!apiKey) {
		throw new Error("NEWS_API_KEY environment variable not set");
	}
	const articles = await fetchNews(apiKey);
	await saveDataToFile(articles, "news.json");
	console.log("Data saved to news.json");
}

main().catch((err) => {
	console.error(err);
});
