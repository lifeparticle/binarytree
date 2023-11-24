import { Markdown } from "./types";

const versionRegex = /\[(\d+\.\d+\.\d+)] - (\d{4}-\d{2}-\d{2})/;
const featureRegex = /- (.+)/;

const parseEntry = (entry: string): Markdown => {
	const [versionLine, ...changes] = entry.split("\n");
	const versionMatch = versionRegex.exec(versionLine);

	const features = changes
		.map((change) => {
			const featureMatch = featureRegex.exec(change);
			return featureMatch ? featureMatch[1].trim() : null;
		})
		.filter(Boolean);

	return {
		version: versionMatch ? versionMatch[1] : "",
		date: versionMatch ? versionMatch[2] : "",
		features,
	} as Markdown;
};

const parsedMarkdown = (markdown: string): Markdown[] => {
	return markdown
		.split("\n### ")
		.filter((line) => line)
		.map(parseEntry);
};

const compareDate = (latestDate: string, localStorageDate: string | null) => {
	if (!localStorageDate) {
		return true;
	}

	return new Date(latestDate) > new Date(localStorageDate);
};

export { parsedMarkdown, compareDate };
